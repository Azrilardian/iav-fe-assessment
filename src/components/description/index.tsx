import React, { FC, memo } from 'react'

import { DescriptionProps } from './types'
import Text from '../text'

const Description: FC<DescriptionProps> = (props) => {
  const { label, children } = props

  return (
    <div>
      <Text className='font-semibold'>{label}</Text>
      <Text>{children}</Text>
    </div>
  )
}

export default memo(Description)
