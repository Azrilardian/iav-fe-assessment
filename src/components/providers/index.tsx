'use client'

import { ComponentProps, FC } from 'react'

import { HeroUIProvider } from '@heroui/react'

const Providers: FC<ComponentProps<'div'>> = ({ children }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>
}

export default Providers
