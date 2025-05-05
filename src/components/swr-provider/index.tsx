'use client'

import React, { FC } from 'react'

import { SWRConfig } from 'swr'

import { fetcher } from '@/src/services/swr/fetcher'

import { SWRProviderProps } from './types'

const SWRProvider: FC<SWRProviderProps> = (props) => {
  const { children, ...config } = props

  return <SWRConfig value={{ fetcher, ...config }}>{children}</SWRConfig>
}

export default SWRProvider
