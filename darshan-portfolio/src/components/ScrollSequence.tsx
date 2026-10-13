import { useEffect, useRef } from "react";

const frameModules = import.meta.glob("../assets/frames/ezgif-frame-*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const frameUrls = Object.keys(frameModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => frameModules[key]);

const frameCount = frameUrls.length;
const lookahead = 8;
const maxConcurrent = 3;

function drawCover(
  ctx: CanvasRenderingContext2D,
  bitmap: ImageBitmap,
  width: number,
  height: number,
) {
  const scale = Math.max(width / bitmap.width, height / bitmap.height);
  const dw = bitmap.width * scale;
  const dh = bitmap.height * scale;
  ctx.drawImage(bitmap, (width - dw) / 2, (height - dh) / 2, dw, dh);
}

function nearestBitmap(bitmaps: Map<number, ImageBitmap>, index: number) {
  let best: ImageBitmap | undefined;
  let bestDistance = Number.POSITIVE_INFINITY;

  for (const [frame, bitmap] of bitmaps) {
    const distance = Math.abs(frame - index);
    if (distance < bestDistance) {
      best = bitmap;
      bestDistance = distance;
    }
  }

  return best;
}

function ScrollSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const bitmaps = new Map<number, ImageBitmap>();
    const loading = new Set<number>();
    let activeLoads = 0;
    let queue: number[] = [];
    let targetFrame = 0;
    let currentFrame = 0;
    let frameId = 0;
    let disposed = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
    };

    const pump = () => {
      while (activeLoads < maxConcurrent && queue.length > 0) {
        const index = queue.shift();
        if (index === undefined || bitmaps.has(index) || loading.has(index)) {
          continue;
        }

        loading.add(index);
        activeLoads += 1;

        fetch(frameUrls[index])
          .then((response) => {
            if (!response.ok) throw new Error("frame failed");
            return response.blob();
          })
          .then((blob) => createImageBitmap(blob))
          .then((bitmap) => {
            if (disposed || bitmaps.has(index)) {
              bitmap.close();
              return;
            }
            bitmaps.set(index, bitmap);
          })
          .catch(() => undefined)
          .finally(() => {
            loading.delete(index);
            activeLoads -= 1;
            if (!disposed) pump();
          });
      }
    };

    const requestFrames = (center: number) => {
      const index = Math.round(center);
      const scrollingForward = targetFrame >= currentFrame;
      const behind = scrollingForward ? 3 : lookahead;
      const ahead = scrollingForward ? lookahead : 3;
      const start = Math.max(0, index - behind);
      const end = Math.min(frameCount - 1, index + ahead);
      const needed: number[] = [];

      for (let frame = start; frame <= end; frame += 1) {
        if (!bitmaps.has(frame) && !loading.has(frame)) needed.push(frame);
      }

      queue = needed;

      for (const [frame, bitmap] of bitmaps) {
        if (frame < start - 2 || frame > end + 2) {
          bitmap.close();
          bitmaps.delete(frame);
        }
      }

      pump();
    };

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      const maxFrame = frameCount - 1;
      const frame = Math.min(Math.max(currentFrame, 0), maxFrame);
      const index = Math.floor(frame);
      const mix = frame - index;
      const base = bitmaps.get(index) ?? nearestBitmap(bitmaps, index);
      const next = bitmaps.get(Math.min(index + 1, maxFrame));

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#120807";
      ctx.fillRect(0, 0, width, height);

      if (!base) return;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      drawCover(ctx, base, width, height);

      if (next && next !== base && mix > 0.001) {
        ctx.globalAlpha = mix;
        drawCover(ctx, next, width, height);
        ctx.globalAlpha = 1;
      }
    };

    const tick = () => {
      const scrollable = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const scrolled = Math.min(Math.max(window.scrollY, 0), scrollable);
      targetFrame = (scrolled / scrollable) * (frameCount - 1);
      currentFrame += (targetFrame - currentFrame) * 0.18;

      if (Math.abs(targetFrame - currentFrame) < 0.0008) {
        currentFrame = targetFrame;
      }

      requestFrames(currentFrame);
      render();
      frameId = window.requestAnimationFrame(tick);
    };

    resize();
    requestFrames(0);
    frameId = window.requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      bitmaps.forEach((bitmap) => bitmap.close());
      bitmaps.clear();
    };
  }, []);

  return <canvas ref={canvasRef} className="scroll-sequence" aria-hidden="true" />;
}

export default ScrollSequence;
