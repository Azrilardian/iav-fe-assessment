import React, { FC, memo, useState } from 'react'

import NextImage, { ImageProps } from 'next/image'

import { defaultImage } from '@/src/assets/images'

const Image: FC<ImageProps> = (props) => {
  const {
    alt = 'An awesome image',
    priority,
    src,
    fill = true,
    ...rest
  } = props

  const [isError, setIsError] = useState(false)

  return (
    <NextImage
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'async' : 'sync'}
      quality={65}
      fill={fill}
      style={{ objectFit: 'cover' }}
      onError={() => {
        setIsError(true)
      }}
      src={isError ? defaultImage : src}
      {...rest}
    />
  )
}

export default memo(Image)
