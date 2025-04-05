import React, { FC } from 'react'

import { Select, SelectItem } from '@heroui/react'
import { Controller, useFormContext } from 'react-hook-form'

import { SelectProps } from './types'
import Icon from '../../icon'

const ControlledSelect: FC<SelectProps> = (props) => {
  const { name, items, ...rest } = props

  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error, invalid }
      }) => (
        <Select
          items={items}
          value={value}
          errorMessage={
            <div className='flex items-center gap-xsAlt'>
              <Icon icon='icon-info' size={16} />
              <span className='text-sm'>{error?.message}</span>
            </div>
          }
          isInvalid={invalid}
          onChange={onChange}
          data-test-id={`${name}-select`}
          labelPlacement='outside'
          classNames={{
            label: '!text-color-palette-black text-sm',
            errorMessage: 'text-color-palette-red text-sm',
            trigger:
              'border border-color-palette-greyLight bg-transparent px-md py-sm border-spacing-md',
            value: 'text-sm',
            helperWrapper: 'pt-xsAlt pb-0 px-0'
          }}
          {...rest}
        >
          {(item: Record<string, any>) => (
            <SelectItem key={item.key} startContent={item.icon}>
              {item.label}
            </SelectItem>
          )}
        </Select>
      )}
    />
  )
}

export default ControlledSelect
