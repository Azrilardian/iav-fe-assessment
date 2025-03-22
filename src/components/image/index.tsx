import React, { FC, memo } from 'react'

import NextImage, { ImageProps } from 'next/image'

const Image: FC<ImageProps> = (props) => {
  const { alt = 'An awesome image', ...rest } = props

  return (
    <NextImage
      alt={alt}
      loading='lazy'
      decoding='async'
      quality={65}
      fill
      style={{ objectFit: 'cover' }}
      placeholder='blur'
      blurDataURL={`/_next/image?url=${rest.src}&w=16&q=1`}
      {...rest}
    />
  )
}

export default memo(Image)
