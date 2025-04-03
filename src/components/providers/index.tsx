'use client'

import { FC } from 'react'

import { HeroUIProvider } from '@heroui/react'
import { useRouter } from 'next/navigation'

import { ProvidersProps } from './types'

const Providers: FC<ProvidersProps> = (props) => {
  const { children } = props

  const router = useRouter()

  return <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>
}

export default Providers
