import React from 'react'

import { Divider } from '@heroui/react'
import { useTranslation } from 'react-i18next'

import Button from '@/src/components/button'
import Checkbox from '@/src/components/checkbox'
import Text from '@/src/components/text'
import { paymentPath } from '@/src/config/paths'
import { toCurrencyString } from '@/src/utils/to-currency-string'

import { useOrderSummary } from './hook'

const OrderSummary = () => {
  const { t } = useTranslation('cart')

  const { totalPrice, isAgreeToTerms, handleAgreeToTerms } = useOrderSummary()

  return (
    <div className='rounded-md border-1 border-color-palette-greyLight px-lgAlt py-[46px] xl:mt-lg xl:rounded-none'>
      <Text
        tag='span'
        variant='body2'
        weight='medium'
        className='uppercase tracking-[1px]'
      >
        {t('order_summary')}
      </Text>
      <div className='mt-[26px] flex flex-col gap-sm'>
        <div className='flex items-center justify-between'>
          <Text
            tag='span'
            variant='body3'
            weight='medium'
            className='leading-[100%] tracking-[2px]'
          >
            {t('subtotal')}
          </Text>
          <Text
            tag='span'
            variant='body3'
            weight='medium'
            className='leading-[100%] tracking-[2px]'
          >
            {toCurrencyString(totalPrice)}
          </Text>
        </div>
        <div className='flex items-center justify-between'>
          <Text
            tag='span'
            variant='body3'
            weight='medium'
            className='leading-[100%] tracking-[2px]'
          >
            {t('shipping')}
          </Text>
          <Text
            tag='span'
            variant='body3'
            weight='medium'
            className='leading-[100%] tracking-[2px]'
          >
            -
          </Text>
        </div>
      </div>
      <Divider className='my-rgAlt bg-color-palette-greyLight' />
      <div className='flex items-center justify-between'>
        <div className='flex gap-[3px]'>
          <Text
            tag='span'
            variant='body1'
            weight='medium'
            className='uppercase tracking-[1px]'
          >
            {t('total')}
          </Text>
          <Text
            tag='span'
            variant='body3'
            weight='medium'
            className='tracking-[2px] text-color-palette-greyDark'
          >
            {t('tax_include')}
          </Text>
        </div>
        <Text tag='span' variant='body1' weight='medium'>
          {toCurrencyString(totalPrice)}
        </Text>
      </div>
      <div className='my-[26px] flex items-center'>
        <Checkbox
          onValueChange={handleAgreeToTerms}
          isSelected={isAgreeToTerms}
          classNames={{
            label: 'text-[10px] font-light tracking-[0px]'
          }}
          title={t('agree_to_terms')}
        />
      </div>
      <Button
        label={t('continue')}
        isDisabled={!isAgreeToTerms}
        className='w-full'
        link={paymentPath()}
      />
    </div>
  )
}

export default OrderSummary
