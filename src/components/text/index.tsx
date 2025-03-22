import { createElement } from 'react'

import classNames from 'classnames'

import { TagVariants, TextProps } from './types'

const variantClassNames: Record<TagVariants, string> = {
  h1: 'font-semibold text-title-3 leading-9 text',
  h2: 'font-semibold text-title-2 leading-loose text',
  h3: 'font-bold text-title-1 leading-7 text',
  p: 'font-normal text-body-1 leading-normal text',
  small: 'font-medium text-small text',
  span: 'font-normal text-caption leading-normal text'
}

const Text = ({ tag = 'p', children, className, ...props }: TextProps) => (
  <>
    {createElement(
      tag,
      {
        ...props,
        className: classNames(variantClassNames[tag], className)
      },
      children
    )}
  </>
)

export default Text
