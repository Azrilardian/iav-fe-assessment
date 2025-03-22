import { ReactNode } from 'react'

import { ApiError } from 'next/dist/server/api-utils'
import { SubmitHandler, UseFormReturn } from 'react-hook-form'

export type FormProviderProps<FormState> = {
  name?: string
  methods: UseFormReturn<FormState, any>
  onSubmit: SubmitHandler<FormState>
  children: ReactNode
}

export type ParseApiErrorParams = {
  error: ApiError
  methods: UseFormReturn<any, any>
  keysMapping?: Record<string, string>
}
