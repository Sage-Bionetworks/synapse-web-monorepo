import dayjs, { Dayjs } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import utc from 'dayjs/plugin/utc'

dayjs.extend(customParseFormat)
dayjs.extend(utc)

const DUE_DATE_INPUT_FORMAT = 'YYYY-MM-DD'

/**
 * A native `<input type="date">` produces a bare `YYYY-MM-DD` calendar date with no timezone, but the
 * backend's `TaskStatus.dueDate` is an ISO 8601 date-time string. Both conversions here anchor the
 * calendar date to UTC midnight so the date a user picks is the date every other user sees, regardless
 * of their timezone. Returns `undefined` for an empty or malformed input so the caller can persist an
 * absent due date.
 */
export function dueDateInputToIso(yyyyMmDd: string): string | undefined {
  if (!yyyyMmDd) {
    return undefined
  }
  const parsed = dayjs.utc(yyyyMmDd, DUE_DATE_INPUT_FORMAT, true)
  return parsed.isValid() ? parsed.toISOString() : undefined
}

/**
 * Inverse of {@link dueDateInputToIso}: formats the backend's ISO 8601 `dueDate` string back to the
 * `YYYY-MM-DD` value a native date input expects, in UTC. Returns `''` when the due date is absent or
 * unparseable.
 */
export function isoToDueDateInput(dueDate: string | undefined): string {
  if (!dueDate) {
    return ''
  }
  const parsed = dayjs.utc(dueDate)
  return parsed.isValid() ? parsed.format(DUE_DATE_INPUT_FORMAT) : ''
}

/**
 * The `dueDate` as a UTC-anchored dayjs, or `null` when absent/unparseable. Anchoring to UTC (the same
 * as {@link isoToDueDateInput}) means the calendar date shown matches the date the user picked,
 * regardless of the viewer's timezone.
 */
export function parseDueDate(dueDate: string | undefined): Dayjs | null {
  if (!dueDate) {
    return null
  }
  const parsed = dayjs.utc(dueDate)
  return parsed.isValid() ? parsed : null
}
