import React, { FC } from 'react'

import { TextAreaProps, Textarea } from '@heroui/react'
import { useController, useFormContext } from 'react-hook-form'

import Icon from '../../icon'

const ControlledTextArea: FC<TextAreaProps> = (props) => {
  const { name, placeholder = 'Text area placeholder', ...rest } = props

  const { register, control } = useFormContext()
  const {
    fieldState: { invalid, error }
  } = useController({ control, name })

  return (
    <Textarea
      id={name}
      errorMessage={
        <div className='flex items-center gap-xsAlt'>
          <Icon icon='icon-info' size={16} />
          <span className='text-sm'>{error?.message}</span>
        </div>
      }
      isInvalid={invalid}
      autoComplete={name}
      data-test-id={`${name}-text-area`}
      labelPlacement='outside'
      placeholder={placeholder}
      disableAutosize
      classNames={{
        label: '!text-color-palette-black text-sm',
        errorMessage: 'text-color-palette-red text-sm',
        inputWrapper:
          'border border-color-palette-greyLight bg-transparent px-md py-sm',
        input: 'text-sm min-h-[80px]',
        helperWrapper: 'pt-xsAlt pb-0 px-0'
      }}
      {...register(name)}
      {...rest}
    />
  )
}

export default ControlledTextArea
