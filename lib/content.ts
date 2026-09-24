// All site content, structured for reuse across pages.
// Recreated from the VizeDraw site structure.

export const nav = [
  { label: "Features", href: "/features" },
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
];

// ---- Home page copy (verbatim from vizedraw.com) ----
export const home = {
  eyebrow: "By Zenitude",
  h1: "A workspace for",
  h1Highlight: "technical drawings",
  sub: "VizeDraw helps construction, manufacturing, and engineering teams organize drawing sets, run review markups, compare revisions, and export quantities in one place.",
  note: "For teams that work from drawings every day, not occasional PDF uploads.",
  heroChip: "app.vizedraw.com · Maple Tower · Structural IFC",
  heroTag: "Drawing review",
  category: {
    label: "The category",
    title: "PDF viewers are built for pages. VizeDraw is built for drawings.",
    body: "Drawings are not ordinary documents. They carry revisions, sheet numbers, dimensions, markups, and decisions that get lost in a plain PDF viewer. Teams need more than open, zoom, comment, and save.",
    chip: "app.vizedraw.com · revision compare & markups",
    tag: "Drawing inspector",
  },
  problem: {
    label: "The problem",
    title: "PDF tools were not built for drawings.",
    body: "When drawings are treated like ordinary PDFs, things slip. Delays, rework, and missed details follow.",
  },
  capabilities: {
    label: "Capabilities",
    title: "What VizeDraw includes",
    body: "The full feature set for construction, manufacturing, and engineering workflows.",
  },
  useCases: {
    label: "Use cases",
    title: "Built for the teams that live in drawings",
    body: "Construction and manufacturing workflows differ, but both depend on clear, current, searchable technical drawings.",
  },
  workflow: {
    label: "Workflow",
    title: "How teams use VizeDraw",
  },
  beforeAfter: {
    label: "Before & after",
    title: "What changes when drawings get a real workspace",
  },
  enterprise: {
    label: "Enterprise",
    title: "Designed for teams where drawings are not just documents",
    body: "Built for organizations where technical drawings are business-critical assets, not occasional attachments.",
  },
  cta: {
    title: "Stop forcing drawings into generic PDF workflows",
    body: "Give your team a workspace built for technical drawings.",
  },
  faq: { label: "FAQ", title: "Common questions" },
};

export const industries = [
  "Construction",
  "Manufacturing",
  "Engineering",
  "Fabrication",
  "Precast & Steel",
  "MEP Coordination",
  "Quality & Inspection",
  "Preconstruction",
];

// Workflow-shaped stats (representative of drawing-review workflows)
type HomeStat = { value: number; prefix?: string; suffix?: string; raw?: string; label: string; sub: string };
export const homeStats: HomeStat[] = [
  { value: 15, suffix: "", label: "Markup tools", sub: "Layers, bulk actions, pin comments" },
  { value: 100, suffix: "%", label: "Sheet-aware", sub: "Revisions, sheet numbers, disciplines" },
  { value: 1, prefix: "1 : ", suffix: "", label: "Calibrated scale", sub: "Auto-detect & sketch-to-scale", raw: "1:100" },
  { value: 9, suffix: "", label: "Core capabilities", sub: "From workspace to enterprise access" },
];

export const capabilities = [
  { title: "Drawing Workspace", blurb: "Viewer built for technical drawing sets.", href: "/features/workspace" },
  { title: "Revision management", blurb: "Upload, switch, compare sheets, and run review workflow.", href: "/features/revisions" },
  { title: "Review Markups", blurb: "15 tools, layers, bulk actions, pin comments.", href: "/features/markup" },
  { title: "Scale & Measurement", blurb: "Auto-detect, calibrate, and sketch-to-scale.", href: "/features/scale" },
  { title: "Takeoff Profiles", blurb: "Save searches, price profiles, export CSV.", href: "/features/takeoff" },
  { title: "Team Collaboration", blurb: "Presence, cursors, chat, notifications.", href: "/features/collaboration" },
  { title: "Sharing & access", blurb: "Org roles, per-user shares, and public links.", href: "/features/sharing" },
  { title: "PDF tools", blurb: "Page management, flatten, headers, and OCR.", href: "/features/pdf-tools" },
  { title: "Enterprise Access", blurb: "Multi-tenant RBAC, audit logs, and compliance.", href: "/features/enterprise" },
];

