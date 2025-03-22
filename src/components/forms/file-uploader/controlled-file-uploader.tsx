import React from 'react'

import classNames from 'classnames'
import { Controller, useFormContext } from 'react-hook-form'

import { FileUploader } from './file-uploader'
import { ControlledFileUploaderProps } from './file-uploader.types'
import Text from '../../text'

export const ControlledFileUploader = (props: ControlledFileUploaderProps) => {
  const { label, name, className, ...otherProps } = props

  const { control } = useFormContext()

  const formatValue = (value: any) => {
    if (typeof value === 'string') return [{ preview: value }]

    if (Array.isArray(value)) {
      return value.map((item) => {
        if (item?.url) return { preview: item.url }

        return item
      })
    }

    return value
  }

  return (
    <div className={classNames('flex max-w-md flex-col gap-4', className)}>
      {label && <Text>{label}</Text>}
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, value },
          fieldState: { invalid, error }
        }) => (
          <>
            <FileUploader
              onFileUpload={onChange}
              isInvalid={invalid}
              value={formatValue(value)}
              name={name}
              {...otherProps}
            />
            {error && (
              <Text tag='small' className='text-danger'>
                {error.message}
              </Text>
            )}
          </>
        )}
      />
    </div>
  )
}
