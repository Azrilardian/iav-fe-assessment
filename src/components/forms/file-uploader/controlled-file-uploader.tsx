import React from 'react'

import classNames from 'classnames'
import { Controller, useFormContext, useFormState } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import FileUploader from './file-uploader'
import { ControlledFileUploaderProps } from './file-uploader.types'
import { formatValue } from './helpers'
import Icon from '../../icon'
import Text from '../../text'

export const ControlledFileUploader = (props: ControlledFileUploaderProps) => {
  const { t } = useTranslation('common')

  const {
    label,
    name,
    maxFiles = 1,
    description = t('add_your_documents_here', { maxFiles }),
    className,
    acceptedFileHint,
    ...rest
  } = props

  const { control } = useFormContext()
  const { errors } = useFormState({ control })
  const error = errors[name]?.message as string

  return (
    <div className={classNames('flex flex-col', className)}>
      {label && <Text className='mb-xsAlt'>{label}</Text>}
      <div className='rounded-md border-1 border-color-palette-greyLight p-rgAlt'>
        <div className='mb-rg'>
          <Text tag='span' variant='body1' weight='medium'>
            {t('media_upload')}
          </Text>
          <Text
            tag='span'
            variant='body2'
            className='mt-[2px] leading-[130%] text-color-palette-greyDark'
          >
            {description}
          </Text>
        </div>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <>
              <FileUploader
                onFileUpload={onChange}
                isInvalid={invalid}
                value={formatValue(value)}
                name={name}
                maxFiles={maxFiles}
                {...rest}
              />
            </>
          )}
        />
        <Text
          tag='small'
          variant='body3'
          className='leading-[130%] text-color-palette-greyDark'
        >
          {acceptedFileHint}
        </Text>
      </div>
      {error && (
        <div className='flex items-center gap-xsAlt pt-xsAlt text-color-error'>
          <Icon icon='icon-info' size={16} />
          <span className='text-sm'>{error}</span>
        </div>
      )}
    </div>
  )
}
