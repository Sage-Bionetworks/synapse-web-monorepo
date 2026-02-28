/**
 * Generic TTL-based in-memory cache with stale-while-revalidate support
 * and concurrent request deduplication (thundering herd protection).
 *
 * This module provides a reusable caching primitive for SSR loaders and
 * other server-side data fetching utilities.
 */

/**
 * A cached value with an expiration timestamp.
 */
export interface CacheEntry<T> {
  data: T
  expiresAt: number
}

/**
 * Options for creating a {@link TTLCache} instance.
 */
export interface TTLCacheOptions {
  /**
   * Time-to-live in milliseconds. Cached entries are considered "fresh" for
   * this duration after they are stored. After the TTL expires, the entry
   * becomes "stale" and will be refreshed.
   *
   * @default 3_600_000 (1 hour)
   */
  ttlMs?: number
}

const DEFAULT_TTL_MS = 60 * 60 * 1000 // 1 hour

/**
 * A generic TTL-based in-memory cache with stale-while-revalidate semantics.
 *
 * Features:
 * - **TTL expiration**: Entries are considered fresh for a configurable duration.
 * - **Stale-while-revalidate**: When an entry is stale, the stale value is
 *   returned immediately while a background refresh is triggered. This
 *   eliminates latency spikes after TTL expiry.
 * - **Request deduplication**: Concurrent calls to `get()` with the same key
 *   share a single in-flight fetch, preventing thundering herd problems.
 *
 * @typeParam K - The cache key type (typically `string`)
 * @typeParam V - The cached value type
 *
 * @example
 * ```ts
 * const cache = new TTLCache<string, UserProfile>({ ttlMs: 5 * 60 * 1000 })
 *
 * // First call fetches from the API
 * const profile = await cache.get('user-123', () => fetchUserProfile('user-123'))
 *
 * // Subsequent calls within TTL return the cached value instantly
 * const cachedProfile = await cache.get('user-123', () => fetchUserProfile('user-123'))
 * ```
 */
export class TTLCache<K, V> {
  private readonly ttlMs: number
  private readonly entries = new Map<K, CacheEntry<V>>()
  private readonly inFlight = new Map<K, Promise<V>>()

  constructor(options: TTLCacheOptions = {}) {
    this.ttlMs = options.ttlMs ?? DEFAULT_TTL_MS
  }

  /**
   * Retrieves a value from the cache, fetching it if necessary.
   *
   * Behavior:
   * 1. **Fresh cache hit**: Returns the cached value immediately.
   * 2. **Stale cache hit**: Returns the stale value immediately and triggers
   *    a background refresh via `fetcher`. The refreshed value will be
   *    available for subsequent calls.
   * 3. **Cache miss**: Calls `fetcher` to obtain the value, caches it, and
   *    returns it. Concurrent calls with the same key share a single fetch.
   *
   * @param key - The cache key
   * @param fetcher - An async function that produces the value on cache miss
   * @returns The cached or freshly-fetched value
   */
  async get(key: K, fetcher: () => Promise<V>): Promise<V> {
    const cached = this.entries.get(key)
    const now = Date.now()

    if (cached) {
      if (now < cached.expiresAt) {
        // Fresh cache hit — return immediately
        return cached.data
      }

      // Stale cache hit — return stale data, refresh in background
      this.refreshInBackground(key, fetcher)
      return cached.data
    }

    // Cache miss — fetch with deduplication
    return this.fetchWithDedup(key, fetcher)
  }

  /**
   * Manually sets a cache entry, bypassing the fetcher.
   *
   * Useful for pre-populating the cache (e.g. from a batch preload).
   */
  set(key: K, value: V): void {
    this.entries.set(key, {
      data: value,
      expiresAt: Date.now() + this.ttlMs,
    })
  }

  /**
   * Checks whether a given key has a fresh (non-expired) entry in the cache.
   */
  has(key: K): boolean {
    const cached = this.entries.get(key)
    return cached != null && Date.now() < cached.expiresAt
  }

  /**
   * Returns the number of entries currently in the cache (including stale).
   */
  get size(): number {
    return this.entries.size
  }

  /**
   * Removes all entries from the cache.
   */
  clear(): void {
    this.entries.clear()
    // Note: in-flight promises are NOT cleared — they will complete and
    // populate the cache as normal.
  }

  /**
   * Fetches a value with concurrent request deduplication.
   * If a fetch for the same key is already in flight, the existing promise
   * is returned instead of starting a new one.
   */
  private async fetchWithDedup(key: K, fetcher: () => Promise<V>): Promise<V> {
    const existing = this.inFlight.get(key)
    if (existing) return existing

    const promise = (async () => {
      try {
        const value = await fetcher()
        this.entries.set(key, {
          data: value,
          expiresAt: Date.now() + this.ttlMs,
        })
        return value
      } finally {
        this.inFlight.delete(key)
      }
    })()

    this.inFlight.set(key, promise)
    return promise
  }

  /**
   * Triggers a background refresh for a stale entry.
   * The refresh runs fire-and-forget — errors are logged but not thrown.
   */
  private refreshInBackground(key: K, fetcher: () => Promise<V>): void {
    // Don't start a second refresh if one is already in flight
    if (this.inFlight.has(key)) return

    const promise = (async () => {
      try {
        const value = await fetcher()
        this.entries.set(key, {
          data: value,
          expiresAt: Date.now() + this.ttlMs,
        })
        return value
      } catch (error) {
        console.warn(
          `TTLCache: Background refresh failed for key "${String(key)}":`,
          error instanceof Error ? error.message : error,
        )
        // Re-throw so the promise resolves/rejects properly, but this is
        // fire-and-forget so the error is swallowed by the caller.
        throw error
      } finally {
        this.inFlight.delete(key)
      }
    })()

    this.inFlight.set(key, promise)

    // Fire-and-forget — swallow the rejection to avoid unhandled promise warnings
    promise.catch(() => {})
  }
}
