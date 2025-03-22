import React, { FC } from 'react'

import { Pagination as HeroPagination } from '@heroui/react'

import { PaginationProps } from './table.types'

const Pagination: FC<PaginationProps> = (props) => {
  const { pagination, setPagination, pages } = props

  return (
    <HeroPagination
      showControls
      showShadow
      color='primary'
      page={pagination.pageIndex}
      total={pages}
      onChange={(newPage) => {
        setPagination((old: any) => ({
          ...old,
          pageIndex: newPage
        }))
      }}
    />
  )
}

export default Pagination
