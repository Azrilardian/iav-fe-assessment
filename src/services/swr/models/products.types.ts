import { Collection } from '../middleware/collection-adaptor.type'

type Dimensions = {
  width: number
  height: number
  depth: number
}

type Review = {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

type Meta = {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}

type Size = string

export type ProductModel = {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  thumbnail: string
  images: string[]
  sizes: Size[]
  outOfStock: boolean
}

export type AddProductModel = Pick<
  ProductModel,
  'title' | 'category' | 'price' | 'stock' | 'description' | 'images'
>

export type ProductCollection = Collection<'products', ProductModel>
