import PageHeader from "@/components/PageHeader";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { pricingFaq } from "@/lib/content";

export const metadata = {
  title: "Pricing — VizeDraw",
  description:
    "Simple annual plans for teams and enterprises: Free, Starter, Pro, and Enterprise. Includes AI credits and storage add-ons.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        banner="pricing"
        eyebrow="Pricing"
        title="Plans that scale with your drawing workflow"
        lede="All plans are billed annually for simple, predictable pricing. Switch between individual and team plans."
      />
      <PricingSection />
      <FAQ items={pricingFaq} eyebrow="Pricing FAQ" title="Billing & plans" />
      <CTA />
    </>
  );
}
