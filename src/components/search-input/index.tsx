import React, { FC } from 'react'

import { Input, InputProps } from '@heroui/react'

import Icon from '../icon'

const SearchInput: FC<InputProps> = (props) => {
  const { placeholder = 'Type to search...' } = props

  return (
    <Input
      classNames={{
        base: 'max-w-full sm:max-w-[23.75rem] h-[3.75rem]',
        mainWrapper: 'h-full',
        input: 'text-sm',
        inputWrapper:
          'h-full font-normal text-color-palette-black bg-color-palette-greyLightest'
      }}
      placeholder={placeholder}
      size='sm'
      radius='md'
      startContent={<Icon icon='search' />}
      type='search'
    />
  )
}

export default SearchInput
