'use client'

import React, { ReactNode, useCallback } from 'react'

import { useSnapshot } from 'valtio'

import { appStateStore } from '@/src/stores/app-state-store'

export default function Layout({
  super_admin,
  admin,
  user
}: {
  super_admin: ReactNode
  admin: ReactNode
  user: ReactNode
}) {
  const {
    state: { userType }
  } = useSnapshot(appStateStore)

  const renderLayout = useCallback(() => {
    switch (userType) {
      case 'super-admin':
        return super_admin
      case 'admin':
        return admin
      case 'user':
      default:
        return user
    }
  }, [userType])

  return <main>{renderLayout()}</main>
}
