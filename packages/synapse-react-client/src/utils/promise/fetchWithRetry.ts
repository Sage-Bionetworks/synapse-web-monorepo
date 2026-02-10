import { promiseWithRetry, RetryError } from './promiseWithRetry'

/**
 * HTTP status codes that are safe to retry.
 * These indicate temporary issues that may resolve on subsequent attempts.
 */
const RETRYABLE_STATUS_CODES = new Set([
  408, // Request Timeout
  429, // Too Many Requests (rate limiting)
  500, // Internal Server Error
  502, // Bad Gateway
  503, // Service Unavailable
  504, // Gateway Timeout
])

/**
 * Error thrown when a fetch request fails with a non-retryable status code.
 */
export class FetchError extends Error {
  public response: Response
  public status: number

  constructor(message: string, response: Response) {
    super(message)
    this.response = response
    this.status = response.status
    this.name = 'FetchError'
  }
}

/**
 * Performs a fetch request with automatic retry logic for transient failures.
 *
 * This function automatically retries fetch requests that fail with retryable HTTP
 * status codes (408, 429, 500, 502, 503, 504). Client errors (4xx except 408/429)
 * and successful responses are not retried.
 *
 * Note that the Synapse API has its own implementation of this logic in `fetchWithExponentialTimeout`.
 * This utility is more generic and can be used for any fetch request where retry logic is desired.
 *
 * @param input - The URL or Request object to fetch
 * @param init - Optional fetch configuration (headers, method, body, etc.)
 * @param options - Retry configuration options
 * @param options.retries - Maximum number of retry attempts (default: 3)
 * @param options.delayMs - Initial delay between retries in milliseconds (default: 1000)
 * @param options.exponentialBackoff - Whether to double the delay after each retry (default: true)
 * @returns A promise that resolves with the Response object on success
 * @throws {FetchError} If the request fails with a non-retryable status code
 * @throws {RetryError} If all retry attempts are exhausted for a retryable status code
 * @throws {TypeError} If the fetch request fails due to network issues
 *
 * @example
 * ```ts
 * // Simple usage with defaults (3 retries, 1s delay, exponential backoff)
 * const response = await fetchWithRetry('https://api.example.com/data')
 * const data = await response.json()
 * ```
 *
 * @example
 * ```ts
 * // Custom retry configuration
 * const response = await fetchWithRetry(
 *   'https://api.example.com/data',
 *   { method: 'POST', body: JSON.stringify({ key: 'value' }) },
 *   { retries: 5, delayMs: 500, exponentialBackoff: true }
 * )
 * ```
 *
 * @example
 * ```ts
 * // Handling errors
 * try {
 *   const response = await fetchWithRetry('https://api.example.com/data')
 *   const data = await response.json()
 * } catch (error) {
 *   if (error instanceof FetchError) {
 *     console.error(`HTTP ${error.status}: ${error.message}`)
 *   } else if (error instanceof RetryError) {
 *     console.error('All retry attempts exhausted')
 *   } else {
 *     console.error('Network error:', error)
 *   }
 * }
 * ```
 */
export async function fetchWithRetry(
  input: RequestInfo | URL,
  init?: RequestInit,
  options: {
    retries?: number
    delayMs?: number
    exponentialBackoff?: boolean
  } = {},
): Promise<Response> {
  const { retries = 3, delayMs = 1000, exponentialBackoff = true } = options

  return promiseWithRetry(
    async () => {
      const response = await fetch(input, init)

      if (!response.ok) {
        const statusText = response.statusText || 'Unknown error'
        const errorMessage = `HTTP ${response.status}: ${statusText}`

        if (RETRYABLE_STATUS_CODES.has(response.status)) {
          // Clone the response before throwing so it can be inspected if needed
          throw new RetryError(errorMessage, response.clone())
        } else {
          // Non-retryable error (e.g., 400, 401, 403, 404)
          throw new FetchError(errorMessage, response)
        }
      }

      return response
    },
    retries,
    delayMs,
    exponentialBackoff,
  )
}
