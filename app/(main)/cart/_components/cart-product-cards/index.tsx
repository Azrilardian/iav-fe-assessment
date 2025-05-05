import React from 'react'

import { useTranslation } from 'react-i18next'

import Result from '@/src/components/result'
import { useCartsByUserId } from '@/src/services/swr/hooks/use-carts'

import CartProductCard from './cart-product-card'
import CartProductCardSkeleton from './cart-product-card-skeleton'

const CartProductCards = () => {
  const { t } = useTranslation('cart')

  const { isLoading, carts } = useCartsByUserId()

  if (isLoading) {
    return <CartProductCardSkeleton />
  }

  if (!carts?.products?.length) {
    return (
      <Result
        icon='icon-success'
        title={t('no_products_in_cart')}
        subTitle={t('please_add_some_products')}
      />
    )
  }

  return (
    <div className='grid grid-cols-1 gap-x-lg gap-y-lg sm:grid-cols-2 xl:gap-y-xlAlt'>
      {carts?.products?.map((product) => (
        <CartProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default CartProductCards
