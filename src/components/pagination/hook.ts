import { useCallback } from 'react'

import { usePathname, useSearchParams } from 'next/navigation'

import { ProductCollection } from '@/src/services/swr/models/products.types'

export const useCustomPagination = (data: ProductCollection) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  const updateCurrentPage = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams)
      params.set('page', page.toString())

      window.history.pushState({}, '', pathname + '?' + params.toString())
    },
    [searchParams.toString()]
  )

  const handlePageChange = (page: number) => {
    updateCurrentPage(page)
  }

  return {
    page: Number(page) || 1,
    totalPages: data.totalPages,
    handlePageChange
  }
}
