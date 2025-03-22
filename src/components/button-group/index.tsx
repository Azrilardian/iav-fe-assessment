import React from 'react'

import { ButtonGroupProps } from './types'
import Button from '../button'
import ControlledButton from '../button/controlled'

const ButtonGroup = (props: ButtonGroupProps) => {
  const { buttons } = props

  const [leftButton, rightButton] = buttons

  const LeftButton = leftButton?.onSubmit ? ControlledButton : Button
  const RightButton = rightButton?.onSubmit ? ControlledButton : Button

  return (
    <div className='flex items-center gap-rgAlt'>
      <LeftButton {...leftButton} />
      <RightButton {...rightButton} />
    </div>
  )
}

export default ButtonGroup
