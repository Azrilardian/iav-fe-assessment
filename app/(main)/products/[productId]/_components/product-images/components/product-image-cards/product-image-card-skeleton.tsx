import React from 'react'

const ProductImageCardSkeleton = () => {
  return (
    <div className='flex w-full flex-wrap gap-md'>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className='skeleton h-[46px] w-full max-w-[calc(100%/5-10px)] sm:h-[78px]'
        />
      ))}
    </div>
  )
}

export default ProductImageCardSkeleton
