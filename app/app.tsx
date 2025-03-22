'use client'

import { ReactNode } from 'react'

import dynamic from 'next/dynamic'

const ClientApp = dynamic(() => import('./client-app'), {
  ssr: false
})

const App = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <ClientApp>{children}</ClientApp>
}

export default App
