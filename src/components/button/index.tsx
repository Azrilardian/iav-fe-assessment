import { useMemo } from 'react'

import { Button as HButton, Link } from '@heroui/react'
import classNames from 'classnames'

import { ButtonWithLinkProps } from './types'

const Button = (props: ButtonWithLinkProps) => {
  const {
    name = 'button',
    label,
    color = 'primary',
    variant = 'solid',
    size = 'md',
    link,
    className,
    testID = `${name}-button`,
    withoutSpacing,
    ...rest
  } = props

  const sizeClass = useMemo(
    () => ({
      sm: 'px-lgAlt py-sm',
      md: 'px-xl py-sm',
      lg: 'px-xlAlt py-sm'
    }),
    [size]
  )

  return (
    <HButton
      aria-label={name}
      disableRipple={withoutSpacing}
      data-test-id={testID}
      as={link ? Link : 'button'}
      radius='md'
      color={color}
      href={link}
      variant={variant}
      className={classNames(
        'font-medium tracking-[0.04em]',
        sizeClass[size],
        withoutSpacing && 'h-fit min-w-0 !px-1 !py-1',
        className
      )}
      {...rest}
    >
      {label}
    </HButton>
  )
}

export default Button
