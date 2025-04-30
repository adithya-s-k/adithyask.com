"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
  TwitterIcon,
  LinkedinIcon,
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
import Link from "next/link";
import Script from "next/script";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

// Twitter widget setup
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
        createTweet: (
          tweetId: string,
          element: HTMLElement,
          options?: object,
        ) => Promise<HTMLElement>;
      };
    };
  }
}

// Preload Twitter widgets script
const loadTwitterScript = () => {
  if (
    typeof window !== "undefined" &&
    !document.getElementById("twitter-widget-js")
  ) {
    const script = document.createElement("script");
    script.id = "twitter-widget-js";
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    // Higher priority loading
    script.setAttribute("importance", "high");
    document.head.appendChild(script);

    return new Promise((resolve) => {
      script.onload = () => {
        resolve(true);
      };
    });
  }
  return Promise.resolve(window.twttr !== undefined);
};

// Lightweight Tweet Preview component - shown before the real tweet loads
const TweetPreview: React.FC<{
  username?: string;
  content?: string;
  date?: string;
}> = ({
  username = "Twitter User",
  content = "Loading tweet content...",
  date = "Just now",
}) => {
  return (
    <div className="mx-auto max-w-[500px] rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-900">
      <div className="mb-2 flex items-center">
        <div className="mr-3 h-10 w-10 rounded-full bg-muted"></div>
        <div>
          <div className="text-sm font-bold">{username}</div>
          <div className="text-xs text-muted-foreground">
            @{username.toLowerCase().replace(/\s/g, "")}
          </div>
        </div>
      </div>
      <div className="my-2 text-sm">{content}</div>
      <div className="mt-2 text-xs text-muted-foreground">{date}</div>
      <div className="mt-4 flex justify-between">
        <div className="text-xs text-muted-foreground">💬</div>
        <div className="text-xs text-muted-foreground">🔄</div>
        <div className="text-xs text-muted-foreground">❤️</div>
        <div className="text-xs text-muted-foreground">📤</div>
      </div>
    </div>
  );
};

// LinkedIn embed setup
const loadLinkedInScript = () => {
  if (
    typeof window !== "undefined" &&
    !document.getElementById("linkedin-embed-script")
  ) {
    const script = document.createElement("script");
    script.id = "linkedin-embed-script";
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return true;
  }
  return false;
};

// Twitter and LinkedIn embed components
const TwitterEmbed: React.FC<{ tweetId: string }> = ({ tweetId }) => {
  const tweetRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    // Load Twitter widget script if not already loaded
    loadTwitterScript().then(() => {
      if (!isMounted) return;

      if (tweetRef.current && window.twttr) {
        // Clear the container first
        tweetRef.current.innerHTML = "";

        window.twttr.widgets
          .createTweet(tweetId, tweetRef.current, {
            theme: "light",
            dnt: true,
            align: "center",
            cards: "hidden", // Improves loading speed by hiding cards initially
            conversation: "none", // Hide conversation to speed up loading
          })
          .then(() => {
            if (isMounted) setIsLoading(false);
          })
          .catch(() => {
            if (isMounted) setIsLoading(false);
          });
      }
    });

    return () => {
      isMounted = false;
    };
  }, [tweetId]);

  return (
    <>
      {isLoading && (
        <div className="w-full px-2 py-4">
          <Skeleton className="mb-2 h-12 w-full" />
          <Skeleton className="mb-2 h-24 w-full" />
          <Skeleton className="mb-2 h-8 w-2/3" />
          <Skeleton className="h-8 w-1/2" />
          <div className="mt-3 flex justify-between">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
          </div>
        </div>
      )}
      <div
        ref={tweetRef}
        className={cn(
          "twitter-embed flex w-full justify-center",
          isLoading ? "invisible h-0" : "visible",
        )}
      />
    </>
  );
};

