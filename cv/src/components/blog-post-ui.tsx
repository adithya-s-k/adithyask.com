"use client";

import React from "react";
import { BlogNavbar } from "@/components/blog-navbar";
import { Badge } from "./ui/badge";
import { CalendarIcon, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface BlogPostUIProps {
  title: string;
  date: string;
  readingTime: string;
  tags: string[];
  children: React.ReactNode;
}

export function BlogPostUI({
  title,
  date,
  readingTime,
  tags,
  children,
}: BlogPostUIProps) {
  // Format the date for better readability
  const formattedDate = (() => {
    try {
      return format(new Date(date), "MMMM d, yyyy");
    } catch (e) {
      return date;
    }
  })();

  return (
    <div className="container mx-auto mb-16 mt-12 max-w-4xl px-4 pb-24">
      <div className="mb-12">
        <BlogNavbar />
      </div>

      <article>
        <header className="mb-12">
          <Link
            href="/blog"
            className="group mb-8 flex inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to all posts</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {tags?.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {tags.map((tag: string) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-1 py-0 text-[10px]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {title}
            </h1>

            <div className="flex items-center gap-4 border-b border-muted pb-6 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readingTime}</span>
              </div>
            </div>
          </motion.div>
        </header>

        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>

        <div className="mt-16 border-t border-muted pt-8">
          <Link
            href="/blog"
            className="flex w-fit items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to all posts</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
