import { useCallback, useMemo } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { ButtonGroupProps } from '@/src/components/button-group/types'
import { productAddedPath } from '@/src/config/paths'
import { productApi } from '@/src/services/api'
import { AddProductModel } from '@/src/services/swr/models/products.types'
import { handleGenericError } from '@/src/utils/error-handler'

import { AddProductSchema, addProductSchema } from './scheme'

const defaultValues: any = {
  title: '',
  price: null,
  stock: null,
  category: '',
  description: '',
  images: []
}

export const useAddProductForm = () => {
  const { t } = useTranslation('products')

  const router = useRouter()

  const methods = useForm<AddProductSchema>({
    defaultValues,
    resolver: yupResolver(addProductSchema(t))
  })

  const handleSubmit = useCallback(async (data: AddProductSchema) => {
    try {
      await productApi.addProduct(data as AddProductModel)
      router.replace(productAddedPath())
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
        name: 'submit',
        label: t('submit'),
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
