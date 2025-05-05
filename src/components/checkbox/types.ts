import { ReactNode } from 'react'

import { CheckboxProps as HCheckboxProps } from '@heroui/react'

export type CheckboxProps = HCheckboxProps & {
  content?: ReactNode
}
