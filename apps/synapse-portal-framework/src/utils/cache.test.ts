import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { TTLCache } from './cache'

describe('TTLCache', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns the fetched value on cache miss', async () => {
    const cache = new TTLCache<string, string>({ ttlMs: 1000 })
    const fetcher = vi.fn().mockResolvedValue('hello')

    const result = await cache.get('key', fetcher)

    expect(result).toBe('hello')
    expect(fetcher).toHaveBeenCalledOnce()
  })

  it('returns the cached value on subsequent calls within TTL', async () => {
    const cache = new TTLCache<string, string>({ ttlMs: 1000 })
    const fetcher = vi.fn().mockResolvedValue('hello')

    const first = await cache.get('key', fetcher)
    const second = await cache.get('key', fetcher)

    expect(first).toBe('hello')
    expect(second).toBe('hello')
    expect(fetcher).toHaveBeenCalledOnce()
  })

  it('returns stale data and refreshes in background after TTL expires', async () => {
    const cache = new TTLCache<string, string>({ ttlMs: 1000 })
    const fetcher = vi
      .fn()
      .mockResolvedValueOnce('first')
      .mockResolvedValueOnce('second')

    // Populate cache
    const first = await cache.get('key', fetcher)
    expect(first).toBe('first')
    expect(fetcher).toHaveBeenCalledTimes(1)

    // Advance past TTL
    vi.advanceTimersByTime(1001)

    // Should return stale 'first' immediately, and trigger background refresh
    const stale = await cache.get('key', fetcher)
    expect(stale).toBe('first')
    expect(fetcher).toHaveBeenCalledTimes(2)

    // Allow the background refresh promise to resolve
    await vi.runAllTimersAsync()

    // Now the cache should have the refreshed value
    const refreshed = await cache.get('key', fetcher)
    expect(refreshed).toBe('second')
    // Fetcher should not be called again (still within TTL of the refresh)
    expect(fetcher).toHaveBeenCalledTimes(2)
  })

  it('deduplicates concurrent requests for the same key', async () => {
    const cache = new TTLCache<string, string>({ ttlMs: 1000 })
    let resolvePromise: (value: string) => void
    const fetcher = vi.fn().mockImplementation(
      () =>
        new Promise<string>(resolve => {
          resolvePromise = resolve
        }),
    )

    // Start two concurrent fetches
    const promise1 = cache.get('key', fetcher)
    const promise2 = cache.get('key', fetcher)

    // Only one fetch should be in flight
    expect(fetcher).toHaveBeenCalledOnce()

    // Resolve the shared promise
    resolvePromise!('shared')

    const [result1, result2] = await Promise.all([promise1, promise2])
    expect(result1).toBe('shared')
    expect(result2).toBe('shared')
  })

  it('does not deduplicate requests for different keys', async () => {
    const cache = new TTLCache<string, string>({ ttlMs: 1000 })
    const fetcher = vi.fn().mockResolvedValue('value')

    await Promise.all([cache.get('key1', fetcher), cache.get('key2', fetcher)])

    expect(fetcher).toHaveBeenCalledTimes(2)
  })

  it('uses default TTL of 1 hour when no options provided', async () => {
    const cache = new TTLCache<string, string>()
    const fetcher = vi
      .fn()
      .mockResolvedValueOnce('first')
      .mockResolvedValueOnce('second')

    await cache.get('key', fetcher)

    // Advance 59 minutes — should still be fresh
    vi.advanceTimersByTime(59 * 60 * 1000)
    const stillFresh = await cache.get('key', fetcher)
    expect(stillFresh).toBe('first')
    expect(fetcher).toHaveBeenCalledTimes(1)

    // Advance past 1 hour — should be stale
    vi.advanceTimersByTime(2 * 60 * 1000) // 61 minutes total
    const stale = await cache.get('key', fetcher)
    expect(stale).toBe('first') // stale-while-revalidate returns stale
    expect(fetcher).toHaveBeenCalledTimes(2) // but triggers a refresh
  })

  describe('set()', () => {
    it('manually populates the cache', async () => {
      const cache = new TTLCache<string, string>({ ttlMs: 1000 })
      const fetcher = vi.fn().mockResolvedValue('fetched')

      cache.set('key', 'manual')

      const result = await cache.get('key', fetcher)
      expect(result).toBe('manual')
      expect(fetcher).not.toHaveBeenCalled()
    })
  })

  describe('has()', () => {
    it('returns false for missing keys', () => {
      const cache = new TTLCache<string, string>({ ttlMs: 1000 })
      expect(cache.has('missing')).toBe(false)
    })

    it('returns true for fresh entries', async () => {
      const cache = new TTLCache<string, string>({ ttlMs: 1000 })
      await cache.get('key', () => Promise.resolve('value'))

      expect(cache.has('key')).toBe(true)
    })

    it('returns false for expired entries', async () => {
      const cache = new TTLCache<string, string>({ ttlMs: 1000 })
      await cache.get('key', () => Promise.resolve('value'))

      vi.advanceTimersByTime(1001)
      expect(cache.has('key')).toBe(false)
    })
  })

  describe('size', () => {
    it('returns 0 for empty cache', () => {
      const cache = new TTLCache<string, string>()
      expect(cache.size).toBe(0)
    })

    it('returns the number of entries including stale', async () => {
      const cache = new TTLCache<string, string>({ ttlMs: 1000 })
      await cache.get('a', () => Promise.resolve('value-a'))
      await cache.get('b', () => Promise.resolve('value-b'))

      expect(cache.size).toBe(2)

      // Advance past TTL — entries are stale but still counted
      vi.advanceTimersByTime(1001)
      expect(cache.size).toBe(2)
    })
  })

  describe('clear()', () => {
    it('removes all entries', async () => {
      const cache = new TTLCache<string, string>({ ttlMs: 1000 })
      await cache.get('a', () => Promise.resolve('value-a'))
      await cache.get('b', () => Promise.resolve('value-b'))

      cache.clear()

      expect(cache.size).toBe(0)
      expect(cache.has('a')).toBe(false)
      expect(cache.has('b')).toBe(false)
    })
  })

  describe('error handling', () => {
    it('propagates fetcher errors on cache miss', async () => {
      const cache = new TTLCache<string, string>({ ttlMs: 1000 })
      const fetcher = vi.fn().mockRejectedValue(new Error('fetch failed'))

      await expect(cache.get('key', fetcher)).rejects.toThrow('fetch failed')
    })

    it('does not cache values when fetcher throws on cache miss', async () => {
      const cache = new TTLCache<string, string>({ ttlMs: 1000 })
      const fetcher = vi
        .fn()
        .mockRejectedValueOnce(new Error('fetch failed'))
        .mockResolvedValueOnce('success')

      await expect(cache.get('key', fetcher)).rejects.toThrow('fetch failed')

      // Second call should try fetching again (not return a cached error)
      const result = await cache.get('key', fetcher)
      expect(result).toBe('success')
      expect(fetcher).toHaveBeenCalledTimes(2)
    })

    it('does not throw on background refresh failure (stale-while-revalidate)', async () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const cache = new TTLCache<string, string>({ ttlMs: 1000 })
      const fetcher = vi
        .fn()
        .mockResolvedValueOnce('first')
        .mockRejectedValueOnce(new Error('refresh failed'))
        .mockResolvedValueOnce('third')

      // Populate cache
      await cache.get('key', fetcher)

      // Expire cache
      vi.advanceTimersByTime(1001)

      // Should return stale value without throwing
      const stale = await cache.get('key', fetcher)
      expect(stale).toBe('first')

      // Let background refresh fail
      await vi.runAllTimersAsync()

      // The stale value should still be available (background refresh failed)
      // Expire again
      vi.advanceTimersByTime(1001)

      // This should trigger another refresh attempt
      const staleAgain = await cache.get('key', fetcher)
      expect(staleAgain).toBe('first')

      warnSpy.mockRestore()
    })
  })
})
