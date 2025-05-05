import withBundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false
  },
  experimental: {
    cssChunking: true,
    optimizePackageImports: ['@heroui/react', 'react-hook-form']
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    SENTRY_DSN: process.env.SENTRY_DSN,
    ENVIRONMENT: process.env.ENVIRONMENT
  },
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

export default bundleAnalyzer(nextConfig)
