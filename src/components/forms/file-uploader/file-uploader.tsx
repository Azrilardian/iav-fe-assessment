import React, { FC } from 'react'

import { Card } from '@heroui/react'
import Image from 'next/image'
import Dropzone from 'react-dropzone'
import { useTranslation } from 'react-i18next'

import { FileUploaderProps } from './file-uploader.types'
import { handleFileUploadError } from './helpers'
import useFileUploader from './use-file-uploader'
import Button from '../../button'
import Icon from '../../icon'
import Text from '../../text'

// 10 MB
const MAX_FILE_SIZE = 2 * 1024 * 1024

const FileUploader: FC<FileUploaderProps> = (props) => {
  const { t } = useTranslation('common')

  const {
    showPreview = true,
    maxFiles,
    multiSelect = maxFiles > 1,
    acceptedFile,
    onFileUpload,
    isInvalid,
    name,
    value,
    hint = t('max_file_size_allowed')
  } = props

  const { handleAcceptedFiles, removeFile } = useFileUploader(
    showPreview,
    multiSelect,
    value,
    onFileUpload,
    maxFiles
  )

  return (
    <>
      <Dropzone
        multiple={multiSelect}
        maxFiles={multiSelect ? maxFiles : 0}
        accept={acceptedFile}
        onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles)}
        maxSize={MAX_FILE_SIZE}
        onDropRejected={handleFileUploadError}
      >
        {({ getRootProps, getInputProps }) => {
          return (
            <div
              className={`${isInvalid ? 'dropzone !border-color-error' : 'dropzone'}`}
              data-test-id={name}
              {...getRootProps()}
            >
              <div className='dz-message'>
                <input {...getInputProps()} />
                <div className='flex flex-col items-center'>
                  <Icon
                    icon='icon-backup'
                    size={36}
                    className='text-color-palette-blue'
                  />
                  <Text tag='span' className='mb-xsAlt mt-md'>
                    {t('drag_your_file_or')}
                    <span className='text-color-palette-blue'>
                      {t('browse')}
                    </span>
                  </Text>
                  {hint && (
                    <Text
                      tag='small'
                      variant='body3'
                      className='text-muted leading-[130%]'
                    >
                      {hint}
                    </Text>
                  )}
                </div>
              </div>
            </div>
          )
        }}
      </Dropzone>
      {showPreview && Array.isArray(value) && (
        <div className='dropzone-previews mt-3'>
          {value.map((f, i) => (
            <Card className='mb-3 mt-1 border shadow-none' key={i + '-file'}>
              <div className='p-2'>
                <div className='flex items-center'>
                  {f.preview && (
                    <div className='mr-2'>
                      <Image
                        className='aspect-square rounded object-cover'
                        alt={f.name}
                        src={f.preview}
                        width={45}
                        height={45}
                      />
                    </div>
                  )}
                  {!f.preview && f.type && (
                    <div>
                      <div className=''>
                        <span className='rounded bg-slate-400'>
                          {f.type.split('/')[0]}
                        </span>
                      </div>
                    </div>
                  )}
                  <div>
                    {f.name && (
                      <Text tag='span' variant='body3' className='mb-0'>
                        {f.name}
                      </Text>
                    )}
                    {f.formattedSize && (
                      <Text tag='span' variant='body3' className='mb-0'>
                        <strong>{f.formattedSize}</strong>
                      </Text>
                    )}
                  </div>
                  <div className='ml-auto'>
                    <Button
                      isIconOnly
                      radius='full'
                      variant='light'
                      className='reset-padding'
                      label={<Icon icon='icon-minus' size={16} />}
                      onPress={() => removeFile(value, f)}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  )
}

export default FileUploader
