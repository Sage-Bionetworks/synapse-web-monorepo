import { describe, it, expect } from 'vitest'
import { dueDateInputToIso, isoToDueDateInput, parseDueDate } from './dueDate'

const JAN_1_2030_INPUT = '2030-01-01'
const JAN_1_2030_ISO = '2030-01-01T00:00:00.000Z'
const MAY_15_2024_INPUT = '2024-05-15'
const MAY_15_2024_ISO = '2024-05-15T00:00:00.000Z'

describe('dueDateInputToIso', () => {
  it('converts a YYYY-MM-DD input to a UTC-midnight ISO 8601 string', () => {
    expect(dueDateInputToIso(JAN_1_2030_INPUT)).toBe(JAN_1_2030_ISO)
    expect(dueDateInputToIso(MAY_15_2024_INPUT)).toBe(MAY_15_2024_ISO)
  })

  it('returns undefined for an empty string', () => {
    expect(dueDateInputToIso('')).toBeUndefined()
  })

  it('returns undefined for a malformed date string', () => {
    expect(dueDateInputToIso('not-a-date')).toBeUndefined()
    expect(dueDateInputToIso('2030-13-40')).toBeUndefined()
    expect(dueDateInputToIso('2030/01/01')).toBeUndefined()
  })
})

describe('isoToDueDateInput', () => {
  it('converts a UTC ISO 8601 string back to a YYYY-MM-DD input value', () => {
    expect(isoToDueDateInput(JAN_1_2030_ISO)).toBe(JAN_1_2030_INPUT)
    expect(isoToDueDateInput(MAY_15_2024_ISO)).toBe(MAY_15_2024_INPUT)
  })

  it('returns an empty string when the due date is absent', () => {
    expect(isoToDueDateInput(undefined)).toBe('')
    expect(isoToDueDateInput('')).toBe('')
  })

  it('returns an empty string for an unparseable value', () => {
    expect(isoToDueDateInput('not-a-date')).toBe('')
  })
})

describe('dueDate round-trip is stable regardless of the host timezone', () => {
  const originalTz = process.env.TZ

  afterEach(() => {
    process.env.TZ = originalTz
  })

  it.each(['UTC', 'America/Los_Angeles', 'Asia/Tokyo', 'Pacific/Kiritimati'])(
    'preserves the calendar date in %s',
    tz => {
      process.env.TZ = tz
      const iso = dueDateInputToIso(JAN_1_2030_INPUT)
      expect(iso).toBe(JAN_1_2030_ISO)
      expect(isoToDueDateInput(iso)).toBe(JAN_1_2030_INPUT)
    },
  )
})

describe('parseDueDate', () => {
  it('parses the backend ISO 8601 string to a UTC-anchored calendar date', () => {
    const parsed = parseDueDate(JAN_1_2030_ISO)
    expect(parsed).not.toBeNull()
    expect(parsed!.format('YYYY-MM-DD')).toBe(JAN_1_2030_INPUT)
  })

  it('returns null when the due date is absent', () => {
    expect(parseDueDate(undefined)).toBeNull()
    expect(parseDueDate('')).toBeNull()
  })

  it.each(['UTC', 'America/Los_Angeles', 'Asia/Tokyo', 'Pacific/Kiritimati'])(
    'shows the same calendar date in %s',
    tz => {
      const originalTz = process.env.TZ
      process.env.TZ = tz
      expect(parseDueDate(JAN_1_2030_ISO)!.format('MM/DD/YY')).toBe('01/01/30')
      process.env.TZ = originalTz
    },
  )
})
