import React from 'react'

import { Button, Card } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import Dropzone from 'react-dropzone'
import { useTranslation } from 'react-i18next'

import { FileUploaderProps } from './file-uploader.types'
import useFileUploader from './use-file-uploader'
import Text from '../../text'

export const FileUploader = ({
  showPreview = true,
  multiSelect = false,
  acceptedFile,
  onFileUpload,
  hint,
  isInvalid,
  name,
  value
}: FileUploaderProps) => {
  const { t } = useTranslation()

  const { handleAcceptedFiles, removeFile } = useFileUploader(
    showPreview,
    multiSelect,
    value,
    onFileUpload
  )

  return (
    <>
      <Dropzone
        multiple={multiSelect}
        maxFiles={multiSelect ? 0 : 1}
        accept={acceptedFile}
        onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles)}
      >
        {({ getRootProps, getInputProps }) => {
          return (
            <div
              className={`${isInvalid ? 'border-2 border-red-400' : ''}`}
              data-test-id={name}
              {...getRootProps()}
            >
              <div className='dz-message'>
                <input {...getInputProps()} />
                <i className=''></i>
                <h5>{t('Drop files here or click to upload.')}</h5>

                {hint && (
                  <Text tag='small' className='muted'>
                    {hint}
                  </Text>
                )}
              </div>
            </div>
          )
        }}
      </Dropzone>
      {showPreview && Array.isArray(value) && (
        <div className='dropzone-previews mt-3'>
          {value.map((f, i) => (
            <Card className='mb-0 mt-1 border shadow-none' key={i + '-file'}>
              <div className='p-2'>
                <div className='flex items-center'>
                  {f.preview && (
                    <div>
                      <Image
                        data-dz-thumbnail=''
                        className='rounded bg-slate-100'
                        alt={f.name}
                        src={f.preview}
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
                      <Link href='#' className='muted font-bold'>
                        {f.name}
                      </Link>
                    )}
                    {f.formattedSize && (
                      <p className='mb-0'>
                        <strong>{f.formattedSize}</strong>
                      </p>
                    )}
                  </div>
                  <div className='text-end'>
                    <Button
                      variant='ghost'
                      className='muted shadow-none'
                      onPress={() => removeFile(value, f)}
                    >
                      <i className=''></i>
                    </Button>
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
