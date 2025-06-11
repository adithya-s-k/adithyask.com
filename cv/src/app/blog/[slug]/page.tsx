import React from "react";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/mdx";
import { BlogPostUI } from "@/components/blog-post-ui";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import "../markdown.css";
import { Metadata } from "next"; // Import Metadata
import { RESUME_DATA } from "@/data/resume-data"; // Import resume data for base URL
import { YouTubeEmbed } from "@/components/youtube-embed";

// Utility function to extract YouTube video ID from various YouTube URL formats
function extractYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts
    .filter((post) => !post.externalUrl) // Only generate pages for internal posts
    .map((post) => ({
      slug: post.slug,
    }));
}

// Add generateMetadata function for dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  const siteUrl = RESUME_DATA.personalWebsiteUrl;

  if (!post || !post.published) {
    return {
      title: "Post Not Found",
    };
  }

  const postUrl = post.externalUrl
    ? post.externalUrl
    : `${siteUrl}/blog/${post.slug}`;
  const ogImageUrl = post.ogImage || `${siteUrl}/og-image.png`; // Use post-specific OG image or default

  return {
    title: `${post.title} | Adithya S Kolavi Blog`,
    description: post.excerpt || "Read this blog post by Adithya S Kolavi.",
    keywords: post.tags
      ? [...post.tags, "blog", "Adithya S Kolavi"]
      : ["blog", "Adithya S Kolavi"],
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      url: postUrl,
      siteName: "Adithya S Kolavi's Blog",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article", // Use 'article' type for blog posts
      publishedTime: post.date, // Add published time
      authors: [RESUME_DATA.name], // Add author
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "",
      // creator: "@your_twitter_handle",
      images: [ogImageUrl],
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);

  if (!post || !post.published) {
    notFound();
  }

  // If it's an external post, we can either redirect or show a summary page
  if (post.externalUrl) {
    // Option 1: Direct redirect to external site
    // redirect(post.externalUrl);

    // Option 2: Show a summary page with a link to the external content
    return (
      <BlogPostUI
        title={post.title}
        date={post.date}
        readingTime={post.readingTime}
        tags={[...(post.tags || [])]}
      >
        <div className="markdown-content text-foreground">
          <p className="my-4 font-mono text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="my-8 flex flex-col items-center justify-center">
            <p className="mb-4 text-center text-muted-foreground">
              This article is hosted externally. Click below to read the full
              post.
            </p>
            <Button asChild className="inline-flex items-center gap-2">
              <a
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full Article
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </BlogPostUI>
    );
  }

  // For internal posts with direct content
  const { title, date, readingTime, tags, content } = post;

  // Make sure content exists
  if (!content) {
    return (
      <BlogPostUI
        title={title}
        date={date}
        readingTime={readingTime}
        tags={[...(tags || [])]}
      >
        <div className="py-8 text-center">
          <p className="text-muted-foreground">Content unavailable</p>
        </div>
      </BlogPostUI>
    );
  }

  return (
    <BlogPostUI
      title={title}
      date={date}
      readingTime={readingTime}
      tags={[...(tags || [])]}
    >
      <div className="markdown-content text-foreground">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children, ...props }) => (
              <h1
                {...props}
                className="mb-4 mt-8 text-3xl font-bold text-foreground"
              >
                {children}
              </h1>
            ),
            h2: ({ children, ...props }) => (
              <h2
                {...props}
                className="mb-3 mt-8 border-b border-muted pb-2 text-2xl font-bold text-foreground"
              >
                {children}
              </h2>
            ),
            h3: ({ children, ...props }) => (
              <h3
                {...props}
                className="mb-3 mt-6 text-xl font-semibold text-foreground"
              >
                {children}
              </h3>
            ),
            h4: ({ children, ...props }) => (
              <h4
                {...props}
                className="mb-2 mt-6 text-lg font-medium text-foreground"
              >
                {children}
              </h4>
            ),
            p: ({ children, ...props }) => (
              <p
                {...props}
                className="my-4 font-mono text-sm leading-relaxed text-muted-foreground"
              >
                {children}
              </p>
            ),
            a: ({ children, href, ...props }) => {
              // Check if the link is a YouTube URL
              if (href) {
                const videoId = extractYouTubeVideoId(href);
                if (videoId) {
                  return (
                    <YouTubeEmbed 
                      videoId={videoId} 
                      title={typeof children === 'string' ? children : 'YouTube video'}
                    />
                  );
                }
              }
              return (
                <a
                  {...props}
                  href={href}
                  className="text-primary transition-colors hover:underline"
                >
                  {children}
                </a>
              );
            },
            ul: ({ children, ...props }) => (
              <ul
                {...props}
                className="my-4 ml-6 list-disc font-mono text-sm text-muted-foreground"
              >
                {children}
              </ul>
            ),
            ol: ({ children, ...props }) => (
              <ol
                {...props}
                className="my-4 ml-6 list-decimal font-mono text-sm text-muted-foreground"
              >
                {children}
              </ol>
            ),
            li: ({ children, ...props }) => (
              <li {...props} className="mt-2">
                {children}
              </li>
            ),
            blockquote: ({ children, ...props }) => (
              <blockquote
                {...props}
                className="my-4 border-l-2 border-muted pl-4 italic text-muted-foreground"
              >
                {children}
              </blockquote>
            ),
            img: ({ src, alt, ...props }) => (
              <div className="my-6">
                {src && (
                  <Image
                    src={src}
                    alt={alt || "Blog post image"}
                    width={800}
                    height={450}
                    className="max-w-full rounded-md border border-muted"
                  />
                )}
              </div>
            ),
            code: ({ className, children, ...props }: any) => {
              const match = /language-(\w+)/.exec(className || "");
              const inline = !match;
              return !inline ? (
                <div className="my-6 overflow-hidden rounded-md border border-muted">
                  <div className="border-b border-muted bg-muted px-4 py-2 font-mono text-xs font-medium text-muted-foreground">
                    {match[1].toUpperCase()}
                  </div>
                  <SyntaxHighlighter
                    style={nightOwl}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      borderRadius: "0 0 4px 4px",
                      fontSize: "0.9rem",
                    }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code
                  className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-foreground"
                  {...props}
                >
                  {children}
                </code>
              );
            },
            table: ({ children, ...props }) => (
              <div className="overflow-x-auto">
                <table
                  {...props}
                  className="my-6 min-w-full divide-y divide-muted font-mono text-sm"
                >
                  {children}
                </table>
              </div>
            ),
            thead: ({ children, ...props }) => (
              <thead {...props} className="bg-muted">
                {children}
              </thead>
            ),
            tr: ({ children, ...props }) => (
              <tr {...props} className="border-b border-muted">
                {children}
              </tr>
            ),
            th: ({ children, ...props }) => (
              <th
                {...props}
                className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                {children}
              </th>
            ),
            td: ({ children, ...props }) => (
              <td {...props} className="border border-muted px-4 py-3 text-xs">
                {children}
              </td>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </BlogPostUI>
  );
}
