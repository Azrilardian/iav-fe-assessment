import { useParams } from 'next/navigation'

import { useCustomSWR } from '../helpers/custom-swr'
import { ProductModel } from '../models/products.types'

export const useProduct = () => {
  const { productId } = useParams<{ productId: string }>()

  const { isLoading, error, data } = useCustomSWR<ProductModel>(
    {
      path: `products/${productId}`,
      params: {
        select: 'title,thumbnail,category,price,description,images,meta'
      }
    },
    {
      revalidateOnFocus: false
    }
  )

  return {
    isLoading,
    isError: !!error,
    product: data
  }
}
