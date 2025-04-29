import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  StarIcon,
  GitForkIcon,
  ArrowUpRight,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: readonly string[] | string[];
  language: string | null;
  featured?: boolean;
  owner?: {
    login: string;
    avatar_url: string;
  };
}

interface FeaturedRepoProps {
  repo: Repository;
  index: number;
}

export const FeaturedRepo: React.FC<FeaturedRepoProps> = ({ repo, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <Card className="group h-full overflow-hidden border border-muted p-3 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
          <CardHeader className="p-0 pb-3">
            <div className="space-y-1">
              <CardTitle className="flex items-center justify-between text-base">
                <div className="inline-flex items-center gap-2">
                  {repo.name}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  {repo.forks_count > 0 && (
                    <div className="flex items-center space-x-1">
                      <GitForkIcon className="h-4 w-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                  )}
                </div>
              </CardTitle>
              <CardDescription className="line-clamp-2 font-mono text-xs">
                {repo.description}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="mt-2 flex flex-wrap gap-1">
              {repo.language && (
                <Badge
                  className={cn(
                    "px-1.5 py-0.5 text-[10px]",
                    repo.featured &&
                      "bg-primary/20 text-primary hover:bg-primary/30",
                  )}
                >
                  {repo.language}
                </Badge>
              )}
              {repo.topics.slice(0, 4).map((topic) => (
                <Badge
                  className="px-1.5 py-0.5 text-[10px]"
                  variant="secondary"
                  key={topic}
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
};

interface FeaturedReposProps {
  repositories: readonly Repository[] | Repository[];
  title?: string;
  loading?: boolean;
}

export const FeaturedRepos: React.FC<FeaturedReposProps> = ({
  repositories,
  title = "Featured Repositories",
  loading = false,
}) => {
  const [showAll, setShowAll] = useState(false);
  const sortedRepos = [...repositories].sort(
    (a, b) => b.stargazers_count - a.stargazers_count,
  );

  // Only show 2 repositories by default
  const visibleRepos = showAll ? sortedRepos : sortedRepos.slice(0, 2);
  const hasMoreRepos = sortedRepos.length > 2;

  // Calculate total stars
  const totalStars = sortedRepos.reduce(
    (total, repo) => total + (repo.stargazers_count || 0),
    0,
  );

  // Format star count (e.g., 1200 -> 1.2k)
  const formatStarCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  // Render skeleton loaders when loading
  const renderSkeletons = () => {
    return Array(2)
      .fill(0)
      .map((_, index) => (
        <motion.div
          key={`skeleton-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="animate-pulse"
        >
          <Card className="group h-full overflow-hidden border border-muted p-3 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-5 w-40 rounded-md bg-muted"></div>
                <div className="flex items-center space-x-3">
                  <div className="h-4 w-16 rounded-md bg-muted"></div>
                </div>
              </div>
              <div className="h-4 w-full rounded-md bg-muted"></div>
              <div className="h-4 w-3/4 rounded-md bg-muted"></div>
              <div className="flex flex-wrap gap-1">
                <div className="h-5 w-16 rounded-full bg-muted"></div>
                <div className="h-5 w-20 rounded-full bg-muted"></div>
                <div className="h-5 w-14 rounded-full bg-muted"></div>
              </div>
            </div>
          </Card>
        </motion.div>
      ));
  };

  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        {!loading && repositories.length > 0 && (
          <div className="flex items-center gap-1 rounded-full bg-secondary/80 px-3 py-1 text-sm">
            <StarIcon className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="font-mono">
              {formatStarCount(totalStars)} total stars
            </span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AnimatePresence>
          {loading ? (
            renderSkeletons()
          ) : (
            visibleRepos.map((repo, index) => (
              <FeaturedRepo
                key={repo.id}
                repo={{ ...repo, featured: true }}
                index={index}
              />
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Show more/less button */}
      {!loading && hasMoreRepos && (
        <div className="mt-4 flex justify-center">
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
                Show more repositories <ChevronDownIcon className="h-3 w-3" />
              </>
            )}
          </Button>
        </div>
      )}
    </section>
  );
};
