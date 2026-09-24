import type { Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_SOFT = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const stagger = (delay = 0, each = 0.07): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: each, delayChildren: delay } },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const spring = { type: "spring", stiffness: 320, damping: 28, mass: 0.8 } as const;
export const springSoft = { type: "spring", stiffness: 140, damping: 20, mass: 1 } as const;
