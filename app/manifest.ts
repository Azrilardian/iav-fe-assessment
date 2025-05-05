import type { MetadataRoute } from 'next'

import { PROJECT_NAME } from '@/src/config/env'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: PROJECT_NAME,
    short_name: PROJECT_NAME,
    description: `The ${PROJECT_NAME} app`,
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF',
    theme_color: '#EA580C',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}
