'use client'

import { ReactNode, useEffect } from 'react'

import Navbar from '@/src/components/navbar'
import Providers from '@/src/components/providers'
import ToastHandler from '@/src/handler/toast-handler'
import { useYup } from '@/src/hooks/use-yup.hook'
import { setUserState } from '@/src/stores/user-state-store.actions'

import '../src/locales/i18n'

const App = ({
  user,
  children
}: Readonly<{ user: any; children: ReactNode }>) => {
  // Set locale & extra method for yup schema validator
  useYup()

  useEffect(() => {
    setUserState(user)
  }, [user])

  return (
    <Providers>
      <Navbar />
      {children}
      <ToastHandler />
    </Providers>
  )
}

export default App
