import type { Metadata } from "next";

const SITE_NAME = "TravelGo";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";

type SeoParams = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

export function buildSeoMetadata({
  title,
  description,
  image = "/og-default.png",
  url = SITE_URL,
}: SeoParams): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}