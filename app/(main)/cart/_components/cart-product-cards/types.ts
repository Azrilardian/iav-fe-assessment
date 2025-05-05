import { ProductModel } from '@/src/services/swr/models/products.types'

export type CartProductCardProps = Pick<
  ProductModel,
  'id' | 'title' | 'price' | 'discountPercentage' | 'thumbnail' | 'category'
> & {
  quantity: number
  total: number
  discountPercentage: number
}
