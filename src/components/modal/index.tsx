import { FC } from 'react'

import {
  Button,
  Modal as HModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@heroui/react'
import { useTranslation } from 'react-i18next'

import { ModalProps } from './types'

const Modal: FC<ModalProps> = (props) => {
  const { t } = useTranslation()

  const {
    visible,
    title,
    message,
    confirmLabel = t('Confirm'),
    cancelLabel = t('Cancel'),
    onConfirm,
    onCancel,
    ...rest
  } = props

  return (
    <>
      <HModal isOpen={visible} placement='center' onClose={onCancel} {...rest}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
              <ModalBody>{message}</ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onCancel}>
                  {cancelLabel}
                </Button>
                <Button color='primary' onPress={onConfirm}>
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

export default Modal