const LinkedInEmbed: React.FC<{ postId: string }> = ({ postId }) => {
  useEffect(() => {
    loadLinkedInScript();
  }, []);

  // For LinkedIn, we'll use their embed code structure
  // postId format is typically like: "urn:li:activity:7066388575633719298"
  return (
    <div className="linkedin-embed flex w-full justify-center">
      <iframe
        src={`https://www.linkedin.com/embed/feed/update/${postId}`}
        height="570"
        width="100%"
        frameBorder="0"
        allowFullScreen
        title="LinkedIn Embedded Post"
      ></iframe>
    </div>
  );
};

export interface Achievement {
  title: string;
  date: string;
  description: string;
  fullDescription?: string; // Optional longer description for "Read more" functionality
  tags: readonly string[] | string[];
  link?: {
    label: string;
    href: string;
  };
  socialEmbed?: {
    type: "twitter" | "linkedin";
    embedId: string; // Tweet ID or LinkedIn post ID
    embedHtml?: string; // Optional pre-formatted embed HTML
  };
}

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  index,
}) => {
  const [expanded, setExpanded] = useState(false);
  const hasFullDescription = !!achievement.fullDescription;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (
      expanded &&
      achievement.socialEmbed?.type === "twitter" &&
      window.twttr
    ) {
      window.twttr.widgets.load();
    }
  }, [expanded, achievement.socialEmbed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
    >
      <Card className="border border-muted transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
        <CardHeader className="p-3 pb-2 sm:p-4 sm:pb-2">
          <div className="mb-1 flex items-start justify-between">
            <CardTitle className="text-base font-semibold leading-tight">
              {achievement.title}
            </CardTitle>
            <Badge
              variant="outline"
              className="ml-2 bg-primary/5 text-xs font-normal"
            >
              {achievement.date}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-3 pt-1 sm:p-4 sm:pt-1">
          <CardDescription
            className={`text-xs leading-normal ${!expanded && hasFullDescription ? "line-clamp-3" : ""}`}
          >
            {expanded && hasFullDescription
              ? achievement.fullDescription
              : achievement.description}
          </CardDescription>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {achievement.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-1.5 py-0 text-xs"
              >
                {tag}
              </Badge>
            ))}

            {/* External Link */}
            {achievement.link && (
              <Link
                href={achievement.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                <ExternalLinkIcon className="h-3 w-3" />
                {achievement.link.label}
              </Link>
            )}

            {/* Read More Button */}
            {hasFullDescription && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleExpanded}
                className="ml-auto h-6 px-2 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                {expanded ? "Show less" : "Read more"}
                {expanded ? (
                  <ChevronUpIcon className="ml-1 h-3 w-3" />
                ) : (
                  <ChevronDownIcon className="ml-1 h-3 w-3" />
                )}
              </Button>
            )}
          </div>

          {/* Social Media Embed */}
          {achievement.socialEmbed && expanded && (
            <div className="mt-4 rounded-md border border-border">
              {achievement.socialEmbed.embedHtml ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: achievement.socialEmbed.embedHtml,
                  }}
                  className="w-full overflow-hidden"
                />
              ) : (
                <div className="w-full overflow-hidden">
                  {achievement.socialEmbed.type === "twitter" ? (
                    <TwitterEmbed tweetId={achievement.socialEmbed.embedId} />
                  ) : (
                    <LinkedInEmbed postId={achievement.socialEmbed.embedId} />
                  )}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface AchievementsNewsSectionProps {
  achievements: readonly Achievement[] | Achievement[];
}

export const AchievementsNewsSection: React.FC<
  AchievementsNewsSectionProps
> = ({ achievements }) => {
  const [showAll, setShowAll] = useState(false);

  // Only show 3 achievements by default
  const visibleAchievements = showAll ? achievements : achievements.slice(0, 3);
  const hasMoreAchievements = achievements.length > 3;

  return (
    <Section className="mb-6" id="achievements-news">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Achievements & News</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Latest updates, recognitions, and highlights
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <AnimatePresence>
          {visibleAchievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Show more/less button */}
      {hasMoreAchievements && (
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
                Show more highlights <ChevronDownIcon className="h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      )}
    </Section>
  );
};
