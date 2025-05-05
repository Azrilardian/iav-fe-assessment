'use client'

import React from 'react'

import { CircularProgress } from '@heroui/react'
import { useTranslation } from 'react-i18next'

import useNetworkStatus from '@/src/hooks/use-network-status'

const Loading = () => {
  const { t } = useTranslation('common')

  const { isOnline } = useNetworkStatus()

  const getConnectionMessage = () => {
    return isOnline ? t('just_a_moment') : t('you_are_offline')
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <CircularProgress label={getConnectionMessage()} />
    </div>
  )
}

export default Loading
