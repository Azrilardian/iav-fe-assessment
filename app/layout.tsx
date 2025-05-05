import { ReactNode } from 'react'

import { cookies } from 'next/headers'

import { interFont } from '@/src/assets/fonts'

import App from './app'

import '../src/assets/styles/main.scss'

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const userData = (await cookies()).get('userData')?.value
  const user = userData ? JSON.parse(userData) : null

  return (
    <html lang='en'>
      <body
        suppressHydrationWarning
        className={`${interFont.className} text-xl antialiased`}
      >
        <App user={user}>{children}</App>
      </body>
    </html>
  )
}
