'use client'

import React from 'react'

import ProductImageCards from './components/product-image-cards'
import ProductImageCardSkeleton from './components/product-image-cards/product-image-card-skeleton'
import ProductImageMain from './components/product-image-main'
import ProductImageMainSkeleton from './components/product-image-main/product-image-main-skeleton'
import { useProductImages } from './hook'

const ProductImages = () => {
  const {
    isLoading,
    product,
    productImages,
    selectedImage,
    handleSelectedImage
  } = useProductImages()

  if (isLoading) {
    return (
      <div className='order-2 flex flex-col gap-[20px] md:w-full xl:order-1 xl:w-[504px]'>
        <ProductImageMainSkeleton />
        <ProductImageCardSkeleton />
      </div>
    )
  }

  if (!product.images.length) {
    return null
  }

  return (
    <div className='order-2 flex flex-col gap-[20px] md:w-full xl:order-1 xl:w-[504px]'>
      <ProductImageMain
        image={selectedImage || product.thumbnail}
        alt={product?.title}
      />
      <ProductImageCards
        images={productImages}
        title={product?.title}
        selectedImage={selectedImage}
        handleSelectedImage={handleSelectedImage}
      />
    </div>
  )
}

export default ProductImages
