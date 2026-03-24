/**
 * Simple in-memory cache for SSG pre-rendering.
 */

/**
 * A simple in-memory cache intended for use during SSG pre-rendering.
 *
 * Features:
 * - **Cache miss fetch**: On a cache miss, calls `fetcher` to obtain the
 *   value, stores it, and returns it.
 * - **Manual pre-population**: `set()` allows batch pre-loading entries
 *   (e.g. from a preload step in `react-router.config.ts`).
 *
 * @typeParam K - The cache key type (typically `string`)
 * @typeParam V - The cached value type
 *
 * @example
 * ```ts
 * const cache = new PrerenderCache<string, UserProfile>()
 *
 * // First call fetches from the API
 * const profile = await cache.get('user-123', () => fetchUserProfile('user-123'))
 *
 * // Subsequent calls return the cached value instantly
 * const cachedProfile = await cache.get('user-123', () => fetchUserProfile('user-123'))
 * ```
 */
export class PrerenderCache<K, V> {
  private readonly entries = new Map<K, V>()

  /**
   * Retrieves a value from the cache, fetching it if not present.
   *
   * @param key - The cache key
   * @param fetcher - An async function that produces the value on cache miss
   * @returns The cached or freshly-fetched value
   */
  async get(key: K, fetcher: () => Promise<V>): Promise<V> {
    if (this.entries.has(key)) return this.entries.get(key)!
    const value = await fetcher()
    this.entries.set(key, value)
    return value
  }

  /**
   * Manually sets a cache entry, bypassing the fetcher.
   *
   * Useful for pre-populating the cache (e.g. from a batch preload).
   */
  set(key: K, value: V): void {
    this.entries.set(key, value)
  }

  /**
   * Checks whether a given key is present in the cache.
   */
  has(key: K): boolean {
    return this.entries.has(key)
  }

  /**
   * Returns the number of entries currently in the cache.
   */
  get size(): number {
    return this.entries.size
  }
}
