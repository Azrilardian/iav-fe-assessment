import { ApiCore } from './api-core'

export class AuthApi extends ApiCore {
  async login(username: string, password: string) {
    return await this.post({
      path: 'login',
      payload: {
        username,
        password
      }
    })
  }

  async logout() {
    return await this.delete({ path: 'logout' })
  }

  async getUserProfile() {
    return await this.get({
      path: 'profile'
    })
  }
}

export const authApi = new AuthApi()
