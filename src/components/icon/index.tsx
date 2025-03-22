import React, { FC, memo } from 'react'

import classNames from 'classnames'

import { IconProps } from './types'

const Icon: FC<IconProps> = (props) => {
  const { icon, size = '24', className } = props

  return (
    <i
      className={classNames('icon', icon, className)}
      style={size ? { fontSize: `${size}px`, width: `${size}px` } : {}}
    />
  )
}

export default memo(Icon)
