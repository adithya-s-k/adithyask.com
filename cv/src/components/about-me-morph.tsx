"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

// The markdown renderer only loads once someone opens "More About Me"
const AboutMeContent = dynamic(() => import("./about-me-content"));

export const AboutMeMorph = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative">
      <Button
        className="flex h-9 items-center gap-2"
        variant="outline"
        onClick={toggleExpanded}
        aria-expanded={expanded}
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
            <AboutMeContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
