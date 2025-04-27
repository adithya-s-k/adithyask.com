"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShineBorder } from "@/components/magicui/shine-border";
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Award,
  Star,
  Download,
  Github,
  Globe,
  FileText,
  BookmarkIcon,
  Cpu,
  Database,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Publication } from "@/components/published-work";
import { BookmarkCard } from "@/components/bookmark-card"; // Import the new component
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton if not already
import { BlogNavbar } from "@/components/blog-navbar"; // Import BlogNavbar
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data"; // Import resume data for base URL

// Define project type for better type safety
interface Project {
  title: string;
  description: string;
  achievements: string[];
  links: Array<{
    title: string;
    url: string;
    icon: React.ReactNode;
    description?: string; // Significance note goes here
  }>;
}

const bookmarks = [
  {
    title: "Cognitive Computing Lab @ IISc",
    url: "https://labs.dese.iisc.ac.in/cclab/",
    description: "Official website of the Cognitive Computing Lab at IISc.",
  },
  {
    title: "Prof. Raghavan Srinivasan",
    url: "https://labs.dese.iisc.ac.in/cclab/people/raghavan-srinivasan/",
    description:
      "Profile of the Principal Investigator of the Cognitive Computing Lab.",
  },
  {
    title: "Research Directions",
    url: "https://labs.dese.iisc.ac.in/cclab/research/",
    description: "Overview of the research areas explored by the lab.",
  },
  {
    title: "Publications",
    url: "https://labs.dese.iisc.ac.in/cclab/publications/",
    description: "List of research papers published by the lab members.",
  },
  {
    title: "Lab Members",
    url: "https://labs.dese.iisc.ac.in/cclab/people/",
    description: "Current members and alumni of the Cognitive Computing Lab.",
  },
  {
    title: "Contact Information",
    url: "https://labs.dese.iisc.ac.in/cclab/contact/",
    description: "How to get in touch with the lab.",
  },
];

