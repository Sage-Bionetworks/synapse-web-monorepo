import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

/**
 * Picker for a calendar date with no time of day.
 *
 * Unlike DateTimePicker, no timezone is applied or displayed: a calendar date is
 * not an instant, so converting one between zones could shift it onto the
 * adjacent day.
 */
export default function DatePicker(props: MuiDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker enableAccessibleFieldDOMStructure={false} {...props} />
    </LocalizationProvider>
  )
}
