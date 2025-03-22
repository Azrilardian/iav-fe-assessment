import React, { FC } from 'react'

import { DateRangePicker, DateRangePickerProps } from '@heroui/react'
import { useController, useFormContext } from 'react-hook-form'

const DateRangeInput: FC<DateRangePickerProps> = (props) => {
  const { startName, endName, ...rest } = props

  const { control } = useFormContext()

  const {
    field: { onChange: onStartDateChange, value: startDate },
    fieldState: { invalid: startInvalid, error: startError }
  } = useController({ control, name: startName })

  const {
    field: { onChange: onEndDateChange, value: endDate },
    fieldState: { invalid: endInvalid, error: endError }
  } = useController({ control, name: endName })

  const onDatesSelected = (selectedDate: any) => {
    onStartDateChange(selectedDate.start)
    onEndDateChange(selectedDate.end)
  }

  return (
    <DateRangePicker
      value={
        {
          start: startDate,
          end: endDate
        } as any
      }
      onChange={onDatesSelected}
      isInvalid={startInvalid || endInvalid}
      errorMessage={(value) => {
        if (value.isInvalid) return startError?.message || endError?.message
        return false
      }}
      {...rest}
    />
  )
}

export default DateRangeInput
