# SEO Setup Guide for MyDigitalSpace Academy

## Overview

The SEO structure has been setup to allow you to easily manage metadata for all pages in your Next.js application. Here's how to use it.

## File Structure

```
app/
├── layout.tsx          (Global metadata for entire site)
├── page.tsx            (Homepage with metadata)
├── learn/
│   └── [subject]/
│       └── page.tsx    (Dynamic course pages with metadata)
└── ...other pages
lib/
└── seo.ts              (SEO utilities and metadata generator)
```

## Quick Start

### 1. For Static Pages (like Home, About, Contact)

```typescript
// app/about/page.tsx
import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "About Us",
  description: "Learn more about MyDigitalSpace Academy and our mission to help people learn programming.",
  keywords: ["about", "mydigitalspace", "programming academy"],
});

export default function About() {
  return <div>{/* Your content */}</div>;
}
```

### 2. For Dynamic Pages (like Course Pages)

```typescript
// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { generateMetadata, getPageUrl } from "@/lib/seo";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug); // Your data fetching function

  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    canonical: getPageUrl(`/blog/${slug}`),
    ogImage: post.coverImage,
    ogType: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    author: post.author,
  });
}

export default function BlogPost({ params }: PageProps) {
  // Component code...
}
```

### 3. For Article/Blog Pages

```typescript
export const metadata: Metadata = generateMetadata({
  title: "Introduction to React Hooks",
  description: "A comprehensive guide to React Hooks and how to use them in your applications.",
  keywords: ["react", "hooks", "tutorial"],
  ogType: "article",  // Important for article pages
  publishedTime: "2024-01-15T10:00:00Z",
  modifiedTime: "2024-01-20T14:30:00Z",
  author: "John Doe",
});
```

## Metadata Options

### Available Properties

```typescript
interface PageMetadataProps {
  title: string;                    // Page title (required)
  description: string;              // Meta description (required)
  canonical?: string;               // Canonical URL for duplicate content
  ogImage?: string;                 // Open Graph image URL
  ogType?: 'website' | 'article' | 'profile';  // Type of page
  keywords?: string[];              // SEO keywords
  author?: string;                  // Author name (for articles)
  publishedTime?: string;           // Publication date (ISO format)
  modifiedTime?: string;            // Last modified date (ISO format)
  twitterHandle?: string;           // Twitter handle override
}
```

### What Each Does

| Property | Purpose | When to Use |
|----------|---------|------------|
| `title` | Page title in browser tab and search results | Every page |
| `description` | Summary shown in search results (160 chars) | Every page |
| `keywords` | SEO keywords for the page | Content pages |
| `canonical` | Tells search engines the "main" version of a page | Pages with duplicates |
| `ogImage` | Image shown when sharing on social media | Important pages |
| `ogType` | Type of content (article, website, etc.) | All pages (defaults to website) |
| `author` | Content creator | Blog posts, articles |
| `publishedTime` | When content was published | Blog posts, news |
| `modifiedTime` | When content was last updated | Blog posts |

## Examples by Page Type

### Blog Post Page
```typescript
export const metadata: Metadata = generateMetadata({
  title: "How to Build a REST API with Node.js",
  description: "Learn how to create a scalable REST API using Node.js and Express",
  keywords: ["node.js", "rest api", "express", "backend"],
  ogType: "article",
  publishedTime: "2024-01-15T10:00:00Z",
  modifiedTime: "2024-01-20T14:30:00Z",
  author: "Sarah Johnson",
});
```

### Course/Learning Page
```typescript
export const metadata: Metadata = generateMetadata({
  title: "Learn Advanced React",
  description: "Master advanced React patterns and techniques to build professional applications",
  keywords: ["react", "advanced", "course", "web development"],
  ogType: "website",
});
```

### Documentation Page
```typescript
export const metadata: Metadata = generateMetadata({
  title: "API Documentation | MyDigitalSpace",
  description: "Complete API reference and documentation for MyDigitalSpace platform",
  keywords: ["api", "documentation", "reference"],
  ogType: "website",
});
```

## Environment Configuration

Update your `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://mydigitalspace.com
```

This ensures canonical URLs and social sharing work correctly in production.

## Global Metadata

The root layout (`app/layout.tsx`) automatically applies to all pages. It includes:
- Site name and description
- Default Open Graph images
- Twitter Card settings
- Basic SEO tags (robots, viewport, etc.)

## Tips for Best SEO Results

1. **Title Length**: Keep titles under 60 characters
2. **Descriptions**: Keep descriptions between 150-160 characters
3. **Keywords**: Use 3-5 relevant keywords per page
4. **Unique Content**: Each page should have unique metadata
5. **Canonical URLs**: Use for pages with similar content
6. **Open Graph Images**: Use high-quality images (1200x630px)
7. **Mobile-Friendly**: Already handled by Next.js

## Testing Your Metadata

### Google Rich Results Test
Visit: https://search.google.com/test/rich-results

### LinkedIn Post Inspector
Visit: https://www.linkedin.com/post-inspector/inspect/

### Twitter Card Validator
Visit: https://cards-dev.twitter.com/validator

### Facebook Sharing Debugger
Visit: https://developers.facebook.com/tools/debug/

## Adding Structured Data (Schema.org)

For advanced SEO, you can add structured data in the `<head>`:

```typescript
// In your page.tsx
export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Article Title",
    description: "Article description",
    author: { "@type": "Person", name: "Author Name" },
    datePublished: "2024-01-15",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Component content */}
    </>
  );
}
```

## File Locations Reference

- **SEO Utility**: [lib/seo.ts](../lib/seo.ts)
- **Root Layout**: [app/layout.tsx](../app/layout.tsx)
- **Homepage**: [app/page.tsx](../app/page.tsx)
- **Dynamic Course Pages**: [app/learn/[subject]/page.tsx](../app/learn/%5Bsubject%5D/page.tsx)
