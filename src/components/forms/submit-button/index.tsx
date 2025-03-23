import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

import ControlledButton from '../../button/controlled'
import { ControlledButtonProps } from '../../button/types'

const SubmitButton: FC<ControlledButtonProps> = (props) => {
  const { name, isLoading, label, ...rest } = props

  const { t } = useTranslation()

  return (
    <ControlledButton
      type='submit'
      testID={`${name}-submit-button`}
      label={isLoading ? t('Loading') : label}
      {...rest}
    />
  )
}

export default SubmitButton
