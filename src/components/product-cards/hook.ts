import { useMemo } from 'react'

import { useSearchParams } from 'next/navigation'

import { useProducts } from '@/src/services/swr/hooks/use-products'
import { useProductsByCategory } from '@/src/services/swr/hooks/use-products-by-category'

export const useProductCards = () => {
  const searchParams = useSearchParams()
  const categories = searchParams.get('categories')

  const { products, isLoading } = useProducts()
  const { productsByCategory, isLoading: isProductCategoryLoading } =
    useProductsByCategory()

  const productLoading = useMemo(() => {
    return categories ? isProductCategoryLoading : isLoading
  }, [categories, isProductCategoryLoading, isLoading])

  const productsData = useMemo(() => {
    return categories ? productsByCategory : products
  }, [categories, productsByCategory, products])

  return {
    productLoading,
    productsData
  }
}
