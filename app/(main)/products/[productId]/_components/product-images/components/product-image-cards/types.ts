export type ProductImageCardProps = {
  image: string
  title: string
  isSelected?: boolean
  handleSelectedImage: (image: string) => void
}

export type ProductImageCardsProps = {
  images: {
    image: string
    isSelected: boolean
  }[]
  title: string
  selectedImage: string
  handleSelectedImage: (image: string) => void
}
