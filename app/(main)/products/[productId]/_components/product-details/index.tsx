'use client'

import React from 'react'

import { useTranslation } from 'react-i18next'

import Button from '@/src/components/button'
import Icon from '@/src/components/icon'
import { useProduct } from '@/src/services/swr/hooks/use-product'

import ProductSummary from './components/product-summary'
import { useProductDetails } from './hook'

const ProductDetails = () => {
  const { t } = useTranslation('products')

  const { isLoading: isGetProductLoading } = useProduct()

  const { isLoading, handleAddToCart } = useProductDetails()

  return (
    <div className='order-1 xl:order-2 xl:px-rgAlt xl:pb-rgAlt xl:pt-[148px]'>
      <ProductSummary />
      <div className='mt-xlMed flex items-center gap-rgAlt'>
        <Button
          variant='solid'
          color='primary'
          size='lg'
          label={t('add_to_cart')}
          className='w-full'
          isLoading={isLoading}
          isDisabled={isGetProductLoading}
          onPress={handleAddToCart}
        />
        <Button
          href='/wishlist'
          isIconOnly
          radius='full'
          variant='light'
          className='reset-padding'
          isDisabled={isLoading}
          label={
            <Icon icon='icon-heart' className='text-color-palette-brandLight' />
          }
        />
      </div>
    </div>
  )
}

export default ProductDetails
