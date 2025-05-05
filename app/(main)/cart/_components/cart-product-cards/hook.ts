import { cartApi } from '@/src/services/api/cart-api'
import { handleGenericError } from '@/src/utils/error-handler'

export const useCartProductCards = () => {
  // Simulate delete product in cart with delete cart api, because we don't have delete product in cart api
  const handleDeleteCart = async (productId: number) => {
    try {
      await cartApi.deleteCart(productId)
    } catch (error: any) {
      handleGenericError(error)
    }
  }

  return { handleDeleteCart }
}
