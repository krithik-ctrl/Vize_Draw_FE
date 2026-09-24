import IndustryTemplate from "@/components/IndustryTemplate";
import { constructionWorkflows } from "@/lib/content";

export const metadata = {
  title: "Construction — VizeDraw",
  description:
    "VizeDraw for construction teams: bid drawing review, IFC package organization, subcontractor coordination, RFI preparation, revision tracking, and fabrication drawing review.",
};

const related = [
  { label: "Revision management", href: "/features/revisions" },
  { label: "Review markups", href: "/features/markup" },
  { label: "Sharing & access", href: "/features/sharing" },
  { label: "Drawing overlay", href: "/features/revisions" },
  { label: "Takeoff profiles", href: "/features/takeoff" },
];

export default function ConstructionPage() {
  return (
    <IndustryTemplate
      eyebrow="Construction"
      title="Built for the way construction teams handle drawings"
      lede="From bid sets to issued-for-construction packages, VizeDraw gives contractors, subcontractors, estimators, and project teams a controlled workspace for review, coordination, and revision tracking."
      accent="markup"
      workflows={constructionWorkflows}
      related={related}
      ctaTitle="Review your bid or IFC workflow with us."
      heroBannerSrc="/images/construction/hero-banner.jpg"
    />
  );
}
