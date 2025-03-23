import React from 'react'

import classNames from 'classnames'
import { useFormContext } from 'react-hook-form'

import { ControlledButtonProps } from './types'

import Button from '.'

const ControlledButton = (props: ControlledButtonProps) => {
  const { formState, handleSubmit } = useFormContext()

  const isError = formState.isSubmitted && !formState.isValid

  return (
    <Button
      isLoading={formState.isSubmitting}
      onSubmit={props.onSubmit && handleSubmit(props.onSubmit)}
      className={classNames(props.className, {
        'border border-color-palette-red': isError
      })}
      {...props}
    />
  )
}

export default ControlledButton
