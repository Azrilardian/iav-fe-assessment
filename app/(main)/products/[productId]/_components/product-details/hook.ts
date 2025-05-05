import { useState } from 'react'

import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { useSnapshot } from 'valtio'

import { cartApi } from '@/src/services/api/cart-api'
import { userStateStore } from '@/src/stores/user-state.store'
import { handleGenericError } from '@/src/utils/error-handler'

export const useProductDetails = () => {
  const { t } = useTranslation('products')

  const { productId } = useParams<{ productId: string }>()

  const [isLoading, setIsLoading] = useState(false)

  const { state } = useSnapshot(userStateStore)

  const handleAddToCart = async () => {
    try {
      setIsLoading(true)
      await cartApi.addCart(state.id, Number(productId), 1)
      toast.success(t('product_added_to_cart'))
    } catch (error: any) {
      handleGenericError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    handleAddToCart
  }
}