export const problems = [
  { title: "Scattered drawing sets", body: "Drawing sets end up in folders, email threads, and random PDF bundles. Nobody can tell which file is current." },
  { title: "Manual revision tracking", body: "Revision tracking becomes manual and error-prone when teams rely on filenames and memory." },
  { title: "Slow sheet search", body: "Teams waste time searching across sheets and versions instead of finding answers in seconds." },
  { title: "Comments lose context", body: "Review comments lose context when they live in email threads disconnected from the sheet." },
  { title: "Tribal knowledge", body: "Estimators and engineers rely on memory because sheet status and notes are not written down anywhere useful." },
  { title: "Generic PDF mindset", body: "Generic PDF tools treat drawings like any other document. They skip sheet numbers, revisions, and review context." },
];

export const workflow = [
  { n: "01", title: "Upload drawing sets", body: "Bring PDF drawing packages into a structured workspace, not another shared drive folder." },
  { n: "02", title: "Organize by project, package, revision, or discipline", body: "Group sheets the way your team thinks: by trade, system, package, or review status." },
  { n: "03", title: "Review and mark up drawings", body: "Structured markups and comments stay attached to the sheet, not lost in email." },
  { n: "04", title: "Search across sheets and drawing information", body: "Find sheet numbers, notes, and metadata without opening every file manually." },
  { n: "05", title: "Compare revisions", body: "See what changed between versions before approvals, RFIs, or fabrication release." },
  { n: "06", title: "Sign off and release", body: "Move from review to approval with a clear record of what changed and who signed off." },
];

export const beforeAfter = {
  before: {
    title: "Generic PDF workflow",
    items: [
      "Drawings scattered across email, folders, and PDF bundles",
      "Revision status tracked manually in spreadsheets",
      "Comments disconnected from the sheet they refer to",
      "Search means opening files one by one",
      "Review progress invisible to project leaders",
      "Generic PDF tools with no drawing structure",
    ],
  },
  after: {
    title: "VizeDraw workspace",
    items: [
      "One workspace per project with organized drawing sets",
      "Revision awareness built into every sheet",
      "Markups and comments anchored to the drawing",
      "Search across sheets, notes, and metadata",
      "Clear review status and progress tracking",
      "Built for technical drawing workflows",
    ],
  },
};

export const enterprisePillars = [
  { title: "Business-critical assets", body: "Drawings drive bids, fabrication, quality, and field decisions. VizeDraw treats them accordingly." },
  { title: "Multi-team coordination", body: "Built for cross-functional review across estimators, engineers, PMs, subs, and quality teams." },
  { title: "Ready for larger teams", body: "Organization-scoped access, structured workflows, and audit-friendly review patterns for teams that need them." },
  { title: "Practical, not promotional", body: "Focused on workflow improvement you can verify in a demo, not buzzwords on a landing page." },
];

export const homeFaq = [
  { q: "Is VizeDraw a replacement for Adobe Acrobat?", a: "For teams that use PDFs mainly to manage and review technical drawings, VizeDraw replaces generic PDF workflows with a workspace built for sheets." },
  { q: "Is VizeDraw only for construction?", a: "No. It is useful for any team that handles technical drawings as a core workflow, including construction, manufacturing, fabrication, engineering, and project teams." },
  { q: "Does VizeDraw work with PDF drawings?", a: "Yes. VizeDraw works with PDF drawing sets and adds structure, review, revision tracking, and organization around them." },
  { q: "Who should use VizeDraw?", a: "Estimators, engineers, project managers, construction teams, manufacturing teams, fabrication teams, quality teams, and any group that regularly works with technical drawings." },
  { q: "Is this an AI product?", a: "VizeDraw is a drawing workspace for review and revision control. Pro plans include optional AI-assisted comparison and readiness tools — the core product is sheet-by-sheet review." },
];

// ---- Testimonials (representative personas, not real named endorsements) ----
export const testimonials = [
  { quote: "Revision tracking used to live in a spreadsheet and three peoples' heads. Now every sheet tells me which rev I am on before I mark anything up.", name: "Lead Estimator", role: "Regional general contractor" },
  { quote: "Pin comments land on the exact grid location. Coordination meetings got shorter because nobody is hunting for what a note refers to.", name: "Project Engineer", role: "Design-build firm" },
  { quote: "Calibrated takeoff profiles export straight to a schedule. The quantities respect scale and overrides, so the bid math just holds up.", name: "Preconstruction Manager", role: "Self-perform contractor" },
  { quote: "Supplier submittals come back through a controlled link. We review the versioned response against the source print without an email chain.", name: "Quality Lead", role: "Precision manufacturer" },
  { quote: "Drawing overlay with pixel diff caught a beam change before fabrication release. That one catch paid for the year.", name: "Structural Reviewer", role: "Steel fabricator" },
];

