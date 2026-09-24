import PageHeader from "@/components/PageHeader";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import CapabilityGrid from "@/components/CapabilityGrid";
import WorkflowSteps from "@/components/WorkflowSteps";
import BeforeAfter from "@/components/BeforeAfter";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import TechGlyph from "@/components/TechGlyph";
import DimensionRule from "@/components/DimensionRule";

export const metadata = {
  title: "Product — VizeDraw",
  description:
    "How VizeDraw works end to end: upload drawing sets, organize by project and revision, review and mark up, search across sheets, compare revisions, and release.",
};

const solutionPoints = [
  {
    title: "Drawings, not documents",
    body: "Sheet numbers, disciplines, and revisions are first-class — the viewer is built around how drawing sets actually behave.",
  },
  {
    title: "Review that stays on the sheet",
    body: "Markups and comments anchor to the drawing and the grid location, so context never gets lost in an email thread.",
  },
  {
    title: "Revision awareness everywhere",
    body: "Every sheet knows its revision. Compare versions with overlay and pixel diff before approvals or fabrication release.",
  },
  {
    title: "Search across the set",
    body: "Find sheet numbers, notes, and metadata across the whole package instead of opening files one by one.",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHeader
        banner="product"
        eyebrow="Product overview"
        title="One workspace from upload to release"
        lede="VizeDraw replaces the generic PDF workflow with a structured path: bring in drawing sets, organize them, review and mark up, compare revisions, and sign off — all in one place."
        actions={[
          { label: "Request demo", href: "/request-demo" },
          { label: "View pricing", href: "/pricing", variant: "outline" },
        ]}
      />

      <section className="mx-auto max-w-container px-5 py-20">
        <DimensionRule label="The solution" className="mb-14" />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {solutionPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="h-full bg-ink p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-[51px] w-[51px] flex-none place-items-center rounded-2xl border border-blueprint/30 bg-gradient-to-br from-blueprint/20 to-ink/80 shadow-[0_4px_20px_rgba(78,186,189,0.28),inset_0_1px_0_rgba(111,207,209,0.1)] transition-all duration-300 group-hover:border-blueprint/55 group-hover:shadow-[0_6px_28px_rgba(78,186,189,0.42)]">
                    <TechGlyph
                      name={(["workspace", "markup", "revision", "search"] as const)[i % 4]}
                      className="h-7 w-7"
                    />
                  </span>
                  <span className="font-mono text-xs text-blueprint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-vellum">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-graphite">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-container px-5 pb-8">
        <ScreenshotFrame
          src="/images/product/hero.png"
          alt="VizeDraw project file browser — Maple Tower project with files, versions, and access details"
          bare
        />
      </section>

      <section className="mx-auto max-w-container px-5 py-12">
        <div className="mb-12 flex flex-col gap-4">
          <SectionLabel>Capabilities at a glance</SectionLabel>
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[40px] sm:leading-[1.1]">
            Everything in the workspace
          </h2>
        </div>
        <CapabilityGrid />
      </section>

      <section className="mx-auto max-w-container px-5 py-20">
        <div className="mb-14 flex flex-col gap-4">
          <SectionLabel accent="cyan">The workflow</SectionLabel>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[40px] sm:leading-[1.1]">
            A clear path from PDF to released drawing
          </h2>
        </div>
        <WorkflowSteps />
      </section>

      <section className="mx-auto max-w-container px-5 py-12">
        <div className="mb-14 flex flex-col gap-4">
          <SectionLabel accent="markup">Before & after</SectionLabel>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[40px] sm:leading-[1.1]">
            The shift from generic tools to a drawing workspace
          </h2>
        </div>
        <BeforeAfter />
      </section>

      <CTA />
    </>
  );
}
