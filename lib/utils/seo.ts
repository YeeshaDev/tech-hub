import { Metadata } from 'next';

interface GenerateMetadataProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export function generateMetadata({
  title,
  description,
  image,
  type = 'website',
}: GenerateMetadataProps): Metadata {
  const metadata: Metadata = {
    title: `${title} | TechEvents`,
    description,
    openGraph: {
      title: `${title} | TechEvents`,
      description,
      type,
      images: image ? [image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | TechEvents`,
      description,
      images: image ? [image] : undefined,
    },
  };

  return metadata;
}