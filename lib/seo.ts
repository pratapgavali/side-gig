import { Metadata } from 'next';

const siteConfig = {
  name: 'MyDigitalSpace Academy',
  description: 'Learn programming, web development, and more at MyDigitalSpace Academy',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mydigitalspace.com',
  ogImage: '/hero_banner_dweb_2.png',
  twitter: '', //:TODO
};

export interface PageMetadataProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  twitterHandle?: string;
}

/**
 * Generate metadata object for a page
 * Use this in your page.tsx files with "export const metadata: Metadata = generateMetadata(...)"
 */
export function generateMetadata(props: PageMetadataProps): Metadata {
  const {
    title,
    description,
    canonical,
    ogImage = siteConfig.ogImage,
    ogType = 'website',
    keywords = [],
    author,
    publishedTime,
    modifiedTime,
    twitterHandle = siteConfig.twitter,
  } = props;

  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = canonical || siteConfig.url;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: author ? [{ name: author }] : undefined,
    
    // Basic metadata
    metadataBase: new URL(siteConfig.url),
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: siteConfig.name,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: twitterHandle,
    },

    // Canonical URL
    ...(canonical && { alternates: { canonical } }),
  };
}

/**
 * Get the full URL for a page
 */
export function getPageUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}

/**
 * Site configuration object
 */
export const siteMetadata = siteConfig;
