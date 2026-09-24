"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const collaborators = [
  { name: "EJ", color: "#4ebabd", x: "32%", y: "30%" },
  { name: "RK", color: "#FF6B4A", x: "66%", y: "58%" },
];

export default function HeroCanvas() {
  const wrap = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 120, damping: 18 });
  const px = useTransform(mx, [0, 1], [-14, 14]);
  const py = useTransform(my, [0, 1], [-10, 10]);

  const onMove = (e: React.MouseEvent) => {
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", transformPerspective: 1200 }}
      className="relative w-full"
    >
      {/* window chrome */}
      <div className="glass overflow-hidden rounded-2xl">
        <div className="flex items-center justify-between border-b border-line/70 bg-ink-2/60 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-markup/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
            <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-graphite-2">
              app.vizedraw.com · Maple Tower · Structural IFC
            </span>
          </div>
          <div className="flex -space-x-2">
            {collaborators.map((c) => (
              <span
                key={c.name}
                className="grid h-6 w-6 place-items-center rounded-full ring-2 ring-ink-2 text-[9px] font-semibold text-white"
                style={{ background: c.color }}
              >
                {c.name}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[64px_1fr_150px]">
          {/* thumbnails */}
          <div className="hidden flex-col gap-2 border-r border-line/60 bg-ink/40 p-2 sm:flex">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className={`aspect-[3/4] rounded-md border ${i === 1 ? "border-blueprint bg-blueprint/10" : "border-line bg-surface"}`}
              >
                <div className="m-1 h-1 w-3/4 rounded bg-line" />
                <div className="m-1 h-px w-1/2 bg-line/60" />
              </motion.div>
            ))}
          </div>

          {/* drawing canvas */}
          <div className="relative aspect-[4/3] overflow-hidden bg-[#0b1322]">
            <div className="absolute inset-0 bp-grid-fine opacity-70" />
            <motion.div style={{ x: px, y: py }} className="absolute inset-0">
              <svg viewBox="0 0 400 300" className="h-full w-full" fill="none">
                {/* structural plan lines */}
                <motion.g
                  stroke="#5b82d8"
                  strokeWidth="1"
                  initial="hidden"
                  animate="show"
                >
                  {[
                    "M40 40 H360", "M40 110 H360", "M40 180 H360", "M40 250 H360",
                    "M40 40 V250", "M120 40 V250", "M200 40 V250", "M280 40 V250", "M360 40 V250",
                  ].map((d, i) => (
                    <motion.path
                      key={i}
                      d={d}
                      variants={{ hidden: { pathLength: 0, opacity: 0 }, show: { pathLength: 1, opacity: 0.55 } }}
                      transition={{ duration: 1, delay: 0.7 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ))}
                </motion.g>

                {/* columns */}
                {[[120, 110], [200, 110], [280, 110], [120, 180], [200, 180], [280, 180]].map(([x, y], i) => (
                  <motion.rect
                    key={i}
                    x={x - 5}
                    y={y - 5}
                    width="10"
                    height="10"
                    fill="#4ebabd"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.85 }}
                    transition={{ delay: 1.2 + i * 0.06, type: "spring", stiffness: 300, damping: 18 }}
                  />
                ))}

                {/* dimension line */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                  stroke="#4ebabd"
                  strokeWidth="0.9"
                >
                  <path d="M120 268 H200" />
                  <path d="M120 264 V272" />
                  <path d="M200 264 V272" />
                </motion.g>
                <motion.text
                  x="160"
                  y="282"
                  textAnchor="middle"
                  fill="#4ebabd"
                  fontSize="9"
                  fontFamily="monospace"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  24&apos;-0&quot;
                </motion.text>

                {/* revision cloud */}
                <motion.path
                  d="M236 150 q-6 -10 6 -10 q4 -8 12 -2 q10 -6 10 6 q8 2 0 10 q4 8 -8 8 q-4 6 -14 0 q-10 4 -6 -8 q-6 -4 0 -12 Z"
                  stroke="#FF6B4A"
                  strokeWidth="1.4"
                  fill="rgba(255,107,74,0.08)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 2.1, duration: 1 }}
                />
                <motion.text
                  x="248"
                  y="155"
                  textAnchor="middle"
                  fill="#FF6B4A"
                  fontSize="8"
                  fontFamily="monospace"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.7 }}
                >
                  REV B
                </motion.text>
              </svg>
            </motion.div>

            {/* markup pins */}
            {collaborators.map((c, i) => (
              <motion.div
                key={c.name}
                className="absolute"
                style={{ left: c.x, top: c.y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + i * 0.3, type: "spring", stiffness: 260, damping: 16 }}
              >
                <span className="absolute -inset-2 animate-pulse-pin rounded-full" style={{ background: `${c.color}22` }} />
                <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full ring-2 ring-ink" style={{ background: c.color }} />
                <span
                  className="absolute left-5 top-0 whitespace-nowrap rounded-md px-2 py-1 text-[9px] font-medium text-white"
                  style={{ background: c.color }}
                >
                  {i === 0 ? "Check grid B/3 dim" : "Clouded for RFI"}
                </span>
              </motion.div>
            ))}

            {/* scan sweep */}
            <motion.div
              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan/12 to-transparent"
              animate={{ y: ["-30%", "320%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 2.5 }}
            />
          </div>

          {/* right rail */}
          <div className="hidden flex-col border-l border-line/60 bg-ink/40 p-3 sm:flex">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-graphite-2">Drawing review</span>
            <div className="mt-3 space-y-2">
              {[
                { t: "Markups", v: "15", c: "text-blueprint-soft" },
                { t: "Open RFIs", v: "3", c: "text-markup" },
                { t: "Revision", v: "B", c: "text-cyan" },
              ].map((row, i) => (
                <motion.div
                  key={row.t}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.12 }}
                  className="flex items-center justify-between rounded-lg border border-line bg-surface px-2.5 py-2"
                >
                  <span className="text-[10px] text-graphite">{row.t}</span>
                  <span className={`font-mono text-sm font-semibold ${row.c}`}>{row.v}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto rounded-lg border border-blueprint/30 bg-blueprint/10 p-2.5">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-blueprint-soft">Live workspace</span>
            </div>
          </div>
        </div>
      </div>

      {/* floating chips */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="absolute -left-4 bottom-10 hidden rounded-xl border border-line bg-ink-2/90 px-3 py-2 shadow-2xl backdrop-blur md:block"
        style={{ transform: "translateZ(60px)" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan">Scale calibrated</span>
        <p className="mt-0.5 text-xs text-graphite">1/8&quot; = 1&apos;-0&quot; · auto-detected</p>
      </motion.div>
    </motion.div>
  );
}
