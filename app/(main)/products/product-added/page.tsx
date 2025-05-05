import React from 'react'

import { Metadata } from 'next'

import SuccessMessageCard from '@/src/components/success-message-card'
import { PROJECT_NAME } from '@/src/config/env'
import { productsPath } from '@/src/config/paths'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Product Added - ${PROJECT_NAME}`,
    description: `Product added successfully`
  }
}

const Page = () => {
  return (
    <div className='container-wide container'>
      <main className='main'>
        <SuccessMessageCard
          title='successfully_add_product'
          description='congratulations_add_product'
          buttonLabel='Home'
          buttonLink={productsPath()}
        />
      </main>
    </div>
  )
}

export default Page
