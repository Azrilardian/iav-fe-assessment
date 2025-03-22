import { ModalProps as HModalProps } from '@heroui/react'

export type ModalProps = Omit<HModalProps, 'children'> & {
  visible: boolean
  title: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
  onConfirm: () => void
  onCancel?: () => void
}
