import { toastStore } from './toast-store'
import { ShowToastProps } from './toast-store.types'

export const showToast = (props: ShowToastProps) => {
  toastStore.icon = props.icon
  toastStore.message = props.message
  toastStore.type = props.type
  toastStore.visible = true
  toastStore.duration = props.duration
  toastStore.position = props.position
  toastStore.textVariant = props.textVariant
}

export const hideToast = () => {
  toastStore.visible = false
  toastStore.icon = null
  toastStore.message = null
  toastStore.type = null
  toastStore.duration = null
  toastStore.position = null
  toastStore.textVariant = null
}
