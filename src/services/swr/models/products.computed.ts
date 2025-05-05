import { derive } from 'derive-valtio'

import { capitalizeWithSeparator } from '@/src/utils/string'
import { toCurrencyString } from '@/src/utils/to-currency-string'

import { ProductModel } from './products.types'

export const computeProducts = (state: ProductModel) => {
  return derive({
    outOfStock: (get) => get(state).stock === 0,
    category: (get) => capitalizeWithSeparator(get(state).category),
    price: (get) => toCurrencyString(get(state).price)
  })
}
