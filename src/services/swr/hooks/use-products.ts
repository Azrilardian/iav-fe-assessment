import { useSearchParams } from 'next/navigation'

import { useCustomSWR } from '../helpers/custom-swr'
import { collectionAdaptor } from '../middleware/collection-adaptor'
import { ProductCollection } from '../models/products.types'

export const useProducts = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const page = searchParams.get('page')
  const categories = searchParams.get('categories')

  const { isLoading, error, data } = useCustomSWR<ProductCollection>(
    search
      ? {
          path: 'products/search',
          params: {
            limit: 9,
            skip: page ? (Number(page) - 1) * 9 : 0,
            select: 'title,thumbnail,category,price,stock,meta',
            q: search
          }
        }
      : !categories
        ? {
            path: 'products',
            params: {
              limit: 9,
              skip: page ? (Number(page) - 1) * 9 : 0,
              select: 'title,thumbnail,category,price,stock,meta'
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
    products: data
  }
}
