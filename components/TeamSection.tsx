"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import DimensionRule from "./DimensionRule";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { teamMembers } from "@/lib/content";

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function TeamSection() {
  return (
    <section className="relative mx-auto max-w-container px-5 py-24">
      <DimensionRule label="The team" className="mb-14" />

      <div className="mb-12 flex flex-col gap-4">
        <SectionLabel accent="cyan">Built by Zenitude</SectionLabel>
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tightest text-vellum sm:text-[40px] sm:leading-[1.1]">
          The people building VizeDraw
        </h2>
        <p className="max-w-xl text-graphite">
          A small team from engineering, construction, and software — with a shared frustration about how drawings were handled in the field.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.06}>
            <TiltCard intensity={5}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-blueprint/40 hover:bg-surface-2">
                {/* top glow line on hover */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-blueprint/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* avatar + name row */}
                <div className="mb-5 flex items-start gap-4">
                  <motion.span
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`grid h-[52px] w-[52px] flex-none place-items-center rounded-2xl bg-gradient-to-br ${member.gradient} text-sm font-semibold text-white shadow-[0_4px_20px_rgba(78,186,189,0.25)]`}
                  >
                    {member.initials}
                  </motion.span>
                  <div className="min-w-0">
                    <p className="font-display text-[17px] font-semibold leading-snug tracking-tight text-vellum">
                      {member.name}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-blueprint-soft">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* divider */}
                <div className="mb-5 h-px bg-line transition-colors duration-300 group-hover:bg-blueprint/20" />

                {/* bio */}
                <p className="flex-1 text-sm leading-relaxed text-graphite">{member.bio}</p>

                {/* linkedin */}
                {member.linkedin && member.linkedin !== "#" ? (
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium text-graphite-2 transition-colors duration-200 hover:text-blueprint-soft"
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </Link>
                ) : (
                  <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium text-graphite-2/40 select-none">
                    <LinkedInIcon />
                    LinkedIn
                  </div>
                )}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
