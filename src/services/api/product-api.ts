import { ApiCore } from './api-core'
import { AddProductModel } from '../swr/models/products.types'

export class ProductApi extends ApiCore {
  async getProducts() {
    return await this.get({
      path: 'products',
      payload: {
        limit: 0,
        select: 'title,thumbnail,category,price,meta'
      }
    })
  }

  async getProduct(productId: string) {
    return await this.get({
      path: `products/${productId}`,
      payload: {
        select: 'title,thumbnail,category,price,description,images,meta'
      }
    })
  }

  async addProduct(product: AddProductModel) {
    return await this.post({
      path: 'products/add',
      payload: product
    })
  }

  async getProductByCategories(category: string) {
    return await this.get({
      path: `products/category/${category}`
    })
  }
}

export const productApi = new ProductApi()
