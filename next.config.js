/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => [
    {
      source: '/public/index.html',
      destination: '/pages/api/game.js',
    },
  ],
};

module.exports = nextConfig;
