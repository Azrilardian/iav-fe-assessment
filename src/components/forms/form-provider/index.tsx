import React from 'react'

import { Form } from '@heroui/react'
import { FormProvider as Provider } from 'react-hook-form'

import { FormProviderProps } from './types'

const FormProvider = <FormState extends Record<string, any>>(
  props: FormProviderProps<FormState>
) => {
  const {
    name,
    methods,
    methods: {
      handleSubmit,
      formState: { errors }
    },
    onSubmit,
    children
  } = props

  return (
    <Provider {...methods}>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        validationErrors={errors as any}
        data-test-id={name}
      >
        {children}
      </Form>
    </Provider>
  )
}

export default FormProvider
