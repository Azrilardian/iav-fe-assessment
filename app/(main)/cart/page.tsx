'use client'

import React from 'react'

import PageNavigation from '@/src/components/page-navigation'
import Sidebar from '@/src/components/sidebar'

import CartProductCards from './_components/cart-product-cards'
import OrderSummary from './_components/order-summary'

const breadcrumbs = [{ key: 'cart', label: 'Cart', href: '/cart' }]

const Page = () => {
  return (
    <>
      <PageNavigation breadcrumbs={breadcrumbs} />
      <div className='container-md container'>
        <div className='flex flex-col gap-lg xl:flex-row xl:gap-10'>
          <main className='main main-cart'>
            <CartProductCards />
          </main>
          <Sidebar className='sidebar-summary'>
            <OrderSummary />
          </Sidebar>
        </div>
      </div>
    </>
  )
}

export default Page
