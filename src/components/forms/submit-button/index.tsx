import React, { FC } from 'react'

import { Button, ButtonProps } from '@heroui/react'
import { useTranslation } from 'react-i18next'

const SubmitButton: FC<ButtonProps> = (props) => {
  const { name, isLoading, children, ...rest } = props

  const { t } = useTranslation()

  return (
    <Button
      type='submit'
      color='primary'
      isLoading={isLoading}
      data-test-id={name}
      {...rest}
    >
      {isLoading ? t('Loading') : children}
    </Button>
  )
}

export default SubmitButton