export default function CognitiveLabPage() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Project data for Ambari
  const ambariProject: Project = {
    title: "Ambari",
    description:
      "India&apos;ss first bilingual Kannada-English LLM, set a new benchmark by being SoTA at the time of its launch. Trained with a modest budget of just $1,000 on Azure&apos;ss infrastructure, it showcased how powerful AI can emerge even with limited resources.",
    achievements: [
      "SoTA bilingual Kannada-English model at launch time",
      "Featured in Meta&apos;ss keynote at the Build with AI summit",
      "Evaluated in research papers by NVIDIA and Microsoft",
      "Highlighted in official posts on India.gov.ai",
    ],
    links: [
      {
        title: "Launch Announcement",
        url: "https://www.linkedin.com/posts/adithya-s-kolavi_llm-generatieveai-ai-activity-7151979718878105600-Eyhq",
        icon: <ExternalLink className="h-4 w-4" />,
        description:
          "Official LinkedIn post announcing Ambari's launch and initial impact.",
      },
      {
        title: "Analytics India Magazine",
        url: "https://analyticsindiamag.com/deep-tech/cognitivelab-unveils-ambari-bilingual-language-models-in-kannada-english/",
        icon: <BookOpen className="h-4 w-4" />,
        description:
          "Media coverage detailing Ambari's features and its significance as a pioneering bilingual model.",
      },
      {
        title: "Meta AI Summit",
        url: "https://www.linkedin.com/posts/adithya-s-kolavi_it-was-an-incredible-experience-attending-activity-7257086798613381122-WdIk",
        icon: <ExternalLink className="h-4 w-4" />,
        description:
          "Showcasing Ambari's feature in Meta's keynote, highlighting its recognition.",
      },
      {
        title: "India.gov.ai Feature",
        url: "https://indiaai.gov.in/article/india-needs-more-datasets-in-indic-languages-aditya-s-kolavi-founder-cognitivelab",
        icon: <Globe className="h-4 w-4" />,
        description:
          "Official feature discussing the need for Indic language datasets and CognitiveLab's contribution.",
      },
      {
        title: "NVIDIA Research",
        url: "https://arxiv.org/abs/2406.15053",
        icon: <FileText className="h-4 w-4" />,
        description:
          "Academic validation: Ambari's performance evaluated in an NVIDIA research paper.",
      },
      {
        title: "Microsoft Research",
        url: "https://arxiv.org/pdf/2411.02538",
        icon: <FileText className="h-4 w-4" />,
        description:
          "Further academic recognition: Ambari's evaluation included in a Microsoft research paper.",
      },
    ],
  };

  // Project data for Omniparse
  const omniparseProject: Project = {
    title: "Omniparse",
    description:
      "An open-source tool designed to ingest and parse any type of data into a structured format. With 6,000+ GitHub stars and 10,000+ developers using it monthly, it&apos;ss rapidly gaining traction in the AI space.",
    achievements: [
      "6,000+ GitHub stars and 10,000+ monthly users",
      "Featured on prominent tech blogs like MarkTechPost",
      "Gained 3,000 GitHub stars in just 2 days after launch",
      "10K+ monthly Docker pulls by developers worldwide",
      "Recognized as one of the fastest-growing open-source repositories of Q3 2024",
    ],
    links: [
      {
        title: "IIM Bangalore Launch",
        url: "https://www.linkedin.com/posts/adithya-s-kolavi_innovai-activity-7210964820546715648-W5lD",
        icon: <ExternalLink className="h-4 w-4" />,
        description: "Initial offline launch at IIM Bangalore",
      },
      {
        title: "MarkTechPost Feature",
        url: "https://www.marktechpost.com/2024/07/02/omniparse-an-ai-platform-that-ingests-parses-any-unstructured-data-into-structured-actionable-data-optimized-for-genai-llm-applications/",
        icon: <BookOpen className="h-4 w-4" />,
        description: "Featured article on MarkTechPost",
      },
      {
        title: "AIBase Stats",
        url: "https://www.aibase.com/tool/31353",
        icon: <BarChart3 className="h-4 w-4" />,
        description: "Usage statistics on AIBase",
      },
      {
        title: "Docker Hub",
        url: "https://hub.docker.com/r/savatar101/omniparse",
        icon: <Download className="h-4 w-4" />,
        description: "10K+ monthly Docker pulls",
      },
      {
        title: "Lossfunk Residency",
        url: "https://lossfunk.com/residency/",
        icon: <Award className="h-4 w-4" />,
        description: "Part of the prestigious Lossfunk Residency Program",
      },
      {
        title: "YouTube Feature",
        url: "https://youtu.be/KcAHvdY9J6A?si=iHIUKy2AwWV_PWup&t=185",
        icon: <ExternalLink className="h-4 w-4" />,
        description: "Featured on Backstage with Milliars (1M+ subscribers)",
      },
      {
        title: "ROSS Index",
        url: "https://runacap.com/ross-index/q3-2024/",
        icon: <Star className="h-4 w-4" />,
        description: "Top 20 Fastest-Growing OSS Startups",
      },
    ],
  };

  // Project data for Indic LLM Infrastructure
  const indicInfraProject: Project = {
    title: "Indic LLM Infrastructure",
    description:
      "We&apos;sve developed several tools to support Indic language AI development, including the India LLM Leaderboard, Indic Eval, and Indic Tokeniser.",
    achievements: [
      "Standardized benchmarking platform for Indic language models",
      "Entire infrastructure hosted on Azure for scalability and reliability",
      "Part of the Leaderboard Mission at People+AI",
      "Featured by NASSCOM as Tech Maverick innovation",
    ],
    links: [
      {
        title: "Official Launch",
        url: "https://www.linkedin.com/posts/adithya-s-kolavi_introducing-%F0%9D%97%9C%F0%9D%97%BB%F0%9D%97%B1%F0%9D%97%B6%F0%9D%97%B0-%F0%9D%97%9F%F0%9D%97%9F%F0%9D%97%A0-%F0%9D%97%9F%F0%9D%97%B2%F0%9D%97%AE%F0%9D%97%B1%F0%9D%97%B2%F0%9D%97%BF%F0%9D%97%AF%F0%9D%97%BC%F0%9D%97%AE%F0%9D%97%BF%F0%9D%97%B1-activity-7181970272504217600-_7Ti",
        icon: <ExternalLink className="h-4 w-4" />,
        description: "Launch announcement on LinkedIn",
      },
      {
        title: "Analytics India Feature",
        url: "https://analyticsindiamag.com/ai-features/this-20-year-old-ai-researcher-created-the-much-needed-indic-llm-leaderboard/",
        icon: <BookOpen className="h-4 w-4" />,
        description: "Media coverage of the Indic LLM Leaderboard",
      },
      {
        title: "NASSCOM Instagram",
        url: "https://www.instagram.com/nasscom_in/reel/C6yNc65y9C3/",
        icon: <ExternalLink className="h-4 w-4" />,
        description: "Featured in NASSCOM&apos;ss TechMavericks series",
      },
      {
        title: "NASSCOM Twitter",
        url: "https://x.com/nasscom/status/1788876452475089025",
        icon: <ExternalLink className="h-4 w-4" />,
        description: "Featured by NASSCOM on Twitter",
      },
      {
        title: "People+AI Collaboration",
        url: "https://peopleplus.ai/leaderboard",
        icon: <Globe className="h-4 w-4" />,
        description: "Part of the Leaderboard Mission at People+AI",
      },
      {
        title: "GEM Leaderboard",
        url: "https://peopleplus.ai/leaderboard",
        icon: <BarChart3 className="h-4 w-4" />,
        description: "Glocal Evaluation of Models (GEM)",
      },
      {
        title: "Model Evaluation Roundtable",
        url: "https://www.linkedin.com/posts/adithya-s-kolavi_thrilled-to-share-that-i-was-part-of-the-activity-7195376703198670848-tDuG",
        icon: <ExternalLink className="h-4 w-4" />,
        description: "First ever Model Evaluation Roundtable",
      },
      {
        title: "Gemma vs Llama Analysis",
        url: "https://analyticsindiamag.com/deep-tech/why-google-gemma-is-better-than-metas-llama-3-for-indic-llms/",
        icon: <BookOpen className="h-4 w-4" />,
        description: "Comparative analysis for Indic LLMs",
      },
    ],
  };

  // Project data for Nayana
  const nayanaProject: Project = {
    title: "Project Nayana",
    description:
      "A revolutionary multilingual, multimodal, multitask language model that supports 22 languages, including text, audio, and vision capabilities.",
    achievements: [
      "Supports 22 languages with text, audio, and vision capabilities",
      "Nayana OCR accepted at the prestigious NAACL conference",
      "SoTA OCR model in 10 different Indic languages",
      "Received grant from Meta (Llama Impact Grant)",
      "Available on Hugging Face for easy access and use",
    ],
    links: [
      {
        title: "Hugging Face",
        url: "https://huggingface.co/Nayana-cognitivelab",
        icon: <ExternalLink className="h-4 w-4" />,
        description: "Nayana models on Hugging Face",
      },
      {
        title: "NAACL Workshop",
        url: "https://lm4uc.github.io/",
        icon: <BookOpen className="h-4 w-4" />,
        description: "Language Models for Underserved Communities",
      },
    ],
  };

  // Updated Timeline milestones
  const evolutionMilestones = [
    {
      date: "May 2023",
      title: "Founding & Microsoft for Startups",
      description:
        "CognitiveLab founded as an open-source first research lab in Bangalore. Accepted into the Microsoft for Startups program around the same time.",
    },
    {
      date: "January 2024",
      title: "Ambari Launch",
      description:
        "Released India&apos;ss first bilingual Kannada-English LLM (Ambari), achieving SoTA performance with limited resources.",
    },
    {
      date: "March 2024",
      title: "Indic LLM Infrastructure",
      description:
        "Launched tools and benchmarks like the Indic LLM Leaderboard to support Indic language AI development.",
    },
    {
      date: "May 2024", // Assuming Omniparse launch month, check if correct
      title: "OmniParse Launch",
      description:
        "Released OmniParse, an open-source data parsing tool that quickly gained traction (6,000+ GitHub stars).",
    },
    {
      date: "September 2024",
      title: "Nayana OCR @ NAACL",
      description:
        "First paper on Nayana OCR accepted at the prestigious NAACL conference workshop.",
    },
    {
      date: "April 2025", // Updated Grant info
      title: "Meta Llama Impact Grant",
      description:
        "Awarded the grant from Meta (Llama Impact Grant) to advance multilingual AI (Project Nayana). Public announcement on April 29, 2025.",
    },
    {
      date: "Present Day",
      title: "Ongoing Research",
      description:
        "Continuing work on Nayana, OmniParse, Indic infrastructure, and exploring new frontiers in open-source AI.",
    },
  ];

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      {/* Add BlogNavbar here */}
      <div className="mb-12">
        <BlogNavbar />
      </div>

      {/* Back button */}
      <Link href="/" className="mb-8 inline-block">
        <Button variant="ghost" size="sm" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Resume
        </Button>
      </Link>

      {/* Header section with shine border */}
      <div className="relative mb-12 overflow-hidden rounded-xl">
        <ShineBorder
          shineColor={["#4F46E5", "#EC4899", "#8B5CF6"]}
          borderWidth={3}
          duration={8}
        />
        <div className="relative z-10 rounded-xl bg-card p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="relative h-24 w-24 shrink-0">
              <Image
                src="/cognitivelab-logo.png"
                alt="CognitiveLab Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="mb-2 text-3xl font-bold">CognitiveLab</h1>
              <p className="text-lg text-muted-foreground">
                An Open Source First AI Research Lab Building from India, for
                the World.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <Button variant="outline" size="sm" asChild className="gap-1">
                  <a
                    href="https://www.cognitivelab.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Website
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="gap-1">
                  <a
                    href="https://www.linkedin.com/company/cognitivelabai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="gap-1">
                  <a
                    href="https://x.com/cognitivelab_ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEW About CognitiveLab Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose dark:prose-invert mb-12 max-w-none"
      >
        <h2 className="mb-4 text-3xl font-bold">About CognitiveLab</h2>
        <p className="mb-4 text-lg">
          CognitiveLab is an <strong>open-source first AI research lab</strong>{" "}
          founded in Bangalore in <strong>May 2023</strong>. Our core mission is
          to build impactful AI technology{" "}
          <strong>from India for the world</strong>, with a strong focus on
          democratizing access and fostering innovation through open
          collaboration.
        </p>
        <p className="mb-4 text-lg">
          We develop cutting-edge models and tools, particularly excelling in
          multilingual AI for Indic languages (like <strong>Ambari</strong> and{" "}
          <strong>Project Nayana</strong>) and creating widely adopted
          open-source software (like <strong>OmniParse</strong> and the{" "}
          <strong>Indic LLM Leaderboard</strong>). We were also selected for the{" "}
          <strong>Microsoft for Startups</strong> program shortly after our
          inception.
        </p>
        <p className="text-lg text-muted-foreground">
          To sustain our research and open-source contributions, CognitiveLab
          generates revenue through <strong>consulting services</strong>,
          helping startups and established companies build MVPs, production
          systems, and custom AI solutions.
        </p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose dark:prose-invert mb-12 max-w-none"
      >
        <div className="mb-10">
          <h2 className="mb-4 text-3xl font-bold">Our Mission & Approach</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            CognitiveLab is dedicated to developing state-of-the-art AI models
            in India that create tangible impact globally. We prioritize{" "}
            <strong>open-source development</strong> to foster innovation,
            accelerate progress, and ensure accessibility. We balance our focus
            between critical multilingual/Indic projects and broadly applicable
            AI tools like data parsers and educational resources (e.g., AI
            Engineering Academy).
          </p>
          <div className="mb-10 rounded-lg border border-primary/10 bg-primary/5 p-6">
            <h3 className="mb-4 text-xl font-bold">
              TL;DR - Our Major Achievements
            </h3>
            <ul className="list-none space-y-4 pl-0">
              <li className="flex gap-2">
                <Badge variant="outline" className="h-6 shrink-0 bg-primary/10">
                  Nayana
                </Badge>
                <span>
                  Revolutionary multilingual, multimodal model supporting 22
                  languages with SoTA OCR capabilities
                </span>
              </li>
              <li className="flex gap-2">
                <Badge variant="outline" className="h-6 shrink-0 bg-primary/10">
                  Omniparse
                </Badge>
                <span>
                  6,000+ GitHub stars, 10,000+ monthly users, recognized as one
                  of the fastest-growing open-source repositories
                </span>
              </li>
              <li className="flex gap-2">
                <Badge variant="outline" className="h-6 shrink-0 bg-primary/10">
                  Ambari
                </Badge>
                <span>
                  India&apos;ss first bilingual Kannada-English LLM, evaluated
                  by NVIDIA and Microsoft, featured by Meta
                </span>
              </li>
              <li className="flex gap-2">
                <Badge variant="outline" className="h-6 shrink-0 bg-primary/10">
                  Meta Grant
                </Badge>
                <span>
                  Received Llama Impact Grant for advancing multilingual AI
                  capabilities
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Section */}
        <motion.section
          variants={itemVariants}
          className="mb-12 border-t pt-12"
        >
          <h2 className="mb-6 text-3xl font-bold">Why CognitiveLab Exists</h2>
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-bold">The Language Gap</h3>
              <p className="mb-4 text-lg">
                Despite India&apos;ss linguistic diversity (22 official
                languages), AI development historically overlooked many regional
                languages, creating a digital divide for over 500 million
                non-English fluent speakers.
              </p>
              <p className="text-lg">
                CognitiveLab aims to bridge this gap by building high-quality AI
                for underserved languages, ensuring technological equity.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold">
                The Resource Imbalance & Open Source Need
              </h3>
              <p className="mb-4 text-lg">
                Access to resources and datasets for Indic AI was limited, often
                controlled by large entities with less focus on open community
                involvement.
              </p>
              <p className="text-lg">
                We champion an open-source approach to prove impactful AI can
                emerge from India with focused engineering and collaboration,
                empowering local researchers and developers.
              </p>
            </div>
          </div>
        </motion.section>

        {/* How CognitiveLab Has Evolved */}
        <motion.section
          variants={itemVariants}
          className="mb-12 border-t pt-12"
        >
          <h2 className="mb-6 text-3xl font-bold">
            How CognitiveLab Has Evolved
          </h2>
          <p className="mb-8 text-lg">
            From a bootstrapped initiative in May 2023 to securing international
            grants, our journey reflects our growing impact. Here are some key
            milestones:
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-[15px] top-0 w-0.5 bg-primary/20 md:left-1/2"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {evolutionMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Dot */}
                  <div className="absolute left-[7px] h-6 w-6 rounded-full border-4 border-primary/30 bg-background md:left-1/2 md:-ml-[11px]"></div>

                  {/* Content */}
                  <div className="ml-10 md:ml-0 md:w-[calc(50%-20px)]">
                    <div className="rounded-lg border bg-card p-4 shadow-sm">
                      <Badge variant="outline" className="mb-2">
                        {milestone.date}
                      </Badge>
                      <h3 className="text-lg font-bold">{milestone.title}</h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-16 space-y-16"
        >
          {/* Ambari Project */}
          <motion.div variants={itemVariants} className="border-t pt-12">
            <h2 className="mb-6 flex items-center gap-2 text-3xl font-bold">
              <Badge className="h-7 text-base">01</Badge> Ambari
            </h2>
            <div className="mb-6">
              <p className="mb-4 text-lg">{ambariProject.description}</p>

              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {ambariProject.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Award className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <h4 className="mb-4 text-lg font-medium">References & Resources</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {ambariProject.links.map((link, index) => (
                <BookmarkCard key={index} link={link} /> // Use BookmarkCard here
              ))}
            </div>
          </motion.div>

          {/* Omniparse Project */}
          <motion.div variants={itemVariants} className="border-t pt-12">
            <h2 className="mb-6 flex items-center gap-2 text-3xl font-bold">
              <Badge className="h-7 text-base">02</Badge> OmniParse
            </h2>
            <div className="mb-6">
              <p className="mb-4 text-lg">{omniparseProject.description}</p>

              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {omniparseProject.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Star className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <h4 className="mb-4 text-lg font-medium">References & Resources</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {omniparseProject.links.map((link, index) => (
                <BookmarkCard key={index} link={link} /> // Use BookmarkCard here
              ))}
            </div>
          </motion.div>

          {/* Indic LLM Infrastructure Project */}
          <motion.div variants={itemVariants} className="border-t pt-12">
            <h2 className="mb-6 flex items-center gap-2 text-3xl font-bold">
              <Badge className="h-7 text-base">03</Badge> Indic LLM
              Infrastructure
            </h2>
            <div className="mb-6">
              <p className="mb-4 text-lg">{indicInfraProject.description}</p>

              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {indicInfraProject.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Database className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <h4 className="mb-4 text-lg font-medium">References & Resources</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {indicInfraProject.links.map((link, index) => (
                <BookmarkCard key={index} link={link} /> // Use BookmarkCard here
              ))}
            </div>
          </motion.div>

          {/* Nayana Project */}
          <motion.div variants={itemVariants} className="border-t pt-12">
            <h2 className="mb-6 flex items-center gap-2 text-3xl font-bold">
              <Badge className="h-7 text-base">04</Badge> Project Nayana
            </h2>
            <div className="mb-6">
              <p className="mb-4 text-lg">{nayanaProject.description}</p>

              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {nayanaProject.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Cpu className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <h4 className="mb-4 text-lg font-medium">References & Resources</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {nayanaProject.links.map((link, index) => (
                <BookmarkCard key={index} link={link} /> // Use BookmarkCard here
              ))}
            </div>
          </motion.div>

          {/* Meta Grant Section */}
          <motion.div variants={itemVariants} className="border-t pt-12">
            <h2 className="mb-6 flex items-center gap-2 text-3xl font-bold">
              <Badge className="h-7 text-base">05</Badge> Llama Impact Grant
            </h2>
            <div className="mb-6">
              <p className="mb-6 text-lg">
                In recognition of our work, particularly with Project Nayana and
                the Indic LLM Leaderboard, CognitiveLab was awarded the
                prestigious <strong>Llama Impact Grant by Meta</strong>. This
                significant support, set to be publicly announced on{" "}
                <strong>April 29, 2025</strong>, will accelerate our efforts in
                advancing multilingual and multimodal AI for diverse languages.
              </p>

              <Card className="border-primary/10 bg-primary/5 p-4">
                <CardHeader>
                  <CardTitle>How We&apos;sll Utilize the Grant</CardTitle>
                  <CardDescription>
                    Advancing Project Nayana and Indic language AI
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>
                      Expand language coverage across all 22 official Indian
                      languages
                    </li>
                    <li>
                      Deepen multimodal capabilities connecting text, audio, and
                      visual modalities
                    </li>
                    <li>
                      Develop high-quality training data for low-resource
                      languages
                    </li>
                    <li>
                      Enhance the Indic Tokenizer to better handle morphological
                      richness
                    </li>
                    <li>
                      Create inference optimization techniques for deployment on
                      constrained hardware
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.section>

        {/* Open Source Philosophy Section */}
        <motion.section
          variants={itemVariants}
          className="mb-12 border-t pt-12"
        >
          <h2 className="mb-6 text-3xl font-bold">Why We Choose Open Source</h2>
          <p className="mb-6 text-lg">
            CognitiveLab&apos;ss commitment to open-source AI is deeply rooted
            in our foundational philosophy of democratizing artificial
            intelligence. We believe that open source has the most direct and
            widespread impact, benefiting both developers and end-users.
          </p>

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Accessibility for All</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Open-source AI fundamentally aligns with our mission to make
                  advanced AI technologies accessible across diverse
                  communities, especially in regions where language barriers
                  have historically limited technological inclusion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Democratization of Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  By embracing open-source models, we&apos;sre enabling
                  developers, researchers, and organizations throughout India
                  and beyond to build on powerful foundations without
                  prohibitive costs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community-Powered Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The vibrant ecosystem around open-source models has
                  accelerated our progress through collaborative debugging,
                  shared improvements, and collective problem-solving that
                  proprietary approaches simply cannot match.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Indigenous Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Open-source allows us to develop locally relevant AI solutions
                  that address uniquely Indian challenges while contributing to
                  the global AI ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </motion.div>

      {/* <Section title="CognitiveLab @ IISc" subtitle="Useful Links & Info">
        <p className="mb-6 text-muted-foreground">
          Hey this is Adithya S K, this is how Cogntivelab started what we do
          .....
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bookmarks.map((bookmark) => (
            <BookmarkCard
              key={bookmark.url}
              title={bookmark.title}
              url={bookmark.url}
              description={bookmark.description} // Pass the description prop
            />
          ))}
        </div>
      </Section> */}
    </div>
  );
}
