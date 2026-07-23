import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import utc from 'dayjs/plugin/utc'

dayjs.extend(customParseFormat)
dayjs.extend(utc)

const DUE_DATE_INPUT_FORMAT = 'YYYY-MM-DD'

/**
 * A native `<input type="date">` produces a bare `YYYY-MM-DD` calendar date with no timezone, but the
 * backend's `TaskStatus.dueDate` is a unix-millisecond timestamp serialized as a string. Both
 * conversions here anchor the calendar date to UTC midnight so the date a user picks is the date every
 * other user sees, regardless of their timezone. Returns `undefined` for an empty or malformed input so
 * the caller can persist an absent due date.
 */
export function dueDateInputToEpochMs(yyyyMmDd: string): string | undefined {
  if (!yyyyMmDd) {
    return undefined
  }
  const parsed = dayjs.utc(yyyyMmDd, DUE_DATE_INPUT_FORMAT, true)
  return parsed.isValid() ? String(parsed.valueOf()) : undefined
}

/**
 * Inverse of {@link dueDateInputToEpochMs}: formats the backend's unix-millisecond `dueDate` string
 * back to the `YYYY-MM-DD` value a native date input expects, in UTC. Tolerates a legacy `YYYY-MM-DD`
 * value so tasks whose due date was written before the timestamp fix still display. Returns `''` when
 * the due date is absent.
 */
export function epochMsToDueDateInput(dueDate: string | undefined): string {
  if (!dueDate) {
    return ''
  }
  if (dayjs.utc(dueDate, DUE_DATE_INPUT_FORMAT, true).isValid()) {
    return dueDate
  }
  return dayjs.utc(Number(dueDate)).format(DUE_DATE_INPUT_FORMAT)
}
