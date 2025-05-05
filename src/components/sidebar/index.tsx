'use client'

import React, { FC } from 'react'

import classNames from 'classnames'

import { SidebarProps } from './types'

const Sidebar: FC<SidebarProps> = (props) => {
  const { children, className, ...rest } = props

  return (
    <aside className={classNames('sidebar', className)} {...rest}>
      {children}
    </aside>
  )
}

export default Sidebar