// ---- Feature detail pages ----
export type FeatureDetail = {
  slug: string;
  eyebrow: string;
  title: string;
  lede: string;
  sectionTitle: string;
  blocks: { title: string; body: string; bullets: string[]; usedBy: string }[];
  prev?: { label: string; slug: string };
  next?: { label: string; slug: string };
};

export const featureDetails: FeatureDetail[] = [
  {
    slug: "workspace",
    eyebrow: "Drawing workspace",
    title: "Drawing workspace",
    lede: "VizeDraw opens technical drawing sets in a viewer built for sheets, not a generic document tab. Navigation, thumbnails, zoom, and panel layout support sheet-by-sheet review on large packages.",
    sectionTitle: "A workspace built for sheet-by-sheet work",
    blocks: [
      {
        title: "Project & drawing-set organization",
        body: "Structure work the way your team thinks: projects, packages, disciplines, and drawing sets, not loose PDF folders.",
        bullets: [
          "Project folders with favorites and quick access from the dashboard",
          "Unsorted bucket for new uploads, then file into the right project",
          "Document thumbnails so teams scan packages before opening",
          "Visibility controls: org-wide, private, or restricted per-document sharing",
        ],
        usedBy: "Project managers, Document controllers, Lead estimators",
      },
      {
        title: "Viewer layout",
        body: "Thumbnails, canvas, and a tabbed right rail for tools, markups, comments, and export. Familiar layout without the clutter.",
        bullets: [
          "Resizable thumbnail panel with lazy-loaded page previews",
          "Tabbed right panel: Compare, Search, Tools, Markups, Comments, Chat, Export, Takeoff, Revision management",
          "Floating markup toolbar and per-page color legend",
          "Light and dark themes for long review sessions",
        ],
        usedBy: "Reviewers, Field engineers, Office estimators",
      },
      {
        title: "Smooth zoom & navigation",
        body: "Precision navigation for large format sheets, fit page, fit width, actual size, and smooth multiplicative zoom.",
        bullets: [
          "Toolbar and wheel zoom with snap-to-100% behavior",
          "Pan via spacebar or middle-mouse from anywhere on the canvas",
          "Search-hit spotlight jumps scroll the target region into view",
          "Page manager for insert, delete, reorder, and custom labels",
        ],
        usedBy: "Detail reviewers, QA teams, Fabrication coordinators",
      },
    ],
    next: { label: "Review markups", slug: "markup" },
  },
  {
    slug: "markup",
    eyebrow: "Review markups",
    title: "Review markups",
    lede: "Fifteen markup tools with persistent properties, undo/redo, autosave, and a full markups panel, so review comments stay on the sheet instead of in email.",
    sectionTitle: "Structured markups that stay on the sheet",
    blocks: [
      {
        title: "Full markup toolset",
        body: "Every tool a technical reviewer expects, arrows, clouds, dimensions, leaders, stamps, and more, with calibrated length labels when scale is set.",
        bullets: [
          "Arrow, rectangle, ellipse, cloud, polyline, text, highlighter, pen",
          "Dimension, radius, angle, leader, stamp, and photo markups",
          "Select with shift-click, marquee multi-select, and group drag",
          "Resize handles for rect and ellipse shapes",
        ],
        usedBy: "Design reviewers, Subcontractors, QC inspectors",
      },
      {
        title: "Markups panel & layers",
        body: "Filter, search, bulk-edit, and export markups from a dedicated panel, with layer visibility and saved filter presets.",
        bullets: [
          "Filter by type, status, text search, and saved chip presets",
          "Bulk select, delete, export JSON, duplicate to another page",
          "Layer manager: show/hide markup layers on canvas and in list",
          "Click any row to jump to the markup on the sheet",
        ],
        usedBy: "Lead reviewers, Document controllers",
      },
      {
        title: "Pin comments & unified feed",
        body: "Drop pin comments directly on the sheet. A unified comments feed filters by author, status, and markup, with inline resolve.",
        bullets: [
          "Pin tool (keyboard shortcut N) for location-specific threads",
          "Comments feed merges pin threads and markup notes",
          "Resolve/reply without leaving the viewer",
          "Real-time updates when collaborators post",
        ],
        usedBy: "Project teams, Subcontractor coordination",
      },
    ],
    prev: { label: "Drawing workspace", slug: "workspace" },
    next: { label: "Scale & measurement", slug: "scale" },
  },
  {
    slug: "scale",
    eyebrow: "Scale & measurement",
    title: "Scale & measurement",
    lede: "Set scale manually, calibrate from a known dimension, or let VizeDraw auto-detect from the title block. Every length callout respects the active scale, with per-markup overrides when local scale differs.",
    sectionTitle: "Calibrated measurements on real drawings",
    blocks: [
      {
        title: "Three ways to set scale",
        body: "Pick architectural scale, calibrate from two points, or auto-detect from the drawing title block on open.",
        bullets: [
          "Manual scale picker for standard architectural ratios",
          "Two-click calibration: measure a known dimension, enter real length",
          "Auto-detection scans title-block region across pages",
          "Scale applied automatically so dimension labels appear on arrows and polylines",
        ],
        usedBy: "Estimators, Field takeoff, Structural reviewers",
      },
      {
        title: "Band stamping",
        body: "Apply the same approval stamp across a page range in one action, with date, user, and page tokens.",
        bullets: [
          "Template tokens: {date}, {user}, {page}, {total}",
          "Page range grammar: 1-3,5,8-10 or all pages",
          "Configurable stamp color",
          "Stamps persist as markups and export with flatten",
        ],
        usedBy: "Approval workflows, IFC release packages",
      },
    ],
    prev: { label: "Review markups", slug: "markup" },
    next: { label: "Revision management", slug: "revisions" },
  },
  {
    slug: "revisions",
    eyebrow: "Revision management",
    title: "Revision management",
    lede: "Upload new revisions without losing history. Switch between versions, promote to latest, and compare sheets side-by-side, with automatic recovery if a revision is removed.",
    sectionTitle: "Always know which revision you are looking at",
    blocks: [
      {
        title: "Revision management",
        body: "Every document supports a revision chain. Upload Rev B without overwriting Rev A; markups and comments scope to the revision you are viewing.",
        bullets: [
          "Revision management page: upload, workflow, sheet diff, and registry",
          "Quick switch from left navigator or right-rail panel",
          "Promote, edit labels, and delete from the timeline",
          "Automatic fallback if a pinned revision is deleted",
        ],
        usedBy: "Document controllers, Project engineers",
      },
      {
        title: "Drawing overlay & pixel diff",
        body: "Compare two pages or two revisions with multiply, difference, or side-by-side modes, plus pixel-level change detection.",
        bullets: [
          "Compare arbitrary revisions of the same document",
          "2-point alignment UI for offset sheets",
          "Pixel diff highlights changed regions as overlays",
          "Export composite as PNG for records",
        ],
        usedBy: "IFC vs bid set review, Engineering change review",
      },
      {
        title: "Bookmarks & table of contents",
        body: "Native PDF bookmarks plus custom bookmarks with indent levels. Bake a clickable TOC PDF for handoff packages.",
        bullets: [
          "Add, rename, indent, and delete custom bookmarks",
          "Click to jump to any bookmarked page",
          "Bake bookmarks into a downloadable TOC PDF",
          "Hierarchy preserved in generated TOC",
        ],
        usedBy: "Submittal packages, Owner handoffs",
      },
    ],
    prev: { label: "Scale & measurement", slug: "scale" },
    next: { label: "Takeoff & quantities", slug: "takeoff" },
  },
  {
    slug: "takeoff",
    eyebrow: "Takeoff & quantities",
    title: "Takeoff & quantities",
    lede: "Connect search profiles to quantity workflows. Export schedules and quantity-link spreadsheets that respect scale, overrides, and profile pricing.",
    sectionTitle: "From highlighted lines to exportable quantities",
    blocks: [
      {
        title: "Takeoff profiles",
        body: "Named profiles store search hits as repeatable quantity sets, with color, pricing fields, and activation highlighting.",
        bullets: [
          "Create profiles from live search results",
          "Unit price and unit label per profile (lf, sf, ea)",
          "Expand entries; rename and delete with permissions",
          "CSV export per profile",
        ],
        usedBy: "Estimators, Preconstruction",
      },
      {
        title: "Schedule & quantity-link export",
        body: "Export flattened markups to PDF, or generate XLSX schedules with dimensions, pitches, and profile totals.",
        bullets: [
          "Flattened PDF with all markups burned in",
          "Selected pages only option on export",
          "Schedule XLSX: page, type, label, flat/sloped lengths",
          "Quantity-link XLSX ties profile totals to export",
        ],
        usedBy: "Bid teams, Fabrication handoff",
      },
    ],
    prev: { label: "Revision management", slug: "revisions" },
    next: { label: "Team collaboration", slug: "collaboration" },
  },
  {
    slug: "collaboration",
    eyebrow: "Team collaboration",
    title: "Team collaboration",
    lede: "Presence, remote cursors, follow-user mode, document chat, and realtime comment updates, so coordination stays on the drawing.",
    sectionTitle: "Review together without losing context",
    blocks: [
      {
        title: "Realtime presence & cursors",
        body: "See who is viewing the document, where their cursor is, and follow a colleague to their active page.",
        bullets: [
          "Avatar stack in the top bar shows active viewers",
          "Remote cursors labeled with user names",
          "Follow-user mode jumps to their page and tracks their cursor",
          "WebSocket-backed updates on connect",
        ],
        usedBy: "Distributed review teams, Design-build partners",
      },
      {
        title: "Document chat",
        body: "Tenant-scoped chat per document with edit, reactions, @mentions, and paginated history.",
        bullets: [
          "Post, edit, and soft-delete messages",
          "Emoji reactions and @mention autocomplete",
          "Paginated history with realtime new messages",
          "Separate from sheet-anchored pin comments",
        ],
        usedBy: "Project coordination, Remote plan review",
      },
      {
        title: "Notifications & inbox",
        body: "Bell dropdown for recent activity plus a full inbox page with filters for unread, mentions, and RFIs.",
        bullets: [
          "Notification bell with unread count",
          "Full /inbox page with mark-read",
          "Deep-link from notification to markup or comment",
        ],
        usedBy: "PMs tracking review progress",
      },
    ],
    prev: { label: "Takeoff & quantities", slug: "takeoff" },
    next: { label: "Sharing & access", slug: "sharing" },
  },
  {
    slug: "sharing",
    eyebrow: "Sharing & access",
    title: "Sharing & access",
    lede: "Multi-tenant organizations with role-based permissions, per-user document shares, and controlled public links for vendors and external reviewers.",
    sectionTitle: "Access controls for every drawing",
    blocks: [
      {
        title: "Organizations & roles",
        body: "Each customer is an isolated organization with Owner, Admin, Member, and Viewer roles, plus custom roles with granular permissions.",
        bullets: [
          "Multi-tenant data isolation enforced on every API call",
          "Invite members by email with role assignment",
          "Custom roles with tunable permission sets",
          "SuperAdmin support for platform operators",
        ],
        usedBy: "Enterprise IT, Multi-office contractors",
      },
      {
        title: "Per-user & public share links",
        body: "Grant view, comment, or edit access to specific users, or create tokenized public links with download, print, watermark, and expiry controls.",
        bullets: [
          "Document shares: view / comment / edit tiers",
          "Public links with configurable permissions and expiry",
          "Optional watermark and download/print restrictions",
          "Vendor upload portal via edit-permission links",
        ],
        usedBy: "Subcontractor coordination, Vendor submittals",
      },
    ],
    prev: { label: "Team collaboration", slug: "collaboration" },
    next: { label: "PDF tools", slug: "pdf-tools" },
  },
  {
    slug: "pdf-tools",
    eyebrow: "PDF tools",
    title: "PDF tools",
    lede: "Rotate, split, combine, compress, redact, OCR, and manage pages in-place, plus headers/footers and flatten-to-PDF for submittals.",
    sectionTitle: "Page-level operations without leaving the workspace",
    blocks: [
      {
        title: "Page management",
        body: "Insert blank pages, delete pages, reorder, and set custom page labels, all from the Page Manager modal.",
        bullets: [
          "Insert blank pages at any index",
          "Delete and reorder with label remap on the backend",
          "Custom page labels (e.g. A-101, iv) per sheet",
          "Quick rotate current page from the top bar",
        ],
        usedBy: "Document prep, Combined submittals",
      },
      {
        title: "Document actions",
        body: "Run PDF operations from the Controls tab: flatten markups, apply headers/footers, and open drawing overlay.",
        bullets: [
          "Flatten markups to downloadable PDF (server original untouched)",
          "Headers and footers modal with apply + download",
          "OCR fallback when vector text is unavailable",
          "Soft delete with trash and restore",
        ],
        usedBy: "Submittal prep, Record sets",
      },
    ],
    prev: { label: "Sharing & access", slug: "sharing" },
    next: { label: "Enterprise & security", slug: "enterprise" },
  },
  {
    slug: "enterprise",
    eyebrow: "Enterprise & security",
    title: "Enterprise & security",
    lede: "Audit logs, malware scanning on upload, backup CLI, and permission-gated operations for teams that need operational rigor.",
    sectionTitle: "Built for teams where drawings are business-critical",
    blocks: [
      {
        title: "Security & compliance posture",
        body: "Tenant isolation, permission checks on every endpoint, and optional malware scanning before files touch storage.",
        bullets: [
          "JWT auth with rotating refresh tokens",
          "Scoped document access: org, private, restricted + share tiers",
          "Pluggable malware scan (noop default, ClamAV optional)",
          "Audit log for member, role, and document events",
        ],
        usedBy: "Enterprise IT, Security review",
      },
      {
        title: "Operational tooling",
        body: "Backup CLI for Postgres + local storage, with manifest and SHA-256 integrity checks.",
        bullets: [
          "python -m scripts.backup for snapshot backups",
          "pg_dump + storage tree copy + manifest.json",
          "Designed for cron/systemd scheduled retention",
        ],
        usedBy: "DevOps, Platform administrators",
      },
    ],
    prev: { label: "PDF tools", slug: "pdf-tools" },
  },
];

