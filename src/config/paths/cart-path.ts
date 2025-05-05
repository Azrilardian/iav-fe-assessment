import { createPath } from './path-utils'
import { PathGenerator } from './path.types'

const CART_PATH = '/cart'

export const cartPath: PathGenerator = () => {
  return createPath(CART_PATH)
}
