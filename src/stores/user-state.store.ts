import { proxy } from 'valtio'

import { proxyWithPersist } from './helpers/proxy-persist'
import { UserStateStore } from './user-state-store.types'

export const defaultUserStateStore: UserStateStore = {
  id: '',
  username: '',
  email: '',
  firstname: '',
  lastname: '',
  gender: '',
  image: '',
  accessToken: '',
  refreshToken: ''
}

const initialState = proxyWithPersist(defaultUserStateStore, 'user-state-store')

export const userStateStore = proxy({
  state: initialState
})
