"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  HomeIcon,
  BookOpenIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  CodeIcon,
  FileTextIcon,
  CommandIcon,
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

interface NavbarProps {
  links?: { url: string; title: string }[];
}

export function HoverNavbar({ links = [] }: NavbarProps) {
  const [open, setOpen] = useState(false);

  // Command menu keyboard shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navItems = [
    { name: "Home", icon: <HomeIcon className="h-5 w-5" />, href: "#top" },
    {
      name: "About",
      icon: <FileTextIcon className="h-5 w-5" />,
      href: "#about",
    },
    {
      name: "Work",
      icon: <BriefcaseIcon className="h-5 w-5" />,
      href: "#work",
    },
    { name: "Blog", icon: <BookOpenIcon className="h-5 w-5" />, href: "#blog" },
    {
      name: "Projects",
      icon: <CodeIcon className="h-5 w-5" />,
      href: "#projects",
    },
    {
      name: "Education",
      icon: <GraduationCapIcon className="h-5 w-5" />,
      href: "#education",
    },
  ];

  // Handle navigation and smooth scrolling
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      scrollToSection(href.substring(1));
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-2 md:pb-4">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-full border border-gray-200 bg-white/70 shadow-lg backdrop-blur-md dark:border-gray-800 dark:bg-slate-900/80"
      >
        <nav className="flex items-center space-x-1 px-4 py-2 md:space-x-2 md:py-2.5">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              className="flex flex-col items-center gap-1 rounded-full px-2 py-1.5 text-xs font-medium transition-all hover:bg-gray-100 dark:hover:bg-slate-800 md:flex-row md:gap-2 md:px-3 md:py-2 md:text-sm"
              asChild
            >
              <a
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
              >
                {item.icon}
                <span className="hidden xs:inline md:inline">{item.name}</span>
              </a>
            </Button>
          ))}

          {/* Command menu button */}
          <Button
            onClick={() => setOpen(true)}
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1 rounded-full px-2 py-1.5 text-xs font-medium transition-all hover:bg-gray-100 dark:hover:bg-slate-800 md:flex-row md:gap-2 md:px-3 md:py-2 md:text-sm"
          >
            <CommandIcon className="h-5 w-5" />
            <span className="hidden xs:inline md:inline">Menu</span>
          </Button>
        </nav>
      </motion.div>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
            >
              <span>Print</span>
            </CommandItem>
          </CommandGroup>
          {links.length > 0 && (
            <>
              <CommandGroup heading="Links">
                {links.map(({ url, title }) => (
                  <CommandItem
                    key={url}
                    onSelect={() => {
                      setOpen(false);
                      window.open(url, "_blank");
                    }}
                  >
                    <span>{title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </>
          )}
          <CommandGroup heading="Navigation">
            {navItems.map((item) => (
              <CommandItem
                key={item.name}
                onSelect={() => {
                  setOpen(false);
                  if (item.href.startsWith("#")) {
                    scrollToSection(item.href.substring(1));
                  } else {
                    window.location.href = item.href;
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
