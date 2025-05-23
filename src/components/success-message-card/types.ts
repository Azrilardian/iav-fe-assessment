import { ComponentProps } from 'react'

export type SuccessMessageCardProps = ComponentProps<'div'> & {
  title: string
  description: string
  buttonLabel: string
  buttonLink: string
}
