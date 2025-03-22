import React, { FC } from 'react'

import { Input, InputProps } from '@heroui/react'
import { useController, useFormContext } from 'react-hook-form'

const ControlledTextArea: FC<InputProps> = (props) => {
  const { name, ...rest } = props

  const { register, control } = useFormContext()
  const {
    fieldState: { invalid, error }
  } = useController({ control, name })

  return (
    <Input
      name={name}
      id={name}
      errorMessage={error.message}
      isInvalid={invalid}
      autoComplete={name}
      data-test-id={name}
      type='textarea'
      as='textarea'
      {...register(name)}
      {...rest}
    />
  )
}

export default ControlledTextArea
