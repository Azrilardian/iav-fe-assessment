import { ReactNode } from 'react'

import type { Metadata } from 'next'

import { interFont } from '@/src/assets/fonts'

import '../src/assets/styles/main.scss'

import App from './app'

export const metadata: Metadata = {
  title: 'Project Name',
  description: 'Project Description'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${interFont.className} font-sans text-xl antialiased`}>
        <App>{children}</App>
      </body>
    </html>
  )
}
