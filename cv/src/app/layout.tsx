import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { RESUME_DATA } from "@/data/resume-data";
import { PostHogProvider } from "./providers";

import "./globals.css";
import React from "react";

const siteTitle = `${RESUME_DATA.name} | ${RESUME_DATA.about}`;

export const metadata: Metadata = {
  metadataBase: new URL(RESUME_DATA.personalWebsiteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: RESUME_DATA.summary,
  applicationName: RESUME_DATA.name,
  authors: [{ name: RESUME_DATA.name, url: RESUME_DATA.personalWebsiteUrl }],
  creator: RESUME_DATA.name,
  publisher: RESUME_DATA.name,
  keywords: [
    RESUME_DATA.name,
    "Adithya Kolavi",
    "Research Engineer",
    "Hugging Face",
    "Reinforcement Learning",
    "RL Environments",
    "OpenEnv",
    "FineEnvs",
    "Repo2RLEnv",
    "Post-training",
    "Multilingual AI",
    "Vision-Language Models",
    "Document AI",
    "CognitiveLab",
    "Nayana",
    "Ambari",
    "Open Source AI",
    "AI Researcher",
  ],
  openGraph: {
    title: siteTitle,
    description: RESUME_DATA.summary,
    url: "/",
    siteName: RESUME_DATA.name,
    locale: "en_US",
    type: "profile",
    firstName: "Adithya",
    lastName: "Kolavi",
    username: "adithya_s_k",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: RESUME_DATA.summary,
    creator: "@adithya_s_k",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <PostHogProvider>
          {children}
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}
