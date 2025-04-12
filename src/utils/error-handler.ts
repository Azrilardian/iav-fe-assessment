import { t as translate } from 'i18next'
import { toast } from 'sonner'

import { captureSentryException } from './sentry'
import {
  ApiErrorKind,
  GeneralApiProblem
} from '../services/api/helpers/api-problem.types'

const t = (key: string, options?: Record<string, string | number>) =>
  translate(key, { ns: 'common', ...options })

const showUnexpectedError = (error: any) => {
  toast.error(t('An unexpected error occurred'))
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
      toast.error(message)
      captureSentryException(error)
    } else {
      showUnexpectedError(err)
    }
  }

  switch (error.kind) {
    case ApiErrorKind.UNAUTHORIZED:
      // Must be logged out
      break
    default:
      showErrorMessage(error)
      break
  }
}
