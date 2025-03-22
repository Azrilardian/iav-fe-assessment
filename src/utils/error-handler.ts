import { t as translate } from 'i18next'

import { logout } from 'stores/auth-store.actions'

import { captureSentryException } from './sentry'
import {
  ApiErrorKind,
  GeneralApiProblem
} from '../services/api/helpers/api-problem.types'
import { showToast } from '../stores/toast-store.actions'

const t = (key: string, options?: Record<string, string | number>) =>
  translate(key, { ns: 'common', ...options })

const showUnexpectedError = (error: any) => {
  showToast({
    type: 'error',
    message: t('An unexpected error occurred')
  })
  captureSentryException(error)
}

export const handleGenericError = (error: GeneralApiProblem) => {
  if (!error?.kind) {
    showUnexpectedError(error)
    return
  }

  const showErrorMessage = (err: any) => {
    const message = err?.errors || err?.message

    if (typeof message === 'string') {
      showToast({ type: 'error', message })
      captureSentryException(error)
    } else {
      showUnexpectedError(err)
    }
  }

  switch (error.kind) {
    case ApiErrorKind.UNAUTHORIZED:
      logout()
      break
    default:
      showErrorMessage(error)
      break
  }
}
