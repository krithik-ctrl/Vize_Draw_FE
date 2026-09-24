"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * TextShimmer — a light sweep travels across a muted gradient fill.
 * 21st.dev-style "text shimmer" used for eyebrows / micro-labels.
 */
export default function TextShimmer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-shimmer ${className}`}
    >
      {children}
    </motion.span>
  );
}
