"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [data-cursor='hover'], input, textarea, select");
      setHovering(!!interactive);
    };
    const onDown = () => setActive(true);
    const onUp = () => setActive(false);

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot">
        <div
          className="rounded-full bg-cyan transition-all duration-200"
          style={{ width: active ? 5 : 7, height: active ? 5 : 7 }}
        />
      </div>
      <div ref={ringRef} className="cursor-ring">
        <div
          className="relative flex items-center justify-center transition-all duration-300 ease-out"
          style={{
            width: hovering ? 56 : 30,
            height: hovering ? 56 : 30,
          }}
        >
          {/* crosshair reticle */}
          <span
            className="absolute inset-0 rounded-full border transition-all duration-300"
            style={{
              borderColor: hovering ? "rgba(54,214,231,0.9)" : "rgba(157,182,255,0.65)",
              transform: active ? "scale(0.82)" : "scale(1)",
            }}
          />
          <span className="absolute left-1/2 top-0 h-[6px] w-px -translate-x-1/2 bg-cyan/70" />
          <span className="absolute left-1/2 bottom-0 h-[6px] w-px -translate-x-1/2 bg-cyan/70" />
          <span className="absolute top-1/2 left-0 w-[6px] h-px -translate-y-1/2 bg-cyan/70" />
          <span className="absolute top-1/2 right-0 w-[6px] h-px -translate-y-1/2 bg-cyan/70" />
        </div>
      </div>
    </>
  );
}
