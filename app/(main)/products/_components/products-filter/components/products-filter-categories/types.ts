import { ComponentProps } from 'react'

type FilterOption = {
  label: string
  value: string
  checked: boolean
}

export type ProductsFilterCategoriesProps = ComponentProps<'div'> & {
  categories: FilterOption[]
  onChecked: (value: string) => void
}
