import React, { lazy } from 'react'

import { Metadata } from 'next'

import PageNavigation from '@/src/components/page-navigation'
import { PROJECT_NAME } from '@/src/config/env'
import { cartPath, paymentPath } from '@/src/config/paths'

const PaymentProductForm = lazy(
  () => import('./_components/payment-product-form')
)

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Payment - ${PROJECT_NAME}`,
    description: `Payment`
  }
}

const breadcrumbs = [
  { key: 'cart', label: 'Cart', href: cartPath() },
  { key: 'payment', label: 'Payment', href: paymentPath() }
]

const Page = () => {
  return (
    <>
      <PageNavigation breadcrumbs={breadcrumbs} />
      <div className='container-sm container'>
        <main className='main'>
          <PaymentProductForm />
        </main>
      </div>
    </>
  )
}

export default Page
