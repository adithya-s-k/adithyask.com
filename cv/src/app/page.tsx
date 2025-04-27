"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import {
  GlobeIcon,
  MailIcon,
  PhoneIcon,
  ArrowRight,
  FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import {
  OpenSourceCard,
  OpenSourceSection,
} from "@/components/opensource-card";
import { FeaturedRepos } from "@/components/featured-repo";
import { PublishedWorkSection } from "@/components/published-work";
import { HoverNavbar } from "@/components/hover-navbar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BlogPost, BlogCard } from "@/components/blog-card";
import { InteractiveSkills } from "@/components/interactive-skills";
import { WorkTimeline } from "@/components/work-timeline";
import { HyperText } from "@/components/magicui/hyper-text";
import { AboutMeMorph } from "@/components/about-me-morph";
// import { AboutMeDrawer } from "@/components/about-me-drawer";
import { GitHubStars } from "@/components/github-stars";
import { Metadata } from "next";

// Name animation overlay component
const NameAnimation = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Prevent page scrolling during animation
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2200); // Animation stays for 2.2 seconds (faster than before)

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [visible]);

  const nameWords = RESUME_DATA.name.split(" ");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Faster fade in/out
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }} // Faster background animation
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Name with HyperText animation */}
            <div className="relative flex flex-wrap justify-center gap-x-4 text-center text-4xl font-bold sm:text-6xl lg:text-9xl">
              {nameWords.map((word, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }} // Faster animation with shorter delay
                  className="overflow-hidden"
                >
                  <HyperText className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl lg:text-9xl">
                    {word}
                  </HyperText>
                </motion.div>
              ))}
            </div>

            {/* About text with HyperText */}
            <motion.div
              className="text-center md:mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }} // Faster appearance of about text
            >
              <HyperText className="text-sm tracking-wide text-gray-600">
                {RESUME_DATA.about}
              </HyperText>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Type definition for GitHub repository data
interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string | null;
  owner?: {
    login: string;
    avatar_url: string;
  };
}

