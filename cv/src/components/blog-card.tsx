"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarIcon, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  externalUrl?: string;
  tags: ReadonlyArray<string> | string[];
  readingTime: string;
  published: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured";
}

export const BlogCard = ({ post, variant = "default" }: BlogCardProps) => {
  const isFeatured = variant === "featured";
  
  // Determine if the post should link externally or internally
  const LinkWrapper = ({ children }: { children: React.ReactNode }) => {
    if (post.externalUrl) {
      return (
        <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
          {children}
        </a>
      );
    }
    return (
      <Link href={`/blog/${post.slug}`} className="block h-full">
        {children}
      </Link>
    );
  };
  
  return (
    <LinkWrapper>
      <Card 
        className={cn(
          "h-full flex flex-col overflow-hidden border border-muted transition-all duration-300 hover:shadow-md hover:border-primary/30 group",
          isFeatured && "md:col-span-2 lg:col-span-2"
        )}
      >
        <CardHeader className="p-5">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <CalendarIcon className="h-3.5 w-3.5" />
            <span className="text-xs">{post.date}</span>
            <span className="text-xs">•</span>
            <Clock className="h-3.5 w-3.5" />
            <span className="text-xs">{post.readingTime}</span>
            {post.externalUrl && (
              <>
                <span className="text-xs">•</span>
                <Badge variant="outline" className="text-xs font-normal">External</Badge>
              </>
            )}
          </div>
          
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors duration-200">
            {post.title}
            <ArrowUpRight className="h-3.5 w-3.5 inline ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
          </h3>
        </CardHeader>
        
        <CardContent className="p-5 pt-0 flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="p-5 pt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-medium">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </LinkWrapper>
  );
};

interface BlogGridProps {
  posts: BlogPost[];
  featuredCount?: number;
}

export const BlogGrid = ({ posts, featuredCount = 1 }: BlogGridProps) => {
  const publishedPosts = posts.filter(post => post.published);
  const sortedPosts = [...publishedPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const featuredPosts = sortedPosts.slice(0, featuredCount);
  const regularPosts = sortedPosts.slice(featuredCount);
  
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {featuredPosts.map((post) => (
        <BlogCard key={post.slug} post={post} variant="featured" />
      ))}
      {regularPosts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
};