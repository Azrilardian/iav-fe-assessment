import React, { FC } from 'react'

import Image from '@/src/components/image'

import { ProductImageMainProps } from './types'

const ProductImageMain: FC<ProductImageMainProps> = (props) => {
  const { image, alt } = props

  return (
    <div className='relative h-[272px] w-full sm:h-[582px]'>
      <Image
        src={image}
        alt={alt}
        priority
        className='rounded-md border border-color-palette-greyLight bg-[#f0f0f0]'
      />
    </div>
  )
}

export default ProductImageMain
