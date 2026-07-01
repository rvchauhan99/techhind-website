import type { Metadata } from "next";
import { siteData } from "../data/siteData";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

const ogImage = siteData.seo.ogImage;

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "en_IN",
      siteName: siteData.company.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const rootMetadata: Metadata = {
  title: {
    default: siteData.seo.title,
    template: "%s | techHind",
  },
  description: siteData.seo.description,
  keywords: siteData.seo.keywords,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
    types: {
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    url: "/",
    siteName: siteData.company.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: siteData.seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.title,
    description: siteData.seo.description,
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/icon.png",
    shortcut: "/favicon.ico",
  },
};
