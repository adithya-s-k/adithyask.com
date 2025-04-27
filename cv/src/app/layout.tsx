import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Script from "next/script";
import { RESUME_DATA } from "@/data/resume-data"; // Import RESUME_DATA

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
        url: "/og-image.png", // Relative path to the image in /public
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
    images: ["/og-image.png"], // Use the same OG image (relative path)
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
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_TRACKING_ID', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* PostHog */}
        <Script
          id="posthog"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('YOUR_POSTHOG_API_KEY', {api_host: 'phc_OL7nUCVeKtVJe8eHSKGs8zPTQAyr0hm8opAPFdFlkBz'})
            `,
          }}
        />
      </head>
      <body>{children}</body>
      <Analytics /> {/* Vercel Analytics */}
    </html>
  );
}
