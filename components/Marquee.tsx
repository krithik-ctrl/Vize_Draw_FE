"use client";

import type { ReactNode } from "react";

/**
 * Marquee — seamless infinite horizontal scroll (edge-masked).
 * Pauses on hover. Used for the industries strip.
 */
export default function Marquee({
  children,
  className = "",
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={`group relative flex overflow-hidden mask-fade-x ${className}`}>
      {[0, 1].map((dup) => (
        <div
          key={dup}
          aria-hidden={dup === 1}
          className="flex shrink-0 items-center gap-10 pr-10 animate-marquee-x group-hover:[animation-play-state:paused]"
          style={{ animationDirection: reverse ? "reverse" : "normal" }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