export const featureNav = featureDetails.map((f) => ({ label: f.eyebrow, slug: f.slug }));

// ---- Use cases ----
export const useCases = [
  {
    title: "Construction",
    body: "Contractors, subcontractors, estimators, project managers, and construction engineering teams.",
    items: ["Bid drawing review", "IFC drawing review", "Drawing package organization", "Revision tracking", "Subcontractor coordination", "RFI and review preparation", "Fabrication drawing review"],
    link: { label: "Learn more", href: "/construction" },
  },
  {
    title: "Manufacturing",
    body: "Engineering, production, quality, procurement, and fabrication teams.",
    items: ["Manufacturing drawing organization", "Part and assembly drawing review", "Revision management", "Quality inspection support", "Supplier drawing review", "Engineering change understanding", "Production document clarity"],
    link: { label: "Learn more", href: "/manufacturing" },
  },
  {
    title: "Engineering",
    body: "Design engineers, structural/MEP coordinators, and technical leads reviewing issued-for-construction sets.",
    items: ["Design review markups and comments", "Revision comparison before release", "Scale-calibrated dimension check", "Cross-discipline sheet search", "Drawing overlay for coordination"],
    link: { label: "Related features", href: "/features/markup" },
  },
  {
    title: "Fabrication",
    body: "Shop drawing reviewers, detailers, and fabrication coordinators translating design intent to production.",
    items: ["Shop drawing vs design drawing compare", "Takeoff profiles for material quantities", "Markup status workflow", "Vendor response packages via share links"],
    link: { label: "Related features", href: "/features/takeoff" },
  },
  {
    title: "Estimating & preconstruction",
    body: "Estimators and preconstruction teams who search member profiles and quantities across large bid sets.",
    items: ["Profile search with line highlighting", "Takeoff profile save and CSV export", "Sketch-to-scale overrides", "Global search across org documents"],
    link: { label: "Related features", href: "/features/takeoff" },
  },
  {
    title: "Project teams",
    body: "Project managers and document controllers responsible for review progress and submittal packages.",
    items: ["Custom review statuses per document", "RFI lifecycle from comments", "Team presence and follow-user review", "Bookmark TOC for submittal PDFs"],
    link: { label: "Related features", href: "/features/collaboration" },
  },
];

