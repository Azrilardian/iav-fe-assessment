import { useCustomSWR } from '../helpers/custom-swr'
import { CartModel } from '../models/carts.types'

export const useCartsByUserId = () => {
  const { isLoading, error, data } = useCustomSWR<CartModel>(
    {
      path: 'carts/1'
    },
    { revalidateOnFocus: false }
  )

  return {
    isLoading,
    isError: !!error,
    carts: data
  }
}
