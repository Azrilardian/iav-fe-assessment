import React from 'react'

import { ApiResponse } from 'apisauce'

import PageNavigation from '@/src/components/page-navigation'
import SWRProvider from '@/src/components/swr-provider'
import { productApi } from '@/src/services/api'
import { ProductModel } from '@/src/services/swr/models/products.types'

import ProductDetails from './_components/product-details'
import ProductImages from './_components/product-images'

type ProductResponse = ApiResponse<ProductModel>

export const dynamicParams = true
export const revalidate = 0

export async function generateMetadata({
  params
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params
  const product: ProductResponse = await productApi.getProduct(productId)

  return {
    title: product.data.title,
    description: product.data.description
  }
}

export async function generateStaticParams() {
  const products = await productApi.getProducts()

  const paths = products.data?.products?.map((product: ProductModel) => ({
    params: { productId: product.id }
  }))

  return paths
}

const Page = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const { productId } = await params
  const product: ProductResponse = await productApi.getProduct(productId)

  return (
    <SWRProvider
      fallback={{
        [`products/${productId}?select=title,thumbnail,category,price,description,images,meta`]:
          product.data
      }}
    >
      <PageNavigation />
      <div className='container-md container'>
        <main className='main'>
          <div className='grid grid-cols-1 gap-lg xl:grid-cols-2'>
            <ProductImages />
            <ProductDetails />
          </div>
        </main>
      </div>
    </SWRProvider>
  )
}

export default Page
