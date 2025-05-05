import React from 'react'

import classNames from 'classnames'

const CartProductCardSkeleton = () => {
  return (
    <div className='grid grid-cols-1 gap-x-lg gap-y-lg sm:grid-cols-2 xl:gap-y-xlAlt'>
      {Array.from({ length: 9 }).map((_, index) => (
        <div className={classNames('col-span-1 sm:col-span-1')} key={index}>
          <div className='product-card-image-wrapper'>
            <div className='skeleton product-card-image' />
            <div className='flex h-auto flex-col items-center justify-between'>
              <div className='skeleton hidden h-[20px] w-[20px] xl:block' />
              <div className='skeleton hidden h-[70px] w-[25px] xl:block' />
              <span></span>
            </div>
          </div>
          <div className='xl:pr-9'>
            <div className='skeleton mb-smAlt mt-mdAlt h-[15px] w-[45px]' />
            <div className='flex items-center justify-between'>
              <div className='paragraph-skeleton !w-[60%]' />
              <div className='skeleton h-[28px] w-[60px]' />
            </div>
          </div>
          <div className='skeleton m-auto mt-7 h-[23px] w-[75px] rounded-sm xl:m-0 xl:mt-0 xl:hidden' />
        </div>
      ))}
    </div>
  )
}

export default CartProductCardSkeleton
