import { createPath } from './path-utils'
import {
  PathGenerator,
  PathGeneratorWithId,
  PathGeneratorWithParams
} from './path.types'

const PRODUCTS_PATH = '/products'

export const productsPath: PathGeneratorWithParams = (params) => {
  return createPath(PRODUCTS_PATH, params)
}

export const productAddPath: PathGenerator = () => {
  return createPath(PRODUCTS_PATH, { suffix: 'add' })
}

export const productDetailPath: PathGeneratorWithId = (id) => {
  return createPath(`${PRODUCTS_PATH}/${id}`)
}

export const productAddedPath: PathGenerator = () => {
  return createPath(PRODUCTS_PATH, { suffix: 'product-added' })
}
