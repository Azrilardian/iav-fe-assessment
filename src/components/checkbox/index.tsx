import React, { FC } from 'react'

import { Checkbox as HCheckbox } from '@heroui/react'

import { CheckboxProps } from './types'

const Checkbox: FC<CheckboxProps> = (props) => {
  return (
    <HCheckbox
      radius='sm'
      className='hero-checkbox'
      classNames={{
        label: 'text-color-palette-black font-medium text-xs tracking-[2px]'
      }}
      {...props}
    >
      {props.title}
    </HCheckbox>
  )
}

export default Checkbox
