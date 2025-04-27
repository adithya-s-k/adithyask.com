import React from "react";
import { getAllBlogPosts } from "@/lib/mdx";
import { BlogIndexUI } from "@/components/blog-index-ui";

export const dynamic = 'force-static'; // This ensures the page is statically generated

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  
  // Pass blog posts data to the client component
  return <BlogIndexUI posts={blogPosts} />;
}