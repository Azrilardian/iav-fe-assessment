'use client'

import React, { FC, memo } from 'react'

import classNames from 'classnames'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { logo, successAnimation } from '@/src/assets/images'

import { SuccessMessageCardProps } from './types'
import Button from '../button'
import Text from '../text'

const SuccessMessageCard: FC<SuccessMessageCardProps> = (props) => {
  const { title, description, buttonLabel, buttonLink, className, ...rest } =
    props

  const { t } = useTranslation('common')

  return (
    <div
      className={classNames(
        'flex min-h-[500px] w-full flex-col items-center justify-between rounded-md border border-color-palette-greyLight sm:absolute sm:left-[50%] sm:top-[50%] sm:w-[495px] sm:-translate-x-1/2 sm:-translate-y-1/2',
        className
      )}
      {...rest}
    >
      <div className='w-full border-b-1 border-color-palette-greyLight p-smAlt'>
        <Image src={logo} alt='An awesome company brand logo' height={20} />
      </div>
      <div className='flex flex-col items-center px-md py-lg text-center sm:px-[75px]'>
        <Image
          src={successAnimation}
          alt={t('an_awesome_success_result_animation')}
          height={228}
          width={228}
          className='mb-rgMed'
        />

        <Text tag='h1' variant='title4' weight='semibold'>
          {t(title)}
        </Text>
        <Text
          tag='p'
          variant='body2'
          className='my-rgMed text-color-palette-greyDark'
        >
          {t(description)}
        </Text>
        <Button label={t(buttonLabel)} link={buttonLink} />
      </div>
    </div>
  )
}

export default memo(SuccessMessageCard)
