import { useCallback, useMemo } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { ButtonGroupProps } from '@/src/components/button-group/types'
import { paymentSuccessPath } from '@/src/config/paths'
import { handleGenericError } from '@/src/utils/error-handler'

import { PaymentProductSchema, paymentProductSchema } from './scheme'

const defaultValues = {
  addressLine: '',
  city: '',
  state: '',
  postalCode: '',
  cardholderName: '',
  cardNumber: '',
  expiryDate: '',
  cvv: ''
}

export const usePaymentProductForm = () => {
  const { t } = useTranslation('payment')

  const router = useRouter()

  const methods = useForm<PaymentProductSchema>({
    defaultValues,
    resolver: yupResolver(paymentProductSchema(t))
  })

  const handleSubmit = useCallback(() => {
    try {
      // Should be replaced with actual payment process
      router.replace(paymentSuccessPath())
    } catch (error: any) {
      handleGenericError(error)
    }
  }, [])

  const handleCancel = useCallback(() => {
    router.back()
    methods.reset(defaultValues)
  }, [])

  const buttons: ButtonGroupProps['buttons'] = useMemo(
    () => [
      {
        name: 'cancel',
        label: t('cancel'),
        color: 'secondary',
        onPress: handleCancel,
        className: 'text-opacity-50'
      },
      {
        name: 'checkout',
        label: t('checkout'),
        color: 'primary',
        onSubmit: handleSubmit
      }
    ],
    []
  )

  return {
    methods,
    handleSubmit,
    handleCancel,
    buttons
  }
}
