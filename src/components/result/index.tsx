import React, { FC, memo } from 'react'

import Text from '../text'
import { ResultProps } from './types'
import Icon from '../icon'

const Result: FC<ResultProps> = (props) => {
  const { icon, title, subTitle, extra, ...rest } = props

  return (
    <div className='flex flex-col items-center gap-2' {...rest}>
      <Icon icon={icon} />
      <Text tag='h4' className='text-center'>
        {title}
      </Text>
      <Text tag='p' className='text-center text-color-palette-greyDark'>
        {subTitle}
      </Text>
      {extra}
    </div>
  )
}

export default memo(Result)
