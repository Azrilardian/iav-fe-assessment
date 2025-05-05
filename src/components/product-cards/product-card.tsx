import React, { FC, memo } from 'react'

import { Link } from '@heroui/react'
import classNames from 'classnames'
import { truncate } from 'lodash'
import { useTranslation } from 'react-i18next'

import Image from '@/src/components/image'
import Text from '@/src/components/text'
import { productDetailPath } from '@/src/config/paths'
import { capitalizeWithSeparator } from '@/src/utils/string'
import { toCurrencyString } from '@/src/utils/to-currency-string'

import { ProductCardProps } from '../product-cards/types'

const ProductCard: FC<ProductCardProps> = (props) => {
  const { id, thumbnail, category, title, price, outOfStock, index } = props

  const { t } = useTranslation('products')

  return (
    <Link href={productDetailPath(id)}>
      <div
        className={classNames('w-full lg:w-[287px]', {
          'opacity-60': outOfStock
        })}
      >
        <div className='product-card-image'>
          <Image
            src={thumbnail}
            alt={title}
            sizes='(max-width: 768px) 100vw, 33vw'
            fill={false}
            height={300}
            width={300}
            priority={index === 0}
          />
        </div>
        <Text
          tag='small'
          variant='body3'
          weight='medium'
          className='pb-xsAlt pt-smAlt text-color-palette-greyDark'
        >
          {capitalizeWithSeparator(category)}
        </Text>
        <div className='flex justify-between'>
          <Text tag='span' weight='medium' variant='body2'>
            {truncate(title, { length: 30 })}
          </Text>
          <Text tag='span' weight='semibold' variant='title6'>
            {toCurrencyString(price)}
          </Text>
        </div>
        {outOfStock && (
          <Text
            tag='small'
            variant='body3'
            className='mt-sm text-color-palette-brandLight'
          >
            {t('out_of_stock')}
          </Text>
        )}
      </div>
    </Link>
  )
}

export default memo(ProductCard)
