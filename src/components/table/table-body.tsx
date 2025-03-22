import React from 'react'

import {
  TableBody as HeroTableBody,
  Spinner,
  TableCell,
  TableRow
} from '@heroui/react'
import { flexRender } from '@tanstack/react-table'

import { TableEmpty, TableError } from './table-error'
import { TableBodyProps } from './table.types'

const TableBody = (props: TableBodyProps) => {
  const { table, loadingState, isError } = props

  if (isError) {
    return <TableError table={table} />
  }

  return (
    <HeroTableBody
      emptyContent={<TableEmpty />}
      loadingContent={<Spinner />}
      loadingState={loadingState}
    >
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id} id={row.id}>
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </HeroTableBody>
  )
}

export default TableBody
