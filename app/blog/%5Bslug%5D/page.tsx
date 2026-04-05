import { Metadata } from "next";
import { generateMetadata as generatePageMetaData, getPageUrl } from "../../../lib/seo";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  StructuredData,
} from "../../../lib/structured-data";

/**
 * Example Blog Post Page with Full SEO Setup
 * This shows how to use metadata + structured data together
 */

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Sample blog post data - replace with your actual data source
const blogPosts: Record<string, any> = {
  "getting-started-with-react": {
    title: "Getting Started with React",
    excerpt: "A complete beginner's guide to React and component-based architecture",
    content: "...",
    coverImage: "/images/blog/react-intro.jpg",
    author: "Jane Developer",
    publishedAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-20T14:30:00Z",
  },
};

/**
 * Generate metadata for the blog post
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return generatePageMetaData({
    title: post.title,
    description: post.excerpt,
    keywords: ["react", "tutorial", "web development", "javascript"],
    canonical: getPageUrl(`/blog/${slug}`),
    ogImage: post.coverImage,
    ogType: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    author: post.author,
  });
}

/**
 * Generate static pages for all blog posts (optional, for SSG)
 */
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return <div>Post not found</div>;
  }

  // Generate structured data for the article
  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.excerpt,
    image: [post.coverImage],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      name: post.author,
    },
    publisher: {
      name: "MyDigitalSpace Academy",
      logo: {
        url: "https://mydigitalspace.com/logo.png",
        width: 300,
        height: 300,
      },
    },
  });

  // Generate breadcrumb structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: "Home",
      item: getPageUrl("/"),
    },
    {
      name: "Blog",
      item: getPageUrl("/blog"),
    },
    {
      name: post.title,
      item: getPageUrl(`/blog/${slug}`),
    },
  ]);

  return (
    <>
      {/* Render structured data in the head */}
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />

      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-4">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
          </div>
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full rounded-lg"
            />
          )}
        </header>

        <div className="prose prose-lg max-w-none">{post.content}</div>
      </article>
    </>
  );
}
