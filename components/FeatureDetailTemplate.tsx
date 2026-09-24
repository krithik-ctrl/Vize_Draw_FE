"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "./PageHeader";
import CTA from "./CTA";
import Reveal from "./Reveal";
import DimensionRule from "./DimensionRule";
import FeatureIllustration from "./FeatureIllustration";
import ScreenshotFrame from "./ScreenshotFrame";
import type { GlyphName } from "./TechGlyph";
import type { FeatureDetail } from "@/lib/content";
import { featureNav } from "@/lib/content";

const featureGlyphs: Record<string, GlyphName> = {
  workspace: "workspace",
  markup: "markup",
  scale: "measure",
  revisions: "revision",
  takeoff: "takeoff",
  collaboration: "collab",
  sharing: "share",
  "pdf-tools": "generic",
  enterprise: "shield",
};

const featureSpecs: Record<string, [string, string][]> = {
  workspace: [
    ["Viewer", "Sheet-native"],
    ["Navigation", "Thumbnails + zoom"],
    ["Layout", "Panelized"],
    ["Packages", "Large sets"],
  ],
  markup: [
    ["Tools", "15"],
    ["History", "Undo / redo"],
    ["Persistence", "Autosave"],
    ["Anchoring", "On-sheet"],
  ],
  scale: [
    ["Calibration", "Known dimension"],
    ["Detection", "Title-block auto"],
    ["Overrides", "Per-markup"],
    ["Output", "True lengths"],
  ],
  revisions: [
    ["Versions", "Full history"],
    ["Compare", "Overlay + diff"],
    ["Awareness", "Per-sheet"],
    ["Recovery", "On delete"],
  ],
  takeoff: [
    ["Profiles", "Saved searches"],
    ["Export", "CSV"],
    ["Pricing", "Per-profile"],
    ["Scope", "Whole set"],
  ],
  collaboration: [
    ["Presence", "Live cursors"],
    ["Chat", "Per-document"],
    ["Updates", "Realtime"],
    ["Notify", "Mentions"],
  ],
  sharing: [
    ["Access", "Org RBAC"],
    ["Shares", "Per-user"],
    ["Links", "Public"],
    ["Tenancy", "Multi-tenant"],
  ],
  "pdf-tools": [
    ["Pages", "Split / combine"],
    ["Optimize", "Compress / flatten"],
    ["Headers", "Batch"],
    ["OCR", "Searchable"],
  ],
  enterprise: [
    ["Tenancy", "Multi-tenant"],
    ["Audit", "Full logs"],
    ["Access", "RBAC + SSO"],
    ["Scanning", "Upload malware"],
  ],
};

export default function FeatureDetailTemplate({
  feature,
}: {
  feature: FeatureDetail;
}) {
  return (
    <>
      <PageHeader
        eyebrow={feature.eyebrow}
        title={feature.title}
        lede={feature.lede}
        align="left"
        heroBannerSrc={
          ({
            enterprise: "/images/features/enterprise-hero-banner.jpg",
            workspace: "/images/features/workspace-hero-banner.jpg",
            revisions: "/images/features/revisions-hero-banner.jpg",
            markup: "/images/features/markup-hero-banner.jpg",
            scale: "/images/features/scale-hero-banner.jpg",
            takeoff: "/images/features/takeoff-hero-banner.jpg",
            collaboration: "/images/features/collaboration-hero-banner.jpg",
            sharing: "/images/features/sharing-hero-banner.jpg",
            "pdf-tools": "/images/features/pdf-tools-hero-banner.jpg",
          } as Record<string, string>)[feature.slug]
        }
        actions={[
          { label: "Request demo", href: "/request-demo" },
          { label: "All features", href: "/features", variant: "outline" },
        ]}
        breadcrumb={
          <nav className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-graphite-2">
            <Link href="/features" data-cursor="hover" className="hover:text-vellum">
              Features
            </Link>
            <span>/</span>
            <span className="text-graphite">{feature.eyebrow}</span>
          </nav>
        }
      />

      {/* feature nav chips */}
      <section className="mx-auto max-w-container px-5">
        <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2">
          {featureNav.map((f) => {
            const active = f.slug === feature.slug;
            return (
              <Link
                key={f.slug}
                href={`/features/${f.slug}`}
                data-cursor="hover"
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                  active
                    ? "border-blueprint/60 bg-blueprint/10 text-vellum"
                    : "border-line bg-surface/50 text-graphite hover:text-vellum"
                }`}
              >
                {f.label}
              </Link>
            );
          })}
        </div>
      </section>


      {/* blocks */}
      <section className="mx-auto max-w-container px-5 py-16">
        <DimensionRule label={feature.sectionTitle} className="mb-16" />
        <div className="flex flex-col gap-px overflow-hidden rounded-3xl border border-line bg-line">
          {feature.blocks.map((block, i) => (
            <Reveal as="article" key={block.title} delay={i * 0.04}>
              <div className="grid gap-8 bg-ink p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <span className="font-mono text-xs text-blueprint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-vellum">
                    {block.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-graphite">
                    {block.body}
                  </p>
                  <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-xl border border-line bg-surface/50 px-4 py-2.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-graphite-2">
                      Used by
                    </span>
                    <span className="text-sm text-graphite">{block.usedBy}</span>
                  </div>
                </div>
                <ul className="grid gap-3 self-center">
                  {block.bullets.map((b, bi) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ delay: bi * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-start gap-3 rounded-xl border border-line bg-surface/40 px-4 py-3.5 text-sm leading-relaxed text-graphite"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blueprint" />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* prev / next */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {feature.prev ? (
            <Link
              href={`/features/${feature.prev.slug}`}
              data-cursor="hover"
              className="group rounded-2xl border border-line bg-surface/40 p-6 transition-colors hover:border-blueprint/40"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-graphite-2">
                ← Previous
              </span>
              <p className="mt-2 font-display text-lg font-medium text-vellum group-hover:text-blueprint-soft">
                {feature.prev.label}
              </p>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}
          {feature.next && (
            <Link
              href={`/features/${feature.next.slug}`}
              data-cursor="hover"
              className="group rounded-2xl border border-line bg-surface/40 p-6 text-right transition-colors hover:border-blueprint/40"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-graphite-2">
                Next →
              </span>
              <p className="mt-2 font-display text-lg font-medium text-vellum group-hover:text-blueprint-soft">
                {feature.next.label}
              </p>
            </Link>
          )}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/features"
            data-cursor="hover"
            className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-vellum"
          >
            ← Back to all features
          </Link>
        </div>
      </section>

      {/* illustration placed above the CTA for all feature pages */}
      <section className="mx-auto max-w-container px-5">
        <ScreenshotFrame
          src={`/images/features/${feature.slug}.svg`}
          alt={`${feature.eyebrow} screenshot`}
          bare
        />
      </section>

      <CTA />
    </>
  );
}
