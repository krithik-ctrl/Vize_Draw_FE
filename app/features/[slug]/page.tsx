import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FeatureDetailTemplate from "@/components/FeatureDetailTemplate";
import { featureDetails } from "@/lib/content";

export function generateStaticParams() {
  return featureDetails.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const feature = featureDetails.find((f) => f.slug === params.slug);
  if (!feature) return { title: "Feature — VizeDraw" };
  return {
    title: `${feature.title} — VizeDraw`,
    description: feature.lede,
  };
}

export default function FeatureDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const feature = featureDetails.find((f) => f.slug === params.slug);
  if (!feature) notFound();
  return <FeatureDetailTemplate feature={feature} />;
}
