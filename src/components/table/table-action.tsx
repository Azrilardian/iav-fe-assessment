import React from 'react'

import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { TableActionButtonProps } from './table.types'

export const TableActionButton = (props: TableActionButtonProps) => {
  const {
    label,
    icon,
    to,
    onClick,
    variant,
    visible = true,
    ...linkProps
  } = props

  if (!visible) return null

  return (
    <OverlayTrigger placement='top' overlay={<Tooltip>{label}</Tooltip>}>
      <Link
        to={to || '#'}
        aria-label={label}
        className='action-icon'
        onClick={(e) => {
          if (!onClick) return

          e.preventDefault()
          onClick(e)
        }}
        {...linkProps}
      >
        <i className={`mdi mdi-24px ${icon} text-${variant}`}></i>
      </Link>
    </OverlayTrigger>
  )
}
