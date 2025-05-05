import React from 'react'

import { Metadata } from 'next'

import SuccessMessageCard from '@/src/components/success-message-card'
import { PROJECT_NAME } from '@/src/config/env'
import { productsPath } from '@/src/config/paths'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Payment Success - ${PROJECT_NAME}`,
    description: `Payment success`
  }
}

const Page = () => {
  return (
    <div className='container-wide container'>
      <main className='main'>
        <SuccessMessageCard
          title='payment_successful'
          description='payment_successful_description'
          buttonLabel='Home'
          buttonLink={productsPath()}
        />
      </main>
    </div>
  )
}

export default Page
