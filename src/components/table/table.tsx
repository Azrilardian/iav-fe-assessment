'use client'

import React, { useMemo, useState } from 'react'

import {
  Table as HeroTable,
  Selection,
  Spinner,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@heroui/react'
import {
  PaginationState,
  SortingState,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import Pagination from './pagination'
import { TableEmpty, TableError } from './table-error'
import {
  getPaginationFromSearchParams,
  getSortFromSearchParams,
  getSortParams
} from './table.helper'
import { TableProps } from './table.types'

const Table = <TableValues extends object>(props: TableProps<TableValues>) => {
  const { name, columns, data, pageSize = 10, isLoading, isError } = props

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]))

  const sorting = useMemo(
    () => getSortFromSearchParams(new URLSearchParams(searchParams)),
    [searchParams]
  )
  const pagination = useMemo(
    () => getPaginationFromSearchParams(new URLSearchParams(searchParams)),
    [searchParams]
  )

  const setSorting: any = (updater: (old: SortingState) => SortingState) => {
    const params = getSortParams(searchParams)

    updater(sorting).forEach(({ id, desc }) => {
      params[`sort[${id}]`] = desc ? 'desc' : 'asc'
    })

    router.push(`${pathname}?${params.toString()}`)
  }

  const setPagination: any = (
    updater: (old: PaginationState) => PaginationState
  ) => {
    const params = new URLSearchParams(searchParams)
    const { pageIndex, pageSize } = updater(pagination)

    params.set('page', `${pageIndex}`)
    params.set('perPage', `${pageSize}`)

    router.push(`${pathname}?${params.toString()}`)
  }

  // Just for example
  const items = useMemo(() => {
    const start = (pagination.pageIndex - 1) * pagination.pageSize
    const end = start + pagination.pageSize

    return data.slice(start, end)
  }, [pagination.pageIndex, data])
  const pages = Math.ceil(data.length / pagination.pageSize)

  const table = useReactTable({
    data: items,
    columns,
    state: {
      sorting,
      pagination
    },
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    manualPagination: true,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    pageCount: pageSize
  })

  const bottomContent = useMemo(() => {
    return (
      <div className='flex items-center justify-between px-2 py-2'>
        <span className='w-[30%] text-small text-default-400'>
          {selectedKeys === 'all'
            ? 'All items selected'
            : `${selectedKeys.size} of ${data.length} selected`}
        </span>
        <Pagination
          pagination={pagination}
          setPagination={setPagination}
          pages={pages}
        />
      </div>
    )
  }, [selectedKeys, data.length, pagination, pages])

  const loadingState = useMemo(
    () => (isLoading ? 'loading' : 'idle'),
    [isLoading]
  )

  return (
    <HeroTable
      aria-labelledby={name}
      aria-label={name}
      bottomContent={bottomContent}
      topContentPlacement='outside'
      bottomContentPlacement='outside'
      selectionMode='multiple'
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <TableHeader>
        {table.getFlatHeaders().map((header) => (
          <TableColumn
            key={header.id}
            onClick={header.column.getToggleSortingHandler()}
          >
            {flexRender(header.column.columnDef.header, header.getContext())}
          </TableColumn>
        ))}
      </TableHeader>
      {isError ? (
        <TableError table={table} />
      ) : (
        <TableBody
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
        </TableBody>
      )}
    </HeroTable>
  )
}

export default Table
