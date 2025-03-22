import React, { FC, memo } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { ProductCardsProps } from './types'
import ProductCard from '../product-card'
import Result from '../result'

const ProductCards: FC<ProductCardsProps> = (props) => {
  const { products, ...rest } = props

  if (!products.length) {
    return (
      <Result
        icon='icon-success'
        title='No products found'
        subTitle='Please add some products'
      />
    )
  }

  return (
    <div className='grid grid-cols-3 gap-9' {...rest}>
      {products.map((product) => (
        <ProductCard key={uuidv4()} {...product} />
      ))}
    </div>
  )
}

export default memo(ProductCards)
