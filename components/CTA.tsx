"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function CTA({
  title = "Stop forcing drawings into generic PDF workflows",
  body = "Give your team a workspace built for technical drawings.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative mx-auto max-w-container px-5 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-16"
      >
        <div className="absolute inset-0 bp-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-blueprint/10 via-transparent to-transparent" />
        <motion.div
          aria-hidden
          className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blueprint/20 blur-[90px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[42px] sm:leading-[1.08]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-graphite">{body}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton href="/request-demo">Request demo</MagneticButton>
            <MagneticButton href="/pricing" variant="outline">
              View pricing
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
