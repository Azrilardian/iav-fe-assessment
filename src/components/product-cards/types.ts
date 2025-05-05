import { ProductModel } from '@/src/services/swr/models/products.types'

export type ProductCardProps = Pick<
  ProductModel,
  'id' | 'thumbnail' | 'category' | 'title' | 'price' | 'outOfStock'
> & {
  index: number
}
