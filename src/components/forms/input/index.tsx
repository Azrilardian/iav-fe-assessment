import React, { FC } from 'react'

import { Input, InputProps } from '@heroui/react'
import { useController, useFormContext } from 'react-hook-form'

import Icon from '../../icon'

const ControlledInput: FC<InputProps> = (props) => {
  const { name, placeholder = 'Input placeholder', ...rest } = props

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
      autoComplete={name}
      data-test-id={`${name}-input`}
      labelPlacement='outside'
      placeholder={placeholder}
      classNames={{
        label: '!text-color-palette-black text-sm',
        errorMessage: 'text-color-palette-red text-sm',
        inputWrapper:
          'border border-color-palette-greyLight bg-transparent px-md py-sm',
        input: 'text-sm',
        helperWrapper: 'pt-xsAlt pb-0 px-0'
      }}
      {...register(name)}
      {...rest}
    />
  )
}

export default ControlledInput
