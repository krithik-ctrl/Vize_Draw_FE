"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import MagneticButton from "./MagneticButton";
import PageBanner, { BannerVariant } from "./PageBanner";

type Action = { label: string; href: string; variant?: "primary" | "outline" | "ghost"; external?: boolean };

export default function PageHeader({
  eyebrow,
  title,
  lede,
  actions,
  accent = "blueprint",
  align = "center",
  banner,
  heroBannerSrc,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  actions?: Action[];
  accent?: "blueprint" | "markup" | "cyan";
  align?: "center" | "left";
  banner?: BannerVariant;
  heroBannerSrc?: string;
  breadcrumb?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const words = title.split(" ");
  const centered = align === "center";

  return (
    <section className="relative overflow-hidden px-5 pb-[248px] pt-36 sm:pt-44">
      {banner ? (
        <PageBanner variant={banner} accent={accent} />
      ) : heroBannerSrc ? (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bp-grid opacity-40 radial-fade" />
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={heroBannerSrc}
              alt=""
              fill
              priority
              className="object-cover object-center"
              style={{ opacity: 0.48 }}
            />
          </motion.div>
          <motion.div
            aria-hidden
            className="absolute right-[12%] top-6 h-[440px] w-[620px] rounded-full blur-[130px]"
            style={{ background: accent === "markup" ? "rgba(255,107,74,0.16)" : "rgba(78,186,189,0.18)" }}
            animate={{ opacity: [0.55, 0.9, 0.55] }}
            transition={{ duration: 9, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bp-grid opacity-40 radial-fade" />
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-10 h-[420px] w-[680px] -translate-x-1/2 rounded-full blur-[120px]"
            style={{ background: accent === "markup" ? "rgba(255,107,74,0.16)" : "rgba(78,186,189,0.18)" }}
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
      )}

      <div className={`mx-auto max-w-container ${centered ? "text-center" : ""}`}>
        <div className={centered ? "flex justify-center" : ""}>
          <SectionLabel accent={accent}>{eyebrow}</SectionLabel>
        </div>
        {breadcrumb && <div className={`mt-3 ${centered ? "flex justify-center" : ""}`}>{breadcrumb}</div>}

        <h1 className={`mt-5 font-display text-4xl font-semibold tracking-tightest text-vellum sm:text-6xl sm:leading-[1.02] ${centered ? "mx-auto max-w-4xl" : "max-w-4xl"}`}>
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
                className="inline-block"
              >
                {w}&nbsp;
              </motion.span>
            </span>
          ))}
        </h1>

        {lede && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className={`mt-6 text-lg leading-relaxed text-graphite ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {lede}
          </motion.p>
        )}

        {actions && actions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.7 }}
            className={`mt-9 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}
          >
            {actions.map((a) => (
              <MagneticButton key={a.label} href={a.href} variant={a.variant ?? "primary"} external={a.external}>
                {a.label}
              </MagneticButton>
            ))}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}
