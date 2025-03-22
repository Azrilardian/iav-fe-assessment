import React, { FC } from 'react'

import { Input, InputProps } from '@heroui/react'
import { useController, useFormContext } from 'react-hook-form'

import useToggle from '@/src/hooks/use-toggle.hook'

const ControlledPasswordInput: FC<InputProps> = (props) => {
  const { name, ...rest } = props

  const [isVisible, toggleVisibility] = useToggle()

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
      type={isVisible ? 'text' : 'password'}
      endContent={
        <button
          aria-label='toggle password visibility'
          type='button'
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <i className='password-eye' />
          ) : (
            <i className='password-eye' />
          )}
        </button>
      }
      data-test-id={name}
      {...register(name)}
      {...rest}
    />
  )
}

export default ControlledPasswordInput
