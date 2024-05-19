import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Adithya S Kolavi",
  description: "AI Researcher, Building Generative AI solutions as scale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cv.adithyask.com", // Replace with your website URL
    title: "Adithya S Kolavi",
    description: "AI Researcher, Building Generative AI solutions as scale",
    images: [
      {
        url: "https://cv.adithyask.com/og-image.png", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Adithya S Kolavi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adithya_s_k", // Replace with your Twitter handle
    creator: "@adithya_s_k", // Replace with the content creator's Twitter handle
    title: "Adithya S Kolavi",
    description: "AI Researcher, Building Generative AI solutions as scale",
    images: [
      {
        url: "https://cv.adithyask.com/og-image.png", // Replace with your Twitter image URL
        alt: "Adithya S Kolavi",
      },
    ],
  },
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
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
