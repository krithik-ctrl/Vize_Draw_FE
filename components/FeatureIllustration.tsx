"use client";

import { motion } from "framer-motion";
import TechGlyph, { GlyphName } from "./TechGlyph";
import FeatureImage from "./FeatureImage";

export default function FeatureIllustration({
  glyph,
  eyebrow,
  specs,
  rev = "Rev C",
  slug,
}: {
  glyph: GlyphName;
  eyebrow: string;
  specs: [string, string][];
  rev?: string;
  slug?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl border border-line bg-ink glow-blueprint"
    >
      {slug ? (
        <>
          {/* corner reticles */}
          <span className="pointer-events-none absolute left-4 top-4 z-20 h-3 w-3 border-l border-t border-blueprint/70" />
          <span className="pointer-events-none absolute right-4 top-4 z-20 h-3 w-3 border-r border-t border-blueprint/70" />
          <span className="pointer-events-none absolute bottom-4 left-4 z-20 h-3 w-3 border-b border-l border-blueprint/40" />
          <span className="pointer-events-none absolute bottom-4 right-4 z-20 h-3 w-3 border-b border-r border-blueprint/40" />

          {/* screenshot — tries .png first, falls back to .svg */}
          <FeatureImage
            slug={slug}
            alt={`${eyebrow} screenshot`}
            className="w-full h-auto"
          />

          {/* spec sheet */}
          <div className="relative px-6 pb-8 pt-4 sm:px-10 sm:pb-10">
            <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-graphite-2">
                {eyebrow} · spec
              </span>
              <span className="rounded-full border border-blueprint/30 bg-blueprint/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-blueprint-soft">
                {rev}
              </span>
            </div>
            <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {specs.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 bg-ink px-4 py-3">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-graphite-2">{k}</dt>
                  <dd className="text-right text-sm text-vellum">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-line" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-graphite-2">
                app.vizedraw.com
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            </div>
          </div>
        </>
      ) : (
        /* TechGlyph fallback — shown when no slug is provided */
        <>
          <div className="absolute inset-0 bp-grid opacity-60" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-1/2 w-1/2 bg-[radial-gradient(circle_at_top_left,rgba(78,186,189,0.14),transparent_60%)]" />
          </div>
          <span className="absolute left-4 top-4 h-3 w-3 border-l border-t border-blueprint/40" />
          <span className="absolute right-4 top-4 h-3 w-3 border-r border-t border-blueprint/40" />
          <span className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-blueprint/40" />
          <span className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-blueprint/40" />

          <div className="relative grid items-center gap-10 p-8 sm:p-12 md:grid-cols-[auto_1fr]">
            <div className="relative mx-auto grid h-40 w-40 place-items-center sm:h-48 sm:w-48">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blueprint/20 to-cyan/10 shadow-[0_0_60px_rgba(78,186,189,0.35),inset_0_1px_0_rgba(111,207,209,0.15)]" />
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-blueprint/10 to-transparent blur-sm" />
              <div className="absolute inset-0 rounded-3xl border border-blueprint/35" />
              <div className="absolute inset-3 rounded-2xl border border-blueprint/20" />
              <div className="absolute inset-6 rounded-xl border border-line/60" />
              <div className="absolute inset-8 rounded-full bg-blueprint/20 blur-2xl" />
              <span className="absolute -left-1 top-1/2 h-px w-5 bg-blueprint/50" />
              <span className="absolute -right-1 top-1/2 h-px w-5 bg-blueprint/50" />
              <span className="absolute left-1/2 -top-1 h-5 w-px bg-blueprint/50" />
              <span className="absolute left-1/2 -bottom-1 h-5 w-px bg-blueprint/50" />
              <TechGlyph
                name={glyph}
                strokeWidth={1.4}
                className="relative h-[86px] w-[86px] sm:h-24 sm:w-24"
              />
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-graphite-2">
                  {eyebrow} · spec
                </span>
                <span className="rounded-full border border-blueprint/30 bg-blueprint/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-blueprint-soft">
                  {rev}
                </span>
              </div>
              <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
                {specs.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 bg-ink px-4 py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-graphite-2">{k}</dt>
                    <dd className="text-right text-sm text-vellum">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 flex items-center gap-3">
                <span className="h-px flex-1 bg-line" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-graphite-2">
                  app.vizedraw.com
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
