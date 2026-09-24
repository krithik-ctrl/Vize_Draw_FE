"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  text: string;
  className?: string;
  highlight?: string;
  highlightClass?: string;
  delay?: number;
  as?: "h1" | "h2";
  lineBreak?: boolean;
};

/**
 * WordReveal — splits a heading into words and reveals each with a
 * masked rise (kinetic typography). Optionally highlights a phrase.
 */
export default function WordReveal({
  text,
  className = "",
  highlight,
  highlightClass = "text-gradient",
  delay = 0,
  as = "h1",
  lineBreak = false,
}: Props) {
  const words = text.split(" ");
  const hi = highlight?.split(" ") ?? [];
  const Tag = motion[as];

  return (
    <Tag
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: delay } } }}
      className={className}
      aria-label={highlight ? `${text} ${highlight}` : text}
    >
      {words.map((w, i) => (
        <span key={`w-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="inline-block pr-[0.28em]"
          >
            {w}
          </motion.span>
        </span>
      ))}
      {lineBreak && hi.length > 0 && <br />}
      {hi.map((w, i) => (
        <span key={`h-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            className={`inline-block pr-[0.28em] ${highlightClass}`}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
