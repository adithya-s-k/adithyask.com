/** @type {import('next-sitemap').IConfig} */
const fs = require("fs");
const path = require("path");

// Load resume data to get blog slugs
const resumeDataPath = path.join(
  process.cwd(),
  "src",
  "data",
  "resume-data.tsx",
);
let blogSlugs = [];

try {
  // Extract blog slugs using regex since we can't directly import TypeScript in Node.js
  const content = fs.readFileSync(resumeDataPath, "utf8");
  const blogMatches = content.matchAll(/"slug":\s*"([^"]+)"/g);

  for (const match of blogMatches) {
    if (match[1]) {
      blogSlugs.push(match[1]);
    }
  }

  console.log(`Found ${blogSlugs.length} blog posts for sitemap`);
} catch (error) {
  console.error("Error reading blog data:", error);
}

// Define additional pages to include in sitemap
const additionalPaths = [
  "/cognitivelab",
  "/blog",
  ...blogSlugs.map((slug) => `/blog/${slug}`),
];

module.exports = {
  siteUrl: "https://adithyask.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  additionalPaths: async (config) => {
    const result = [];

    for (const path of additionalPaths) {
      result.push({
        loc: path,
        changefreq: path.includes("/blog/") ? "monthly" : "weekly",
        priority: path === "/cognitivelab" ? 0.9 : path === "/blog" ? 0.8 : 0.7,
        lastmod: new Date().toISOString(),
      });
    }

    return result;
  },
  // Optional: add default priority and changefreq
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
};
