'use client'

import { createElement } from 'react'

import classNames from 'classnames/dedupe'

import { createVariantClass } from './helpers'
import { TextProps } from './types'

const Text = ({
  tag = 'p',
  variant = 'body2',
  weight = 'normal',
  children,
  className,
  ...props
}: TextProps) => (
  <>
    {createElement(
      tag,
      {
        ...props,
        className: classNames(
          createVariantClass(variant, weight),
          'block',
          className
        )
      },
      children
    )}
  </>
)

export default Text
