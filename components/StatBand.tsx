"use client";

import { motion } from "framer-motion";
import NumberTicker from "./NumberTicker";
import { homeStats } from "@/lib/content";
import { stagger, fadeUp } from "@/lib/motion";

export default function StatBand() {
  return (
    <motion.div
      variants={stagger(0, 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
    >
      {homeStats.map((s) => (
        <motion.div key={s.label} variants={fadeUp} className="bg-ink p-6">
          <div className="font-display text-4xl font-semibold tracking-tight text-vellum">
            {"raw" in s && s.raw ? (
              <span>{s.raw}</span>
            ) : (
              <NumberTicker value={s.value} prefix={s.prefix} suffix={s.suffix} />
            )}
          </div>
          <div className="mt-2 text-sm font-medium text-vellum/90">{s.label}</div>
          <div className="mt-1 text-xs leading-relaxed text-graphite-2">{s.sub}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
