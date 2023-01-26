import { Widget, WidgetProps } from '@sage-bionetworks/rjsf-core'
import dayjs, { Dayjs } from 'dayjs'
import React from 'react'
import { CalendarWithIconFormGroup } from '../../evaluation_queues/CalendarWithIconFormGroup'

/**
 * DateTime picker widget compatible with react-jsonschema-form and Synapse Datetime annotations.
 */
export const CustomDateTimeWidget: Widget = ({
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
