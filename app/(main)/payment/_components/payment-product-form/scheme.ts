import { TFunction } from 'i18next'
import * as yup from 'yup'

import { isFutureDate } from './helpers'

export const paymentProductSchema = (t: TFunction) => {
  return yup.object().shape({
    addressLine: yup.string().trim().required(t('validation.address_required')),
    city: yup.string().trim().required(t('validation.city_required')),
    state: yup.string().trim().required(t('validation.state_required')),
    postalCode: yup
      .string()
      .trim()
      .required(t('validation.postal_code_required'))
      .matches(/^\d{4,10}$/, {
        message: t('validation.postal_code_invalid'),
        excludeEmptyString: true
      }),
    cardholderName: yup
      .string()
      .trim()
      .required(t('validation.cardholder_name_required')),
    cardNumber: yup
      .string()
      .trim()
      .required(t('validation.card_number_required'))
      .matches(/^\d{13,19}$/, {
        message: t('validation.card_number_invalid'),
        excludeEmptyString: true
      }),
    expiryDate: yup
      .string()
      .trim()
      .required(t('validation.expiry_required'))
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, {
        message: t('validation.expiry_format'),
        excludeEmptyString: true
      })
      .test('is-future-date', t('validation.expiry_past'), (value) =>
        isFutureDate(value)
      ),
    cvv: yup
      .string()
      .trim()
      .required(t('validation.cvv_required'))
      .matches(/^\d{3,4}$/, {
        message: t('validation.cvv_invalid'),
        excludeEmptyString: true
      })
  })
}

export type PaymentProductSchema = yup.InferType<
  ReturnType<typeof paymentProductSchema>
>
