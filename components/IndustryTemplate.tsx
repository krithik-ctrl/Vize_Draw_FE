import Link from "next/link";
import PageHeader from "./PageHeader";
import CTA from "./CTA";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import DimensionRule from "./DimensionRule";

type Workflow = { title: string; body: string };
type Related = { label: string; href: string };

export default function IndustryTemplate({
  eyebrow,
  title,
  lede,
  accent = "blueprint",
  workflows,
  related,
  ctaTitle,
  heroBannerSrc,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  accent?: "blueprint" | "markup" | "cyan";
  workflows: Workflow[];
  related: Related[];
  ctaTitle: string;
  heroBannerSrc?: string;
}) {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        lede={lede}
        accent={accent}
        heroBannerSrc={heroBannerSrc}
        actions={[
          { label: "Request demo", href: "/request-demo" },
          { label: "View pricing", href: "/pricing", variant: "outline" },
        ]}
      />

      <section className="mx-auto max-w-container px-5 py-12">
        <DimensionRule label="Workflows" className="mb-16" />
        <div className="grid gap-6 md:grid-cols-2">
          {workflows.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.04}>
              <TiltCard intensity={6}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-xs text-blueprint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        accent === "markup" ? "bg-markup" : "bg-blueprint"
                      }`}
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-vellum">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">
                    {w.body}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-container px-5 py-12">
        <Reveal>
          <div className="rounded-3xl border border-line bg-surface/40 p-8 sm:p-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-graphite-2">
              Related features
            </span>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {related.map((r) => (
                <Link
                  key={r.href + r.label}
                  href={r.href}
                  data-cursor="hover"
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-ink/50 px-4 py-2.5 text-sm text-graphite transition-colors hover:border-blueprint/50 hover:text-vellum"
                >
                  {r.label}
                  <span className="text-graphite-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-blueprint-soft">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <CTA title={ctaTitle} />
    </>
  );
}
