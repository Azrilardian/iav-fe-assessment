import React, { FC } from 'react'

import { Input, InputProps } from '@heroui/react'

import Icon from '../icon'
import { useSearchInput } from './hook'

const SearchInput: FC<InputProps> = (props) => {
  const { placeholder = 'Type to search...', ...rest } = props
  const { search, onSearch } = useSearchInput()

  return (
    <Input
      classNames={{
        base: 'max-w-full sm:max-w-[23.75rem] h-[3.75rem]',
        mainWrapper: 'h-full',
        input:
          'text-sm placeholder:text-color-palette-black opacity-50 data-[has-start-content=true]:ps-sm',
        inputWrapper:
          'h-full font-normal text-color-palette-black bg-color-palette-greyLightest px-rgMed'
      }}
      placeholder={placeholder}
      size='sm'
      radius='md'
      startContent={
        <Icon
          icon='icon-search'
          className='text-color-palette-black opacity-50'
        />
      }
      type='search'
      onChange={(e) => onSearch(e.target.value)}
      defaultValue={search}
      {...rest}
    />
  )
}

export default SearchInput
