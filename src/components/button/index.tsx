import { Button as HButton } from '@heroui/react'

import { ButtonProps } from './types'

const Button = (props: ButtonProps) => {
  const { label, color = 'primary', ...rest } = props

  return (
    <HButton radius='md' color={color} {...rest}>
      {label}
    </HButton>
  )
}

export default Button
