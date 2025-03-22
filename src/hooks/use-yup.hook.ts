'use client'

import { useEffect } from 'react'

import snakeCase from 'lodash/snakeCase'
import { useTranslation } from 'react-i18next'
import { addMethod, object, setLocale, string } from 'yup'

export const useYup = () => {
  const { t } = useTranslation('validation')

  useEffect(() => {
    setLocale({
      mixed: {
        notType: ({ type }) => t('not_type_of', { type }),
        required: ({ path }) => t(`required_${snakeCase(path)}`),
        oneOf: ({ path }) => t(`validity_${snakeCase(path)}`)
      },
      string: {
        email: ({ path }) => t(`validity_${snakeCase(path)}`),
        matches: ({ path }) => t(`validity_${snakeCase(path)}`),
        min: ({ min }) => t('minimum_character', { min })
      },
      number: {
        moreThan: ({ more }) => t('more_than_number', { more }),
        max: ({ max }) => t('maximum_number', { max }),
        min: ({ min }) => t('minimum_number', { min })
      }
    })
  }, [])

  useEffect(() => {
    addMethod(string, 'phoneNumber', function () {
      return this.matches(/^\+[0-9]{10,}$/)
    })

    addMethod(string, 'requiredWhen', function (condition) {
      return this.when({
        is: () => condition,
        then: (shape) => shape.required()
      })
    })

    addMethod(string, 'minIfFilled', function (min) {
      return this.when({
        is: (value: string) => value && value.length > 0,
        then: (shape) => shape.min(min)
      })
    })

    addMethod(object, 'requiredWhen', function (condition) {
      return this.when({
        is: () => condition,
        then: (shape) => shape.required()
      })
    })
  }, [])
}
