import React from 'react'

import { Badge } from '@heroui/react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import Button from '@/src/components/button'
import Icon from '@/src/components/icon'
import { cartPath } from '@/src/config/paths'

import { useCartBadge } from './hook'

const CartBadge = () => {
  const { t } = useTranslation('cart')

  const { totalProducts } = useCartBadge()

  return (
    <Badge
      color='danger'
      className='cart-badge'
      content={totalProducts}
      shape='circle'
    >
      <Button
        as={Link}
        href={cartPath()}
        isIconOnly
        aria-label={t('more_than_notifications', { count: totalProducts })}
        radius='full'
        variant='light'
        className='reset-padding'
        label={<Icon icon='icon-shopping-cart' />}
      />
    </Badge>
  )
}

export default CartBadge
