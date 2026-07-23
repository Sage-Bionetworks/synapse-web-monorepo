import { describe, it, expect } from 'vitest'
import {
  dueDateInputToEpochMs,
  epochMsToDueDateInput,
  parseDueDate,
} from './dueDate'

// Known-good literals computed independently via Date.UTC(...):
//   Date.UTC(2030, 0, 1) === 1893456000000
//   Date.UTC(2024, 4, 15) === 1715731200000
const JAN_1_2030_INPUT = '2030-01-01'
const JAN_1_2030_EPOCH_MS = '1893456000000'
const MAY_15_2024_INPUT = '2024-05-15'
const MAY_15_2024_EPOCH_MS = '1715731200000'

describe('dueDateInputToEpochMs', () => {
  it('converts a YYYY-MM-DD input to a UTC-midnight epoch-ms string', () => {
    expect(dueDateInputToEpochMs(JAN_1_2030_INPUT)).toBe(JAN_1_2030_EPOCH_MS)
    expect(dueDateInputToEpochMs(MAY_15_2024_INPUT)).toBe(MAY_15_2024_EPOCH_MS)
  })

  it('returns undefined for an empty string', () => {
    expect(dueDateInputToEpochMs('')).toBeUndefined()
  })

  it('returns undefined for a malformed date string', () => {
    expect(dueDateInputToEpochMs('not-a-date')).toBeUndefined()
    expect(dueDateInputToEpochMs('2030-13-40')).toBeUndefined()
    expect(dueDateInputToEpochMs('2030/01/01')).toBeUndefined()
  })
})

describe('epochMsToDueDateInput', () => {
  it('converts a UTC epoch-ms string back to a YYYY-MM-DD input value', () => {
    expect(epochMsToDueDateInput(JAN_1_2030_EPOCH_MS)).toBe(JAN_1_2030_INPUT)
    expect(epochMsToDueDateInput(MAY_15_2024_EPOCH_MS)).toBe(MAY_15_2024_INPUT)
  })

  it('returns an empty string when the due date is absent', () => {
    expect(epochMsToDueDateInput(undefined)).toBe('')
    expect(epochMsToDueDateInput('')).toBe('')
  })

  it('passes through a legacy YYYY-MM-DD value written under the old bug', () => {
    expect(epochMsToDueDateInput(JAN_1_2030_INPUT)).toBe(JAN_1_2030_INPUT)
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
      const epochMs = dueDateInputToEpochMs(JAN_1_2030_INPUT)
      expect(epochMs).toBe(JAN_1_2030_EPOCH_MS)
      expect(epochMsToDueDateInput(epochMs)).toBe(JAN_1_2030_INPUT)
    },
  )
})

describe('parseDueDate', () => {
  it('parses the backend epoch-ms string to a UTC-anchored calendar date', () => {
    const parsed = parseDueDate(JAN_1_2030_EPOCH_MS)
    expect(parsed).not.toBeNull()
    expect(parsed!.format('YYYY-MM-DD')).toBe(JAN_1_2030_INPUT)
  })

  it('parses a legacy YYYY-MM-DD value', () => {
    const parsed = parseDueDate(JAN_1_2030_INPUT)
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
      expect(parseDueDate(JAN_1_2030_EPOCH_MS)!.format('MM/DD/YY')).toBe(
        '01/01/30',
      )
      process.env.TZ = originalTz
    },
  )
})
