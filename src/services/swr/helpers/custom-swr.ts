import useSWR from 'swr'
import { SWRConfiguration } from 'swr/_internal'

import { useTableSearchParams } from '@/src/components/table/table-params.hook'

import { FetcherParams } from './swr.types'

export const useCustomSWR = <T>(
  params: FetcherParams,
  options?: SWRConfiguration<T>
) => {
  const searchParams = useTableSearchParams()

  if (searchParams) params.path += `?${searchParams}`

  return useSWR<T>(params ? { path: params.path, ...params } : null, options)
}