export const constructionWorkflows = [
  { title: "Bid drawing review", body: "Upload bid sets into project folders. Search across sheets for scope items, mark up clarifications, and export quantity schedules without jumping between files." },
  { title: "IFC package organization", body: "Structure issued-for-construction packages by discipline. Track revision B vs A, compare sheets with drawing overlay, and stamp approval across page ranges." },
  { title: "Subcontractor coordination", body: "Share view or comment access with subs. Public links with watermark and expiry for controlled external review. Vendor upload portal for response packages." },
  { title: "RFI preparation", body: "Pin comments on the exact grid location. Promote to formal RFIs with auto-numbering. Document review states show submitted vs reviewed-with-comments." },
  { title: "Revision tracking", body: "Upload new revisions without overwriting history. Switch versions in the viewer, compare with pixel diff, and promote the current revision to latest." },
  { title: "Fabrication drawing review", body: "Review shop drawings against design intent with overlay compare. Calibrated measurements and takeoff profiles support quantity verification." },
];

export const manufacturingWorkflows = [
  { title: "Manufacturing drawing organization", body: "Group part prints, assembly drawings, and weld details by product line or work order. Custom page labels match shop numbering (A-101, rev C) instead of PDF page order." },
  { title: "Part & assembly review", body: "Markup tools with scale calibration support dimension verification. Layers and markups panel filters help QA focus on open review items." },
  { title: "Revision management", body: "Engineering change packages upload as new revisions. Compare old vs new with multiply or pixel diff before releasing to production." },
  { title: "Quality inspection support", body: "Pin comments at inspection points. Status chips track approved vs for-review markups. Export flattened PDF for audit records." },
  { title: "Supplier drawing review", body: "Controlled share links let suppliers upload response packages. Internal team reviews versioned vendor submissions against the source drawing." },
  { title: "Production document clarity", body: "Bookmarks and bake-to-TOC export create handoff PDFs with clickable navigation. Band stamps mark released page ranges." },
];

