import { ReactNode } from 'react'

import { SWRConfiguration } from 'swr'

export type SWRProviderProps = SWRConfiguration & {
  children: ReactNode
}
