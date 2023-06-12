import { Widget, WidgetProps } from '@rjsf/utils'
import dayjs, { Dayjs } from 'dayjs'
import React from 'react'
import { CalendarWithIconFormGroup } from '../../Evaluation/CalendarWithIconFormGroup'

/**
 * DateTime picker widget compatible with react-jsonschema-form and Synapse Datetime annotations.
 */
export const DateTimeWidget: Widget = ({
  disabled,
  value,
  onChange,
}: WidgetProps) => {
  return (
    <CalendarWithIconFormGroup
      disabled={disabled}
      value={value ? dayjs(value) : ''}
      setterCallback={(newValue: string | Dayjs | null) => {
        if (newValue == null || typeof newValue === 'string') {
          onChange(newValue)
        } else {
          onChange(newValue.toISOString())
        }
      }}
    ></CalendarWithIconFormGroup>
  )
}
