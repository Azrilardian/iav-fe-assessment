import { SelectProps as HSelectProps } from '@heroui/react'

export type SelectProps = Omit<HSelectProps, 'children'> & {
  items: {
    label: string
    key: string
  }[]
}
