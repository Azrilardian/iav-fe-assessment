import { Button as HButton, Link } from '@heroui/react'

import { ButtonWithLinkProps } from './types'

const Button = (props: ButtonWithLinkProps) => {
  const { label, color = 'primary', link, ...rest } = props

  return (
    <HButton
      as={link ? Link : 'button'}
      radius='md'
      color={color}
      {...rest}
      href={link}
    >
      {label}
    </HButton>
  )
}

export default Button
