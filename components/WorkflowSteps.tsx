"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { workflow } from "@/lib/content";
import TechGlyph, { GlyphName } from "@/components/TechGlyph";

const stepGlyphs: GlyphName[] = ["upload", "organize", "markup", "search", "compare", "signoff"];

export default function WorkflowSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mt-12">
      {/* progress rail */}
      <div className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-line sm:block">
        <motion.div style={{ height }} className="w-full bg-gradient-to-b from-blueprint via-cyan to-blueprint" />
      </div>

      <div className="space-y-3">
        {workflow.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex gap-5 rounded-2xl border border-transparent p-3 transition-colors hover:border-line hover:bg-surface/60 sm:pl-0"
          >
            <div className="relative z-10 flex-none">
              <motion.div
                whileInView={{ scale: [0.6, 1.1, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid h-14 w-14 place-items-center rounded-2xl border border-blueprint/35 bg-gradient-to-br from-blueprint/22 to-ink/80 shadow-[0_6px_24px_rgba(78,186,189,0.32),inset_0_1px_0_rgba(111,207,209,0.12)] transition-all group-hover:border-blueprint/60 group-hover:shadow-[0_8px_30px_rgba(78,186,189,0.48)]"
              >
                <TechGlyph name={stepGlyphs[i % stepGlyphs.length]} className="h-8 w-8" />
              </motion.div>
            </div>
            <div className="pt-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-graphite-2">
                Step {step.n}
              </span>
              <h3 className="mt-1 font-display text-lg font-medium tracking-tight text-vellum">{step.title}</h3>
              <p className="mt-1 max-w-2xl text-[15px] leading-relaxed text-graphite">{step.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
