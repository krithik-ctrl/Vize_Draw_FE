"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export type BannerVariant =
  | "features"
  | "product"
  | "pricing"
  | "usecases"
  | "company"
  | "resources"
  | "contact"
  | "demo";

/* ---- bespoke technical scenes (viewBox 1200×520, right-biased) ---- */
const T = "#4EBABD";
const TS = "#6FCFD1";
const MK = "#FF6B4A";
const GR = "#5E6A80";

function Scene({ variant }: { variant: BannerVariant }) {
  switch (variant) {
    case "features": // capability constellation
      return (
        <g fill="none">
          {[
            [760, 110], [940, 90], [1080, 170], [700, 240], [880, 230],
            [1030, 300], [770, 360], [950, 380], [1100, 430],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="22" stroke={i % 3 === 0 ? TS : T} strokeWidth="1.2" opacity={0.8} />
              <circle cx={x} cy={y} r={i % 4 === 0 ? 6 : 3} fill={i % 4 === 0 ? T : TS} opacity={i % 4 === 0 ? 0.9 : 0.5} />
            </g>
          ))}
          <path d="M760 110L940 90M940 90L1080 170M700 240L880 230M880 230L1030 300M770 360L950 380M950 380L1100 430M880 230L940 90M880 230L770 360"
                stroke={T} strokeWidth="1" opacity="0.35" />
        </g>
      );
    case "product": // stacked drawing sheets + markup
      return (
        <g fill="none" strokeWidth="1.4">
          <rect x="690" y="150" width="300" height="210" rx="6" stroke={GR} opacity="0.4" transform="rotate(-6 840 255)" />
          <rect x="730" y="120" width="300" height="210" rx="6" stroke={T} opacity="0.55" transform="rotate(-2 880 225)" />
          <g stroke={TS} opacity="0.9">
            <rect x="770" y="100" width="320" height="220" rx="6" />
            <path d="M770 150h320M770 250h320M870 100v220M990 100v220" strokeWidth="0.8" opacity="0.5" />
          </g>
          <path d="M905 175q-7-9 3-10q-1-9 9-7q3-7 12-1q9-4 10 6q9 0 5 9q6 6-3 10q1 9-9 7q-4 6-12 1q-9 4-10-6q-9 1-5-9z"
                stroke={MK} strokeWidth="1.4" />
          <circle cx="940" cy="168" r="7" fill={MK} stroke="none" />
        </g>
      );
    case "pricing": // ascending tiered columns
      return (
        <g>
          <line x1="690" y1="400" x2="1130" y2="400" stroke={GR} strokeWidth="1" opacity="0.5" />
          {[[720, 120], [820, 170], [920, 230], [1020, 90]].map(([x, h], i) => (
            <g key={i}>
              <rect x={x} y={400 - h} width="64" height={h} rx="4" fill={i === 3 ? T : "none"} fillOpacity={i === 3 ? 0.12 : 0}
                    stroke={i === 3 ? TS : T} strokeWidth="1.3" opacity={0.8} />
              {Array.from({ length: i + 1 }).map((_, d) => (
                <rect key={d} x={x + 8 + (d % 2) * 26} y={400 - h + 12 + Math.floor(d / 2) * 26} width="20" height="20" rx="3"
                      fill={d <= i ? (i === 3 ? T : TS) : "none"} stroke={TS} strokeWidth="1" opacity={d <= i ? 0.9 : 0.3} />
              ))}
            </g>
          ))}
          <path d="M752 280L852 230L952 170L1052 90" stroke={MK} strokeWidth="1.2" fill="none" strokeDasharray="3 3" opacity="0.7" />
        </g>
      );
    case "usecases": // structural | mechanical diptych
      return (
        <g fill="none" strokeWidth="1.3">
          <g stroke={T} opacity="0.7">
            <rect x="690" y="150" width="180" height="220" rx="4" />
            <path d="M690 210h180M690 290h180M750 150v220M810 150v220" strokeWidth="0.8" opacity="0.6" />
            <circle cx="720" cy="180" r="9" stroke={TS} />
          </g>
          <line x1="900" y1="140" x2="900" y2="380" stroke={GR} strokeDasharray="4 4" opacity="0.5" />
          <g stroke={TS} opacity="0.8">
            <path d="M945 175h150a16 16 0 0 1 16 16v110a16 16 0 0 1-16 16H945z" />
            <circle cx="1030" cy="245" r="34" stroke={T} />
            <circle cx="975" cy="200" r="7" /><circle cx="1085" cy="200" r="7" />
            <circle cx="975" cy="290" r="7" /><circle cx="1085" cy="290" r="7" />
          </g>
        </g>
      );
    case "company": // measured elevation + orbit
      return (
        <g fill="none" strokeWidth="1.3">
          <g stroke={T} opacity="0.7">
            <path d="M720 360V210l70-50 70 50v150" />
            <path d="M860 360V250h90v110" />
            <path d="M790 360v-70h40v70" stroke={TS} />
            <path d="M700 360h320" stroke={GR} />
          </g>
          <g stroke={TS} opacity="0.5">
            <path d="M700 185h180" strokeDasharray="0.1 0" />
            <path d="M700 178v14M880 178v14" />
          </g>
          <g opacity="0.8">
            <circle cx="1050" cy="220" r="58" stroke={T} strokeDasharray="3 4" opacity="0.5" />
            <circle cx="1050" cy="162" r="5" fill={TS} stroke="none" />
            <circle cx="1108" cy="220" r="5" fill={T} stroke="none" />
            <circle cx="1050" cy="220" r="14" stroke={TS} />
            <path d="M1044 220l4 4 8-9" stroke={T} strokeWidth="1.6" />
          </g>
        </g>
      );
    case "resources": // fanned document library + search
      return (
        <g fill="none" strokeWidth="1.3">
          <rect x="740" y="150" width="150" height="200" rx="6" stroke={GR} opacity="0.4" transform="rotate(-8 815 250)" />
          <rect x="775" y="135" width="150" height="200" rx="6" stroke={T} opacity="0.6" transform="rotate(-3 850 235)" />
          <g stroke={TS} opacity="0.9">
            <rect x="810" y="120" width="160" height="210" rx="6" />
            <path d="M832 160h116M832 188h116M832 216h80M832 244h116M832 272h70" strokeWidth="1" opacity="0.6" />
          </g>
          <g stroke={T} opacity="0.85">
            <circle cx="1050" cy="300" r="26" />
            <path d="M1070 320l24 24" strokeWidth="1.6" />
          </g>
          {["GUIDE", "API", "DOCS"].map((t, i) => (
            <g key={t} transform={`translate(${1010 + i * 0} ${130 + i * 34})`}>
              <rect x="0" y="0" width="120" height="24" rx="12" stroke={T} opacity="0.5" />
            </g>
          ))}
        </g>
      );
    case "contact": // signal node graph to a central pin
      return (
        <g fill="none" strokeWidth="1.3">
          <g stroke={T} opacity="0.35">
            <path d="M720 160L920 250M740 350L920 250M1090 150L920 250M1080 360L920 250" />
          </g>
          {[[720, 160], [740, 350], [1090, 150], [1080, 360]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="9" stroke={TS} opacity="0.7" />
          ))}
          <g>
            <circle cx="920" cy="250" r="40" stroke={T} opacity="0.4" />
            <circle cx="920" cy="250" r="58" stroke={T} opacity="0.2" strokeDasharray="3 4" />
            <path d="M896 236h48v30h-48z" stroke={TS} />
            <path d="M896 238l24 16 24-16" stroke={TS} />
            <circle cx="920" cy="250" r="4" fill={MK} stroke="none" />
          </g>
        </g>
      );
    case "demo": // preview frame with play + cursor
      return (
        <g fill="none" strokeWidth="1.4">
          <rect x="730" y="130" width="360" height="240" rx="10" stroke={T} opacity="0.7" />
          <path d="M730 168h360" stroke={GR} opacity="0.5" />
          <circle cx="748" cy="149" r="3.5" fill={MK} stroke="none" />
          <circle cx="762" cy="149" r="3.5" fill="#FFB23E" stroke="none" />
          <circle cx="776" cy="149" r="3.5" fill={T} stroke="none" />
          <circle cx="910" cy="270" r="42" stroke={TS} />
          <path d="M898 250l28 20-28 20z" fill={T} stroke="none" opacity="0.9" />
          <path d="M1010 320l4 26 8-10 10 2z" fill={TS} stroke={TS} strokeWidth="1" opacity="0.9" />
        </g>
      );
  }
}

