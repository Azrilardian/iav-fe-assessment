export type ShowToastProps = {
  icon?: string
  message: string
  type?: 'success' | 'error'
  duration?: number
  position?: 'top' | 'bottom'
  textVariant?: string
}

export type ToastStore = ShowToastProps & {
  visible: boolean
}
