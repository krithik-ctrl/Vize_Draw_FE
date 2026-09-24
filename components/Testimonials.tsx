"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/content";
import SectionLabel from "./SectionLabel";

export default function Testimonials() {
  const [[index, dir], setIndex] = useState<[number, number]>([0, 0]);
  const active = ((index % testimonials.length) + testimonials.length) % testimonials.length;

  const paginate = (d: number) => setIndex([index + d, d]);

  return (
    <section className="relative mx-auto max-w-container px-5 py-24">
      <div className="absolute inset-0 -z-10 bp-grid opacity-20 radial-fade" />
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <SectionLabel accent="cyan">From the field</SectionLabel>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[40px] sm:leading-[1.08]">
            How drawing-led teams describe the shift
          </h2>
          <p className="mt-3 max-w-md text-sm text-graphite">
            Representative accounts from the roles VizeDraw is built for — estimators, engineers, reviewers, and quality leads.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous"
            data-cursor="hover"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-vellum transition-colors hover:border-blueprint hover:text-blueprint"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next"
            data-cursor="hover"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-vellum transition-colors hover:border-blueprint hover:text-blueprint"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative mt-10 h-[320px] sm:h-[260px]">
        <AnimatePresence custom={dir} mode="popLayout">
          <motion.figure
            key={index}
            custom={dir}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -90) paginate(1);
              else if (info.offset.x > 90) paginate(-1);
            }}
            initial={{ opacity: 0, x: dir >= 0 ? 80 : -80, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: dir >= 0 ? -80 : 80, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="absolute inset-0 grid cursor-grab grid-cols-1 gap-6 rounded-3xl border border-line bg-surface p-8 active:cursor-grabbing sm:items-center"
            data-cursor="hover"
          >
            <div>
              <span className="font-display text-5xl leading-none text-blueprint/40">“</span>
              <blockquote className="-mt-4 max-w-2xl font-display text-xl font-medium leading-snug tracking-tight text-vellum sm:text-2xl">
                {testimonials[active].quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blueprint to-cyan text-xs font-semibold text-white">
                  {testimonials[active].name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
                <span className="text-sm">
                  <span className="block font-medium text-vellum">{testimonials[active].name}</span>
                  <span className="block text-graphite">{testimonials[active].role}</span>
                </span>
              </figcaption>
            </div>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-14 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > active ? 1 : -1])}
            aria-label={`Go to testimonial ${i + 1}`}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === active ? 28 : 8,
              background: i === active ? "#4ebabd" : "#1E2A42",
            }}
            data-cursor="hover"
          />
        ))}
      </div>
    </section>
  );
}
