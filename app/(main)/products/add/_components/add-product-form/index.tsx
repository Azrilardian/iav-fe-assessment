'use client'

import React from 'react'

import { useTranslation } from 'react-i18next'

import ButtonGroup from '@/src/components/button-group'
import { ControlledFileUploader } from '@/src/components/forms'
import FormProvider from '@/src/components/forms/form-provider'
import ControlledInput from '@/src/components/forms/input'
import ControlledTextArea from '@/src/components/forms/text-area'
import PageHeading from '@/src/components/page-heading'

import ProductCategories from './components/product-categories'
import { useAddProductForm } from './hook'

const acceptedFile = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/webp': ['.webp']
}

const AddProductForm = () => {
  const { t } = useTranslation('products')

  const { handleSubmit, buttons, methods } = useAddProductForm()

  return (
    <section>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit}
        name='add-product-form'
      >
        <div className='w-full'>
          <PageHeading
            title='add_new_product'
            description='enter_product_details'
          />
          <div className='mb-2xl mt-2xl grid grid-cols-2 gap-rgAlt'>
            <ControlledInput
              name='title'
              label={t('name')}
              placeholder={t('enter_product_name_here')}
              className='col-span-2'
            />
            <ProductCategories />
            <ControlledInput
              name='price'
              label={t('price')}
              type='number'
              placeholder={t('enter_price_here')}
              className='col-span-1'
            />
            <ControlledInput
              name='stock'
              label={t('stocks')}
              type='number'
              placeholder={t('enter_stocks_here')}
              className='col-span-1'
            />
            <ControlledTextArea
              name='description'
              label={t('description')}
              placeholder={t('type_description_here')}
              className='col-span-2'
            />
            <ControlledFileUploader
              name='images'
              label={t('product_picture')}
              maxFiles={5}
              acceptedFile={acceptedFile}
              acceptedFileHint={t('only_support_jpg_jpeg_png_webp_files')}
              className='col-span-2'
            />
          </div>
          <ButtonGroup className='flex justify-end' buttons={buttons} />
        </div>
      </FormProvider>
    </section>
  )
}

export default AddProductForm
