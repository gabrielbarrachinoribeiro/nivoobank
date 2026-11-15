import { useEffect, useRef, useState } from "react";

export function InteractiveGrid({ cellSize = 40, className = "", ...props }) {
  const svgRef = useRef(null);
  const [size, setSize] = useState({ columns: 0, rows: 0 });
  const [active, setActive] = useState(null);
  const resolvedCellSize = Number.isFinite(cellSize) && cellSize > 0 ? cellSize : 40;

  useEffect(() => {
    const svg = svgRef.current;
    const parent = svg?.parentElement;
    if (!svg || !parent) return;

    function measure() {
      const { width, height } = svg.getBoundingClientRect();
      setSize({
        columns: Math.ceil(width / resolvedCellSize),
        rows: Math.ceil(height / resolvedCellSize),
      });
      setActive(null);
    }

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(svg);
    measure();

    function onPointerMove(event) {
      if (event.pointerType === "touch") return;
      const bounds = svg.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const columns = Math.ceil(bounds.width / resolvedCellSize);
      setActive(
        x >= 0 && y >= 0 && x < bounds.width && y < bounds.height
          ? Math.floor(y / resolvedCellSize) * columns + Math.floor(x / resolvedCellSize)
          : null,
      );
    }

    function onPointerLeave() {
      setActive(null);
    }

    parent.addEventListener("pointermove", onPointerMove);
    parent.addEventListener("pointerleave", onPointerLeave);
    parent.addEventListener("pointercancel", onPointerLeave);
    return () => {
      resizeObserver.disconnect();
      parent.removeEventListener("pointermove", onPointerMove);
      parent.removeEventListener("pointerleave", onPointerLeave);
      parent.removeEventListener("pointercancel", onPointerLeave);
    };
  }, [resolvedCellSize]);

  return (
    <svg
      {...props}
      ref={svgRef}
      data-slot="interactive-grid"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      {Array.from({ length: size.columns * size.rows }, (_, index) => (
        <rect
          key={index}
          x={(index % size.columns) * resolvedCellSize}
          y={Math.floor(index / size.columns) * resolvedCellSize}
          width={resolvedCellSize}
          height={resolvedCellSize}
          fill="currentColor"
          stroke="currentColor"
          strokeOpacity={0.04}
          className={`transition-[fill-opacity] ease-out motion-reduce:transition-none ${
            index === active
              ? "duration-0 [fill-opacity:0.15]"
              : "duration-1000 [fill-opacity:0]"
          }`}
        />
      ))}
    </svg>
  );
}

export default InteractiveGrid;
