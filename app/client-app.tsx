import { ReactNode } from 'react'

import { SWRConfig } from 'swr'

import Providers from '@/src/components/providers'
import ModalHandler from '@/src/handler/modal-handler'
import ToastHandler from '@/src/handler/toast-handler'
import { useYup } from '@/src/hooks/use-yup.hook'
import { fetcher } from 'services/swr/fetcher'
import { persistenceCacheProvider } from 'services/swr/helpers/persistence-cache'
import '../src/locales/i18n'

const ClientApp = ({ children }: Readonly<{ children: ReactNode }>) => {
  // Set locale & extra method for yup schema validator
  useYup()

  return (
    <SWRConfig value={{ fetcher, provider: persistenceCacheProvider }}>
      <Providers>
        {children}
        <ModalHandler />
        <ToastHandler />
      </Providers>
    </SWRConfig>
  )
}

export default ClientApp
