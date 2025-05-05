import { CartProductCardProps } from '@/app/(main)/cart/_components/cart-product-cards/types'

export type CartModel = {
  id: string
  products: CartProductCardProps[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}
