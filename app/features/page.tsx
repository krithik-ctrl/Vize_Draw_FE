import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import DimensionRule from "@/components/DimensionRule";
import TechGlyph, { GlyphName } from "@/components/TechGlyph";
import FeatureImage from "@/components/FeatureImage";
import { featureDetails } from "@/lib/content";

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

export const metadata = {
  title: "Features — VizeDraw",
  description:
    "Every VizeDraw capability: drawing workspace, review markups, scale & measurement, revision management, takeoff profiles, collaboration, sharing, PDF tools, and enterprise access.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        banner="features"
        eyebrow="Features"
        title="Built for every step of drawing review"
        lede="Nine capability areas that turn scattered PDF drawing sets into a controlled, searchable, collaborative workspace."
        actions={[
          { label: "Request demo", href: "/request-demo" },
          { label: "View pricing", href: "/pricing", variant: "outline" },
        ]}
      >
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {featureDetails.map((f) => (
            <Link
              key={f.slug}
              href={`/features/${f.slug}`}
              data-cursor="hover"
              className="rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-graphite transition-colors hover:border-blueprint/50 hover:text-vellum"
            >
              {f.eyebrow}
            </Link>
          ))}
        </div>
      </PageHeader>

      <section className="mx-auto max-w-container px-5 py-12">
        <DimensionRule label="Capability index" className="mb-16" />
        <div className="flex flex-col">
          {featureDetails.map((f, i) => (
            <Reveal as="article" key={f.slug} delay={i * 0.03}>
              <Link
                href={`/features/${f.slug}`}
                data-cursor="hover"
                className="group grid gap-6 border-t border-line py-9 last:border-b md:grid-cols-[0.5fr_1fr_220px_auto] md:items-center"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-[51px] w-[51px] flex-none place-items-center rounded-2xl border border-blueprint/30 bg-gradient-to-br from-blueprint/20 to-ink/80 shadow-[0_4px_20px_rgba(78,186,189,0.28),inset_0_1px_0_rgba(111,207,209,0.1)] transition-all duration-300 group-hover:border-blueprint/55 group-hover:shadow-[0_6px_28px_rgba(78,186,189,0.42)]">
                    <TechGlyph name={featureGlyphs[f.slug] ?? "workspace"} className="h-7 w-7" />
                  </span>
                  <span className="font-mono text-xs text-blueprint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-vellum transition-colors group-hover:text-blueprint-soft">
                    {f.eyebrow}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-graphite">{f.lede}</p>
                {/* screenshot thumbnail — tries .png first, falls back to .svg */}
                <div className="hidden overflow-hidden rounded-xl border border-line transition-colors group-hover:border-blueprint/30 md:block">
                  <FeatureImage
                    slug={f.slug}
                    alt={f.eyebrow}
                    className="h-[108px] w-full object-cover object-top"
                  />
                </div>
                <span className="inline-flex items-center gap-2 justify-self-start text-sm font-medium text-blueprint-soft md:justify-self-end">
                  View details
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
