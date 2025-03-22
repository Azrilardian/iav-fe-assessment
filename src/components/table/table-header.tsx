'use client'

import { FC } from 'react'

import { TableHeader as HeroTableHeader, TableColumn } from '@heroui/react'
import { flexRender } from '@tanstack/react-table'

import { TableHeaderProps } from './table.types'

const TableHeader: FC<TableHeaderProps> = (props) => {
  const { table } = props

  return (
    <HeroTableHeader>
      {table.getFlatHeaders().map((header) => (
        <TableColumn
          key={header.id}
          onClick={header.column.getToggleSortingHandler()}
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
        </TableColumn>
      ))}
    </HeroTableHeader>
  )
}

export default TableHeader
