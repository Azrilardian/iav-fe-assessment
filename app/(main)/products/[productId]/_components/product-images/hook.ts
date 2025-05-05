import { useCallback, useEffect, useMemo, useState } from 'react'

import { useProduct } from '@/src/services/swr/hooks/use-product'

export const useProductImages = () => {
  const { product, isLoading } = useProduct()

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const productImages = useMemo(
    () =>
      product?.images?.map((image) => ({
        image,
        isSelected: image === selectedImage
      })) || [],
    [product?.images, selectedImage, isLoading]
  )

  const handleSelectedImage = useCallback((image: string) => {
    setSelectedImage(image)
  }, [])

  useEffect(() => {
    setSelectedImage(product?.images[0])
  }, [product?.images])

  return {
    isLoading,
    product,
    productImages,
    selectedImage,
    handleSelectedImage
  }
}
