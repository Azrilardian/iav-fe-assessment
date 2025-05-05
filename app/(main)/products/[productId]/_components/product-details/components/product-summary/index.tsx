import React from 'react'

import Text from '@/src/components/text'
import { useProduct } from '@/src/services/swr/hooks/use-product'
import { capitalizeWithSeparator } from '@/src/utils/string'
import { toCurrencyString } from '@/src/utils/to-currency-string'

import ProductSummarySkeleton from './product-summary-skeleton'

const ProductSummary = () => {
  const { product, isLoading } = useProduct()

  if (isLoading) {
    return <ProductSummarySkeleton />
  }

  return (
    <>
      <Text
        tag='span'
        variant='body2'
        weight='medium'
        className='text-color-palette-greyDark'
      >
        {capitalizeWithSeparator(product?.category)}
      </Text>
      <div className='flex justify-between pb-rgAlt pt-md'>
        <Text
          tag='span'
          variant='title2'
          weight='semibold'
          className='pr-[100px]'
        >
          {product?.title}
        </Text>
        <Text tag='span' variant='title2' weight='semibold'>
          {toCurrencyString(product?.price)}
        </Text>
      </div>
      <Text tag='p' variant='body2'>
        {product?.description}
      </Text>
    </>
  )
}

export default ProductSummary
