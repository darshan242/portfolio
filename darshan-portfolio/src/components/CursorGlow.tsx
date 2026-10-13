import GhostCursor from "./bits/GhostCursor";

function CursorGlow() {
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!finePointer || reduceMotion) return null;

  return (
    <div className="cursor-layer">
      <GhostCursor
        color="#ff5a1f"
        brightness={1.2}
        size={62}
        trailLength={42}
        bloomStrength={0.45}
        edgeIntensity={0}
        theme="dark"
        zIndex={1}
      />
    </div>
  );
}

export default CursorGlow;
