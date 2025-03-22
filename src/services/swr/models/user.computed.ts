import { derive } from 'derive-valtio'

import { UserModel } from './user.types'

export const computeUser = (state: UserModel) =>
  derive({
    phoneNumber: (get) => get(state).telephoneNumber
  })
