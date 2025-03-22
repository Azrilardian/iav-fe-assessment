import React, { FC } from 'react'

import { Select, SelectItem, SelectProps } from '@heroui/react'
import { Controller, useFormContext } from 'react-hook-form'

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
          errorMessage={error.message}
          isInvalid={invalid}
          onChange={onChange}
          data-test-id={name}
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
