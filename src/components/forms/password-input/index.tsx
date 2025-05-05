import React, { FC } from 'react'

import { Input, InputProps } from '@heroui/react'
import { useController, useFormContext } from 'react-hook-form'

import useToggle from '@/src/hooks/use-toggle.hook'

import Icon from '../../icon'

const ControlledPasswordInput: FC<InputProps> = (props) => {
  const { name, ...rest } = props

  const [isVisible, toggleVisibility] = useToggle()

  const { register, control } = useFormContext()
  const {
    fieldState: { invalid, error }
  } = useController({ control, name })

  return (
    <Input
      id={name}
      errorMessage={
        <div className='flex items-center gap-xsAlt'>
          <Icon icon='icon-info' size={16} />
          <span className='text-sm'>{error?.message}</span>
        </div>
      }
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
      classNames={{
        label: '!text-color-palette-black text-sm',
        errorMessage: 'text-color-palette-red text-sm',
        inputWrapper:
          'border border-color-palette-greyLight bg-transparent px-md py-sm',
        input: 'text-sm',
        helperWrapper: 'pt-xsAlt pb-0 px-0'
      }}
      data-test-id={name}
      {...register(name)}
      {...rest}
    />
  )
}

export default ControlledPasswordInput
