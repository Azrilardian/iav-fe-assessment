import { TFunction } from 'i18next'
import * as yup from 'yup'

export const addProductSchema = (t: TFunction) => {
  return yup.object().shape({
    title: yup.string().ensure().required(t('name_required')),
    price: yup.number().required(t('price_required')),
    stock: yup.number().required(t('stock_required')),
    category: yup.string().ensure().required(t('category_required')),
    description: yup.string().ensure().required(t('description_required')),
    images: yup
      .array()
      .of(yup.string())
      .required(t('product_picture_required'))
      .min(1, t('product_picture_required'))
  })
}
export type AddProductSchema = yup.InferType<
  ReturnType<typeof addProductSchema>
>
