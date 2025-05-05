import React, { lazy } from 'react'

const Toaster = lazy(() =>
  import('sonner').then((module) => ({ default: module.Toaster }))
)

const ToastHandler = () => {
  return <Toaster richColors position='top-right' expand />
}

export default ToastHandler
