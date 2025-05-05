import { ReactNode } from 'react'

import { ButtonProps as HButtonProps, LinkProps } from '@heroui/react'
import { SubmitHandler } from 'react-hook-form'

export type ButtonProps = HButtonProps & {
  testID?: string
  label?: string | ReactNode
  withoutSpacing?: boolean
}

export type ButtonWithLinkProps = ButtonProps &
  LinkProps & {
    link?: string
  }

export type ControlledButtonProps<
  TFormValues extends Record<string, any> = Record<string, any>
> = ButtonWithLinkProps & {
  onSubmit?: SubmitHandler<TFormValues>
}
