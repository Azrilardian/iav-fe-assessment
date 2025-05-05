import { ApiCore } from './api-core'

export class CartApi extends ApiCore {
  async addCart(userId: string, productId: number, quantity: number) {
    return await this.post({
      path: `carts/add`,
      payload: {
        userId,
        products: [{ id: productId, quantity }]
      }
    })
  }

  // Simulate update cart with id 1, because we don't have the real id
  async updateCart(productId: number, quantity: number) {
    return await this.put({
      path: `carts/1`,
      payload: {
        merge: true,
        products: [
          {
            id: productId,
            quantity
          }
        ]
      }
    })
  }

  async deleteCart(productId: number) {
    return await this.delete({
      path: `carts/${productId}`
    })
  }
}

export const cartApi = new CartApi()
