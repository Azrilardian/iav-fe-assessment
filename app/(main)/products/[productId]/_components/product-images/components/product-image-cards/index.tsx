import React, { FC, memo } from 'react'

import ProductImageCard from './product-image-card'
import { ProductImageCardsProps } from './types'

const ProductImageCards: FC<ProductImageCardsProps> = (props) => {
  const { images, title, handleSelectedImage } = props

  return (
    <div className='flex flex-wrap gap-md'>
      {images.map((image, index) => (
        <ProductImageCard
          key={`${image.image}-${index}`}
          image={image.image}
          title={title}
          isSelected={image.isSelected}
          handleSelectedImage={handleSelectedImage}
        />
      ))}
    </div>
  )
}

export default memo(ProductImageCards)
