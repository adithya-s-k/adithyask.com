"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HomeIcon,
  BookOpenIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  CodeIcon,
  FileTextIcon,
  CommandIcon,
} from "lucide-react";
import { cn, scrollToSection } from "@/lib/utils";
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

  // Highlight the section currently crossing the middle of the viewport
  const [activeSection, setActiveSection] = useState("top");
  React.useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.substring(1)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // navItems is static
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // Icon-only pills on small screens, icon + label from md up
  const itemClassName =
    "flex h-10 min-w-10 shrink-0 items-center justify-center gap-2 rounded-full px-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-gray-100 hover:text-foreground md:px-3.5 [&_svg]:size-[18px] [&_svg]:shrink-0";

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 print:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-auto max-w-full rounded-full border border-gray-200 bg-white/80 shadow-lg backdrop-blur-md"
      >
        <nav
          aria-label="Section navigation"
          className="flex items-center gap-0.5 p-1.5 md:gap-1"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                aria-label={item.name}
                aria-current={isActive ? "location" : undefined}
                title={item.name}
                className={cn(
                  itemClassName,
                  isActive && "bg-gray-100 text-foreground",
                )}
              >
                {item.icon}
                <span className="hidden md:inline">{item.name}</span>
              </a>
            );
          })}

          <span className="mx-0.5 h-5 w-px shrink-0 bg-gray-200" />

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open command menu"
            title="Menu (⌘J)"
            className={itemClassName}
          >
            <CommandIcon />
            <span className="hidden md:inline">Menu</span>
          </button>
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
