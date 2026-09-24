"use client";

import { motion } from "framer-motion";

export default function DimensionRule({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`relative flex items-center gap-4 ${className}`} aria-hidden>
      <div className="relative flex-1">
        <motion.div
          className="h-px w-full origin-left bg-gradient-to-r from-transparent via-line to-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <span className="absolute left-0 top-1/2 h-2 w-px -translate-y-1/2 bg-line" />
        <span className="absolute right-0 top-1/2 h-2 w-px -translate-y-1/2 bg-line" />
      </div>
      {label && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite-2"
        >
          {label}
        </motion.span>
      )}
      <div className="relative flex-1">
        <motion.div
          className="h-px w-full origin-right bg-gradient-to-l from-transparent via-line to-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <span className="absolute left-0 top-1/2 h-2 w-px -translate-y-1/2 bg-line" />
        <span className="absolute right-0 top-1/2 h-2 w-px -translate-y-1/2 bg-line" />
      </div>
    </div>
  );
}
