import { Widget, WidgetProps } from '@rjsf/utils'
import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

/**
 * Date-only picker widget for schema fields with `format: 'date-time'` where the form UI
 * does not need to collect the time-of-day. Unlike `DateTimeWidget`, this never
 * prompts for a time of day, but its stored value is a full ISO 8601 UTC-midnight string,
 * matching `format: 'date-time'`.
 */
export const DateWidget: Widget = ({
  id,
  disabled,
  value,
  onChange,
}: WidgetProps) => {
  // Build/read the UTC-midnight timestamp via string slicing rather than dayjs's timezone-
  // aware parsing, which would anchor the calendar date to the browser's local timezone and
  // could shift it onto the adjacent day.
  const dateOnly = typeof value === 'string' ? value.slice(0, 10) : undefined
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        enableAccessibleFieldDOMStructure={false}
        disabled={disabled}
        // Carries RJSF's field id onto the input so the form's own `<label for>` applies.
        slotProps={{ textField: { id } }}
        value={dateOnly ? dayjs(dateOnly) : null}
        onChange={(newValue: Dayjs | null) =>
          onChange(
            newValue ? `${newValue.format('YYYY-MM-DD')}T00:00:00.000Z` : null,
          )
        }
      />
    </LocalizationProvider>
  )
}
