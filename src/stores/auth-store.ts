import { proxy } from 'valtio'

import { computeAuthStore } from './auth-store.computed'
import { AuthStore } from './auth-store.types'
import { proxyWithPersist } from './helpers/proxy-persist'

export const defaultAuthStore: AuthStore = {
  user: {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    isSuperAdmin: null
  },
  token: null,
  tokenExpiry: null,
  refreshToken: null,
  refreshTokenExpiry: null,
  refreshingToken: false
}

const initialState = proxyWithPersist(defaultAuthStore, 'auth-store')

export const authStore = proxy({
  state: initialState,
  computed: computeAuthStore(initialState)
})
