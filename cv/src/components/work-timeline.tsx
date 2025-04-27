"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { BriefcaseIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

interface WorkExperience {
  company: string;
  title: string;
  description: string;
  start: string;
  end?: string;
  link: string;
  badges: readonly string[] | string[];
}

// Map company names to their logo files
const companyLogos: Record<string, string> = {
  "Apple": "/apple-logo.png",
  "CognitiveLab": "/cognitivelab-logo.png",
  "TurboML": "/tml-logo.png",
  "Mandelbulb Technologies": "/mandelbulb_logo.jpeg",
  "Indian Institute of Science (IISC)": "/iisc-logo.png",
  // Add more mappings as needed
};

interface WorkTimelineItemProps {
  work: WorkExperience;
  index: number;
  isLast: boolean;
}

const WorkTimelineItem: React.FC<WorkTimelineItemProps> = ({ work, index, isLast }) => {
  const logoSrc = companyLogos[work.company];
  
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-5 top-10 bottom-0 w-px bg-muted" />
      )}
      
      {/* Timeline item */}
      <div className="flex gap-4 group">
        {/* Timeline icon or logo */}
        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background shadow-md border border-muted overflow-hidden">
          {logoSrc ? (
            <Image 
              src={logoSrc} 
              alt={`${work.company} logo`} 
              fill
              className="object-cover p-1"
            />
          ) : (
            <BriefcaseIcon className="h-5 w-5 text-primary/80 group-hover:text-primary transition-colors duration-300" />
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 pb-2">
          <div className="bg-card hover:bg-card/95 p-4 rounded-lg border border-muted shadow-sm hover:shadow transition-all duration-300 group-hover:border-muted/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-2">
              <h3 className="font-semibold text-base">
                <Link href={work.link} className="hover:text-primary transition-colors duration-300">
                  {work.company}
                </Link>
              </h3>
              <div className="text-sm text-muted-foreground tabular-nums">
                {work.start} - {work.end ?? "Present"}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-2">
              <span className="text-sm font-mono font-medium">{work.title}</span>
              <div className="flex-1" />
              {work.badges.map(badge => (
                <Badge key={badge} variant="outline" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground mt-2">{work.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface WorkTimelineProps {
  experiences: readonly WorkExperience[] | WorkExperience[];
}

export const WorkTimeline: React.FC<WorkTimelineProps> = ({ experiences }) => {
  const [showAll, setShowAll] = useState(false);
  
  // Only show top 3 experiences initially
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);
  const hasMoreExperiences = experiences.length > 3;
  
  return (
    <div className="mt-6">
      <AnimatePresence>
        {visibleExperiences.map((work, index) => (
          <WorkTimelineItem 
            key={`${work.company}-${work.start}`} 
            work={work} 
            index={index}
            isLast={showAll ? index === experiences.length - 1 : index === visibleExperiences.length - 1}
          />
        ))}
      </AnimatePresence>
      
      {/* Show more/less button */}
      {hasMoreExperiences && (
        <motion.div 
          className="flex justify-center mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-xs font-medium"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                Show less <ChevronUpIcon className="h-3 w-3" />
              </>
            ) : (
              <>
                Show more experiences <ChevronDownIcon className="h-3 w-3" />
              </>
            )}
          </Button>
        </motion.div>
      )}
    </div>
  );
};