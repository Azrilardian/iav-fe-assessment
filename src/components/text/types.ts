import { HTMLAttributes, ReactNode } from 'react'

export type TagVariants = 'h1' | 'h2' | 'h3' | 'p' | 'small' | 'span'

export type TextProps = HTMLAttributes<HTMLElement> & {
  tag?: TagVariants
  children: ReactNode
}
