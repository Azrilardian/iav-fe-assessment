import { proxy } from 'valtio'

import { AppStateStore } from './app-state-store.types'
import { proxyWithPersist } from './helpers/proxy-persist'

export const defaultAppStateStore: AppStateStore = {
  locale: 'en'
}

const initialState = proxyWithPersist(defaultAppStateStore, 'app-state-store')

export const appStateStore = proxy({
  state: initialState
})
