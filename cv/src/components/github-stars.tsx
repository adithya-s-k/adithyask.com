"use client";

import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface GitHubStarsProps {
  totalStars: number;
}

export const GitHubStars = ({ totalStars }: GitHubStarsProps) => {
  // Format star count (e.g., 1200 -> 1.2k)
  const formatStarCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <Badge
      variant="secondary"
      className="flex h-8 items-center gap-1 px-3 font-mono hover:bg-secondary/80"
    >
      <Star className="size-4 fill-yellow-500 text-yellow-500" />
      <span>~ {formatStarCount(totalStars)} stars</span>
    </Badge>
  );
};
