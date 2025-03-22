import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false
  },
  experimental: {
    cssChunking: true,
    useLightningcss: true,
    optimizePackageImports: ['@heroui/react']
  },
  env: {
    API_BASE_URL: '',
    SENTRY_DSN: '',
    ENVIRONMENT: ''
  },
  trailingSlash: true
}

export default nextConfig
