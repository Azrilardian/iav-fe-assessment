import { SelectProps as HSelectProps, SelectItemProps } from '@heroui/react'

export type SelectProps = Omit<HSelectProps, 'children'> & {
  items: SelectItemProps[]
}
