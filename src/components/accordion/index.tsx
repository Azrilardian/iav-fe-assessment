import React, { FC, memo } from 'react'

import { AccordionItem, Accordion as HAccordion } from '@heroui/react'
import classNames from 'classnames'

import { AccordionProps } from './types'

const Accordion: FC<AccordionProps> = (props) => {
  const {
    className,
    defaultExpandedKeys,
    items,
    indicator,
    keepContentMounted
  } = props

  return (
    <HAccordion
      selectionMode='multiple'
      defaultExpandedKeys={defaultExpandedKeys}
      className={classNames('px-0', className)}
      disableIndicatorAnimation={true}
      keepContentMounted={keepContentMounted}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.key}
          title={item.title}
          classNames={{
            title: 'text-color-palette-black font-bold text-sm',
            trigger: 'pt-rg pb-md',
            content: 'pt-0 pb-[18px]'
          }}
          className='tracking-[2px]'
          indicator={indicator}
        >
          {item.content}
        </AccordionItem>
      ))}
    </HAccordion>
  )
}

export default memo(Accordion)
