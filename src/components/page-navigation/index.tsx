'use client'

import React, { FC } from 'react'

import { Divider } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import Breadcrumbs from '../breadcrumbs'
import Button from '../button'
import Icon from '../icon'
import Text from '../text'
import { PageNavigationProps } from './types'

const PageNavigation: FC<PageNavigationProps> = (props) => {
  const { breadcrumbs } = props

  const { t } = useTranslation('common')

  const router = useRouter()

  return (
    <div className='container-wide container'>
      <div className='flex items-center gap-rgAlt'>
        <Button
          withoutSpacing
          variant='light'
          startContent={<Icon icon='icon-arrow-left' />}
          className='gap-xs'
          label={
            <Text tag='span' variant='body2' weight='bold'>
              {t('back')}
            </Text>
          }
          onPress={() => router.back()}
        />
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <Divider className='mt-1' />
    </div>
  )
}

export default PageNavigation
