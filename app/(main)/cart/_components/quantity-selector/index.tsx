import React, { FC } from 'react'

import classNames from 'classnames'

import Icon from '@/src/components/icon'
import Text from '@/src/components/text'

import { useQuantitySelector } from './hook'
import { QuantitySelectorProps } from './types'

const QuantitySelector: FC<QuantitySelectorProps> = (props) => {
  const { productId, quantity, className, ...rest } = props

  const { increment, decrement } = useQuantitySelector(quantity)

  return (
    <div
      className={classNames(
        'm-auto mt-7 w-fit rounded-sm border-1 border-color-palette-greyLight xl:m-0 xl:mt-0',
        className
      )}
      {...rest}
    >
      <div className='flex items-center justify-between xl:flex-col'>
        <div
          className='flex h-[25px] w-[25px] cursor-pointer items-center justify-center'
          role='button'
          onClick={() => increment(productId)}
        >
          <Icon icon='icon-plus' size={14} />
        </div>
        <div className='flex h-[25px] w-[25px] items-center justify-center border-b-1 border-t-1 xl:border-b-color-palette-greyLight xl:border-t-color-palette-greyLight'>
          <Text tag='span' variant='body3' weight='medium'>
            {quantity}
          </Text>
        </div>
        <div
          className='flex h-[25px] w-[25px] cursor-pointer items-center justify-center'
          role='button'
          onClick={() => decrement(productId)}
        >
          <Icon icon='icon-minus' size={14} />
        </div>
      </div>
    </div>
  )
}

export default QuantitySelector
