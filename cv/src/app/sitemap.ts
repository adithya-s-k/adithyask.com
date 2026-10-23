import type { MetadataRoute } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = RESUME_DATA.personalWebsiteUrl;
  const latestPost = RESUME_DATA.blogs[0]?.date;

  // Only posts hosted on this site; external posts live on their own domains
  const internalPosts = RESUME_DATA.blogs.filter(
    (post) => post.published && !("externalUrl" in post),
  );

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: latestPost ? new Date(latestPost) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/cognitivelab`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...internalPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
