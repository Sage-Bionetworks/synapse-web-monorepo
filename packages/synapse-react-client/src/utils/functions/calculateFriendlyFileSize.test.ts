import { describe, expect, it } from 'vitest'
import { calculateFriendlyFileSize } from './calculateFriendlyFileSize'

describe('calculateFriendlyFileSize', () => {
  it('returns an empty string for null', () => {
    expect(calculateFriendlyFileSize(null)).toBe('')
  })

  it('returns an empty string for undefined', () => {
    expect(calculateFriendlyFileSize(undefined)).toBe('')
  })

  it('returns "0 Bytes" for 0', () => {
    expect(calculateFriendlyFileSize(0)).toBe('0 Bytes')
  })

  it('formats bytes with no decimal places', () => {
    expect(calculateFriendlyFileSize(500)).toBe('500 Bytes')
  })

  it('formats kilobytes with no decimal places', () => {
    expect(calculateFriendlyFileSize(1024)).toBe('1 KB')
  })

  it('formats megabytes with 1 decimal place by default', () => {
    expect(calculateFriendlyFileSize(5 * 1024 * 1024)).toBe('5.0 MB')
  })

  it('formats gigabytes with 2 decimal places by default', () => {
    expect(calculateFriendlyFileSize(1.5 * 1024 * 1024 * 1024)).toBe('1.50 GB')
  })

  it('formats terabytes with 3 decimal places by default', () => {
    expect(calculateFriendlyFileSize(2 * 1024 ** 4)).toBe('2.000 TB')
  })

  it('allows overriding fractionDigits for sub-GB values', () => {
    expect(calculateFriendlyFileSize(1536, 1)).toBe('1.5 KB')
  })

  it('allows overriding fractionDigits for GB values', () => {
    expect(calculateFriendlyFileSize(1024 ** 3, 0)).toBe('1 GB')
  })
})