// ---- Pricing ----
export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    blurb: "Try VizeDraw on your own drawings, with a couple of collaborators.",
    price: "$0",
    period: "/year",
    sub: "per user",
    cta: "Get started",
    featured: false,
    features: ["Up to 3 collaborators", "100 MB storage", "2 active projects", "20 drawing sheets", "7-day version history", "Manual drawing comparison", "Watermarked exports"],
  },
  {
    id: "starter",
    name: "Starter",
    blurb: "Drawing collaboration for growing teams. AI available as an add-on.",
    price: "$88",
    period: "/year",
    sub: "per user",
    cta: "Choose plan",
    featured: false,
    features: ["Up to 15 collaborators", "50 GB storage", "25 active projects", "500 drawing sheets", "30-day version history", "External collaboration", "Watermark-free exports"],
  },
  {
    id: "pro",
    name: "Pro",
    blurb: "AI-assisted review, drawing comparison, and approval workflows.",
    price: "$188",
    period: "/year",
    sub: "per user",
    cta: "Choose plan",
    featured: true,
    badge: "Most popular",
    features: [
      "50 GB storage",
      "Unlimited active projects",
      "Unlimited drawing sheets",
      "1-year version history",
      "3,000 AI credits included",
      "AI assistance",
      "AI drawing comparison",
      "Markup extraction",
      "Automatic issue classification",
      "Approval workflows",
      "Audit trail exports",
      "Branded reports",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    blurb: "Custom limits, security, and dedicated support.",
    price: "Custom",
    period: "",
    sub: "",
    cta: "Contact sales",
    featured: false,
    features: [
      "Unlimited collaborators",
      "Custom branding",
      "API access",
      "SSO",
      "Priority support",
      "Custom storage & AI credits",
      "Custom RBAC permissions",
      "Security review & SLAs",
      "Manual invoicing",
      "Dedicated onboarding",
    ],
  },
];

