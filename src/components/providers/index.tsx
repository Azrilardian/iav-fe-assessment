import { FC } from 'react'

import { HeroUIProvider } from '@heroui/react'

import { ProvidersProps } from './types'

const Providers: FC<ProvidersProps> = (props) => {
  const { children } = props

  return <HeroUIProvider>{children}</HeroUIProvider>
}

export default Providers
