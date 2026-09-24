"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/content";
import Logo from "./Logo";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-[200] flex justify-center px-4 pt-3"
      >
        <div
          className={`flex w-full max-w-container items-center justify-between rounded-2xl px-3 py-2 transition-all duration-500 ${
            scrolled ? "glass" : "border border-transparent bg-transparent"
          }`}
        >
          <div className="pl-2">
            <Logo />
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-cursor="hover"
                  className="group relative rounded-full px-3.5 py-2 text-sm text-graphite transition-colors hover:text-vellum"
                >
                  <span className={active ? "text-vellum" : ""}>{item.label}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] ring-1 ring-blueprint/25"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <MagneticButton href="https://app.vizedraw.com/" external variant="ghost" className="px-4 py-2.5">
              Sign In
            </MagneticButton>
            <MagneticButton href="https://app.vizedraw.com/signup" external className="px-5 py-2.5">
              Get Started
            </MagneticButton>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="relative grid h-10 w-10 place-items-center rounded-xl border border-line lg:hidden"
            data-cursor="hover"
          >
            <span className="flex flex-col gap-[5px]">
              <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="h-[1.5px] w-5 bg-vellum" />
              <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="h-[1.5px] w-5 bg-vellum" />
              <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="h-[1.5px] w-5 bg-vellum" />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              <nav className="flex flex-col gap-1">
                {[{ label: "Home", href: "/" }, ...nav].map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-line/60 py-4 font-display text-3xl font-medium tracking-tight text-vellum"
                    >
                      <span className="font-mono text-xs text-blueprint-soft">{String(i).padStart(2, "0")}</span>
                      <span className="ml-4">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col gap-3"
              >
                <MagneticButton href="https://app.vizedraw.com/" external variant="outline" className="w-full">
                  Sign In
                </MagneticButton>
                <MagneticButton href="https://app.vizedraw.com/signup" external className="w-full">
                  Get Started
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