export default function PageBanner({
  variant,
  accent = "blueprint",
}: {
  variant: BannerVariant;
  accent?: "blueprint" | "markup" | "cyan";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const glow = accent === "markup" ? "rgba(255,107,74,0.16)" : "rgba(78,186,189,0.18)";

  const photoBanners: Partial<Record<BannerVariant, string>> = {
    features: "/images/features/hero-banner.jpg",
    product: "/images/product/hero-banner.jpg",
    pricing: "/images/pricing/hero-banner.jpg",
    usecases: "/images/use-cases/hero-banner.jpg",
    resources: "/images/resources/hero-banner.jpg",
    company: "/images/company/hero-banner.jpg",
    demo: "/images/demo/hero-banner.jpg",
    contact: "/images/contact/hero-banner.jpg",
  };
  const photoBannerSrc = photoBanners[variant];

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* far: blueprint grid, slow parallax */}
      <motion.div style={{ y: ySlow }} className="absolute inset-0 bp-grid opacity-40 radial-fade" />

      {/* photo background with parallax (features, product, etc.) */}
      {photoBannerSrc && (
        <motion.div
          style={{ y: yMid, opacity: fade }}
          className="absolute inset-0"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={photoBannerSrc}
            alt=""
            fill
            priority
            className="object-cover object-center"
            style={{ opacity: 0.48 }}
          />
        </motion.div>
      )}

      {/* ambient glow */}
      <motion.div
        style={{ y: ySlow, background: glow }}
        className="absolute right-[12%] top-6 h-[440px] w-[620px] rounded-full blur-[130px]"
        animate={{ opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {/* mid: the bespoke scene, slow-zoom reveal + parallax — skipped when a photo banner is used */}
      {!photoBannerSrc && (
        <motion.div style={{ y: yMid, opacity: fade }} className="absolute inset-0">
          <motion.svg
            viewBox="0 0 1200 520"
            preserveAspectRatio="xMaxYMid slice"
            className="h-full w-full"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Scene variant={variant} />
          </motion.svg>
        </motion.div>
      )}

      {/* near: drifting accent reticle, fast parallax */}
      <motion.div style={{ y: yFast }} className="absolute right-[8%] top-1/3">
        <motion.div
          className="h-2 w-2 rounded-full bg-cyan"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* legibility scrims */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