export const pricingFaq = [
  { q: "Is billing monthly or annual?", a: "All VizeDraw plans are billed annually. This keeps pricing simple and predictable for teams." },
  { q: "What are AI credits?", a: "Pro plans include an annual pool of 3,000 AI credits per year used for drawing comparison, readiness scoring, revision risk reports, and markup extraction. You can top up with add-on packs anytime." },
  { q: "Can I add more storage or seats?", a: "Yes. Storage packs and additional AI credits are available as add-ons, and team plans can add seats. Enterprise plans get fully custom limits." },
  { q: "How does Enterprise work?", a: "Enterprise is contract-based with custom storage, AI credits, SSO, API access, custom RBAC permissions, manual invoicing, and dedicated support. Contact sales to set it up." },
  { q: "What happens if I downgrade or cancel?", a: "Your plan stays active until the end of the current period; afterwards your workspace moves to the Free tier. Your drawings and data are retained." },
];

// ---- Team ----
export const teamMembers = [
  {
    name: "Arjun Mehta",
    initials: "AM",
    role: "Co-founder & CEO",
    bio: "Former structural project engineer. Spent a decade watching drawing workflows break at scale before building VizeDraw.",
    gradient: "from-blueprint to-cyan",
    linkedin: "#",
  },
  {
    name: "Priya Nair",
    initials: "PN",
    role: "Co-founder & CTO",
    bio: "Infrastructure and real-time systems engineer. Built the PDF rendering pipeline, collaboration layer, and multi-tenant core.",
    gradient: "from-cyan to-blueprint-soft",
    linkedin: "#",
  },
  {
    name: "Marcus Webb",
    initials: "MW",
    role: "Head of Product",
    bio: "Previously a construction PM and estimator. Bridges field realities with product decisions on every feature.",
    gradient: "from-blueprint-soft to-blueprint",
    linkedin: "#",
  },
  {
    name: "Lena Fischer",
    initials: "LF",
    role: "Lead Engineer",
    bio: "Specialises in canvas markup systems, PDF rendering, and the revision comparison engine.",
    gradient: "from-blueprint to-cyan",
    linkedin: "#",
  },
  {
    name: "James O'Brien",
    initials: "JO",
    role: "Customer Success",
    bio: "Twelve years on the estimation and project management side of construction. Helps teams migrate from PDF-only workflows.",
    gradient: "from-cyan to-blueprint",
    linkedin: "#",
  },
  {
    name: "Divya Krishnan",
    initials: "DK",
    role: "Design Lead",
    bio: "Designs interfaces for technical workflows where clarity is functional, not cosmetic. Every pixel earns its place.",
    gradient: "from-blueprint-soft to-cyan",
    linkedin: "#",
  },
];

