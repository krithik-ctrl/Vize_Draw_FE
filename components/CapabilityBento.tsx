"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/lib/content";
import { stagger } from "@/lib/motion";
import BentoCard from "./ui/BentoCard";
import TechGlyph, { type GlyphName } from "./TechGlyph";

const capabilityGlyphs: Record<string, GlyphName> = {
  "Drawing Workspace": "workspace",
  "Revision Management": "revision",
  "Review Markups": "markup",
  "Scale & Measurement": "measure",
  "Takeoff Profiles": "takeoff",
  "Team Collaboration": "collab",
  "Sharing & access": "share",
  "PDF tools": "generic",
  "Enterprise Access": "shield",
};

/**
 * A bento-grid layout (ui-ux-pro-max "Bento Box Grid" style) for the full
 * capability set. The first tile is featured (2-col) with a live mini-sheet glyph.
 */
export default function CapabilityBento() {
  return (
    <motion.div
      variants={stagger(0, 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      className="grid auto-rows-fr grid-cols-2 gap-3 lg:grid-cols-4"
    >
      {capabilities.map((c, i) => (
        <BentoCard
          key={c.href}
          href={c.href}
          index={i}
          title={c.title}
          blurb={c.blurb}
          className={i === 0 ? "col-span-2 row-span-2" : ""}
        >
          <div className="flex flex-col gap-4">
            <CapabilityIcon name={capabilityGlyphs[c.title] ?? "workspace"} />
            {i === 0 && (
              <div className="overflow-hidden rounded-xl border border-line/70">
                <img
                  src="/images/home/workspace-bento.svg"
                  alt="Drawing Workspace screenshot"
                  className="w-full object-cover"
                  draggable={false}
                />
              </div>
            )}
          </div>
        </BentoCard>
      ))}
    </motion.div>
  );
}

function CapabilityIcon({ name }: { name: GlyphName }) {
  return (
    <div className="relative grid h-14 w-14 flex-none place-items-center rounded-2xl border border-blueprint/30 bg-gradient-to-br from-blueprint/20 to-cyan/10 shadow-[0_0_36px_rgba(78,186,189,0.30),inset_0_1px_0_rgba(111,207,209,0.14)]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blueprint/10 to-transparent blur-sm" />
      <TechGlyph name={name} className="relative h-7 w-7" strokeWidth={1.5} />
    </div>
  );
}

