'use client'

import React from 'react'

import { useTranslation } from 'react-i18next'

import Button from '@/src/components/button'
import Icon from '@/src/components/icon'
import SearchInput from '@/src/components/search-input'
import Text from '@/src/components/text'
import { productAddPath } from '@/src/config/paths'

const ProductsHeader = () => {
  const { t } = useTranslation('products')

  return (
    <div>
      <Text tag='h1' variant='title5' weight='bold' className='tracking-[1px]'>
        {t('products').toUpperCase()}
      </Text>
      <div className='mb-10 mt-3 flex flex-col items-start justify-between gap-md sm:flex-row sm:items-end sm:gap-0'>
        <SearchInput placeholder={t('search_products')} />
        <Button
          withoutSpacing
          startContent={
            <Icon
              icon='icon-plus'
              className='text-color-palette-brandPrimary'
            />
          }
          label={t('add_product')}
          variant='light'
          color='secondary'
          className='text-color-palette-brandPrimary'
          link={productAddPath()}
        />
      </div>
    </div>
  )
}

export default ProductsHeader
