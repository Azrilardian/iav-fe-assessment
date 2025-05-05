import { ReactNode } from 'react'

import { AccordionItemIndicatorProps, AccordionItemProps } from '@heroui/react'

export type AccordionItemPropsWithContent = Omit<
  AccordionItemProps,
  'content'
> & {
  content?: ReactNode
}

export type AccordionProps = {
  className?: string
  items: AccordionItemPropsWithContent[]
  defaultExpandedKeys?: string[]
  indicator?:
    | ReactNode
    | ((props: AccordionItemIndicatorProps) => ReactNode)
    | null
  keepContentMounted?: boolean
}
