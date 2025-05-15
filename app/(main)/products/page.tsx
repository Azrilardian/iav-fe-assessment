import React from 'react'

import { Metadata } from 'next'

import ProductCards from '@/src/components/product-cards'
import Sidebar from '@/src/components/sidebar'
import SWRProvider from '@/src/components/swr-provider'
import { PROJECT_NAME } from '@/src/config/env'
import { productApi } from '@/src/services/api'

import ProductsFilter from './_components/products-filter'
import ProductsHeader from './_components/products-header'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Our Productss - ${PROJECT_NAME}`,
    description: `Browse our collection of products`
  }
}

const Page = async () => {
  const products = await productApi.getProducts()

  return (
    <SWRProvider
      fallback={{
        'products?limit=9&select=title,thumbnail,category,price,meta':
          products.data.products
      }}
    >
      <div className='container-wide container'>
        <div className='flex flex-col gap-10 lg:flex-row'>
          <Sidebar>
            <ProductsFilter />
          </Sidebar>
          <main className='main'>
            <section>
              <ProductsHeader />
            </section>
            <section>
              <ProductCards />
            </section>
          </main>
        </div>
      </div>
    </SWRProvider>
  )
}

export default Page
