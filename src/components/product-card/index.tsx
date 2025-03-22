import React, { FC } from 'react'

import { Link } from '@heroui/react'
import classNames from 'classnames'

import Image from '../image'
import { ProductCardProps } from './types'
import Text from '../text'

const ProductCard: FC<ProductCardProps> = (props) => {
  const { id, image, category, name, price, outOfStock } = props

  return (
    <Link href={`/products/${id}`}>
      <div
        className={classNames('flex w-[287px] flex-col gap-2', {
          'opacity-60': outOfStock
        })}
      >
        <div className='relative h-[315px] w-full rounded-md border border-color-palette-greyLight'>
          <Image src={image} alt={name} className='rounded-md' />
        </div>
        <div className='mt-sm flex items-center gap-2'>
          <Text tag='small' className='text-color-palette-greyDark'>
            {category}
          </Text>
          <div className='h-3 w-3 rounded-xs bg-color-palette-brandPrimary' />
        </div>
        <div className='mt-sm flex items-center justify-between'>
          <Text tag='span' className='text-sm !font-medium'>
            {name}
          </Text>
          <Text tag='span' className='text-lg font-semibold'>
            {price}
          </Text>
        </div>
        {outOfStock && (
          <Text tag='small' className='mt-sm text-color-palette-brandLight'>
            Out of Stock
          </Text>
        )}
      </div>
    </Link>
  )
}

export default ProductCard
