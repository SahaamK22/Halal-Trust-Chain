// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  eslint: {
    // ✅ This disables linting during `next build` (e.g. on Vercel)
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
