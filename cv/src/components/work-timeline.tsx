"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import {
  BriefcaseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  InfoIcon,
  Mic,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShineBorder } from "./magicui/shine-border";

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
  "Microsoft Research": "/microsoft-logo.png",
  Apple: "/apple-logo.png",
  CognitiveLab: "/cognitivelab-logo.png",
  TurboML: "/tml-logo.png",
  "Mandelbulb Technologies": "/mandelbulb_logo.jpeg",
  "Indian Institute of Science (IISC)": "/iisc-logo.png",
  // Add more mappings as needed
};

interface WorkTimelineItemProps {
  work: WorkExperience;
  index: number;
  isLast: boolean;
}

const WorkTimelineItem: React.FC<WorkTimelineItemProps> = ({
  work,
  index,
  isLast,
}) => {
  const logoSrc = companyLogos[work.company];
  const isCognitiveLab = work.company === "CognitiveLab";

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
        <div className="absolute bottom-0 left-5 top-10 w-px bg-muted" />
      )}

      {/* Timeline item */}
      <div className="group flex gap-4">
        {/* Timeline icon or logo */}
        <div className="relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-muted bg-background shadow-md">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={`${work.company} logo`}
              fill
              className="object-cover p-1"
            />
          ) : (
            <BriefcaseIcon className="h-5 w-5 text-primary/80 transition-colors duration-300 group-hover:text-primary" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-2">
          {isCognitiveLab ? (
            <Link href="/cognitivelab">
              <div className="relative block cursor-pointer rounded-lg p-[2px] shadow-sm transition-all duration-300 hover:scale-[1.01]">
                {/* Custom animated shine border effect - thinner and more translucent */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-lg"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(79, 70, 229, 0.6), rgba(236, 72, 153, 0.6), rgba(139, 92, 246, 0.6))",
                    maskImage:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskImage:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "2px",
                    zIndex: 0,
                    animation: "gradientShift 6s linear infinite",
                  }}
                />

                {/* Shine animation overlay */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-lg"
                  style={{ zIndex: 0 }}
                >
                  <div
                    className="absolute inset-[-100%] animate-[shine_3s_linear_infinite]"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0 210deg, rgba(255, 255, 255, 0.5), transparent 330deg 360deg)",
                      transform: "rotate(-45deg)",
                    }}
                  />
                </div>

                <style jsx>{`
                  @keyframes gradientShift {
                    0% {
                      background: linear-gradient(
                        45deg,
                        rgba(79, 70, 229, 0.6),
                        rgba(236, 72, 153, 0.6),
                        rgba(139, 92, 246, 0.6)
                      );
                    }
                    33% {
                      background: linear-gradient(
                        45deg,
                        rgba(139, 92, 246, 0.6),
                        rgba(79, 70, 229, 0.6),
                        rgba(236, 72, 153, 0.6)
                      );
                    }
                    66% {
                      background: linear-gradient(
                        45deg,
                        rgba(236, 72, 153, 0.6),
                        rgba(139, 92, 246, 0.6),
                        rgba(79, 70, 229, 0.6)
                      );
                    }
                    100% {
                      background: linear-gradient(
                        45deg,
                        rgba(79, 70, 229, 0.6),
                        rgba(236, 72, 153, 0.6),
                        rgba(139, 92, 246, 0.6)
                      );
                    }
                  }
                `}</style>

                <div className="relative z-10 rounded-lg bg-card px-4 py-3 shadow-sm">
                  {/* Icon button in top right corner */}
                  <div className="absolute -right-2 -top-2 z-20">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-300 text-white shadow-sm transition-transform duration-300 hover:scale-110 ">
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold">
                        {work.company}
                      </h3>
                      <Badge className="bg-blue-100 text-[10px] text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Building a Research Lab
                      </Badge>
                    </div>
                    <div className="text-xs tabular-nums text-muted-foreground">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <div className="mt-1 flex flex-wrap gap-1">
                    <span className="font-mono text-xs font-medium">
                      {work.title}
                    </span>
                    <div className="flex-1" />
                    <div className="flex flex-wrap gap-1">
                      {work.badges.map((badge) => (
                        <Badge
                          key={badge}
                          variant="outline"
                          className="text-xs"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground">
                    {work.description}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div className="rounded-lg border border-muted bg-card p-4 shadow-sm transition-all duration-300 hover:bg-card/95 hover:shadow group-hover:border-muted/80">
              <div className="mb-1 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <h3 className="text-base font-semibold">
                  <Link
                    href={work.link}
                    className="transition-colors duration-300 hover:text-primary"
                  >
                    {work.company}
                  </Link>
                </h3>
                <div className="text-sm tabular-nums text-muted-foreground">
                  {work.start} - {work.end ?? "Present"}
                </div>
              </div>

              <div className="mb-2 flex flex-wrap gap-1">
                <span className="font-mono text-sm font-medium">
                  {work.title}
                </span>
                <div className="flex-1" />
                {work.badges.map((badge) => (
                  <Badge key={badge} variant="outline" className="text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {work.description}
              </p>
            </div>
          )}
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
            isLast={
              showAll
                ? index === experiences.length - 1
                : index === visibleExperiences.length - 1
            }
          />
        ))}
      </AnimatePresence>

      {/* Show more/less button */}
      {hasMoreExperiences && (
        <motion.div
          className="mt-2 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
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
