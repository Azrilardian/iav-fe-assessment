import React, { FC } from 'react'

import { Switch, SwitchProps } from '@heroui/react'
import { useController, useFormContext } from 'react-hook-form'

const ControlledSwitch: FC<SwitchProps> = (props) => {
  const { name, onValueChange, children, ...otherProps } = props

  const { register, control } = useFormContext()
  const {
    fieldState: { invalid }
  } = useController({ control, name })

  return (
    <Switch
      id={name}
      type='switch'
      isInvalid={invalid}
      data-test-id={name}
      {...register(name, { onChange: onValueChange })}
      {...otherProps}
    >
      {children}
    </Switch>
  )
}

export default ControlledSwitch
