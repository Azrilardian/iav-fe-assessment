import React, { FC, memo } from 'react'

import classNames from 'classnames'

import Image from '@/src/components/image'

import { ProductImageCardProps } from './types'

const ProductImageCard: FC<ProductImageCardProps> = (props) => {
  const { image, title, isSelected, handleSelectedImage } = props

  return (
    <div
      className='relative h-[46px] w-full max-w-[calc(100%/5-10px)] cursor-pointer sm:h-[78px]'
      role='button'
      onClick={() => handleSelectedImage(image)}
    >
      <Image
        className={classNames(
          'rounded-md border border-color-palette-greyLight bg-[#f0f0f0]',
          isSelected ? 'opacity-100' : 'opacity-45'
        )}
        src={image}
        alt={title}
      />
    </div>
  )
}

export default memo(ProductImageCard)
