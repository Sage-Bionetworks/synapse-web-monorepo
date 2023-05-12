import { Widget, WidgetProps } from '@sage-bionetworks/rjsf-core'
import React from 'react'
import { FormControl } from 'react-bootstrap'

/**
 * Select widget compatible with react-jsonschema-form booleans
 */
export const CustomBooleanWidget: Widget = ({
  id,
  disabled,
  value,
  onChange,
}: WidgetProps) => {
  return (
    <FormControl
      id={id}
      as="select"
      disabled={disabled}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      value={value === undefined ? value : `${value}`}
      onChange={event => {
        const newValue = event.target.value
        if (newValue === '') {
          onChange(undefined)
        } else if (newValue === 'true') {
          onChange(true)
        } else if (newValue === 'false') {
          onChange(false)
        }
      }}
    >
      <option value=""></option>
      <option value={'true'}>true</option>
      <option value={'false'}>false</option>
    </FormControl>
  )
}
