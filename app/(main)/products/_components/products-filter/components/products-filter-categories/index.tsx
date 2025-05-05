import React, { FC, memo } from 'react'

import Checkbox from '@/src/components/checkbox'

import { ProductsFilterCategoriesProps } from './types'

const ProductsFilterCategories: FC<ProductsFilterCategoriesProps> = (props) => {
  const { categories, onChecked } = props

  return (
    <div className='flex flex-col gap-4'>
      {categories?.map(({ value, label, checked }) => (
        <Checkbox
          key={value}
          onChange={() => onChecked(value)}
          title={label}
          isSelected={checked}
        />
      ))}
    </div>
  )
}

export default memo(ProductsFilterCategories)
