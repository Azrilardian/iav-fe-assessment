'use client'

import React from 'react'

import { useTranslation } from 'react-i18next'

import Result from '../result'
import { useProductCards } from './hook'
import ProductCard from './product-card'
import ProductCardsSkeleton from './product-cards-skeleton'
import Pagination from '../pagination'

const ProductCards = () => {
  const { t } = useTranslation('products')

  const { productLoading, productsData } = useProductCards()

  if (productLoading) {
    return <ProductCardsSkeleton />
  }

  if (!productsData?.products?.length) {
    return (
      <Result
        icon='icon-success'
        title={t('no_products_found')}
        subTitle={t('please_add_some_products')}
      />
    )
  }

  return (
    <div className='lg:flex lg:flex-col lg:items-center'>
      <div className='mb-xl grid items-start gap-lgAlt gap-y-2xlAlt sm:grid-cols-2 lg:grid-cols-3'>
        {productsData?.products?.map((product, index) => (
          <ProductCard key={product.id} {...product} index={index} />
        ))}
      </div>
      <Pagination data={productsData} />
    </div>
  )
}

export default ProductCards
