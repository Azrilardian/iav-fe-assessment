import { useCallback } from 'react'

import { debounce } from 'lodash'
import { usePathname, useSearchParams } from 'next/navigation'

export const useSearchInput = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const search = searchParams.get('search')

  const updateSearch = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)

      if (value.length === 0) {
        params.delete(name)
      } else {
        params.set(name, value)
        params.delete('page')
        params.delete('categories')
      }

      window.history.pushState({}, '', pathname + '?' + params.toString())
    },
    [searchParams.toString()]
  )

  const onSearch = useCallback(
    debounce((value: string) => {
      updateSearch('search', value)
    }, 400),
    []
  )

  return {
    onSearch,
    search
  }
}
