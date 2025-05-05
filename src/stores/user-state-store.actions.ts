import { UserStateStore } from './user-state-store.types'
import { userStateStore } from './user-state.store'

export const setUserState = (userState: UserStateStore) => {
  userStateStore.state = userState
}
