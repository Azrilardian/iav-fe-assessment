import React from 'react'

import { useIsMobile } from '@/src/hooks/use-mobile'

const ProductCardsSkeleton = () => {
  const isMobile = useIsMobile()

  return (
    <div className=''>
      <div className='mb-lg grid items-start gap-lgAlt gap-y-2xlAlt sm:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className='w-full'>
            <div className='skeleton product-card-image' />
            <div className='skeleton mb-smAlt mt-mdAlt h-[15px] w-[45px]' />
            <div className='flex items-center justify-between'>
              <div className='paragraph-skeleton !w-[60%]' />
              <div className='skeleton h-[28px] w-[60px]' />
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex items-center gap-2'>
          {Array.from({ length: isMobile ? 5 : 11 }).map((_, index) => (
            <div key={index} className='skeleton h-8 w-8 rounded-md' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCardsSkeleton
