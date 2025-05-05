'use client'

import React, { useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import Accordion from '@/src/components/accordion'
import Icon from '@/src/components/icon'
import Text from '@/src/components/text'

import ProductsFilterCategories from './components/products-filter-categories'
import { useProductsFilter } from './hook'

const defaultExpandedKeys = ['1', '2']

const ProductsFilter = () => {
  const { t } = useTranslation('common')

  const { categories, onCategoryChecked } = useProductsFilter()

  const accordionItems = useMemo(
    () => [
      {
        key: '1',
        'aria-label': t('category'),
        title: t('category'),
        content: (
          <ProductsFilterCategories
            categories={categories}
            onChecked={onCategoryChecked}
          />
        )
      }
    ],
    [categories]
  )

  return (
    <div className='lg:pt-3xl'>
      <Text
        tag='span'
        variant='body1'
        weight='bold'
        className='tracking-[2px] text-color-palette-greyDark'
      >
        {t('filters').toUpperCase()}
      </Text>
      <Accordion
        className='products-filter-accordion'
        defaultExpandedKeys={defaultExpandedKeys}
        keepContentMounted
        indicator={({ isOpen }) =>
          isOpen ? (
            <div className='flex items-center justify-center'>
              <Icon
                icon='icon-chevron-up'
                className='text-color-palette-black'
              />
            </div>
          ) : (
            <div className='flex items-center justify-center'>
              <Icon
                icon='icon-chevron-left'
                className='text-color-palette-black'
              />
            </div>
          )
        }
        items={accordionItems}
      />
    </div>
  )
}

export default ProductsFilter
