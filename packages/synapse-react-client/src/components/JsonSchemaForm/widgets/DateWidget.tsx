import { Widget, WidgetProps } from '@rjsf/utils'
import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

/**
 * Resolves a `DateWidget` `minDate` option (`'today'`, or a `YYYY-MM-DD` calendar date) to the
 * `YYYY-MM-DD` calendar date it stands for right now. `'today'` is the user's local date.
 */
export function resolveMinDate(minDate: string): string {
  return minDate === 'today' ? dayjs().format('YYYY-MM-DD') : minDate
}

/**
 * Date-only picker widget for schema fields with `format: 'date-time'` where the form UI
 * does not need to collect the time-of-day. Unlike `DateTimeWidget`, this never
 * prompts for a time of day, but its stored value is a full ISO 8601 UTC-midnight string,
 * matching `format: 'date-time'`.
 *
 * `ui:options.minDate` (see `resolveMinDate`) disables earlier days in the picker. It does not
 * stop an earlier date from being typed; the form must validate that itself.
 */
export const DateWidget: Widget = ({
  id,
  disabled,
  value,
  options,
  onChange,
  onBlur,
}: WidgetProps) => {
  // Build/read the UTC-midnight timestamp via string slicing rather than dayjs's timezone-
  // aware parsing, which would anchor the calendar date to the browser's local timezone and
  // could shift it onto the adjacent day.
  const dateOnly = typeof value === 'string' ? value.slice(0, 10) : undefined
  const minDate =
    typeof options.minDate === 'string'
      ? dayjs(resolveMinDate(options.minDate))
      : undefined
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        enableAccessibleFieldDOMStructure={false}
        disabled={disabled}
        minDate={minDate}
        // Carries RJSF's field id onto the input so the form's own `<label for>` applies.
        slotProps={{ textField: { id, onBlur: () => onBlur(id, value) } }}
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
