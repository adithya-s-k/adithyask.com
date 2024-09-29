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
  description: string;
  stargazers_count: number;
  topics: string[];
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
  repositories: Repository[];
}

export const OpenSourceSection: React.FC<OpenSourceSectionProps> = ({
  repositories,
}) => {
  return (
    <Section className="mb-8">
      <h2 className="mb-2 text-2xl font-bold">Open Source</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {repositories.map((repo) => (
          <OpenSourceCard key={repo.id} repo={repo} />
        ))}
      </div>
    </Section>
  );
};
