import IndustryTemplate from "@/components/IndustryTemplate";
import { manufacturingWorkflows } from "@/lib/content";

export const metadata = {
  title: "Manufacturing — VizeDraw",
  description:
    "VizeDraw for manufacturing teams: drawing organization, part and assembly review, ECO revision management, quality inspection support, supplier drawing review, and production document clarity.",
};

const related = [
  { label: "Revision management", href: "/features/revisions" },
  { label: "Review markups", href: "/features/markup" },
  { label: "Scale & measurement", href: "/features/scale" },
  { label: "Sharing & access", href: "/features/sharing" },
  { label: "PDF tools", href: "/features/pdf-tools" },
];

export default function ManufacturingPage() {
  return (
    <IndustryTemplate
      eyebrow="Manufacturing"
      title="A drawing workspace for production teams"
      lede="Engineering, production, quality, procurement, and fabrication teams use VizeDraw to organize part prints, review revisions, support inspection, and control supplier drawing exchanges."
      accent="blueprint"
      workflows={manufacturingWorkflows}
      related={related}
      ctaTitle="Walk through your production drawing workflow."
      heroBannerSrc="/images/manufacturing/hero-banner.jpg"
    />
  );
}
