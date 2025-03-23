import { Button as HButton, Link } from '@heroui/react'
import classNames from 'classnames'

import { ButtonWithLinkProps } from './types'

const Button = (props: ButtonWithLinkProps) => {
  const {
    name,
    label,
    color = 'primary',
    variant = 'solid',
    link,
    className,
    testID = `${name}-button`,
    ...rest
  } = props

  return (
    <HButton
      data-test-id={testID}
      as={link ? Link : 'button'}
      radius='md'
      color={color}
      href={link}
      variant={variant}
      className={classNames(
        'px-[2.625rem] py-sm font-medium tracking-[0.04em]',
        className
      )}
      {...rest}
    >
      {label}
    </HButton>
  )
}

export default Button
