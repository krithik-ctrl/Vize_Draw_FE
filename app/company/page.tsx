import PageHeader from "@/components/PageHeader";
import MagneticButton from "@/components/MagneticButton";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import DimensionRule from "@/components/DimensionRule";
import { companyPillars } from "@/lib/content";

export const metadata = {
  title: "Company — VizeDraw by Zenitude",
  description:
    "VizeDraw is built by Zenitude for teams whose business runs on technical drawings. Drawing-first, security-aware, practical, and product-led.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        banner="company"
        eyebrow="Company"
        title="VizeDraw is built by Zenitude"
        lede="We build software for teams whose business runs on technical drawings. Not generic document management — a workspace shaped around how drawing sets actually flow."
      />

      <section className="mx-auto max-w-container px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionLabel>Our approach</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[38px] sm:leading-[1.1]">
              Practical improvement, stated plainly
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-graphite">
              <p>
                Drawings drive bids, fabrication, quality, and field decisions.
                When they live in scattered folders and email threads, teams lose
                time and make avoidable mistakes. VizeDraw exists to fix that.
              </p>
              <p>
                We focus on the workflow that matters — organize, review, search,
                and compare — and we keep the product honest. Everything we claim
                is something you can verify in a demo, not a buzzword on a landing
                page.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-container px-5 py-12">
        <DimensionRule label="What we value" className="mb-14" />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {companyPillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="h-full bg-ink p-8">
                <span className="font-mono text-xs text-blueprint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-vellum">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-graphite">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-container px-5 py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-16">
            <div className="absolute inset-0 bp-grid opacity-40" />
            <div className="relative">
              <SectionLabel accent="cyan">Get in touch</SectionLabel>
              <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[40px] sm:leading-[1.08]">
                Talk to the team behind VizeDraw
              </h2>
              <p className="mx-auto mt-4 max-w-md text-graphite">
                Questions about the product, partnerships, or your drawing
                workflow? Reach us at{" "}
                <a
                  href="mailto:hello@zenitude.com"
                  data-cursor="hover"
                  className="text-blueprint-soft underline-offset-4 hover:underline"
                >
                  hello@zenitude.com
                </a>
                .
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <MagneticButton href="/request-demo">Request demo</MagneticButton>
                <MagneticButton href="/contact" variant="outline">
                  Contact us
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
