import type { MetadataRoute } from 'next'

import { WEBSITE_URL } from '@/src/config/env'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/products',
          '/products/*',
          '/api-sitemap.xml',
          '/sitemap.xml'
        ],
        disallow: [
          '/favorites',
          '/cart',
          '/payment/',
          '/api/*',
          '/*/_*',
          '/404',
          '/500'
        ]
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/']
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/private/'
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/']
      }
    ],
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
    host: WEBSITE_URL
  }
}
