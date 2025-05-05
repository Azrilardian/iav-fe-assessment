import {
  BreadcrumbItemProps as HBreadcrumbItemProps,
  BreadcrumbsProps as HBreadcrumbsProps
} from '@heroui/react'

export type BreadcrumbItem = Omit<HBreadcrumbItemProps, 'children'> & {
  key: string | number | bigint
  label: string
}

export type BreadcrumbsProps = HBreadcrumbsProps & {
  items: BreadcrumbItem[]
}
