import React from 'react'

import { Button } from '@heroui/react'
import { useFormContext } from 'react-hook-form'

import { ControlledButtonProps } from './types'

const ControlledButton = (props: ControlledButtonProps) => {
  const { formState, handleSubmit } = useFormContext()

  const isError = formState.isSubmitted && !formState.isValid

  return (
    <Button
      {...props}
      error={isError}
      isLoading={formState.isSubmitting}
      onSubmit={props.onSubmit && handleSubmit(props.onSubmit)}
    />
  )
}

export default ControlledButton
