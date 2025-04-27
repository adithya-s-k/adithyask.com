"use client";

import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { useState, useEffect } from "react";
import { RESUME_DATA } from "@/data/resume-data";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// Styles for markdown content
const markdownStyles = {
  container: "prose prose-zinc dark:prose-invert max-w-none overflow-y-auto px-6 py-2",
  h1: "text-2xl font-bold mb-4 border-b pb-2 text-zinc-800 dark:text-zinc-200",
  h2: "text-xl font-bold mt-6 mb-3 text-zinc-800 dark:text-zinc-200",
  h3: "text-lg font-semibold mt-5 mb-2 text-zinc-800 dark:text-zinc-200",
  p: "mb-4 text-zinc-600 dark:text-zinc-400",
  ul: "list-disc pl-5 mb-4 text-zinc-600 dark:text-zinc-400",
  li: "mb-1",
  strong: "font-bold text-zinc-800 dark:text-zinc-300",
  a: "text-blue-500 hover:underline"
};

// Custom components for styling markdown
const components = {
  h1: ({node, ...props} : any) => <h1 className={markdownStyles.h1} {...props} />,
  h2: ({node, ...props} : any) => <h2 className={markdownStyles.h2} {...props} />,
  h3: ({node, ...props} : any) => <h3 className={markdownStyles.h3} {...props} />,
  p: ({node, ...props} : any) => <p className={markdownStyles.p} {...props} />,
  ul: ({node, ...props} : any) => <ul className={markdownStyles.ul} {...props} />,
  li: ({node, ...props} : any) => <li className={markdownStyles.li} {...props} />,
  strong: ({node, ...props} : any) => <strong className={markdownStyles.strong} {...props} />,
  a: ({node, href, ...props} : any) => <a href={href} className={markdownStyles.a} target="_blank" rel="noopener noreferrer" {...props} />
};

export const AboutMeDrawer = () => {
  const [mounted, setMounted] = useState(false);
  
  // To avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex items-center gap-2 h-8" variant="outline">
          <FileText className="size-4" />
          <span>More About Me</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[90vh]">
        <div className="mx-auto w-full max-w-3xl">
          {/* <DrawerHeader>
            <DrawerTitle>About Adithya S Kolavi</DrawerTitle>
            <DrawerDescription>A comprehensive overview of my background and interests</DrawerDescription>
          </DrawerHeader> */}
          <div className={markdownStyles.container} style={{maxHeight: 'calc(70vh - 100px)', width: 'fit-content', overflowY: 'auto'}}>
            <ReactMarkdown 
              components={components}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {RESUME_DATA.extendedBio}
            </ReactMarkdown>
          </div>
          {/* <DrawerFooter>
            
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
};