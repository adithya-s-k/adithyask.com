"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon, ListIcon, BookOpenIcon } from "lucide-react";

export function BlogNavbar() {
  const navItems = [
    { name: "Back", icon: <ArrowLeftIcon className="h-5 w-5" />, href: "/" },
    { name: "Home", icon: <HomeIcon className="h-5 w-5" />, href: "/" },
    { name: "All Posts", icon: <ListIcon className="h-5 w-5" />, href: "/blog" },
  ];

  // Handle navigation with animation for page transitions
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Allow normal navigation for blog pages, just adding this for future enhancements
    if (href === window.location.pathname) {
      e.preventDefault(); // Prevent navigation if we're already on the page
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-2 md:pb-4">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="backdrop-blur-md bg-white/70 dark:bg-slate-900/80 rounded-full shadow-lg border border-gray-200 dark:border-gray-800"
      >
        <nav className="flex px-4 py-2 md:py-2.5 space-x-1 md:space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost" 
              size="sm"
              className="flex flex-col md:flex-row items-center gap-1 md:gap-2 rounded-full text-xs md:text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-slate-800 px-2 md:px-3 py-1.5 md:py-2"
              asChild
            >
              <Link href={item.href} onClick={(e) => handleNavigation(e, item.href)}>
                {item.icon}
                <span className="hidden xs:inline md:inline">{item.name}</span>
              </Link>
            </Button>
          ))}
        </nav>
      </motion.div>
    </div>
  );
}