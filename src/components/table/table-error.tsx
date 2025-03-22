import React from 'react'

import { Button } from '@heroui/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { TableErrorProps } from './table.types'

const TableError = ({ table }: TableErrorProps) => {
  const { t } = useTranslation()

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleRetry = () => {
    const newParams = new URLSearchParams(searchParams)

    router.push(`${pathname}?${newParams.toString()}`)
  }

  return (
    <tbody className='error'>
      <tr>
        <td colSpan={table.getAllColumns().length}>
          <div className='pb-3 pt-2 text-center'>
            <div className='d-flex align-items-center justify-content-center text-danger mb-2'>
              <i className='mdi mdi-alert-rhombus mdi-24px me-1'></i>
              <h4 className='m-0'>{t('Unexpected Error')}</h4>
              <i className='mdi mdi-alert-rhombus mdi-24px ms-1'></i>
            </div>

            <p className='text-muted m-0'>
              {t('An error occurred while fetching data.')}
            </p>
            <p className='text-muted mb-2'>{t('Please try again later.')}</p>

            <Button onPress={handleRetry}>
              <i className='mdi mdi-refresh me-1'></i>
              {t('Retry')}
            </Button>
          </div>
        </td>
      </tr>
    </tbody>
  )
}

const TableEmpty = () => {
  const { t } = useTranslation()

  return (
    <div className='pb-3 pt-2 text-center'>
      <div className='d-flex align-items-center justify-content-center text-muted mb-2'>
        <i className='mdi mdi-flask mdi-24px me-1'></i>
        <h4 className='m-0'>{t('No Data Found')}</h4>
        <i className='mdi mdi-flask mdi-24px ms-1'></i>
      </div>
      <p className='text-muted m-0'>{t('Sorry, no data were found.')}</p>
    </div>
  )
}

export { TableError, TableEmpty }
