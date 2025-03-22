import { ButtonProps as HButtonProps } from '@heroui/react'
import { SubmitHandler } from 'react-hook-form'

export type ButtonProps = HButtonProps & {
  testID?: string
  label?: string
}

export type ControlledButtonProps<
  TFormValues extends Record<string, any> = Record<string, any>
> = ButtonProps & {
  onSubmit?: SubmitHandler<TFormValues>
}
