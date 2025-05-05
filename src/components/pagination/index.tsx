import React, { FC, SVGProps, memo } from 'react'

import { PaginationItemType, usePagination } from '@heroui/react'
import classNames from 'classnames'

import { useIsMobile } from '@/src/hooks/use-mobile'

import { useCustomPagination } from './hook'
import { PaginationProps } from './types'

export const ChevronIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden='true'
      fill='none'
      focusable='false'
      height='1em'
      role='presentation'
      viewBox='0 0 24 24'
      width='1em'
      {...props}
    >
      <path
        d='M15.5 19l-7-7 7-7'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  )
}

const Pagination: FC<PaginationProps> = (props) => {
  const { data } = props

  const isMobile = useIsMobile()

  const { page, totalPages, handlePageChange } = useCustomPagination(data)

  const { activePage, range, setPage, onNext, onPrevious } = usePagination({
    showControls: true,
    siblings: isMobile ? 0 : 3,
    page,
    total: totalPages,
    onChange: handlePageChange
  })

  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-center gap-2'>
        {range?.map((page, index) => {
          if (page === PaginationItemType.NEXT) {
            return (
              <button
                aria-label='Next'
                key={index}
                className={classNames(
                  'ease flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-color-palette-greyExtraLight',
                  {
                    'cursor-default opacity-30': activePage === totalPages
                  }
                )}
                onClick={onNext}
              >
                <ChevronIcon className='rotate-180' />
              </button>
            )
          }

          if (page === PaginationItemType.PREV) {
            return (
              <button
                aria-label='Previous'
                key={index}
                className={classNames(
                  'ease flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-color-palette-greyExtraLight',
                  {
                    'cursor-default opacity-30': activePage === 1
                  }
                )}
                onClick={onPrevious}
              >
                <ChevronIcon />
              </button>
            )
          }

          if (page === PaginationItemType.DOTS) {
            return (
              <button
                aria-label='Dots'
                key={index}
                className={classNames(
                  'ease flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors hover:bg-color-palette-greyExtraLight',
                  {
                    'cursor-default opacity-30': activePage === 1
                  }
                )}
              >
                ...
              </button>
            )
          }

          return (
            <button
              aria-label={`Page ${page}`}
              key={index}
              className={classNames(
                'ease h-8 w-8 rounded-md text-sm transition-colors hover:bg-color-palette-greyExtraLight',
                activePage === page && 'bg-black text-white hover:!bg-black'
              )}
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default memo(Pagination)
