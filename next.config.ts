import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false
  },
  experimental: {
    cssChunking: true,
    optimizePackageImports: ['@heroui/react']
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    SENTRY_DSN: process.env.SENTRY_DSN,
    ENVIRONMENT: process.env.ENVIRONMENT
  },
  trailingSlash: true,
  images: {
    remotePatterns: [{ hostname: 'cdn.dummyjson.com' }]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: true
      }
    ]
  }
}

export default nextConfig
