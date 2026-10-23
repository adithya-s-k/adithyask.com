import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

// Shared heading so every homepage section has the same hierarchy and rhythm
export function SectionHeading({
  title,
  subtitle,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-2 flex items-end justify-between gap-4">
      <div className="min-w-0">
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}
