import React from 'react'

const ProductSummarySkeleton = () => {
  return (
    <div>
      <div className='skeleton h-6 w-[52px]' />
      <div className='flex justify-between pb-rgAlt pt-md'>
        <div className='skeleton h-[72px] w-[70%]' />
        <div className='skeleton h-[36px] w-[20%]' />
      </div>
      <div className='flex flex-col justify-between gap-[6px]'>
        <div className='paragraph-skeleton' />
        <div className='paragraph-skeleton' />
        <div className='paragraph-skeleton !w-[150px]' />
      </div>
    </div>
  )
}

export default ProductSummarySkeleton
