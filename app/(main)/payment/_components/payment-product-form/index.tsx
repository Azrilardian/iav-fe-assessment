'use client'

import React from 'react'

import { useTranslation } from 'react-i18next'

import ButtonGroup from '@/src/components/button-group'
import FormProvider from '@/src/components/forms/form-provider'
import ControlledInput from '@/src/components/forms/input'
import Text from '@/src/components/text'

import { usePaymentProductForm } from './hook'
import PaymentLogos from '../payment-logos'

const PaymentProductForm = () => {
  const { t } = useTranslation('payment')

  const { handleSubmit, buttons, methods } = usePaymentProductForm()

  return (
    <section>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit}
        name='add-product-form'
      >
        <div className='w-full'>
          <Text tag='h1' variant='title5' weight='semibold' className='mb-md'>
            {t('personal_details')}
          </Text>
          <div className='mb-xlMed mt-lg grid grid-cols-2 gap-rgAlt'>
            <ControlledInput
              name='addressLine'
              label={t('address_line')}
              placeholder='P.o.Box 1223'
            />
            <ControlledInput
              name='city'
              label={t('city')}
              placeholder='Denpasar'
            />
            <ControlledInput
              name='state'
              label={t('state')}
              placeholder='Indonesia'
            />
            <ControlledInput
              name='postalCode'
              label={t('postal_code')}
              type='number'
              placeholder='9090'
            />
          </div>
          <div>
            <Text tag='h2' variant='title5' weight='semibold' className='mb-rg'>
              {t('payment_methods')}
            </Text>
            <PaymentLogos />
            <div className='mb-xlMed grid grid-cols-2 gap-rgAlt'>
              <ControlledInput
                name='cardholderName'
                label={t('cardholder_name')}
                placeholder={t('see_your_card')}
                className='col-span-2'
              />
              <ControlledInput
                name='cardNumber'
                label={t('card_number')}
                type='number'
                placeholder={t('see_your_card')}
                className='col-span-2'
              />
              <ControlledInput
                name='expiryDate'
                label={t('expiry')}
                placeholder='20/23'
              />
              <ControlledInput
                name='cvv'
                label={t('cvv')}
                type='number'
                placeholder='654'
              />
            </div>
          </div>
          <ButtonGroup className='flex justify-end' buttons={buttons} />
        </div>
      </FormProvider>
    </section>
  )
}

export default PaymentProductForm
