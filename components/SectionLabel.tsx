"use client";

import { motion } from "framer-motion";

export default function SectionLabel({ children, accent = "blueprint" }: { children: string; accent?: "blueprint" | "markup" | "cyan" }) {
  const color = accent === "markup" ? "text-markup" : accent === "cyan" ? "text-cyan" : "text-blueprint-soft";
  const dot = accent === "markup" ? "bg-markup" : accent === "cyan" ? "bg-cyan" : "bg-blueprint";
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2.5"
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot} animate-pulse-pin`} />
      <span className={`font-mono text-[11px] uppercase tracking-[0.28em] ${color}`}>{children}</span>
    </motion.div>
  );
}
