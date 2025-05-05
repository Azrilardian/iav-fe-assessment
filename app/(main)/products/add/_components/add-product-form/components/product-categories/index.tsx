import React from 'react'

import { useTranslation } from 'react-i18next'

import ControlledSelect from '@/src/components/forms/select'

import { useProductCategories } from './hook'

const ProductCategories = () => {
  const { t } = useTranslation('products')

  const { categoriesOptions, isLoading } = useProductCategories()

  return (
    <ControlledSelect
      name='category'
      label={t('category')}
      placeholder={t('select_product_category')}
      items={categoriesOptions}
      isLoading={isLoading}
      className='col-span-2'
    />
  )
}

export default ProductCategories
