# VizeDraw — Next.js recreation

A faithful, fully-animated recreation of the VizeDraw marketing site (a workspace for technical drawings, by Zenitude), rebuilt in **Next.js App Router** with a premium, motion-driven UX.

## Getting started

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

To build for production:

```bash
npm run build
npm run start
```

## Tech & motion stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — custom blueprint/drafting design system
- **Framer Motion** — primary animation layer (reveals, magnetic buttons, 3D tilt, accordions, carousels, page-header word reveals)
- **GSAP + ScrollTrigger** — synced with smooth scroll
- **Lenis** — smooth scrolling (respects `prefers-reduced-motion`)
- **React Spring & Motion One** — included in the stack for physics-based interactions
- `next/font` — Space Grotesk (display), Inter (body), JetBrains Mono (technical labels)

## Design language

The site is themed as a **drafting table**: a deep blueprint-navy canvas, blueprint-blue and markup-orange accents, a drafting-reticle custom cursor, dimension-rule dividers that draw in on scroll, and a signature interactive "live drawing sheet" hero (`components/HeroCanvas.tsx`).

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/features` | Feature index |
| `/features/[slug]` | 9 feature detail pages (workspace, markup, scale, revisions, takeoff, collaboration, sharing, pdf-tools, enterprise) |
| `/product` | Product overview |
| `/pricing` | Pricing (individual/team · USD/INR toggles) |
| `/use-cases` | Use cases (with anchors) |
| `/resources` | Resources |
| `/company` | About Zenitude |
| `/request-demo` | Demo request form |
| `/contact` | Contact form |
| `/construction` | Construction workflows |
| `/manufacturing` | Manufacturing workflows |

All page copy is recreated verbatim from the source site and centralized in `lib/content.ts`.

## Enhancement pass — premium look & feel

This build layers a set of **21st.dev / magicui-style** components and deeper Framer Motion choreography over the original, while keeping every word of home-page copy verbatim from vizedraw.com.

New components (in `components/`, with the spotlight tile in `components/ui/`):

| Component | Pattern | Where it's used |
| --- | --- | --- |
| `AuroraSpotlight` | Aurora background + conic spotlight beam, masked into the hero | Home hero backdrop |
| `WordReveal` | Kinetic typography — per-word masked rise | Hero headline |
| `ScreenshotFrame` | Glass browser chrome + 3D pointer tilt, ambient glow, scan-line, corner reticles | Category & live-workspace shots |
| `CapabilityBento` + `ui/BentoCard` | Bento-box grid with a cursor-following card spotlight | Capabilities section |
| `StatBand` + `NumberTicker` | Count-up figures that animate once in view | Stats band under the workspace shot |
| `Marquee` | Seamless, edge-masked, hover-pausing scroller | Industries strip |
| `TextShimmer` | Travelling light sweep over a muted gradient | Micro-eyebrows |

The two product screenshots (`public/images/home/home.svg`, `home1.svg`) are hand-built SVG mockups of the VizeDraw workspace, carrying the site's verbatim UI labels (revision history Rev A/B/C, pin markups, sheet status, "Sign off & release", the revision-compare inspector with "Pixel diff", "1 : 100 (calibrated)", "Needs RFI", and the `app.vizedraw.com · Maple Tower · Structural IFC` chrome).

Design-system additions live at the bottom of `app/globals.css` (aurora drift, conic borders, card glow, beam sweep, shimmer) and in `tailwind.config.ts` (`ping-ring`, `border-beam`, `aurora-pan` keyframes). Everything respects `prefers-reduced-motion`, keeps visible keyboard focus, and uses SVG icons (no emoji) — per the ui-ux-pro-max pre-delivery checklist.

`next.config.mjs` enables `dangerouslyAllowSVG` so `next/image` can serve the local SVG mockups (sandboxed CSP, attachment disposition).


## Notes

- **Testimonials** are clearly framed as *representative personas* (the original site has none) — they were added per the build brief and use no real named people or companies.
- In-app launch links point to `http://localhost:5173` and billing routes, matching the source site's app handoff.
- All forms are front-end demonstrations with animated success states (no backend wired up).
- No `localStorage`/`sessionStorage` is used anywhere.
