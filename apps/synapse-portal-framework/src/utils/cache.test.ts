import { describe, expect, it, vi } from 'vitest'
import { PrerenderCache } from './cache'

describe('PrerenderCache', () => {
  it('returns the fetched value on cache miss', async () => {
    const cache = new PrerenderCache<string, string>()
    const fetcher = vi.fn().mockResolvedValue('hello')

    const result = await cache.get('key', fetcher)

    expect(result).toBe('hello')
    expect(fetcher).toHaveBeenCalledOnce()
  })

  it('returns the cached value on subsequent calls without re-fetching', async () => {
    const cache = new PrerenderCache<string, string>()
    const fetcher = vi.fn().mockResolvedValue('hello')

    const first = await cache.get('key', fetcher)
    const second = await cache.get('key', fetcher)

    expect(first).toBe('hello')
    expect(second).toBe('hello')
    expect(fetcher).toHaveBeenCalledOnce()
  })

  it('fetches independently for different keys', async () => {
    const cache = new PrerenderCache<string, string>()
    const fetcher = vi.fn().mockResolvedValue('value')

    await Promise.all([cache.get('key1', fetcher), cache.get('key2', fetcher)])

    expect(fetcher).toHaveBeenCalledTimes(2)
  })

  it('propagates fetcher errors on cache miss', async () => {
    const cache = new PrerenderCache<string, string>()
    const fetcher = vi.fn().mockRejectedValue(new Error('fetch failed'))

    await expect(cache.get('key', fetcher)).rejects.toThrow('fetch failed')
  })

  it('does not cache values when fetcher throws', async () => {
    const cache = new PrerenderCache<string, string>()
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

  describe('set()', () => {
    it('manually populates the cache', async () => {
      const cache = new PrerenderCache<string, string>()
      const fetcher = vi.fn().mockResolvedValue('fetched')

      cache.set('key', 'manual')

      const result = await cache.get('key', fetcher)
      expect(result).toBe('manual')
      expect(fetcher).not.toHaveBeenCalled()
    })
  })

  describe('has()', () => {
    it('returns false for missing keys', () => {
      const cache = new PrerenderCache<string, string>()
      expect(cache.has('missing')).toBe(false)
    })

    it('returns true after a value is stored via get()', async () => {
      const cache = new PrerenderCache<string, string>()
      await cache.get('key', () => Promise.resolve('value'))

      expect(cache.has('key')).toBe(true)
    })

    it('returns true after a value is stored via set()', () => {
      const cache = new PrerenderCache<string, string>()
      cache.set('key', 'value')

      expect(cache.has('key')).toBe(true)
    })
  })

  describe('size', () => {
    it('returns 0 for empty cache', () => {
      const cache = new PrerenderCache<string, string>()
      expect(cache.size).toBe(0)
    })

    it('returns the number of entries', async () => {
      const cache = new PrerenderCache<string, string>()
      await cache.get('a', () => Promise.resolve('value-a'))
      await cache.get('b', () => Promise.resolve('value-b'))

      expect(cache.size).toBe(2)
    })
  })
})
