"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  label?: string;
  chip?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  /** When the image already includes its own app chrome, skip the frame's chrome bar. */
  bare?: boolean;
  /** Extra classes applied to the <Image> element (e.g. to fix height + object-cover). */
  imageClassName?: string;
};

/**
 * ScreenshotFrame — a product screenshot inside a glass browser frame with
 * 3D pointer tilt, a blueprint glow, a slow scan-line and a corner reticle.
 * Used to present the real workspace imagery from the marketing site.
 */
export default function ScreenshotFrame({
  src,
  alt,
  label,
  chip,
  width = 1200,
  height = 760,
  priority = false,
  bare = false,
  imageClassName,
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-5, 5]), { stiffness: 120, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 36, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", transformPerspective: 1300 }}
      className="group relative w-full"
    >
      {/* ambient glow */}
      <div className="absolute -inset-6 -z-10 rounded-[28px] bg-blueprint/15 opacity-60 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

      <div className="glass relative overflow-hidden rounded-2xl glow-blueprint">
        {/* chrome */}
        {!bare && (
        <div className="flex items-center justify-between border-b border-line/70 bg-ink-2/60 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-markup/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
            {label && (
              <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-graphite-2">
                {label}
              </span>
            )}
          </div>
          {chip && (
            <span className="rounded-full border border-blueprint/40 bg-blueprint/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-blueprint-soft">
              {chip}
            </span>
          )}
        </div>
        )}

        {/* image */}
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={`block w-full ${imageClassName ?? "h-auto"}`}
          />
          {/* scan line */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan/10 to-transparent"
            animate={{ y: ["-10%", "440%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          {/* beam sweep on hover */}
          <span className="beam-sweep opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>

      {/* corner reticle */}
      <span aria-hidden className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-blueprint/50" />
      <span aria-hidden className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-blueprint/50" />
    </motion.div>
  );
}
