import React from 'react'

import { v4 as uuidv4 } from 'uuid'

import { mastercard, paypal, visa } from '@/src/assets/images'
import Image from '@/src/components/image'
import { getTranslate } from '@/src/locales/i18n'

const t = getTranslate('payment')

const PAYMENT_LOGOS = [
  {
    src: paypal,
    alt: t('paypal_logo')
  },
  {
    src: visa,
    alt: t('visa_logo')
  },
  {
    src: mastercard,
    alt: t('mastercard_logo')
  }
]

const PaymentLogos = () => {
  return (
    <div className='mb-lg flex items-center gap-mdAlt'>
      {PAYMENT_LOGOS.map((logo) => (
        <div
          key={uuidv4()}
          className='relative h-8 w-[46px] overflow-hidden rounded-[2.5px]'
        >
          <Image src={logo.src} alt={t(logo.alt)} />
        </div>
      ))}
    </div>
  )
}

export default PaymentLogos
