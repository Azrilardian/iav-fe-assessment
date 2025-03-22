import { appStateStore } from './app-state-store'

export const setLocale = (locale: string) => {
  appStateStore.state.locale = locale
}
