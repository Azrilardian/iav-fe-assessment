import React from 'react'

import classNames from 'classnames'

import { ButtonGroupProps } from './types'
import Button from '../button'
import ControlledButton from '../button/controlled'

const ButtonGroup = (props: ButtonGroupProps) => {
  const { buttons, className, ...rest } = props

  const [leftButton, rightButton] = buttons

  const LeftButton = leftButton?.onSubmit ? ControlledButton : Button
  const RightButton = rightButton?.onSubmit ? ControlledButton : Button

  return (
    <div
      className={classNames('flex items-center gap-rgAlt', className)}
      {...rest}
    >
      <LeftButton {...leftButton} />
      <RightButton {...rightButton} />
    </div>
  )
}

export default ButtonGroup
