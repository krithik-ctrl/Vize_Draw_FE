"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pricingPlans } from "@/lib/content";
import { stagger, fadeUp } from "@/lib/motion";
import MagneticButton from "./MagneticButton";

const BILLING = "https://app.vizedraw.com/settings/billing";

export default function PricingSection() {
  const [plan, setPlan] = useState<"individual" | "team">("individual");

  const hrefFor = (id: string) => (id === "enterprise" ? "/contact" : `${BILLING}?plan=${id}&audience=${plan}`);

  return (
    <section className="mx-auto max-w-container px-5">
      {/* toggles */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Toggle
          options={[
            { id: "individual", label: "individual" },
            { id: "team", label: "team" },
          ]}
          value={plan}
          onChange={(v) => setPlan(v as typeof plan)}
        />
      </div>

      <motion.div
        variants={stagger(0, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12 grid gap-4 lg:grid-cols-4"
      >
        {pricingPlans.map((p, i) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
            }}
            className={`card-glow group relative flex flex-col overflow-hidden rounded-3xl border p-6 ${
              p.featured ? "conic-border border-blueprint/50 bg-gradient-to-b from-blueprint/[0.1] to-surface glow-blueprint" : "border-line bg-surface"
            }`}
            data-cursor="hover"
          >
            {p.featured && <div className="absolute inset-0 bp-grid opacity-20" />}
            {"badge" in p && p.badge && (
              <span className="absolute right-5 top-5 rounded-full bg-blueprint px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white">
                {p.badge}
              </span>
            )}
            <div className="relative">
              <TierMark level={i + 1} featured={!!p.featured} />
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-vellum">{p.name}</h3>
              <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-graphite">{p.blurb}</p>

              <div className="mt-5 flex items-end gap-1">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={plan + p.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="font-display text-4xl font-semibold tracking-tight text-vellum"
                  >
                    {p.price}
                  </motion.span>
                </AnimatePresence>
                {p.period && <span className="pb-1 text-sm text-graphite-2">{p.period}</span>}
              </div>
              {p.sub && <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-graphite-2">{p.sub}</span>}

              <div className="mt-6">
                <MagneticButton
                  href={hrefFor(p.id)}
                  external={p.id !== "enterprise"}
                  hardNav={p.id === "enterprise"}
                  variant={p.featured ? "primary" : "outline"}
                  className="w-full"
                >
                  {p.cta}
                </MagneticButton>
              </div>

              <ul className="mt-7 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-graphite">
                    <span className={`mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full ${p.featured ? "bg-cyan/15 text-cyan" : "bg-blueprint/12 text-blueprint-soft"}`}>
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.5L5 9l4.5-5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-8 text-center text-sm text-graphite-2">
        All plans are billed annually in US Dollars. AI credits and storage packs available as add-ons.
      </p>
    </section>
  );
}

function TierMark({ level, featured }: { level: number; featured: boolean }) {
  const cells = [
    [0, 0],
    [11, 0],
    [0, 11],
    [11, 11],
  ];
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 19 19"
      fill="none"
      aria-hidden
      className={featured ? "text-blueprint-soft" : "text-blueprint"}
    >
      {cells.map(([x, y], idx) => {
        const on = idx < level;
        return (
          <rect
            key={idx}
            x={x}
            y={y}
            width="8"
            height="8"
            rx="2"
            fill={on ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.2"
            opacity={on ? 1 : 0.3}
          />
        );
      })}
    </svg>
  );
}

function Toggle({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative inline-flex rounded-full border border-line bg-surface p-1">
      {options.map((o) => (
        <button
          key={o.id}
          onClick={() => onChange(o.id)}
          data-cursor="hover"
          className={`relative z-10 rounded-full px-4 py-1.5 text-sm capitalize transition-colors ${value === o.id ? "text-white" : "text-graphite hover:text-vellum"}`}
        >
          {value === o.id && (
            <motion.span layoutId={`toggle-${options.map((x) => x.id).join("")}`} className="absolute inset-0 -z-10 rounded-full bg-blueprint" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
          )}
          {o.label}
        </button>
      ))}
    </div>
  );
}
