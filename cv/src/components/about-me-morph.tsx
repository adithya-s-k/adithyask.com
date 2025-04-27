"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { motion, AnimatePresence } from "framer-motion";

// Styles for markdown content
const markdownStyles = {
  container: "prose prose-zinc dark:prose-invert max-w-none overflow-y-auto",
  h1: "text-2xl font-bold mb-4 border-b pb-2 text-zinc-800 dark:text-zinc-200",
  h2: "text-xl font-bold mt-6 mb-3 text-zinc-800 dark:text-zinc-200",
  h3: "text-lg font-semibold mt-5 mb-2 text-zinc-800 dark:text-zinc-200",
  p: "mb-4 text-zinc-600 dark:text-zinc-400",
  ul: "list-disc pl-5 mb-4 text-zinc-600 dark:text-zinc-400",
  li: "mb-1",
  strong: "font-bold text-zinc-800 dark:text-zinc-300",
  a: "text-blue-500 hover:underline",
};

// Custom components for styling markdown
const components = {
  h1: ({ node, ...props }: any) => (
    <h1 className={markdownStyles.h1} {...props} />
  ),
  h2: ({ node, ...props }: any) => (
    <h2 className={markdownStyles.h2} {...props} />
  ),
  h3: ({ node, ...props }: any) => (
    <h3 className={markdownStyles.h3} {...props} />
  ),
  p: ({ node, ...props }: any) => <p className={markdownStyles.p} {...props} />,
  ul: ({ node, ...props }: any) => (
    <ul className={markdownStyles.ul} {...props} />
  ),
  li: ({ node, ...props }: any) => (
    <li className={markdownStyles.li} {...props} />
  ),
  strong: ({ node, ...props }: any) => (
    <strong className={markdownStyles.strong} {...props} />
  ),
  a: ({ node, href, ...props }: any) => (
    <a
      href={href}
      className={markdownStyles.a}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
};

export const AboutMeMorph = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative">
      <Button
        className="flex h-8 items-center gap-2"
        variant="outline"
        onClick={toggleExpanded}
      >
        <FileText className="size-4" />
        <span>{expanded ? "Show Less" : "More About Me"}</span>
      </Button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-6 overflow-hidden rounded-lg bg-white/5 p-4 backdrop-blur-sm"
          >
            <div className={markdownStyles.container}>
              <ReactMarkdown
                components={components}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {RESUME_DATA.extendedBio}
              </ReactMarkdown>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
