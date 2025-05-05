import { useSearchParams } from 'next/navigation'

import { useCustomSWR } from '../helpers/custom-swr'
import { collectionAdaptor } from '../middleware/collection-adaptor'
import { ProductCollection } from '../models/products.types'

export const useProductsByCategory = () => {
  const searchParams = useSearchParams()
  const categories = searchParams.get('categories')
  const page = searchParams.get('page')
  const search = searchParams.get('search')

  const { isLoading, error, data } = useCustomSWR<ProductCollection>(
    categories && !search
      ? {
          path: `products/category/${categories}`,
          params: {
            limit: 9,
            skip: page ? (Number(page) - 1) * 9 : 0,
            select: 'title,thumbnail,category,price,meta'
          }
        }
      : null,
    {
      use: [
        collectionAdaptor({
          collectionName: 'products',
          keyMapping: { data: 'products' }
        })
      ],
      revalidateOnFocus: false
    }
  )

  return {
    isLoading,
    isError: !!error,
    productsByCategory: data
  }
}
