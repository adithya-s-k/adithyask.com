"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  ExternalLinkIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Globe,
  FileText,
  Copy,
  Check,
  BookmarkIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Section } from "./ui/section";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export interface Publication {
  title: string;
  description: string;
  publisher: string;
  date: string;
  url?: string;
  websiteUrl?: string; // Added website URL
  resourceUrl?: string; // Added resource URL for PDF, poster, etc.
  citation?: string; // Citation text in a standard format
  status?: string;
  showLinks?: boolean; // Controls whether publication links are displayed
  tags: readonly string[] | string[];
}

interface PublishedWorkCardProps {
  publication: Publication;
  index: number;
}

const PublishedWorkCard: React.FC<PublishedWorkCardProps> = ({
  publication,
  index,
}) => {
  const [copied, setCopied] = useState(false);

  // Extract conference name from publisher (before the | symbol)
  const conferenceParts = publication.publisher.split("|");
  const conferenceName = conferenceParts[0].trim();
  const trackInfo = conferenceParts.length > 1 ? conferenceParts[1].trim() : "";

  // Default citation if none provided
  const citationText =
    publication.citation ||
    `Kolavi, A. S. (${publication.date}). ${publication.title}. ${publication.publisher}.`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="relative border border-muted transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
        {/* Conference Badge - repositioned for better mobile display */}
        <div className="absolute right-2 top-2 sm:right-3 sm:top-3">
          <Badge
            variant="outline"
            className="bg-primary/5 text-xs font-semibold"
          >
            {conferenceName}
          </Badge>
        </div>

        <CardHeader className="p-3 pb-2 pr-16 sm:p-4 sm:pb-2 sm:pr-24">
          <CardTitle className="text-base font-semibold leading-tight">
            {publication.title}
          </CardTitle>
          <div className="mt-1 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            {trackInfo && <span>{trackInfo}</span>}
            {trackInfo && <span className="mx-1 inline-block">•</span>}
            <span>{publication.date}</span>
            {publication.status && (
              <>
                <span className="mx-1 inline-block">•</span>
                <Badge
                  variant={
                    publication.status === "Accepted" ? "secondary" : "outline"
                  }
                  className="py-0 text-[10px]"
                >
                  {publication.status}
                </Badge>
              </>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-3 pt-0 sm:p-4 sm:pt-0">
          <CardDescription className="line-clamp-2 text-xs leading-normal">
            {publication.description}
          </CardDescription>

          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            {/* Tags - full width on mobile, left side on desktop */}
            <div className="flex flex-wrap gap-1">
              {publication.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-1.5 py-0 text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Action buttons - centered on mobile, right side on desktop */}
            <div className="flex gap-1.5 self-start sm:self-center">
              <TooltipProvider>
                {/* Citation button */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 rounded-full"
                      onClick={copyToClipboard}
                    >
                      {copied ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <BookmarkIcon className="h-5 w-5" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Copy citation</p>
                  </TooltipContent>
                </Tooltip>

                {/* Show links or Coming Soon based on showLinks property */}
                {publication.showLinks !== false ? (
                  <>
                    {/* Conference website link */}
                    {publication.websiteUrl && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-full"
                            asChild
                          >
                            <a
                              href={publication.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Globe className="h-5 w-5" />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          <p>Conference website</p>
                        </TooltipContent>
                      </Tooltip>
                    )}

                    {/* Resource link (PDF/Poster) */}
                    {publication.resourceUrl && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-full"
                            asChild
                          >
                            <a
                              href={publication.resourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FileText className="h-5 w-5" />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          <p>View paper/poster</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </>
                ) : (
                  <Badge variant="outline" className="px-2 py-0.5 text-xs">
                    Coming Soon
                  </Badge>
                )}
              </TooltipProvider>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// The PublishedWorkSection component remains the same
interface PublishedWorkSectionProps {
  publications: readonly Publication[] | Publication[];
}

export const PublishedWorkSection: React.FC<PublishedWorkSectionProps> = ({
  publications,
}) => {
  const [showAll, setShowAll] = useState(false);

  // Only show 3 publications by default
  const visiblePublications = showAll ? publications : publications.slice(0, 3);
  const hasMorePublications = publications.length > 3;

  return (
    <Section className="mb-6" id="publications">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Academic Publications</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Research papers and academic contributions
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <AnimatePresence>
          {visiblePublications.map((pub, index) => (
            <PublishedWorkCard
              key={pub.title}
              publication={pub}
              index={index}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Show more/less button */}
      {hasMorePublications && (
        <div className="mt-4 flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            className="flex w-full items-center justify-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground sm:w-auto"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                Show less <ChevronUpIcon className="h-5 w-5" />
              </>
            ) : (
              <>
                Show more publications <ChevronDownIcon className="h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      )}
    </Section>
  );
};
