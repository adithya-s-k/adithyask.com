"use client";

import React from "react";
import { BlogGrid, BlogPost } from "@/components/blog-card";
import { BlogNavbar } from "@/components/blog-navbar";
import { AuthorInfo } from "@/components/author-info";

interface BlogIndexUIProps {
  posts: BlogPost[];
}

export function BlogIndexUI({ posts }: BlogIndexUIProps) {
  return (
    <div className="container mx-auto mb-16 mt-12 max-w-4xl px-4 pb-20">
      <BlogNavbar />
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Blog</h1>
        <p className="text-muted-foreground">
          Articles and thoughts on AI, Machine Learning, and Software Engineering
        </p>
      </header>
      
      <AuthorInfo />
      
      <BlogGrid posts={posts} featuredCount={1} />
    </div>
  );
}