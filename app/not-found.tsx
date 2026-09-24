import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden px-5">
      <div className="absolute inset-0 -z-10 bp-grid opacity-40 radial-fade" />
      <div className="text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-graphite-2">
          Sheet not found
        </span>
        <h1 className="mt-4 font-display text-6xl font-semibold tracking-tightest text-vellum sm:text-8xl">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-graphite">
          This page isn&apos;t in the drawing set. Let&apos;s get you back to a
          sheet that exists.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="/">Back to home</MagneticButton>
          <MagneticButton href="/features" variant="outline">
            Browse features
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
