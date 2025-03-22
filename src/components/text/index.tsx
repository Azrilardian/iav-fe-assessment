import { createElement } from 'react'

import classNames from 'classnames'

import { TagVariants, TextProps } from './types'

const variantClassNames: Record<TagVariants, string> = {
  h1: 'font-semibold text-5xl leading-normal',
  h2: 'font-semibold text-4xl leading-normal',
  h3: 'font-bold text-3xl leading-normal',
  p: 'font-normal text-base leading-normal',
  small: 'font-medium text-xs leading-normal',
  span: 'font-normal text-base leading-normal'
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
