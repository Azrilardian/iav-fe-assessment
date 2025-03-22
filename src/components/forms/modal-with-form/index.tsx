import { FC } from 'react'

import {
  Button,
  Modal as HModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@heroui/react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { ModalWithFormProps } from './types'
import FormProvider from '../form-provider'
import { useModalWithForm } from './hook'
import { defaultModalMotion } from '../../modal'

const ModalWithForm: FC<ModalWithFormProps> = (props) => {
  const { t } = useTranslation()

  const {
    name,
    visible,
    title,
    children,
    resolver,
    confirmLabel = t('Confirm'),
    cancelLabel = t('Cancel'),
    onSubmit,
    onCancel,
    ...rest
  } = props

  const methods = useForm({ resolver })

  const { isLoading, onFormSubmit } = useModalWithForm(methods, onSubmit)

  return (
    <>
      <HModal
        isOpen={visible}
        placement='center'
        onClose={onCancel}
        motionProps={defaultModalMotion}
        {...rest}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
              <ModalBody>
                <FormProvider
                  name={name}
                  methods={methods}
                  onSubmit={onFormSubmit}
                >
                  {children}
                </FormProvider>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onCancel}>
                  {cancelLabel}
                </Button>
                <Button
                  color='primary'
                  isLoading={isLoading}
                  onPress={onSubmit}
                >
                  {confirmLabel}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </HModal>
    </>
  )
}

export default ModalWithForm
