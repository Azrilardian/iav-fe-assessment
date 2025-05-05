import { ComponentProps } from 'react'

export type QuantitySelectorProps = ComponentProps<'div'> & {
  productId: number
  quantity: number
}
