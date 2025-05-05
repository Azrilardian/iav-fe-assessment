import React, { FC } from 'react'

import classNames from 'classnames'
import { truncate } from 'lodash'

import Icon from '@/src/components/icon'
import Image from '@/src/components/image'
import Text from '@/src/components/text'
import { toCurrencyString } from '@/src/utils/to-currency-string'

import { CartProductCardProps } from './types'
import QuantitySelector from '../quantity-selector'
import { useCartProductCards } from './hook'

const CartProductCard: FC<CartProductCardProps> = (props) => {
  const { id, thumbnail, title, price, quantity } = props

  const { handleDeleteCart } = useCartProductCards()

  return (
    <div className={classNames('col-span-1 sm:col-span-1')}>
      <div className='product-card-image-wrapper'>
        <div className='product-card-image'>
          <Image
            src={thumbnail}
            alt={title}
            sizes='(max-width: 768px) 100vw, 33vw'
            className='bg-[#f0f0f0]'
          />
        </div>
        <div className='flex h-auto flex-col items-center justify-between'>
          <div
            role='button'
            className='hidden cursor-pointer xl:block'
            onClick={() => handleDeleteCart(1)}
          >
            <Icon icon='icon-close' />
          </div>
          <QuantitySelector
            productId={id}
            quantity={quantity}
            className='hidden xl:block'
          />
          <span></span>
        </div>
      </div>
      <div className='xl:pr-9'>
        <Text
          tag='small'
          variant='body3'
          weight='medium'
          className='pb-xsAlt pt-smAlt text-color-palette-greyDark'
        >
          -
        </Text>
        <div className='flex items-center justify-between'>
          <Text tag='span' weight='medium' variant='body2'>
            {truncate(title, { length: 30 })}
          </Text>
          <Text tag='span' weight='semibold' variant='title6'>
            {toCurrencyString(price)}
          </Text>
        </div>
      </div>
      <QuantitySelector
        productId={id}
        quantity={quantity}
        className='xl:hidden'
      />
    </div>
  )
}

export default CartProductCard
