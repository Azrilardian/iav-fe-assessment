import { useMemo } from 'react'

import { useProductCategoryList } from '@/src/services/swr/hooks/use-product-categories'
import { capitalizeWithSeparator } from '@/src/utils/string'

export const useProductCategories = () => {
  const { isLoading, categories } = useProductCategoryList()

  const categoriesOptions: {
    label: string
    key: string
  }[] = useMemo(() => {
    return (
      categories?.map((category) => ({
        label: capitalizeWithSeparator(category),
        key: category
      })) ?? []
    )
  }, [categories])

  return {
    isLoading,
    categoriesOptions
  }
}
