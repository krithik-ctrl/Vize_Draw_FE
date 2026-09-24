import PageHeader from "@/components/PageHeader";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import { contactFaq } from "@/lib/content";

export const metadata = {
  title: "Contact — VizeDraw",
  description:
    "Get in touch with the VizeDraw team for demos, pricing, workflow reviews, support, or partnerships. We typically reply within one business day.",
};

const channels = [
  { label: "Sales", value: "sales@vizedraw.com", accent: "blueprint" },
  { label: "Support", value: "support@vizedraw.com", accent: "cyan" },
  { label: "Company", value: "hello@zenitude.com", accent: "markup" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        banner="contact"
        eyebrow="Contact"
        title="Talk to the VizeDraw team"
        lede="Whether you want a demo, pricing details, a workflow review, support, or a partnership conversation — we typically reply within one business day."
        align="left"
      />

      <section className="mx-auto max-w-container px-5 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <LeadForm variant="contact" submitLabel="Send message" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-line bg-surface/40 p-7">
                <h3 className="font-display text-lg font-semibold tracking-tight text-vellum">
                  Reach us directly
                </h3>
                <div className="mt-4 grid gap-3 text-sm">
                  {channels.map((c) => (
                    <a
                      key={c.value}
                      href={`mailto:${c.value}`}
                      data-cursor="hover"
                      className="flex items-center justify-between rounded-xl border border-line bg-ink/50 px-4 py-3 text-graphite transition-colors hover:border-blueprint/40 hover:text-vellum"
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-graphite-2">
                        {c.label}
                      </span>
                      {c.value}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-surface/40 p-7">
                <h3 className="font-display text-lg font-semibold tracking-tight text-vellum">
                  What to include
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">
                  Your industry, typical drawing package size, current tools, team
                  size, and the main workflow you want to improve. The more
                  context, the more focused we can make the conversation.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/40 p-7">
                <div className="absolute inset-0 bp-grid opacity-30" />
                <div className="relative">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-graphite-2">
                    Response time
                  </span>
                  <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-vellum">
                    1 business day
                  </p>
                  <p className="mt-2 text-sm text-graphite">
                    Demo requests from teams with active drawing workflows are
                    prioritized.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ items={contactFaq} eyebrow="Contact FAQ" title="Good to know" />
    </>
  );
}
