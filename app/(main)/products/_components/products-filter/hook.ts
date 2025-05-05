'use client'

import { useCallback, useMemo } from 'react'

import { usePathname, useSearchParams } from 'next/navigation'

import { useProductCategoryList } from '@/src/services/swr/hooks/use-product-categories'
import { capitalizeWithSeparator } from '@/src/utils/string'

export const useProductsFilter = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const { categories } = useProductCategoryList()

  const createFilterOptions = useCallback(
    (items: string[] = [], paramName: string) => {
      return items?.map((item) => ({
        label: capitalizeWithSeparator(item),
        value: item,
        checked: searchParams.get(paramName) === item
      }))
    },
    [searchParams.toString()]
  )

  const categoriesOptions = useMemo(
    () => createFilterOptions(categories, 'categories'),
    [categories, searchParams.toString()]
  )

  const updateFilter = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      const isChecked = params.get(name) === value

      if (isChecked) {
        params.delete(name)
        params.delete('page')
      } else {
        params.set(name, value)
        params.delete('page')
        params.delete('search')
      }

      window.history.pushState({}, '', pathname + '?' + params.toString())
    },
    [searchParams.toString()]
  )

  const onCategoryChecked = useCallback(
    (value: string) => {
      updateFilter('categories', value)
    },
    [searchParams.toString()]
  )

  return {
    categories: categoriesOptions,
    onCategoryChecked
  }
}
