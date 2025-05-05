import { useCartsByUserId } from '@/src/services/swr/hooks/use-carts'

export const useCartBadge = () => {
  const { carts } = useCartsByUserId()

  const totalProducts = carts?.totalQuantity

  return {
    totalProducts
  }
}
