import React, { useId, useMemo } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField, TextFieldProps } from '@mui/material'
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from '@mui/x-date-pickers/DateTimePicker'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { useSynapseContext } from '../../utils'
import { DateTimeField, DateTimeFieldProps } from '@mui/x-date-pickers'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)

export type DateTimePickerProps = MuiDateTimePickerProps<string | Dayjs>

function TextFieldWithTzShown(props: TextFieldProps) {
  const { utcTime } = useSynapseContext()
  const tzDisplay = utcTime ? 'UTC' : dayjs().tz(dayjs.tz.guess()).format('z')

  return (
    <TextField
      {...props}
      InputProps={{
        endAdornment: (
          <>
            {tzDisplay}
            {props.InputProps?.endAdornment}
          </>
        ),
      }}
    />
  )
}

function DateTimeFieldWithTzShown(props: DateTimeFieldProps<string | Dayjs>) {
  const id = useId()

  return (
    <DateTimeField<string | Dayjs>
      id={id}
      {...props}
      slots={{
        textField: TextFieldWithTzShown,
      }}
    />
  )
}

export default function DateTimePicker(props: DateTimePickerProps) {
  const { value, ...rest } = props
  const { utcTime } = useSynapseContext()

  const valueAsDayjs = useMemo(() => {
    if (value == null) {
      return value
    }
    if (utcTime) {
      return dayjs.utc(value)
    } else {
      return dayjs(value)
    }
  }, [utcTime, value])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDateTimePicker<string | Dayjs>
        value={valueAsDayjs}
        slots={{
          field: DateTimeFieldWithTzShown,
        }}
        {...rest}
      />
    </LocalizationProvider>
  )
}
