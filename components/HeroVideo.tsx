"use client";

import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="relative w-full"
    >
      {/* glass window chrome */}
      <div className="glass overflow-hidden rounded-2xl shadow-[0_24px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* title bar */}
        <div className="flex items-center justify-between border-b border-line/70 bg-ink-2/60 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-markup/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
            <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-graphite-2">
              app.vizedraw.com · Maple Tower · Structural IFC
            </span>
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-blueprint-soft">
            <span className="h-1.5 w-1.5 animate-pulse-pin rounded-full bg-blueprint-soft" />
            Drawing review
          </span>
        </div>

        {/* video area */}
        <div className="relative aspect-video overflow-hidden bg-[#0b1322]">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/home/hero-screenshot.png"
          >
            <source src="/images/features/Hero-Section.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* floating chip — scale calibration badge */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute -left-4 bottom-10 hidden rounded-xl border border-line bg-ink-2/90 px-3 py-2 shadow-2xl backdrop-blur md:block"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan">Scale calibrated</span>
        <p className="mt-0.5 text-xs text-graphite">1/8&quot; = 1&apos;-0&quot; · auto-detected</p>
      </motion.div>

      {/* floating chip — revision badge */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
        className="absolute -right-3 top-12 hidden rounded-xl border border-blueprint/30 bg-ink-2/90 px-3 py-2 shadow-2xl backdrop-blur md:block"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-blueprint-soft">Rev B issued</span>
        <p className="mt-0.5 text-xs text-graphite">3 markups · 2 open RFIs</p>
      </motion.div>
    </motion.div>
  );
}
