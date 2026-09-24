"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function FAQ({
  items,
  eyebrow = "FAQ",
  title = "Common questions",
}: {
  items: { q: string; a: string }[];
  eyebrow?: string;
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-container px-5 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionLabel>{eyebrow}</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[40px] sm:leading-[1.08]">
            {title}
          </h2>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  data-cursor="hover"
                >
                  <span className={`text-[17px] font-medium tracking-tight transition-colors ${isOpen ? "text-vellum" : "text-graphite"}`}>
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="grid h-7 w-7 flex-none place-items-center rounded-full border border-line text-vellum"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-[15px] leading-relaxed text-graphite">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
