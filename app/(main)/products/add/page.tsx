import React, { lazy } from 'react'

import { Metadata } from 'next'

import PageNavigation from '@/src/components/page-navigation'
import { PROJECT_NAME } from '@/src/config/env'

const AddProductForm = lazy(() => import('./_components/add-product-form'))

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Add Product - ${PROJECT_NAME}`,
    description: `Add a new product to your collection`
  }
}

const Page = () => {
  return (
    <>
      <PageNavigation />
      <div className='container-sm container'>
        <main className='main'>
          <AddProductForm />
        </main>
      </div>
    </>
  )
}

export default Page
