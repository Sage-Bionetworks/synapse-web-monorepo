/**
 * Error class used to signal that an operation should be retried.
 *
 * When thrown from a function passed to `promiseWithRetry`, this error will trigger
 * a retry attempt (up to the specified retry limit). Other error types will immediately
 * fail without retrying.
 *
 * @example
 * ```ts
 * throw new RetryError('Connection timeout', originalError)
 * ```
 */
export class RetryError extends Error {
  public cause: unknown
  constructor(message: string, cause: unknown) {
    super(message)
    this.cause = cause
  }
}

/**
 * Executes an async function with automatic retry logic on RetryError.
 *
 * This function will retry the provided function only when it throws a `RetryError`.
 * Other error types will immediately propagate without retrying. Each retry is
 * delayed by the specified amount, with optional exponential backoff.
 *
 * @template T - The return type of the async function
 * @param fn - The async function to execute with retry logic
 * @param retries - Maximum number of retry attempts (0 means no retries, just one attempt)
 * @param delayMs - Delay in milliseconds between retry attempts
 * @param exponentialBackoff - If true, doubles the delay after each retry (default: false)
 * @param maxDelayMs - If provided, caps the delay between retries to this value in milliseconds
 * @returns A promise that resolves with the result of `fn` on success
 * @throws {RetryError} If all retry attempts are exhausted and the last attempt throws a RetryError
 * @throws {Error} Immediately if `fn` throws any error that is not a RetryError
 *
 * @example
 * ```ts
 * // Simple retry with fixed delay
 * const result = await promiseWithRetry(
 *   () => fetchData(),
 *   3,
 *   1000
 * )
 * ```
 *
 * @example
 * ```ts
 * // Retry with exponential backoff
 * const result = await promiseWithRetry(
 *   async () => {
 *     const response = await fetch('/api/data')
 *     if (!response.ok) {
 *       throw new RetryError('Request failed', response.statusText)
 *     }
 *     return response.json()
 *   },
 *   5,
 *   100,
 *   true
 * ) // Delays: 100ms, 200ms, 400ms, 800ms, 1600ms
 * ```
 */
export async function promiseWithRetry<T>(
  fn: () => Promise<T>,
  retries: number,
  delayMs: number,
  exponentialBackoff = false,
  maxDelayMs?: number,
): Promise<T> {
  let lastError: unknown
  let currentDelay = delayMs

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error

      if (error instanceof RetryError && attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, currentDelay))

        if (exponentialBackoff) {
          currentDelay *= 2
        }
        if (maxDelayMs !== undefined) {
          currentDelay = Math.min(currentDelay, maxDelayMs)
        }
      } else {
        throw error
      }
    }
  }

  throw lastError
}
