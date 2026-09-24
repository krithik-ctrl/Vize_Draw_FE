import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import SectionLabel from "@/components/SectionLabel";
import TechGlyph from "@/components/TechGlyph";
import DimensionRule from "@/components/DimensionRule";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import CapabilityBento from "@/components/CapabilityBento";
import WorkflowSteps from "@/components/WorkflowSteps";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import AuroraSpotlight from "@/components/AuroraSpotlight";
import WordReveal from "@/components/WordReveal";
import TextShimmer from "@/components/TextShimmer";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import HeroVideo from "@/components/HeroVideo";
import Marquee from "@/components/Marquee";
import StatBand from "@/components/StatBand";
import { problems, enterprisePillars, useCases, homeFaq, home, industries } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-5 pb-16 pt-32 sm:pt-40">
        <AuroraSpotlight />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/85 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-container">
          {/* two-column: copy left, video right */}
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
            {/* Left: copy */}
            <div>
              <Reveal>
                <div className="conic-border mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 animate-pulse-pin rounded-full bg-cyan" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">
                    {home.eyebrow}
                  </span>
                </div>
              </Reveal>

              <WordReveal as="h1" className="font-display text-[37px] font-semibold leading-[1.02] tracking-tightest text-vellum sm:text-[52px]" text={home.h1} highlight={home.h1Highlight} delay={0.08} lineBreak />

              <Reveal delay={0.5}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-graphite">{home.sub}</p>
              </Reveal>
              <Reveal delay={0.58}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <MagneticButton href="https://app.vizedraw.com/signup" external>Get Started</MagneticButton>
                  <MagneticButton href="/pricing" variant="outline">
                    View pricing
                  </MagneticButton>
                </div>
              </Reveal>
              <Reveal delay={0.66}>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-graphite-2">{home.note}</p>
              </Reveal>
              <Reveal delay={0.72}>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <Link href="/features" data-cursor="hover" className="group inline-flex items-center gap-1.5 font-medium text-blueprint-soft">
                    View features
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                  <span className="h-3 w-px bg-line" />
                  <Link href="/product" data-cursor="hover" className="group inline-flex items-center gap-1.5 font-medium text-graphite hover:text-vellum">
                    Product overview
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: product demo video */}
            <HeroVideo />
          </div>

          {/* industries marquee */}
          <div className="mt-20">
            <Reveal delay={0.2}>
              <Marquee>
                {industries.map((t) => (
                  <span key={t} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-graphite-2">
                    <span className="h-1 w-1 rounded-full bg-blueprint/60" />
                    {t}
                  </span>
                ))}
              </Marquee>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- CATEGORY ---------- */}
      <section className="relative mx-auto max-w-container px-5 py-24">
        <DimensionRule label={home.category.label} className="mb-14" />
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tightest text-vellum sm:text-[44px]">
                PDF viewers are built for pages.{" "}
                <span className="text-graphite">VizeDraw is built for drawings.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite">{home.category.body}</p>
            </Reveal>
          </div>
          <ScreenshotFrame
            src="/images/home/pdf-viewer.png"
            alt="VizeDraw workspace with revision tracking, sheet markups, and drawing inspector"
            width={659}
            height={433}
            bare
            priority
          />
        </div>
      </section>

      {/* ---------- PROBLEM ---------- */}
      <section className="relative mx-auto max-w-container px-5 py-16">
        <div className="mb-12 flex flex-col gap-4">
          <SectionLabel accent="markup">{home.problem.label}</SectionLabel>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[40px] sm:leading-[1.1]">
            {home.problem.title}
          </h2>
          <p className="max-w-xl text-graphite">{home.problem.body}</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal as="article" key={p.title} delay={i * 0.04}>
              <div className="group h-full bg-ink p-7 transition-colors duration-300 hover:bg-surface">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-[51px] w-[51px] flex-none place-items-center rounded-2xl border border-markup/30 bg-gradient-to-br from-markup/15 to-ink/80 shadow-[0_4px_20px_rgba(255,107,74,0.25),inset_0_1px_0_rgba(255,107,74,0.08)] transition-all duration-300 group-hover:border-markup/55 group-hover:shadow-[0_6px_28px_rgba(255,107,74,0.40)]">
                    <TechGlyph
                      name={(["scattered", "revision", "search", "comment", "tribal", "generic"] as const)[i % 6]}
                      className="h-7 w-7"
                      strokeWidth={1.8}
                    />
                  </span>
                  <span className="font-mono text-xs text-markup">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-line transition-colors group-hover:bg-markup/40" />
                </div>
                <h3 className="font-display text-lg font-medium tracking-tight text-vellum">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- WORKSPACE SHOWCASE ---------- */}
      <section className="relative mx-auto max-w-container px-5 py-16">
        <div className="mb-10 text-center">
          <TextShimmer className="font-mono text-[11px] uppercase tracking-[0.28em]">
            Live workspace
          </TextShimmer>
        </div>
        <ScreenshotFrame
          src="/images/home/home.svg"
          alt="VizeDraw drawing workspace with revision history, markups, and collaboration panels"
          bare
        />
        <div className="mt-12">
          <StatBand />
        </div>
      </section>

      {/* ---------- CAPABILITIES ---------- */}
      <section className="relative mx-auto max-w-container px-5 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <SectionLabel>{home.capabilities.label}</SectionLabel>
            <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[40px] sm:leading-[1.1]">
              {home.capabilities.title}
            </h2>
            <p className="max-w-md text-graphite">{home.capabilities.body}</p>
          </div>
          <Link
            href="/features"
            data-cursor="hover"
            className="group inline-flex items-center gap-2 text-sm font-medium text-blueprint-soft"
          >
            View all features
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <CapabilityBento />
      </section>

      {/* ---------- USE CASES ---------- */}
      <section className="relative mx-auto max-w-container px-5 py-16">
        <div className="mb-12 flex flex-col gap-4">
          <SectionLabel>{home.useCases.label}</SectionLabel>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[40px] sm:leading-[1.1]">
            {home.useCases.title}
          </h2>
          <p className="max-w-2xl text-graphite">{home.useCases.body}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {useCases.slice(0, 2).map((u, i) => (
            <TiltCard key={u.title} intensity={6}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface">
                <div className="relative aspect-[720/405] w-full overflow-hidden border-b border-line bg-ink">
                  <img
                    src={["/images/sections/use-construction.jpg", "/images/sections/use-manufacturing.jpg"][i]}
                    alt={`${u.title} — technical drawing`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-blueprint/30 bg-ink/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-blueprint-soft backdrop-blur-sm">
                    {u.title}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-graphite-2">
                      {String(i + 1).padStart(2, "0")} / Industry
                    </span>
                    <span className="h-2 w-2 rounded-full bg-blueprint" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-vellum">{u.title}</h3>
                  <p className="mt-3 text-graphite">{u.body}</p>
                  <ul className="mt-6 grid gap-2.5">
                    {u.items.slice(0, 5).map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm text-graphite">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-blueprint" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={u.link.href}
                    data-cursor="hover"
                    className="group mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium text-blueprint-soft"
                  >
                    {u.link.label}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ---------- WORKFLOW ---------- */}
      <section className="relative mx-auto max-w-container px-5 py-24">
        <div className="mb-14 flex flex-col gap-4">
          <SectionLabel accent="cyan">{home.workflow.label}</SectionLabel>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[40px] sm:leading-[1.1]">
            {home.workflow.title}
          </h2>
        </div>
        <WorkflowSteps />
      </section>

      {/* ---------- BEFORE / AFTER ---------- */}
      <section className="relative mx-auto max-w-container px-5 py-16">
        <div className="mb-14 flex flex-col gap-4">
          <SectionLabel accent="markup">{home.beforeAfter.label}</SectionLabel>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[40px] sm:leading-[1.1]">
            {home.beforeAfter.title}
          </h2>
        </div>
        <BeforeAfter />
      </section>

      {/* ---------- ENTERPRISE ---------- */}
      <section className="relative mx-auto max-w-container px-5 py-24">
        <DimensionRule label={home.enterprise.label} className="mb-14" />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[40px] sm:leading-[1.08]">
                {home.enterprise.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-graphite">{home.enterprise.body}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="relative mt-8 overflow-hidden rounded-2xl border border-line bg-ink glow-blueprint">
                <img
                  src="/images/sections/enterprise-access.svg"
                  alt="Enterprise access architecture — organisation, role-based permissions, and audit trail"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {enterprisePillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="h-full bg-ink p-7">
                  <h3 className="font-display text-lg font-medium tracking-tight text-vellum">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ---------- TESTIMONIALS ---------- */}
      <Testimonials />

      {/* ---------- CTA ---------- */}
      <CTA title={home.cta.title} body={home.cta.body} />

      {/* ---------- FAQ ---------- */}
      <FAQ items={homeFaq} eyebrow={home.faq.label} title={home.faq.title} />
    </>
  );
}
