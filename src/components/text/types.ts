import { HTMLAttributes, ReactNode } from 'react'

export type TagType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'small'
  | 'span'

export type FontWeightType = 'normal' | 'medium' | 'semibold' | 'bold'

export type TextSizeType =
  | '5xl'
  | '4xl'
  | '3xl'
  | '2xl'
  | 'xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs'

export type VariantType =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'title5'
  | 'title6'
  | 'body1'
  | 'body2'
  | 'body3'

export type TextProps = HTMLAttributes<HTMLElement> & {
  tag?: TagType
  variant?: VariantType
  weight?: FontWeightType
  children: ReactNode
}
