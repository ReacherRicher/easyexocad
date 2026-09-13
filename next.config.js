/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: [],
  },
  experimental: {
    // App Router is stable in Next.js 14, but keep this for future options
  },
}

module.exports = nextConfig
