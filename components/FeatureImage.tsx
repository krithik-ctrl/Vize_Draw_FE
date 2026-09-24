"use client";

export default function FeatureImage({
  slug,
  alt,
  className,
}: {
  slug: string;
  alt: string;
  className: string;
}) {
  return (
    <img
      src={`/images/features/${slug}.svg`}
      alt={alt}
      className={className}
    />
  );
}
