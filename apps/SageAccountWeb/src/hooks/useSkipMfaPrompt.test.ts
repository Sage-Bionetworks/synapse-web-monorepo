import { renderHook, act } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import dayjs, { Dayjs } from 'dayjs'
import { when } from 'vitest-when'
import { useSkipMfaPrompt } from './useSkipMfaPrompt'
import { useLocalStorageValue } from '@react-hookz/web'

vi.mock('@react-hookz/web', () => ({
  useLocalStorageValue: vi.fn(),
}))

vi.mock('dayjs', async importOriginal => {
  return {
    ...(await importOriginal()),
    default: vi.fn(() => ({
      subtract: vi.fn().mockReturnThis(),
      isAfter: vi.fn(),
    })),
  }
})

const mockUseLocalStorageValue = vi.mocked(useLocalStorageValue)
const mockDayjs = vi.mocked(dayjs)

describe('useSkipMfaPrompt', () => {
  const mockSetTimestamp = vi.fn()
  const mockUseLocalStorageValueReturn = {
    value: null,
    set: mockSetTimestamp,
    remove: vi.fn(),
    fetch: vi.fn(),
  }
  // The dayjs mock for the current time should always return a consistent instance
  const mockDayjsInstanceForCurrentTime = {
    subtract: vi.fn().mockReturnThis(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
    // Mock console.error to suppress error logs in tests
    vi.spyOn(console, 'error').mockImplementation(() => {})

    when(mockDayjs)
      .calledWith() // No arguments for the current time
      .thenReturn(mockDayjsInstanceForCurrentTime as unknown as Dayjs)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('hasSkippedRecently', () => {
    it('should return false when no timestamp is stored', () => {
      mockUseLocalStorageValue.mockReturnValue({
        ...mockUseLocalStorageValueReturn,
        value: null,
      })

      const { result } = renderHook(() => useSkipMfaPrompt())

      expect(result.current.hasSkippedRecently).toBe(false)
    })

    it('should return false when timestamp is empty string', () => {
      mockUseLocalStorageValue.mockReturnValue({
        ...mockUseLocalStorageValueReturn,
        value: '',
      })

      const { result } = renderHook(() => useSkipMfaPrompt())

      expect(result.current.hasSkippedRecently).toBe(false)
    })

    it('should return true when timestamp is less than 24 hours old', () => {
      const mockTimestamp = '2023-12-01T10:00:00.000Z'
      mockUseLocalStorageValue.mockReturnValue({
        ...mockUseLocalStorageValueReturn,
        value: mockTimestamp,
      })

      const mockDayjsInstanceForStoredTimestamp = {
        isAfter: vi.fn().mockReturnValue(true),
      }

      when(mockDayjs)
        .calledWith(mockTimestamp)
        .thenReturn(mockDayjsInstanceForStoredTimestamp as unknown as Dayjs)

      const { result } = renderHook(() => useSkipMfaPrompt())

      expect(result.current.hasSkippedRecently).toBe(true)
    })

    it('should return false when timestamp is more than 24 hours old', () => {
      const mockTimestamp = '2023-12-01T01:00:00.000Z'
      mockUseLocalStorageValue.mockReturnValue({
        ...mockUseLocalStorageValueReturn,
        value: mockTimestamp,
      })

      // Mock dayjs to return that the timestamp is before 24 hours ago
      const mockDayjsInstanceForStoredTimestamp = {
        isAfter: vi.fn().mockReturnValue(false),
      }

      when(mockDayjs)
        .calledWith(mockTimestamp)
        .thenReturn(mockDayjsInstanceForStoredTimestamp as unknown as Dayjs)

      const { result } = renderHook(() => useSkipMfaPrompt())

      expect(result.current.hasSkippedRecently).toBe(false)
    })

    it('should return false when dayjs throws an error', () => {
      const mockTimestamp = 'invalid-timestamp'
      mockUseLocalStorageValue.mockReturnValue({
        ...mockUseLocalStorageValueReturn,
        value: mockTimestamp,
      })

      // Mock dayjs to throw an error
      when(mockDayjs)
        .calledWith(mockTimestamp)
        .thenThrow(new Error('Invalid date'))

      const { result } = renderHook(() => useSkipMfaPrompt())

      expect(result.current.hasSkippedRecently).toBe(false)
      expect(console.error).toHaveBeenCalledWith(
        'Error thrown computing timestamp',
        mockTimestamp,
        expect.any(Error),
      )
    })
  })

  describe('skip function', () => {
    beforeEach(() => {
      // Mock Date.now() to return a consistent timestamp
      vi.spyOn(Date.prototype, 'toISOString').mockReturnValue(
        '2023-12-01T12:00:00.000Z',
      )
    })

    it('should set current timestamp when skip is called', () => {
      mockUseLocalStorageValue.mockReturnValue({
        ...mockUseLocalStorageValueReturn,
        value: null,
      })

      const { result } = renderHook(() => useSkipMfaPrompt())

      act(() => {
        result.current.skip()
      })

      expect(mockSetTimestamp).toHaveBeenCalledWith('2023-12-01T12:00:00.000Z')
    })

    it('should maintain the same skip function reference across renders', () => {
      mockUseLocalStorageValue.mockReturnValue({
        ...mockUseLocalStorageValueReturn,
        value: null,
      })

      const { result, rerender } = renderHook(() => useSkipMfaPrompt())
      const firstSkipRef = result.current.skip

      rerender()
      const secondSkipRef = result.current.skip

      expect(firstSkipRef).toBe(secondSkipRef)
    })
  })

  describe('return value memoization', () => {
    it('should return the same object reference when values have not changed', () => {
      mockUseLocalStorageValue.mockReturnValue({
        ...mockUseLocalStorageValueReturn,
        value: null,
      })

      const { result, rerender } = renderHook(() => useSkipMfaPrompt())
      const firstResult = result.current

      rerender()
      const secondResult = result.current

      expect(firstResult).toBe(secondResult)
    })

    it('should return a new object reference when hasSkippedRecently changes', () => {
      // Start with no timestamp
      mockUseLocalStorageValue.mockReturnValue({
        ...mockUseLocalStorageValueReturn,
        value: null,
      })

      const { result, rerender } = renderHook(() => useSkipMfaPrompt())
      const firstResult = result.current

      // Change to have a recent timestamp
      const mockTimestamp = '2023-12-01T10:00:00.000Z'
      mockUseLocalStorageValue.mockReturnValue({
        ...mockUseLocalStorageValueReturn,
        value: mockTimestamp,
      })

      const mockDayjsInstanceForStoredTimestamp = {
        isAfter: vi.fn().mockReturnValue(true),
      }

      when(mockDayjs)
        .calledWith(mockTimestamp)
        .thenReturn(mockDayjsInstanceForStoredTimestamp as unknown as Dayjs)

      rerender()
      const secondResult = result.current

      expect(firstResult).not.toBe(secondResult)
      expect(firstResult.hasSkippedRecently).toBe(false)
      expect(secondResult.hasSkippedRecently).toBe(true)
    })
  })

  describe('edge cases', () => {
    it('should handle null timestamp in isTimestampLessThan12HoursOld', () => {
      mockUseLocalStorageValue.mockReturnValue({
        ...mockUseLocalStorageValueReturn,
        value: null,
      })

      const { result } = renderHook(() => useSkipMfaPrompt())

      expect(result.current.hasSkippedRecently).toBe(false)
    })

    it('should handle undefined timestamp', () => {
      mockUseLocalStorageValue.mockReturnValue({
        ...mockUseLocalStorageValueReturn,
        value: undefined,
      })

      const { result } = renderHook(() => useSkipMfaPrompt())

      expect(result.current.hasSkippedRecently).toBe(false)
    })
  })
})
