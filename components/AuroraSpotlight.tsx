"use client";

import { motion } from "framer-motion";

/**
 * AuroraSpotlight — layered aurora blobs + a conic spotlight beam and a
 * blueprint grid, masked into a soft ellipse. Drop behind hero content.
 * 21st.dev "Spotlight" / "Aurora background" inspired, themed to blueprint.
 */
export default function AuroraSpotlight({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      {/* blueprint grid masked into ellipse */}
      <div className="absolute inset-0 bp-grid opacity-60 radial-fade" />
      <div className="absolute inset-0 dot-grid opacity-30 radial-fade" />

      {/* conic spotlight beam from top */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0.6 }}
        animate={{ opacity: 0.5, scaleY: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-40 left-1/2 h-[680px] w-[1100px] -translate-x-1/2 origin-top"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 0%, transparent 42%, rgba(77,124,254,0.16) 50%, transparent 58%)",
          filter: "blur(8px)",
        }}
      />

      {/* aurora blobs */}
      <div className="aurora-blob absolute left-[8%] top-[6%] h-[420px] w-[420px] rounded-full bg-blueprint/20 blur-[130px]" />
      <div
        className="aurora-blob absolute right-[4%] top-[24%] h-[360px] w-[360px] rounded-full bg-cyan/15 blur-[120px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="aurora-blob absolute left-1/2 top-[2%] h-[300px] w-[640px] -translate-x-1/2 rounded-full bg-blueprint/10 blur-[150px]"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}
