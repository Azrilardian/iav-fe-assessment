import { useState } from 'react'

import { useCartsByUserId } from '@/src/services/swr/hooks/use-carts'

export const useOrderSummary = () => {
  const { carts } = useCartsByUserId()

  const [isAgreeToTerms, setIsAgreeToTerms] = useState(false)

  const totalPrice = carts?.total

  const handleAgreeToTerms = () => {
    setIsAgreeToTerms(!isAgreeToTerms)
  }

  return {
    totalPrice,
    isAgreeToTerms,
    handleAgreeToTerms
  }
}
