import { proxy } from 'valtio'

import { ToastStore } from './toast-store.types'

export const toastStore = proxy<ToastStore>({
  icon: null,
  message: null,
  type: null,
  duration: null,
  visible: false,
  position: 'top',
  textVariant: 'bodyBold'
})
