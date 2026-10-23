"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MailIcon, ArrowRight, FileDown } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { FeaturedRepos } from "@/components/featured-repo";
import { PublishedWorkSection } from "@/components/published-work";
import { AchievementsNewsSection } from "@/components/achievements-news";
import { HoverNavbar } from "@/components/hover-navbar";
import { BlogCard } from "@/components/blog-card";
import { WorkTimeline } from "@/components/work-timeline";
import { HyperText } from "@/components/magicui/hyper-text";
import { AboutMeMorph } from "@/components/about-me-morph";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Repository } from "@/lib/github";

const INTRO_SEEN_KEY = "intro-seen";

// Runs before paint: skip the intro for repeat visits in this session and for
// visitors who prefer reduced motion, without a flash of the overlay.
const introGuardScript = `try{if(sessionStorage.getItem("${INTRO_SEEN_KEY}")||matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.dataset.introSeen="1"}}catch(e){}`;

const NameAnimation = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (document.documentElement.dataset.introSeen) {
      setVisible(false);
      return;
    }
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    } catch {}

    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  const nameWords = RESUME_DATA.name.split(" ");

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: introGuardScript }} />
      <AnimatePresence>
        {visible && (
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="intro-overlay fixed inset-0 z-[60] flex items-center justify-center bg-white px-4 print:hidden"
          >
            <div className="relative">
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
              <div className="relative flex flex-wrap justify-center gap-x-4 text-center">
                {nameWords.map((word, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <HyperText className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl lg:text-9xl">
                      {word}
                    </HyperText>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-2 text-center md:mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <HyperText className="text-sm tracking-wide text-gray-600">
                  {RESUME_DATA.about}
                </HyperText>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Fallback for when the server-side GitHub fetch came back empty (e.g. rate limited)
function useRepositories(initialRepos: Repository[]) {
  const [repos, setRepos] = useState(initialRepos);
  const [loading, setLoading] = useState(initialRepos.length === 0);

  useEffect(() => {
    if (initialRepos.length > 0) return;
    let cancelled = false;
    Promise.all(
      RESUME_DATA.open_source.map((url) =>
        fetch(url.replace("https://github.com", "https://api.github.com/repos"))
          .then((res) => (res.ok ? res.json() : null))
          .catch(() => null),
      ),
    ).then((results) => {
      if (cancelled) return;
      setRepos(results.filter(Boolean));
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [initialRepos]);

  return { repos, loading };
}

export function HomePage({ initialRepos }: { initialRepos: Repository[] }) {
  const { repos, loading } = useRepositories(initialRepos);

  const commandLinks = [
    { url: RESUME_DATA.personalWebsiteUrl, title: "Personal Website" },
    { url: "/blog", title: "Blog" },
    ...RESUME_DATA.contact.social.map((social) => ({
      url: social.url,
      title: social.name,
    })),
  ];

  return (
    <main className="container relative mx-auto px-4 pb-32 pt-8 sm:px-6 md:px-12 md:pt-16 print:p-12">
      <HoverNavbar links={commandLinks} />
      <div
        id="top"
        className="mx-auto w-full max-w-4xl space-y-12 bg-white sm:space-y-14 print:space-y-6"
      >
        <header className="flex items-start justify-between gap-4 sm:items-center sm:gap-6">
          <div className="min-w-0 flex-1 space-y-2">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {RESUME_DATA.name}
            </h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <nav
              aria-label="Contact and social links"
              className="flex flex-wrap gap-1.5 pt-1 print:hidden"
            >
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-9"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    aria-label="Email"
                    title="Email"
                  >
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-9"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
              <Button
                variant="outline"
                className="flex h-9 items-center gap-2"
                asChild
              >
                <a
                  href={RESUME_DATA.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download CV (PDF)"
                >
                  <FileDown className="size-4" />
                  <span>CV</span>
                </a>
              </Button>
            </nav>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>

          <div className="relative size-20 shrink-0 overflow-hidden rounded-xl sm:size-28">
            <Image
              src={RESUME_DATA.avatarUrl}
              alt={`Portrait of ${RESUME_DATA.name}`}
              fill
              priority
              sizes="(min-width: 640px) 112px, 80px"
              className="object-cover"
            />
          </div>
        </header>

        <Section id="about" className="scroll-mt-16">
          <SectionHeading title="About" />
          <p className="text-pretty font-mono text-sm leading-relaxed text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
          <AboutMeMorph />
        </Section>

        <Section id="work" className="scroll-mt-16">
          <SectionHeading title="Work Experience" />
          <WorkTimeline experiences={RESUME_DATA.work} />
        </Section>

        <FeaturedRepos
          repositories={repos}
          title="Open Source"
          loading={loading}
        />

        {RESUME_DATA.publications.length > 0 && (
          <PublishedWorkSection publications={RESUME_DATA.publications} />
        )}

        {RESUME_DATA.achievements.length > 0 && (
          <AchievementsNewsSection achievements={RESUME_DATA.achievements} />
        )}

        <Section id="blog" className="scroll-mt-16">
          <SectionHeading
            title="Latest Writing & Talks"
            subtitle="Guides, articles, and talks on RL environments and open AI"
            action={
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="shrink-0 text-sm font-medium"
              >
                <Link href="/blog" className="inline-flex items-center gap-1">
                  View all
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
            }
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {RESUME_DATA.blogs.slice(0, 2).map((post) => (
              <motion.div
                key={post.slug}
                className="h-full"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="projects" className="print-force-new-page scroll-mt-16">
          <SectionHeading title="Research Projects" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {RESUME_DATA.researchProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            ))}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mt-16">
          <SectionHeading title="Other Projects" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            ))}
          </div>
        </Section>

        <Section id="education" className="scroll-mt-16">
          <SectionHeading title="Education" />
          <div className="space-y-4">
            {RESUME_DATA.education.map((education) => (
              <Card
                key={education.school}
                className="border border-muted p-4 transition-shadow hover:shadow-sm"
              >
                <CardHeader>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-muted-foreground">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 font-mono text-sm text-muted-foreground">
                  {education.degree}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <NameAnimation />
    </main>
  );
}
