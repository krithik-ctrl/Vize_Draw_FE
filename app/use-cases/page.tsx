import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import DimensionRule from "@/components/DimensionRule";
import TechGlyph, { type GlyphName } from "@/components/TechGlyph";
import { useCases } from "@/lib/content";

const useCaseGlyphs: Record<string, GlyphName> = {
  "Construction": "workspace",
  "Manufacturing": "organize",
  "Engineering": "measure",
  "Fabrication": "compare",
  "Estimating & preconstruction": "takeoff",
};

export const metadata = {
  title: "Use cases — VizeDraw",
  description:
    "Industry-specific drawing workflows for construction, manufacturing, engineering, fabrication, estimating & preconstruction, and project teams.",
};

const slug = (s: string) =>
  s.toLowerCase().replace(/&/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");

export default function UseCasesPage() {
  return (
    <>
      <PageHeader
        banner="usecases"
        eyebrow="Use cases"
        title="Built for teams that live in drawings"
        lede="VizeDraw fits the way different teams review, compare, and release technical drawings — from bid sets to production prints."
        actions={[
          { label: "Request demo", href: "/request-demo" },
          { label: "View pricing", href: "/pricing", variant: "outline" },
        ]}
      >
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {useCases.map((u) => (
            <a
              key={u.title}
              href={`#${slug(u.title)}`}
              data-cursor="hover"
              className="rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-graphite transition-colors hover:border-blueprint/50 hover:text-vellum"
            >
              {u.title}
            </a>
          ))}
        </div>
      </PageHeader>

      <section className="mx-auto max-w-container px-5 py-12">
        <DimensionRule label="By team" className="mb-16" />
        <div className="flex flex-col gap-px overflow-hidden rounded-3xl border border-line bg-line">
          {useCases.map((u, i) => (
            <Reveal as="article" key={u.title} delay={i * 0.03}>
              <div
                id={slug(u.title)}
                className="scroll-mt-28 grid gap-8 bg-ink p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div>
                  <div className="mb-5 flex items-center gap-4">
                    <div className="relative grid h-14 w-14 flex-none place-items-center rounded-2xl border border-blueprint/30 bg-gradient-to-br from-blueprint/20 to-cyan/10 shadow-[0_0_36px_rgba(78,186,189,0.30),inset_0_1px_0_rgba(111,207,209,0.14)]">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blueprint/10 to-transparent blur-sm" />
                      <TechGlyph
                        name={useCaseGlyphs[u.title] ?? "workspace"}
                        className="relative h-7 w-7"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="font-mono text-xs text-blueprint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-vellum sm:text-3xl">
                    {u.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-graphite">{u.body}</p>
                  <Link
                    href={u.link.href}
                    data-cursor="hover"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-blueprint-soft"
                  >
                    {u.link.label}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
                <ul className="grid gap-2.5 self-center sm:grid-cols-2">
                  {u.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 rounded-xl border border-line bg-surface/40 px-4 py-3 text-sm leading-relaxed text-graphite"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blueprint" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
