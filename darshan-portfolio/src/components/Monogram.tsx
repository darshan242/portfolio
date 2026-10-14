import { useEffect, useRef } from "react";

const IMAGE_WIDTH = 1920;
const IMAGE_HEIGHT = 1080;
/** Center of the baked-in sparkle, in source pixels. */
const SPARK_X = 1739.5;
const SPARK_Y = 899.5;
/** Source size of the sparkle, grown so the seal covers it and still fits DM. */
const SEAL_SIZE = 70 * 1.72;

const STAR =
  "M50 4C54 32 62 40 96 50C62 60 54 68 50 96C46 68 38 60 4 50C38 40 46 32 50 4Z";

function Monogram() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const canvas = document.querySelector(".scroll-sequence");
    if (!node || !(canvas instanceof HTMLElement)) return;

    const place = () => {
      const viewWidth = canvas.clientWidth;
      const viewHeight = canvas.clientHeight;
      if (!viewWidth || !viewHeight) return;

      const scale = Math.max(
        viewWidth / IMAGE_WIDTH,
        viewHeight / IMAGE_HEIGHT,
      );
      const drawnWidth = IMAGE_WIDTH * scale;
      const drawnHeight = IMAGE_HEIGHT * scale;
      const offsetX = (viewWidth - drawnWidth) / 2;
      const offsetY = (viewHeight - drawnHeight) / 2;
      const size = SEAL_SIZE * scale;
      const x = offsetX + SPARK_X * scale - size / 2;
      const y = offsetY + SPARK_Y * scale - size / 2;

      node.style.width = `${size}px`;
      node.style.height = `${size}px`;
      node.style.transform = `translate(${x}px, ${y}px)`;
      node.style.visibility = "visible";
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(canvas);
    window.addEventListener("resize", place);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", place);
    };
  }, []);

  return (
    <div ref={ref} className="monogram" aria-hidden="true">
      <svg className="monogram__svg" viewBox="0 0 100 100">
        <path className="monogram__fill" pathLength="100" d={STAR} />
        <path className="monogram__light" pathLength="100" d={STAR} />
        <text className="monogram__letters" x="50" y="51">
          DM
        </text>
      </svg>
    </div>
  );
}

export default Monogram;
