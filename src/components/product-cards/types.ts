import { ComponentProps } from 'react'

import { ProductCardProps } from '../product-card/types'

export type ProductCardsProps = ComponentProps<'div'> & {
  products: ProductCardProps[]
}
