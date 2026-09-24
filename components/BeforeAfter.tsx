"use client";

import { motion } from "framer-motion";
import { beforeAfter } from "@/lib/content";
import { stagger, fadeUp } from "@/lib/motion";

function Column({
  title,
  items,
  tone,
  index,
}: {
  title: string;
  items: string[];
  tone: "before" | "after";
  index: number;
}) {
  const after = tone === "after";
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateY: after ? 6 : -6 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      style={{ transformPerspective: 1000 }}
      className={`relative overflow-hidden rounded-3xl border p-7 ${
        after ? "border-blueprint/40 bg-gradient-to-b from-blueprint/[0.08] to-surface glow-blueprint" : "border-line bg-surface"
      }`}
    >
      {after && <div className="absolute inset-0 bp-grid opacity-30" />}
      <div className="relative">
        <div className="flex items-center gap-2">
          <span
            className={`font-mono text-[10px] uppercase tracking-[0.24em] ${after ? "text-cyan" : "text-markup"}`}
          >
            {after ? "With VizeDraw" : "Today"}
          </span>
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-vellum">{title}</h3>
        <motion.ul variants={stagger(0.15, 0.06)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 space-y-3">
          {items.map((it) => (
            <motion.li key={it} variants={fadeUp} className="flex items-start gap-3">
              <span
                className={`mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full ${
                  after ? "bg-blueprint/15 text-cyan" : "bg-markup/12 text-markup"
                }`}
              >
                {after ? (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6.5L5 9l4.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </span>
              <span className={`text-[15px] leading-relaxed ${after ? "text-vellum" : "text-graphite"}`}>{it}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default function BeforeAfter() {
  return (
    <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2">
      <Column title={beforeAfter.before.title} items={beforeAfter.before.items} tone="before" index={0} />
      <Column title={beforeAfter.after.title} items={beforeAfter.after.items} tone="after" index={1} />
    </div>
  );
}
