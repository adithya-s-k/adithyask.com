import type { MetadataRoute } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${RESUME_DATA.personalWebsiteUrl}/sitemap.xml`,
    host: RESUME_DATA.personalWebsiteUrl,
  };
}
