"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { ReactNode } from "react";

/**
 * BentoCard — a bento-grid tile with a cursor-following radial border glow
 * (aceternity / 21st.dev "card spotlight" pattern). Tracks pointer via CSS vars.
 */
export default function BentoCard({
  href,
  index,
  title,
  blurb,
  className = "",
  children,
}: {
  href: string;
  index: number;
  title: string;
  blurb: string;
  className?: string;
  children?: ReactNode;
}) {
  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div variants={fadeUp} className={className}>
      <Link
        href={href}
        onMouseMove={onMove}
        data-cursor="hover"
        className="card-glow group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-transform duration-500 ease-physics hover:-translate-y-1.5"
      >
        <div className="relative flex items-start justify-between">
          <span className="font-mono text-[11px] text-graphite-2">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-line/60 text-graphite transition-all duration-300 group-hover:rotate-45 group-hover:border-blueprint/50 group-hover:bg-gradient-to-br group-hover:from-blueprint/20 group-hover:to-ink/80 group-hover:shadow-[0_4px_16px_rgba(78,186,189,0.35)] group-hover:text-blueprint-soft">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M3 11L11 3M11 3H4M11 3V10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {children && <div className="relative my-5">{children}</div>}

        <div className={`relative ${children ? "" : "mt-10"}`}>
          <h3 className="font-display text-lg font-medium tracking-tight text-vellum">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-graphite">{blurb}</p>
        </div>
      </Link>
    </motion.div>
  );
}
