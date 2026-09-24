import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import DimensionRule from "@/components/DimensionRule";
import { resourceCards, homeFaq } from "@/lib/content";

export const metadata = {
  title: "Resources — VizeDraw",
  description:
    "Guides and references for VizeDraw: feature reference, pricing, product overview, use case guides, construction and manufacturing workflows, and contact.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        banner="resources"
        eyebrow="Resources"
        title="Everything you need to evaluate VizeDraw"
        lede="Feature references, workflow guides, and product overviews to help your team understand how VizeDraw fits drawing-heavy work."
      />

      <section className="mx-auto max-w-container px-5 py-12">
        <DimensionRule label="Browse" className="mb-16" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourceCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.04} className="h-full">
              <TiltCard intensity={6} className="h-full">
                <Link
                  href={c.href}
                  data-cursor="hover"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7"
                >
                  <span className="mb-6 w-fit rounded-full border border-line bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-graphite-2">
                    {c.tag}
                  </span>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-vellum transition-colors group-hover:text-blueprint-soft">
                    {c.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite">
                    {c.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blueprint-soft">
                    Open
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <FAQ items={homeFaq} eyebrow="FAQ" title="Common questions" />
      <CTA />
    </>
  );
}