export default function Page() {
  const [repoData, setRepoData] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Command menu links
  const commandLinks = [
    {
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
    },
    {
      url: "/blog",
      title: "Blog",
    },
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];

  useEffect(() => {
    // Set animation complete after 4 seconds (slightly longer than the animation duration)
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Check if we have cached data and it's still valid (less than 3 hours old)
        const cachedData = localStorage.getItem("githubRepoData");
        const cachedTimestamp = localStorage.getItem("githubRepoTimestamp");
        const currentTime = new Date().getTime();

        // If we have valid cached data (less than 3 hours old)
        if (
          cachedData &&
          cachedTimestamp &&
          currentTime - parseInt(cachedTimestamp) < 3 * 60 * 60 * 1000
        ) {
          console.log("Using cached GitHub repository data");
          setRepoData(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        // No valid cache, fetch from GitHub API with rate limiting
        console.log("Fetching fresh GitHub repository data with rate limiting");

        // Create a sequential, rate-limited fetch process
        const results = [];
        for (const repoUrl of RESUME_DATA.open_source) {
          try {
            // Add a delay between requests (500ms)
            if (results.length > 0) {
              await new Promise((resolve) => setTimeout(resolve, 500));
            }

            const apiUrl = repoUrl.replace(
              "https://github.com",
              "https://api.github.com/repos",
            );

            console.log(`Fetching data for: ${repoUrl}`);
            const response = await fetch(apiUrl, {
              headers: {
                Accept: "application/vnd.github.v3+json",
              },
            });

            if (!response.ok) {
              console.error(
                `Failed to fetch repo data for ${repoUrl}: ${response.status}`,
              );
              continue;
            }

            const data = await response.json();
            results.push(data);
          } catch (error) {
            console.error(`Error fetching repo data for ${repoUrl}:`, error);
          }
        }

        // Save the fetched data to localStorage with current timestamp
        if (results.length > 0) {
          localStorage.setItem("githubRepoData", JSON.stringify(results));
          localStorage.setItem("githubRepoTimestamp", currentTime.toString());
          setRepoData(results);
        } else if (cachedData) {
          // If all new requests failed but we have old cached data, use that
          console.log("Using expired cache due to fetch failures");
          setRepoData(JSON.parse(cachedData));
        }
      } catch (error) {
        console.error("Error fetching repository data:", error);
        // Try to load from cache even if it's expired in case of error
        try {
          const cachedData = localStorage.getItem("githubRepoData");
          if (cachedData) {
            console.log("Using expired cache due to fetch error");
            setRepoData(JSON.parse(cachedData));
          }
        } catch (cacheError) {
          console.error("Error loading from cache:", cacheError);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      {/* Add the name animation component */}
      <NameAnimation />

      {/* Only show content after animation completes */}
      <AnimatePresence>
        {animationComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HoverNavbar links={commandLinks} />
            <motion.section
              id="top"
              className="mx-auto w-full max-w-4xl space-y-8 bg-white print:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 space-y-1.5">
                  <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
                  <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
                    {RESUME_DATA.about}
                  </p>
                  <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                    {RESUME_DATA.contact.email ? (
                      <Button
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                      >
                        <a href={`mailto:${RESUME_DATA.contact.email}`}>
                          <MailIcon className="size-4" />
                        </a>
                      </Button>
                    ) : null}
                    {RESUME_DATA.contact.social.map((social) => (
                      <Button
                        key={social.name}
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <social.icon className="size-4" />
                        </a>
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      className="flex h-8 items-center gap-2"
                      asChild
                    >
                      <a
                        href={RESUME_DATA.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <FileDown className="size-4" />
                        <span>CV</span>
                      </a>
                    </Button>
                  </div>
                  <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
                    {RESUME_DATA.contact.email ? (
                      <a href={`mailto:${RESUME_DATA.contact.email}`}>
                        <span className="underline">
                          {RESUME_DATA.contact.email}
                        </span>
                      </a>
                    ) : null}
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Avatar className="size-28">
                    <AvatarImage
                      alt={RESUME_DATA.name}
                      src={RESUME_DATA.avatarUrl}
                    />
                    <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
                  </Avatar>
                </motion.div>
              </div>

              <Section id="about">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">About</h2>
                </div>
                <p className="text-pretty font-mono text-sm text-muted-foreground">
                  {RESUME_DATA.summary}
                </p>
                <AboutMeMorph />
              </Section>

              <Section id="work" className="scroll-mt-16">
                <h2 className="text-xl font-bold">Work Experience</h2>
                <WorkTimeline experiences={RESUME_DATA.work} />
              </Section>

              {/* Featured Repositories */}
              {!loading && repoData.length > 0 && (
                <FeaturedRepos
                  repositories={repoData}
                  title="Featured Open Source Work"
                />
              )}

              {/* Published Work Section */}
              {RESUME_DATA.publications &&
                RESUME_DATA.publications.length > 0 && (
                  <div className="scroll-mt-16" id="publications">
                    <PublishedWorkSection
                      publications={RESUME_DATA.publications}
                    />
                  </div>
                )}

              {/* Open Source Section */}
              {/* <Section id="open-source" className="scroll-mt-16 print-force-new-page">
                <h2 className="text-xl font-bold">Open Source Contributions</h2>
                {!loading && repoData.length > 0 ? (
                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {repoData.map((repo) => (
                      <motion.div 
                        key={repo.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <OpenSourceCard repo={repo} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground font-mono text-sm">Loading repository data...</p>
                )}
              </Section> */}

              {/* Remove the conditional rendering that might be causing the section to not show */}
              {/* {!loading && <OpenSourceSection repositories={repoData} />} */}
              {/* Featured Blog Posts Section */}
              <Section id="blog" className="scroll-mt-16">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Latest Blog Posts</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Recent articles and insights
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-sm font-medium"
                  >
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-1"
                    >
                      View all posts
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {RESUME_DATA.blogs.slice(0, 2).map((post) => (
                    <motion.div
                      key={post.slug}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <BlogCard post={post} />
                    </motion.div>
                  ))}
                </div>
              </Section>

              <Section id="skills" className="scroll-mt-16">
                <h2 className="text-xl font-bold">Skills</h2>
                <div className="mt-5">
                  <InteractiveSkills skills={Array.from(RESUME_DATA.skills)} />
                </div>
              </Section>

              <Section
                id="projects"
                className="print-force-new-page scroll-mt-16"
              >
                <h2 className="text-xl font-bold">Research Projects</h2>
                <div className="-mx-3 mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
                  {RESUME_DATA.researchProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        tags={project.techStack}
                        link={"link" in project ? project.link.href : undefined}
                      />
                    </motion.div>
                  ))}
                </div>
              </Section>

              <Section className="print-force-new-page scroll-mt-16">
                <h2 className="text-xl font-bold">Other Projects</h2>
                <div className="-mx-3 mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
                  {RESUME_DATA.projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        tags={project.techStack}
                        link={"link" in project ? project.link.href : undefined}
                      />
                    </motion.div>
                  ))}
                </div>
              </Section>

              <Section id="education" className="scroll-mt-16">
                <h2 className="text-xl font-bold">Education</h2>
                <div className="mt-4 space-y-4">
                  {RESUME_DATA.education.map((education) => (
                    <Card
                      key={education.school}
                      className="overflow-hidden border border-muted p-4 transition-all hover:shadow-sm"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between gap-x-2 text-base">
                          <h3 className="font-semibold leading-none">
                            {education.school}
                          </h3>
                          <div className="text-sm tabular-nums text-gray-500">
                            {education.start} - {education.end}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="mt-2">
                        {education.degree}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </Section>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
