import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070B16",
        "ink-2": "#0B1120",
        surface: "#0E1626",
        "surface-2": "#131D31",
        line: "#1E2A42",
        vellum: "#ECEFF4",
        graphite: "#8A94A6",
        "graphite-2": "#5E6A80",
        blueprint: "#4ebabd",
        "blueprint-soft": "#6fcfd1",
        cyan: "#2fa3a6",
        markup: "#FF6B4A",
        amber: "#FFB23E",
      },
      fontFamily: {
        display: ["SF Pro Display", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["SF Pro Display", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        container: "1240px",
      },
      transitionTimingFunction: {
        physics: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-x-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-pin": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.25)", opacity: "0.7" },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
        "shiny-text": {
          "0%": { "background-position": "calc(-100% - 120px) 0" },
          "100%": { "background-position": "calc(100% + 120px) 0" },
        },
        "spotlight-drift": {
          "0%, 100%": { transform: "translate(-6%, -4%) scale(1)" },
          "50%": { transform: "translate(6%, 4%) scale(1.08)" },
        },
        "aurora-pan": {
          "0%, 100%": { transform: "translateX(-8%)" },
          "50%": { transform: "translateX(8%)" },
        },
        "grid-sweep": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "12%, 88%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        "ping-ring": {
          "0%": { transform: "scale(0.6)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        "marquee-x": "marquee-x 38s linear infinite",
        "marquee-x-reverse": "marquee-x-reverse 42s linear infinite",
        "pulse-pin": "pulse-pin 2.4s ease-in-out infinite",
        "shiny-text": "shiny-text 4.2s ease-in-out infinite",
        "spotlight-drift": "spotlight-drift 14s ease-in-out infinite",
        "aurora-pan": "aurora-pan 16s ease-in-out infinite",
        "grid-sweep": "grid-sweep 7s ease-in-out infinite",
        "ping-ring": "ping-ring 2.6s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
