import { isISOTimestamp } from './DateTimeUtils'

describe('DateTimeUtils', () => {
  describe('isISOTimestamp', () => {
    test('Valid ISO Timestamp', () => {
      expect(isISOTimestamp('2021-03-26T21:43:00.000Z')).toBe(true)
    })
    test('ISO date string is not a timestamp', () => {
      expect(isISOTimestamp('2021-03-26')).toBe(false)
    })
    test('Valid format but invalid date', () => {
      // February 30th
      expect(isISOTimestamp('2021-02-30T21:43:00.000Z')).toBe(false)
    })
  })
})
