"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { capabilities } from "@/lib/content";
import { stagger, fadeUp } from "@/lib/motion";

export default function CapabilityGrid() {
  return (
    <motion.div
      variants={stagger(0, 0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
    >
      {capabilities.map((c, i) => (
        <motion.div key={c.href} variants={fadeUp}>
          <Link
            href={c.href}
            data-cursor="hover"
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-blueprint/50 hover:bg-surface-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blueprint/0 to-blueprint/0 opacity-0 transition-opacity duration-500 group-hover:from-blueprint/8 group-hover:opacity-100" />
            <div className="relative flex items-start justify-between">
              <span className="font-mono text-[11px] text-graphite-2">{String(i + 1).padStart(2, "0")}</span>
              <motion.span className="grid h-9 w-9 place-items-center rounded-xl border border-line/60 text-graphite transition-all duration-300 group-hover:rotate-45 group-hover:border-blueprint/50 group-hover:bg-gradient-to-br group-hover:from-blueprint/20 group-hover:to-ink/80 group-hover:shadow-[0_4px_16px_rgba(78,186,189,0.35)] group-hover:text-blueprint-soft">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.span>
            </div>
            <div className="relative mt-10">
              <h3 className="font-display text-lg font-medium tracking-tight text-vellum">{c.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-graphite">{c.blurb}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
