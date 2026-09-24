"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { footer } from "@/lib/content";
import Logo from "./Logo";
import DimensionRule from "./DimensionRule";

function Col({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.24em] text-graphite-2">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label + l.href}>
            <Link
              href={l.href}
              data-cursor="hover"
              className="group inline-flex items-center text-sm text-graphite transition-colors hover:text-vellum"
            >
              <span className="relative">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blueprint transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line bg-ink-2">
      <div className="mx-auto max-w-container px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_0.9fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-graphite">
              A drawing workspace by Zenitude for teams whose daily work depends on technical drawings.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-graphite-2">
              © 2026 Zenitude. All rights reserved.
            </p>
          </div>
          <Col title="Product" links={footer.product} />
          <Col title="Use cases" links={footer.useCases} />
          <Col title="Company" links={footer.company} />
          <Col title="Legal" links={footer.legal} />
        </div>

        <DimensionRule className="mt-14" label="app.vizedraw.com" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-graphite-2">
            Drawing-specific · revision-aware · review-ready
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-graphite-2">VizeDraw</span>
        </motion.div>
      </div>
    </footer>
  );
}
