import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { RESUME_DATA } from "@/data/resume-data";
import { PostHogProvider } from "./providers";

import "./globals.css";
import React from "react";

// Updated Metadata for better SEO
export const metadata: Metadata = {
  metadataBase: new URL(RESUME_DATA.personalWebsiteUrl), // Set the base URL
  title: {
    default: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    template: `%s | ${RESUME_DATA.name}`, // Template for child pages
  },
  description: RESUME_DATA.summary,
  keywords: [
    "AI Researcher",
    "Generative AI",
    "Portfolio",
    RESUME_DATA.name,
    ...RESUME_DATA.skills,
  ],
  openGraph: {
    title: {
      default: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
      template: `%s | ${RESUME_DATA.name}`,
    },
    description: RESUME_DATA.summary,
    url: RESUME_DATA.personalWebsiteUrl,
    siteName: RESUME_DATA.name,
    images: [
      {
        url: "/website_ss.png", // Updated to use website_ss.png
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
      template: `%s | ${RESUME_DATA.name}`,
    },
    description: RESUME_DATA.summary,
    // site: "@your_twitter_handle", // Add site handle if available
    creator: "@adithya_s_k", // Already present, keep it
    images: ["/website_ss.png"], // Updated to use website_ss.png
  },
  alternates: {
    canonical: RESUME_DATA.personalWebsiteUrl,
  },
  // Add robots meta tag if needed (optional)
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
  // Add verification tokens if needed (optional)
  // verification: {
  //   google: 'YOUR_GOOGLE_VERIFICATION_TOKEN',
  //   yandex: 'YOUR_YANDEX_VERIFICATION_TOKEN',
  // },
};

// If loading a variable font, you don't need to specify the font weight
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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body>
        <PostHogProvider>
          {children}
          <Analytics /> {/* Vercel Analytics */}
        </PostHogProvider>
      </body>
    </html>
  );
}