// ---- Company ----
export const companyPillars = [
  { title: "Drawing-first", body: "We build for teams whose business runs on technical drawings, not for generic document management." },
  { title: "Security and roles", body: "Multi-tenant security, role-based access, and audit-friendly workflows for teams that need them." },
  { title: "Practical improvement", body: "We focus on organization, review, search, and compare. Real workflow gains, stated plainly." },
  { title: "Product-led", body: "VizeDraw is a working product with markups, revisions, takeoff, and collaboration. Not a slide deck concept." },
];

// ---- Resources ----
export const resourceCards = [
  { tag: "Product", title: "Feature reference", body: "Full list of VizeDraw capabilities: workspace, markups, revisions, takeoff, collaboration, sharing, and enterprise access.", href: "/features" },
  { tag: "Product", title: "Pricing", body: "Annual plans for teams and enterprises, including AI credits and storage add-ons.", href: "/pricing" },
  { tag: "Product", title: "Product overview", body: "How VizeDraw fits into your workflow from upload through export, with before/after comparison to generic PDF tools.", href: "/product" },
  { tag: "Use cases", title: "Use case guides", body: "Industry-specific workflows for construction, manufacturing, engineering, fabrication, and estimating teams.", href: "/use-cases" },
  { tag: "Construction", title: "Construction workflows", body: "Bid review, IFC packages, subcontractor coordination, RFIs, and fabrication drawing review.", href: "/construction" },
  { tag: "Manufacturing", title: "Manufacturing workflows", body: "Part prints, assembly review, ECO revision control, quality inspection, and supplier submittals.", href: "/manufacturing" },
  { tag: "Sales", title: "Contact & demo", body: "Request a demo, book a drawing workflow review, or join early access.", href: "/contact" },
];

// ---- Demo / Contact shared ----
export const demoCover = [
  "Drawing workspace and sheet organization",
  "Review markups and revision comparison",
  "Takeoff profiles and quantity export",
  "Sharing, roles, and team collaboration",
];
export const demoInclude = [
  "Industry (construction, manufacturing, engineering)",
  "Typical drawing package size and type",
  "Current tools (Adobe, Bluebeam, shared drive)",
  "Team size and primary roles",
  "Main workflow pain point today",
];
export const demoFaq = [
  { q: "How long does a demo take?", a: "Most walkthroughs are about 30 minutes. We tailor the session to your drawing packages and review workflow." },
  { q: "What should I prepare?", a: "Share your industry, typical package size, current tools, and the workflows you want to improve — bid review, IFC, shop drawings, or production prints." },
  { q: "Is the demo live or recorded?", a: "Live on the VizeDraw workspace. We can focus on markups, revisions, takeoff, or collaboration based on your priorities." },
  { q: "Can multiple teammates join?", a: "Yes. Include team size in your request and we will set up a session that works for estimators, PMs, and engineering leads." },
];
export const contactFaq = [
  { q: "How quickly will you respond?", a: "We typically reply within one business day. Demo requests are prioritized for teams with active drawing workflows." },
  { q: "What should I include in my message?", a: "Your industry, typical drawing package size, current tools, team size, and the main workflow you want to improve." },
  { q: "Do you offer enterprise security reviews?", a: "Yes. Enterprise inquiries can include multi-tenant setup, RBAC, audit logs, and security posture questions." },
  { q: "Can I see pricing before a demo?", a: "Yes. Visit the pricing page for annual plans, or select Pricing inquiry on the contact form." },
];

export const footer = {
  product: [
    { label: "Product overview", href: "/product" },
    { label: "Pricing", href: "/pricing" },
    { label: "All Features", href: "/features" },
    { label: "Drawing Workspace", href: "/features/workspace" },
    { label: "Revision management", href: "/features/revisions" },
    { label: "Review Markups", href: "/features/markup" },
    { label: "Scale & measurement", href: "/features/scale" },
    { label: "Takeoff & Quantities", href: "/features/takeoff" },
    { label: "Team collaboration", href: "/features/collaboration" },
    { label: "Sharing & access", href: "/features/sharing" },
    { label: "PDF tools", href: "/features/pdf-tools" },
    { label: "Enterprise & security", href: "/features/enterprise" },
  ],
  useCases: [
    { label: "All Use Cases", href: "/use-cases" },
    { label: "Construction", href: "/construction" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Engineering", href: "/use-cases#engineering" },
    { label: "Fabrication", href: "/use-cases#fabrication" },
  ],
  company: [
    { label: "About Zenitude", href: "/company" },
    { label: "Contact", href: "/contact" },
    { label: "Request demo", href: "/request-demo" },
  ],
  legal: [
    { label: "Contact", href: "/contact" },
    { label: "Enterprise & security", href: "/features/enterprise" },
  ],
};
