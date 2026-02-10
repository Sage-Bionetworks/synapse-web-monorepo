import { describe, expect, it, vi } from 'vitest'
import { promiseWithRetry, RetryError } from './promiseWithRetry'

describe('promiseWithRetry', () => {
  it('should return the result if the function succeeds on the first attempt', async () => {
    const fn = vi.fn().mockResolvedValue('success')

    const result = await promiseWithRetry(fn, 3, 100)

    expect(result).toBe('success')
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should retry if the function throws a RetryError', async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new RetryError('retry', 'cause1'))
      .mockRejectedValueOnce(new RetryError('retry', 'cause2'))
      .mockResolvedValue('success')

    const result = await promiseWithRetry(fn, 3, 10)

    expect(result).toBe('success')
    expect(fn).toHaveBeenCalledTimes(3)
  })

  it('should throw the RetryError if all retries are exhausted', async () => {
    const lastError = new RetryError('retry', 'final cause')
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new RetryError('retry', 'cause1'))
      .mockRejectedValueOnce(new RetryError('retry', 'cause2'))
      .mockRejectedValue(lastError)

    await expect(promiseWithRetry(fn, 2, 10)).rejects.toThrow(lastError)
    expect(fn).toHaveBeenCalledTimes(3)
  })

  it('should not retry if the function throws a non-RetryError', async () => {
    const error = new Error('non-retry error')
    const fn = vi.fn().mockRejectedValue(error)

    await expect(promiseWithRetry(fn, 3, 10)).rejects.toThrow(error)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should use the specified delay between retries', async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new RetryError('retry', 'cause'))
      .mockResolvedValue('success')

    const startTime = Date.now()
    await promiseWithRetry(fn, 3, 100)
    const endTime = Date.now()

    expect(endTime - startTime).toBeGreaterThanOrEqual(100)
    expect(endTime - startTime).toBeLessThan(150)
  })

  it('should use exponential backoff when enabled', async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new RetryError('retry', 'cause1'))
      .mockRejectedValueOnce(new RetryError('retry', 'cause2'))
      .mockResolvedValue('success')

    const startTime = Date.now()
    await promiseWithRetry(fn, 3, 50, true)
    const endTime = Date.now()

    // First retry: 50ms, second retry: 100ms, total: 150ms
    expect(endTime - startTime).toBeGreaterThanOrEqual(150)
    expect(endTime - startTime).toBeLessThan(200)
  })

  it('should not retry if retries is 0', async () => {
    const error = new RetryError('retry', 'cause')
    const fn = vi.fn().mockRejectedValue(error)

    await expect(promiseWithRetry(fn, 0, 10)).rejects.toThrow(error)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should handle functions that return different types', async () => {
    const objectFn = vi.fn().mockResolvedValue({ data: 'test' })
    const numberFn = vi.fn().mockResolvedValue(42)
    const arrayFn = vi.fn().mockResolvedValue([1, 2, 3])

    const objectResult = await promiseWithRetry(objectFn, 3, 10)
    const numberResult = await promiseWithRetry(numberFn, 3, 10)
    const arrayResult = await promiseWithRetry(arrayFn, 3, 10)

    expect(objectResult).toEqual({ data: 'test' })
    expect(numberResult).toBe(42)
    expect(arrayResult).toEqual([1, 2, 3])
  })

  it('should preserve the cause property of RetryError', async () => {
    const cause = { detail: 'some error detail' }
    const error = new RetryError('retry failed', cause)
    const fn = vi.fn().mockRejectedValue(error)

    try {
      await promiseWithRetry(fn, 0, 10)
    } catch (e) {
      expect(e).toBeInstanceOf(RetryError)
      if (e instanceof RetryError) {
        expect(e.cause).toBe(cause)
        expect(e.message).toBe('retry failed')
      }
    }
  })
})

describe('RetryError', () => {
  it('should create an error with a message and cause', () => {
    const cause = new Error('original error')
    const error = new RetryError('operation failed', cause)

    expect(error).toBeInstanceOf(Error)
    expect(error.message).toBe('operation failed')
    expect(error.cause).toBe(cause)
  })

  it('should handle non-Error causes', () => {
    const cause = 'string error'
    const error = new RetryError('operation failed', cause)

    expect(error.cause).toBe(cause)
  })
})
