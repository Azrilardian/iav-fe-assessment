import { createPath } from './path-utils'
import { PathGenerator } from './path.types'

const PAYMENT_PATH = '/payment'

export const paymentPath: PathGenerator = () => {
  return createPath(PAYMENT_PATH)
}

export const paymentSuccessPath: PathGenerator = () => {
  return createPath(`${PAYMENT_PATH}/success`)
}
