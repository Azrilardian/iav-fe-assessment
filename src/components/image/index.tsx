import React, { FC, memo } from 'react'

import { ImageProps } from '@heroui/react'

import { defaultImage } from 'assets/images'

const Image: FC<ImageProps> = (props) => {
  const {
    alt = 'An awesome image',
    fallbackSrc = defaultImage,
    ...rest
  } = props

  return <Image alt={alt} fallbackSrc={fallbackSrc} {...rest} />
}

export default memo(Image)
