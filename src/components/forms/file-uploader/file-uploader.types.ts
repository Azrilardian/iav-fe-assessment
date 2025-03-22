import { ComponentProps } from 'react'

import { Accept } from 'react-dropzone'

export type FileType = File & {
  preview?: string
  formattedSize?: string
}

export type FileUploaderProps = {
  name?: string
  value?: FileType[]
  showPreview?: boolean
  hint?: string
  isInvalid?: boolean
  multiSelect?: boolean
  acceptedFile?: Accept
  onFileUpload?: (files?: FileType[]) => void
}

export type ControlledFileUploaderProps = FileUploaderProps & {
  label?: string
  name: string
  value?: FileType[] | string
} & ComponentProps<'div'>
