"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  strength?: number;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
  /** Plain same-tab anchor, bypassing next/link's client-side router. Use for links that must always work as a normal browser navigation. */
  hardNav?: boolean;
};

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  strength = 0.4,
  onClick,
  type = "button",
  external,
  hardNav,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });
  const tx = useTransform(sx, (v) => v * 0.5);
  const ty = useTransform(sy, (v) => v * 0.5);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium tracking-tight transition-colors duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-blueprint text-white hover:bg-blueprint-soft shadow-[0_18px_50px_-18px_rgba(77,124,254,0.85)]"
      : variant === "outline"
        ? "border border-line text-vellum hover:border-blueprint/60 hover:text-white bg-white/[0.02]"
        : "text-graphite hover:text-white";

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: tx, y: ty }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex"
      data-cursor="hover"
    >
      <motion.span style={{ x: useTransform(sx, (v) => v * 0.18), y: useTransform(sy, (v) => v * 0.18) }} className={`${base} ${styles} ${className}`}>
        {children}
      </motion.span>
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} onClick={onClick} className="inline-flex" target="_blank" rel="noreferrer">
          {inner}
        </a>
      );
    }
    if (hardNav) {
      return (
        <a href={href} onClick={onClick} className="inline-flex">
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className="inline-flex">
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className="inline-flex">
      {inner}
    </button>
  );
}
