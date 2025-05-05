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
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN
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
