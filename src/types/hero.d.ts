import { useRouter } from 'next/navigation'

declare module '@react-types/shared' {
  export interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >
  }
}
