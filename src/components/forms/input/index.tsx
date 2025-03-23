import React, { FC } from 'react'

import { Input, InputProps } from '@heroui/react'
import { useController, useFormContext } from 'react-hook-form'

const ControlledInput: FC<InputProps> = (props) => {
  const { name, placeholder = 'Input placeholder', ...rest } = props

  const { register, control } = useFormContext()
  const {
    fieldState: { invalid, error }
  } = useController({ control, name })

  return (
    <Input
      name={name}
      id={name}
      errorMessage={error?.message}
      isInvalid={invalid}
      autoComplete={name}
      data-test-id={`${name}-input`}
      labelPlacement='outside'
      placeholder={placeholder}
      classNames={{
        label: '!text-color-palette-black text-sm',
        errorMessage: 'text-color-palette-red text-sm',
        inputWrapper:
          'border border-color-palette-greyLight bg-transparent px-md py-sm',
        input: 'text-color-palette-white text-sm'
      }}
      {...register(name)}
      {...rest}
    />
  )
}

export default ControlledInput
