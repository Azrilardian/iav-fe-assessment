import { toast } from 'sonner'

import { captureSentryException } from './sentry'
import { getTranslate } from '../locales/i18n'
import {
  ApiErrorKind,
  GeneralApiProblem
} from '../services/api/helpers/api-problem.types'

const t = getTranslate('common')

const showUnexpectedError = (error: any) => {
  toast.error(t('an_unexpected_error_occurred'))
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
