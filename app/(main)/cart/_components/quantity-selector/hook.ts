import { useState } from 'react'

import { cartApi } from '@/src/services/api/cart-api'
import { handleGenericError } from '@/src/utils/error-handler'

export const useQuantitySelector = (productQuantity: number) => {
  const [quantity, setQuantity] = useState(productQuantity)

  const increment = async (productId: number) => {
    try {
      await cartApi.updateCart(productId, quantity + 1)
      setQuantity(quantity + 1)
    } catch (error: any) {
      handleGenericError(error)
    }
  }

  const decrement = async (productId: number) => {
    try {
      await cartApi.updateCart(productId, quantity - 1)
      setQuantity(quantity - 1)
    } catch (error: any) {
      handleGenericError(error)
    }
  }

  return { quantity, increment, decrement }
}
