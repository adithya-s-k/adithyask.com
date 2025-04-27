/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   "media.licdn.com",
    //   "analyticsindiamag.com",
    //   "www.marktechpost.com",
    //   "runacap.com",
    //   "www.aibase.com",
    //   "hub.docker.com",
    //   "huggingface.co",
    //   "arxiv.org",
    //   "d12aarmt01l54a.cloudfront.net", // Added cloudfront domain
    //   "abs.twimg.com", // Added Twitter image domain
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
