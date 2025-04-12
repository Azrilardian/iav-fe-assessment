'use server'

import { swrApi } from '../api/swr-api'
import { FetcherParams } from './helpers/swr.types'

export const fetcher = async (args: FetcherParams) => {
  const path = [args.path, args.id].filter(Boolean).join('/')

  try {
    const result = await swrApi.fetch(path, args.params)

    if (result.ok) {
      return result.data
    }
  } catch (error) {
    throw error
  }
}
