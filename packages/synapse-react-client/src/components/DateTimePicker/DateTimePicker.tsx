import { useSynapseContext } from '@/utils'
import { Box } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {
  PickersTextField,
  PickersTextFieldProps,
} from '@mui/x-date-pickers/PickersTextField'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { useMemo } from 'react'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)

/** The time zone the picker shows its value in, as the picker labels it */
export function getPickerTimeZoneLabel(utcTime: boolean): string {
  return utcTime ? 'UTC' : dayjs().tz(dayjs.tz.guess()).format('z')
}

function TextFieldWithTzShown(props: PickersTextFieldProps) {
  const { utcTime } = useSynapseContext()
  const tzDisplay = getPickerTimeZoneLabel(utcTime)

  return (
    <PickersTextField
      {...props}
      slotProps={{
        ...props.slotProps,
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

export default function DateTimePicker(props: MuiDateTimePickerProps) {
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
      <MuiDateTimePicker
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
