import { ApiErrorKind } from 'services/api'

export const useError = () => {
  const handleUnexpectedError = (error: any) => {
    // handle unexpected error here (ex: send sentry error)
    console.log(`unexpected erorr. ${error}`)
  }

  const handleGlobalError = (error: any) => {
    if (!error.kind) return handleUnexpectedError(error)

    switch (error.kind) {
      case ApiErrorKind.UNAUTHORIZED:
      case ApiErrorKind.CONNECTION:
      case ApiErrorKind.TIMEOUT:
      case ApiErrorKind.SERVER:
      case ApiErrorKind.FORBIDDEN:
      case ApiErrorKind.GONE:
      case ApiErrorKind.UNKNOWN:
      case ApiErrorKind.BAD_DATA:
      case ApiErrorKind.REJECTED:
      default:
        handleUnexpectedError(error)
        break
    }
  }

  return { handleGlobalError }
}
