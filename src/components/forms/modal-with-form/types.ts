import { ModalProps as HModalProps } from '@heroui/react'
import { Resolver } from 'react-hook-form'

export type ModalWithFormProps = HModalProps & {
  name?: string
  visible: boolean
  title: string
  resolver?: Resolver
  confirmLabel?: string
  cancelLabel?: string
  onSubmit: () => Promise<void>
  onCancel?: () => void
}
