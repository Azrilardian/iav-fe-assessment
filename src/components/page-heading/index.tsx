'use client'

import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

import Text from '../text'
import { PageHeadingProps } from './types'

const PageHeading: FC<PageHeadingProps> = (props) => {
  const { title, description } = props

  const { t } = useTranslation('products')

  return (
    <div>
      <Text tag='h1' variant='title2' weight='semibold' className='mb-md'>
        {t(title)}
      </Text>
      <Text tag='p' variant='body2'>
        {t(description)}
      </Text>
    </div>
  )
}

export default PageHeading
