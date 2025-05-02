import { useSynapseContext } from '@/utils'
import { Box, TextField, TextFieldProps } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs, { Dayjs } from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { useMemo } from 'react'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)

export type DateTimePickerProps = MuiDateTimePickerProps<Dayjs>

function TextFieldWithTzShown(props: TextFieldProps) {
  const { utcTime } = useSynapseContext()
  const tzDisplay = utcTime ? 'UTC' : dayjs().tz(dayjs.tz.guess()).format('z')

  return (
    <TextField
      {...props}
      slotProps={{
        input: {
          ...props.slotProps?.input,
          endAdornment: (
            <>
              <Box
                sx={{
                  ml: 0.5,
                }}
              >
                {tzDisplay}
              </Box>
              {props.slotProps?.input?.endAdornment}
            </>
          ),
        },
      }}
    />
  )
}

export default function DateTimePicker(props: DateTimePickerProps) {
  const { value, slots, ...rest } = props
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
      <MuiDateTimePicker<Dayjs>
        value={valueAsDayjs}
        slots={{
          ...slots,
          textField: TextFieldWithTzShown,
        }}
        {...rest}
      />
    </LocalizationProvider>
  )
}
