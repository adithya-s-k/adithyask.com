import React from "react";
import { getAllBlogPosts } from "@/lib/mdx";
import { BlogIndexUI } from "@/components/blog-index-ui";
import { Metadata } from "next"; // Import Metadata
import { RESUME_DATA } from "@/data/resume-data"; // Import resume data for base URL

export const dynamic = "force-static";

// Add generateMetadata function
export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = RESUME_DATA.personalWebsiteUrl; // Get base URL
  return {
    title: "Blog",
    description:
      "Guides, articles, and talks by Adithya S Kolavi on RL environments, post-training, multilingual and multimodal AI, and open-source machine learning.",
    keywords: [
      "Adithya S Kolavi",
      "blog",
      "RL environments",
      "reinforcement learning",
      "post-training",
      "LLM fine-tuning",
      "talks",
    ],
    openGraph: {
      title: "Blog | Adithya S Kolavi",
      description:
        "Guides, articles, and talks on RL environments, post-training, and open-source AI.",
      url: `${siteUrl}/blog`,
      siteName: "Adithya S Kolavi's Blog",
      images: ["/opengraph-image"],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | Adithya S Kolavi",
      description:
        "Guides, articles, and talks on RL environments, post-training, and open-source AI.",
      creator: "@adithya_s_k",
      images: ["/opengraph-image"],
    },
    alternates: {
      canonical: `${siteUrl}/blog`,
    },
  };
}

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  // Pass blog posts data to the client component
  return <BlogIndexUI posts={blogPosts} />;
}
