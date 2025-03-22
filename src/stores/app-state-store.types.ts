type UserType = 'super-admin' | 'admin' | 'user'

export type AppStateStore = {
  locale: string
  userType: UserType
  readonly isAdmin?: boolean
}
