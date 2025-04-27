import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import { Section } from "./ui/section";

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  topics: readonly string[] | string[];
  language?: string | null;
  owner?: {
    login: string;
    avatar_url: string;
  };
}

interface OpenSourceCardProps {
  repo: Repository;
}

export const OpenSourceCard: React.FC<OpenSourceCardProps> = ({ repo }) => {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="flex items-center justify-between text-base">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
            >
              {repo.name}{" "}
              <span className="size-1 rounded-full bg-green-500"></span>
            </a>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <span>{repo.stargazers_count}</span>
            </div>
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {repo.html_url.replace("https://", "").replace("www.", "")}
          </div>
          <CardDescription className="line-clamp-2 font-mono text-xs">
            {repo.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {repo.topics.slice(0, 3).map((topic) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={topic}
            >
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface OpenSourceSectionProps {
  repositories: readonly Repository[] | Repository[];
}

export const OpenSourceSection: React.FC<OpenSourceSectionProps> = ({
  repositories,
}) => {
  // Filter out any repositories that might be null or undefined
  const validRepos = repositories.filter(Boolean);
  
  return (
    <Section className="mb-8">
      <h2 className="mb-2 text-2xl font-bold">Open Source</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {validRepos.length > 0 ? (
          validRepos.map((repo) => (
            <OpenSourceCard key={repo.id} repo={repo} />
          ))
        ) : (
          <p className="text-sm text-muted-foreground col-span-2">
            No repository data available. GitHub API rate limit may have been reached.
          </p>
        )}
      </div>
    </Section>
  );
};
