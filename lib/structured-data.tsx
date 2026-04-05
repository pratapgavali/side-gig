/**
 * Structured Data (JSON-LD) for SEO
 * Use these utilities to add structured data to your pages
 * Reference: https://schema.org/
 */

export interface SchemaArticle {
  headline: string;
  description: string;
  image?: string[];
  datePublished: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    logo?: {
      url: string;
      width?: number;
      height?: number;
    };
  };
}

export interface SchemaCourse {
  name: string;
  description: string;
  image?: string;
  provider?: {
    name: string;
    url?: string;
  };
  instructor?: {
    name: string;
  };
}

export interface SchemaBreadcrumb {
  name: string;
  item: string;
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema(data: SchemaArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: data.author && {
      '@type': 'Person',
      name: data.author.name,
      url: data.author.url,
    },
    publisher: data.publisher && {
      '@type': 'Organization',
      name: data.publisher.name,
      logo: data.publisher.logo && {
        '@type': 'ImageObject',
        url: data.publisher.logo.url,
        width: data.publisher.logo.width,
        height: data.publisher.logo.height,
      },
    },
  };
}

/**
 * Generate Course schema for learning pages
 */
export function generateCourseSchema(data: SchemaCourse) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: data.name,
    description: data.description,
    image: data.image,
    provider: data.provider && {
      '@type': 'Organization',
      name: data.provider.name,
      url: data.provider.url,
    },
    instructor: data.instructor && {
      '@type': 'Person',
      name: data.instructor.name,
    },
  };
}

/**
 * Generate Breadcrumb schema for navigation
 */
export function generateBreadcrumbSchema(breadcrumbs: SchemaBreadcrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

/**
 * Generate Organization schema (for root layout)
 */
export function generateOrganizationSchema(data: {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    sameAs: data.sameAs,
  };
}

/**
 * Generate FAQ schema for FAQ pages
 */
export function generateFAQSchema(
  faqs: Array<{
    question: string;
    answer: string;
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * React component for rendering structured data
 */
export function StructuredData({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
