'use client'

import { FC } from 'react'

import { ProgressProvider } from '@bprogress/next/app'
import { HeroUIProvider } from '@heroui/react'
import { useRouter } from 'next/navigation'

import { colors } from '@/src/theme/color'

import { ProvidersProps } from './types'
import SWRProvider from '../swr-provider'

const Providers: FC<ProvidersProps> = (props) => {
  const { children } = props

  const router = useRouter()

  return (
    <SWRProvider>
      <HeroUIProvider navigate={router.push}>
        <ProgressProvider
          height='2px'
          color={colors.color.palette.brandPrimary}
          options={{ showSpinner: false }}
        >
          {children}
        </ProgressProvider>
      </HeroUIProvider>
    </SWRProvider>
  )
}

export default Providers
