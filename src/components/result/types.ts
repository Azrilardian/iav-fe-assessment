import { ComponentProps, ReactNode } from 'react'

export type ResultProps = ComponentProps<'div'> & {
  icon: string
  title: string
  subTitle: string
  extra?: ReactNode[]
}
