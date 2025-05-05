import React, { FC, useState } from 'react'

import { BreadcrumbItem, Breadcrumbs as HBreadcrumbs } from '@heroui/react'
import { usePathname } from 'next/navigation'

import { BreadcrumbsProps } from './types'
import Icon from '../icon'
import Text from '../text'

const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const { items } = props

  const pathname = usePathname()

  const [currentPage, setCurrentPage] = useState<string | number | bigint>(
    pathname.split('/').pop()
  )

  if (!items?.length) return null

  return (
    <>
      <HBreadcrumbs
        onAction={(key: string | number | bigint) => setCurrentPage(key)}
        separator={
          <Icon
            icon='icon-chevron-right'
            size={16}
            className='text-color-palette-black'
          />
        }
      >
        {items?.map(({ key, label, href }) => (
          <BreadcrumbItem
            key={key}
            isCurrent={currentPage === key}
            href={href || '#'}
            classNames={{
              separator: 'px-smAlt'
            }}
          >
            <Text
              tag='span'
              variant='body2'
              weight='medium'
              className={
                currentPage === key || pathname === href
                  ? '!text-color-palette-brandPrimary'
                  : 'text-color-palette-gray'
              }
            >
              {label}
            </Text>
          </BreadcrumbItem>
        ))}
      </HBreadcrumbs>
    </>
  )
}

export default Breadcrumbs
