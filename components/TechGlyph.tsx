import React from "react";

export type GlyphName =
  | "scattered"
  | "revision"
  | "search"
  | "comment"
  | "tribal"
  | "generic"
  | "upload"
  | "organize"
  | "markup"
  | "compare"
  | "signoff"
  | "workspace"
  | "measure"
  | "takeoff"
  | "collab"
  | "share"
  | "shield";

const paths: Record<GlyphName, React.ReactNode> = {
  scattered: (
    <>
      <rect x="3" y="7" width="11" height="14" rx="1" />
      <rect x="8.5" y="4" width="11" height="14" rx="1" opacity="0.55" />
      <path d="M6 11h5M6 14h5M6 17h3" opacity="0.8" />
    </>
  ),
  revision: (
    <>
      <path d="M7 3v18" />
      <circle cx="7" cy="6" r="2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M7 12h6a3 3 0 0 1 3 3v1" />
      <circle cx="16" cy="18" r="2" />
      <path d="M16 12v2" strokeDasharray="1.5 1.5" />
    </>
  ),
  search: (
    <>
      <path d="M3 4h8v8H3z" opacity="0.5" />
      <path d="M3 7.5h8M7 4v8" opacity="0.5" />
      <circle cx="14" cy="14" r="4.5" />
      <path d="M17.5 17.5L21 21" />
    </>
  ),
  comment: (
    <>
      <path d="M4 5h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-3 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path d="M18 16.5l3 3M21 16.5l-3 3" opacity="0.9" />
    </>
  ),
  tribal: (
    <>
      <circle cx="12" cy="6" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="5" cy="17" r="2.2" />
      <circle cx="19" cy="17" r="2.2" />
      <path d="M10.5 8L6.5 15M13.5 8l4 7" strokeDasharray="1.5 2" opacity="0.7" />
    </>
  ),
  generic: (
    <>
      <path d="M6 3h7l5 5v13H6z" />
      <path d="M13 3v5h5" />
      <path d="M4 20L20 4" opacity="0.9" />
    </>
  ),
  upload: (
    <>
      <path d="M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" />
      <path d="M12 16V4M7.5 8.5L12 4l4.5 4.5" />
    </>
  ),
  organize: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 15.5h7M14 18.5h7M14 21h4" opacity="0.85" />
    </>
  ),
  markup: (
    <>
      <path d="M4 4h10l4 4v3" />
      <path d="M14 4v4h4" />
      <path d="M19.5 12.5l2 2-6.5 6.5-2.6.6.6-2.6z" />
    </>
  ),
  compare: (
    <>
      <rect x="3" y="6" width="11" height="12" rx="1" />
      <rect x="10" y="6" width="11" height="12" rx="1" opacity="0.6" />
      <path d="M12 4v16" strokeDasharray="2 2" />
    </>
  ),
  signoff: (
    <>
      <circle cx="12" cy="10" r="6.5" />
      <path d="M9 10l2 2 4-4" />
      <path d="M8.5 15.5L7 21l5-2.2L17 21l-1.5-5.5" />
    </>
  ),
  workspace: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M8 4v16" />
      <path d="M3 8h18" />
      <path d="M11 12h7M11 15h4" opacity="0.8" />
      <path d="M5 11h1.5M5 14h1.5" opacity="0.7" />
    </>
  ),
  measure: (
    <>
      <rect x="2" y="9" width="20" height="6" rx="1" />
      <path d="M6 9v3M10 9v2.2M14 9v3M18 9v2.2" />
      <path d="M3 5.5h18" strokeDasharray="0.1 0" opacity="0.7" />
      <path d="M3 4.5v2M21 4.5v2" opacity="0.7" />
    </>
  ),
  takeoff: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M7.5 8l1.4 1.4L11.5 7" />
      <path d="M7.5 14l1.4 1.4L11.5 13" />
      <path d="M13.5 8.2h3.5M13.5 14.2h3.5" opacity="0.85" />
    </>
  ),
  collab: (
    <>
      <circle cx="8.5" cy="8" r="3" />
      <path d="M3.5 18a5 5 0 0 1 10 0" />
      <circle cx="16.5" cy="9" r="2.4" opacity="0.65" />
      <path d="M13.5 18a4 4 0 0 1 7.5-1.9" opacity="0.65" />
    </>
  ),
  share: (
    <>
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="18" cy="6" r="2.6" />
      <circle cx="18" cy="18" r="2.6" />
      <path d="M8.3 10.8l7.4-3.5M8.3 13.2l7.4 3.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 5-3.4 8.4-7 10-3.6-1.6-7-5-7-10V6z" />
      <path d="M9 11.5l2 2 4-4" />
    </>
  ),
};

export default function TechGlyph({
  name,
  className = "",
  strokeWidth = 2,
}: {
  name: GlyphName;
  className?: string;
  strokeWidth?: number;
}) {
  const gid = `tg-${name}`;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`${gid}-g`} x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a5f0f2" />
          <stop offset="60%" stopColor="#6fcfd1" />
          <stop offset="100%" stopColor="#4ebabd" />
        </linearGradient>
        <filter id={`${gid}-f`} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="1.2" floodColor="#4ebabd" floodOpacity="0.65" />
        </filter>
      </defs>
      <g stroke={`url(#${gid}-g)`} strokeWidth={strokeWidth} filter={`url(#${gid}-f)`}>
        {paths[name]}
      </g>
    </svg>
  );
}
