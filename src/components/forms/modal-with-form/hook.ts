import { useState } from 'react'

import { FieldValues, UseFormReturn } from 'react-hook-form'

import { parseApiErrors } from '@/src/utils/hook-form'

export const useModalWithForm = (
  methods: UseFormReturn<FieldValues, any, undefined>,
  onSubmit: (data: Record<any, any>) => Promise<void>
) => {
  const [isLoading, setIsLoading] = useState(false)

  const onFormSubmit = async (data: Record<string, any>) => {
    try {
      setIsLoading(true)
      await onSubmit(data)
      methods.reset()
    } catch (error: any) {
      parseApiErrors({
        error: error.data,
        methods
      })

      return
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, onFormSubmit }
}
