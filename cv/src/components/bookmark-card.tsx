"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Globe, Link as LinkIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LinkData {
  title: string;
  url: string;
  icon: React.ReactNode; // Keep original icon as fallback
  description?: string; // Significance note
}

interface BookmarkCardProps {
  link: LinkData;
}

interface FetchedMetadata {
  title: string | null;
  description: string | null;
  image: string | null;
  favicon: string | null;
  url: string;
}

export function BookmarkCard({ link }: BookmarkCardProps) {
  const [metadata, setMetadata] = useState<FetchedMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [faviconError, setFaviconError] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  useEffect(() => {
    async function fetchMetadata() {
      setIsLoading(true);
      setImageError(false);
      setFaviconError(false);
      try {
        const response = await fetch(
          `/api/og-image?url=${encodeURIComponent(link.url)}`,
        );
        if (response.ok) {
          const data: FetchedMetadata = await response.json();
          setMetadata(data);
        } else {
          setMetadata({
            title: link.title,
            description: link.description || null, // Use link.description as fallback if fetch fails
            image: null,
            favicon: null,
            url: link.url,
          });
        }
      } catch (error) {
        console.error("Error fetching link metadata:", error);
        setMetadata({
          title: link.title,
          description: link.description || null, // Use link.description as fallback on error
          image: null,
          favicon: null,
          url: link.url,
        });
      }
      setIsLoading(false);
    }

    fetchMetadata();
  }, [link.url, link.title, link.description]);

  const fetchedTitle = metadata?.title;
  const fetchedDescription = metadata?.description;
  const displayImage = !imageError && metadata?.image ? metadata.image : null;
  const displayFavicon =
    !faviconError && metadata?.favicon ? metadata.favicon : null;
  const displayUrl = metadata?.url || link.url;

  const finalTitle = fetchedTitle || link.title;
  // Use the specific description from link data for the dynamic display
  const significanceDescription = link.description;
  // Use fetched description for the card content itself
  const cardDescription = fetchedDescription;

  const hostname = React.useMemo(() => {
    try {
      return new URL(displayUrl).hostname;
    } catch {
      return displayUrl;
    }
  }, [displayUrl]);

  // Toggle description visibility on click
  const handleClick = (e: React.MouseEvent) => {
    if (significanceDescription) {
      // Prevent link navigation only if we are toggling the description
      e.preventDefault();
      e.stopPropagation();
      setIsDescriptionVisible(!isDescriptionVisible);
    }
    // If no significanceDescription, the click proceeds as a normal link click
  };

  // Show description on hover
  const handleMouseEnter = () => {
    if (significanceDescription) {
      setIsDescriptionVisible(true);
    }
  };

  // Hide description on mouse leave
  const handleMouseLeave = () => {
    // Simple hide on leave. More complex logic could keep it open after a click.
    setIsDescriptionVisible(false);
  };

  // Handle link click
  const handleLinkClick = (e: React.MouseEvent) => {
    // Don't prevent default behavior - allow the link to be followed
    // Just stop propagation to prevent double handling
    e.stopPropagation();
  };

  return (
    <div className="relative">
      {" "}
      {/* Container for card + animated description */}
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} // Use the combined click handler
        className="relative z-10" // Keep card above description area
        role={significanceDescription ? "button" : undefined} // Indicate interactivity
        aria-expanded={isDescriptionVisible}
        tabIndex={significanceDescription ? 0 : -1} // Make it focusable if interactive
        onKeyDown={(e) => {
          if (significanceDescription && (e.key === "Enter" || e.key === " ")) {
            handleClick(e as any); // Trigger toggle on Enter/Space
          }
        }}
      >
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          // Make the link non-focusable if the parent div handles interaction
          tabIndex={significanceDescription ? -1 : 0}
          onClick={handleLinkClick}
          className={`group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 ease-in-out hover:border-primary/30 hover:shadow-lg ${significanceDescription ? "cursor-pointer" : ""}`}
        >
          {/* Image Section */}
          <div className="relative h-32 w-full overflow-hidden bg-muted/50">
            {isLoading ? (
              <Skeleton className="h-full w-full" />
            ) : displayImage ? (
              <Image
                src={displayImage}
                alt={`Preview for ${finalTitle}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform group-hover:scale-105"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <LinkIcon className="h-10 w-10 text-muted-foreground/30" />
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col justify-between p-3">
            {/* Text Content */}
            <div>
              {isLoading ? (
                <>
                  <Skeleton className="mb-1 h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="mt-1 h-4 w-5/6" />
                </>
              ) : (
                <>
                  <div className="mb-1 line-clamp-2 font-medium leading-tight text-card-foreground group-hover:text-primary">
                    {finalTitle}
                  </div>
                  {/* Show fetched description (if available) inside the card */}
                  {cardDescription && !significanceDescription && (
                    <p className="mb-2 line-clamp-2 text-xs text-muted-foreground">
                      {cardDescription}
                    </p>
                  )}
                </>
              )}
            </div>

            {/* Footer with Favicon and URL */}
            <div className="mt-2 flex items-center gap-1.5 border-t border-border/50 pt-2">
              {isLoading ? (
                <Skeleton className="h-4 w-4 rounded-full" />
              ) : displayFavicon ? (
                <Image
                  src={displayFavicon}
                  alt="Favicon"
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                  onError={() => setFaviconError(true)}
                />
              ) : (
                <Globe className="h-4 w-4 text-muted-foreground/80" />
              )}

              {isLoading ? (
                <Skeleton className="h-4 w-1/3" />
              ) : (
                <span className="truncate text-xs text-muted-foreground">
                  {hostname}
                </span>
              )}
            </div>
          </div>
        </a>
      </motion.div>
      {/* Animated Description Section (only appears if significanceDescription exists) */}
      <AnimatePresence>
        {isDescriptionVisible && significanceDescription && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "8px" }} // Animate in with margin
            exit={{ opacity: 0, height: 0, marginTop: 0 }} // Animate out
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden rounded-md border bg-card p-3 text-sm text-muted-foreground shadow-sm"
            // Allow interaction with the description box without hiding it immediately
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-hidden={!isDescriptionVisible}
          >
            <div className="flex flex-col gap-2">
              <p>{significanceDescription}</p>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-primary hover:underline"
              >
                <LinkIcon size={12} />
                Open link
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
