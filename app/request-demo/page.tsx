import PageHeader from "@/components/PageHeader";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import { demoCover, demoInclude, demoFaq } from "@/lib/content";

export const metadata = {
  title: "Request a demo — VizeDraw",
  description:
    "Request a live VizeDraw walkthrough tailored to your drawing packages and review workflow. Most sessions take about 30 minutes.",
};

export default function RequestDemoPage() {
  return (
    <>
      <PageHeader
        banner="demo"
        eyebrow="Request demo"
        title="See VizeDraw on your drawings"
        lede="A live, ~30 minute walkthrough focused on your packages — markups, revisions, takeoff, or collaboration, based on what matters to your team."
        align="left"
      />

      <section className="mx-auto max-w-container px-5 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <LeadForm variant="demo" submitLabel="Request demo" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-line bg-surface/40 p-7">
                <h3 className="font-display text-lg font-semibold tracking-tight text-vellum">
                  What the demo covers
                </h3>
                <ul className="mt-4 grid gap-3">
                  {demoCover.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-sm leading-relaxed text-graphite"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blueprint" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-surface/40 p-7">
                <h3 className="font-display text-lg font-semibold tracking-tight text-vellum">
                  Helpful to include
                </h3>
                <ul className="mt-4 grid gap-3">
                  {demoInclude.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-sm leading-relaxed text-graphite"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-surface/40 p-7">
                <h3 className="font-display text-lg font-semibold tracking-tight text-vellum">
                  Prefer email?
                </h3>
                <div className="mt-4 grid gap-3 text-sm">
                  <a
                    href="mailto:sales@vizedraw.com"
                    data-cursor="hover"
                    className="flex items-center justify-between rounded-xl border border-line bg-ink/50 px-4 py-3 text-graphite transition-colors hover:border-blueprint/40 hover:text-vellum"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-graphite-2">
                      Sales
                    </span>
                    sales@vizedraw.com
                  </a>
                  <a
                    href="mailto:support@vizedraw.com"
                    data-cursor="hover"
                    className="flex items-center justify-between rounded-xl border border-line bg-ink/50 px-4 py-3 text-graphite transition-colors hover:border-blueprint/40 hover:text-vellum"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-graphite-2">
                      Support
                    </span>
                    support@vizedraw.com
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ items={demoFaq} eyebrow="Demo FAQ" title="Before you book" />
    </>
  );
}
