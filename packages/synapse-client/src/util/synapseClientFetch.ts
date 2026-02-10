import { BaseError } from '../generated/models/BaseError'
import { NETWORK_UNAVAILABLE_MESSAGE } from './Constants'
import { promiseWithRetry, RetryError } from './promiseWithRetry'
import { SynapseClientError } from './SynapseClientError'

const RATE_LIMIT_MAX_RETRY = 10
const SERVER_ERROR_MAX_RETRY = 3

/**
 * Fetches data, retrying if the HTTP status code indicates that it could be retried.
 * To use it in our generated client, this function must NOT consume the response body.
 *
 * @throws SynapseClientError
 */
export async function synapseFetchWithRetry(
  requestInfo: RequestInfo,
  options: RequestInit,
  delayMs = 1000,
): Promise<Response> {
  let rateLimitRetryCount = 0
  let serverErrorRetryCount = 0

  return promiseWithRetry(
    async () => {
      const response = await fetch(requestInfo, options)

      if (response.status === 429) {
        rateLimitRetryCount++
        if (rateLimitRetryCount < RATE_LIMIT_MAX_RETRY) {
          throw new RetryError(`HTTP ${response.status}`, response)
        }
      } else if ([502, 503, 504].includes(response.status)) {
        serverErrorRetryCount++
        if (serverErrorRetryCount < SERVER_ERROR_MAX_RETRY) {
          throw new RetryError(`HTTP ${response.status}`, response)
        }
      }
      // Return response for all other statuses (including errors — middleware handles those)
      return response
    },
    RATE_LIMIT_MAX_RETRY,
    delayMs,
    true, // exponential backoff
    10_000, // maxDelayMs cap
  )
}

/**
 * Fetches data, retrying if the HTTP status code indicates that it could be retried. Contains custom logic for
 * handling errors returned by the Synapse backend.
 * @throws SynapseClientError
 */
export const synapseClientFetch = async <TResponse>(
  requestInfo: RequestInfo,
  options: RequestInit,
  delayMs = 1000,
): Promise<TResponse> => {
  const url = typeof requestInfo === 'string' ? requestInfo : requestInfo.url
  let response
  try {
    response = await synapseFetchWithRetry(requestInfo, options, delayMs)
  } catch (err) {
    console.error(err)
    throw new SynapseClientError(0, NETWORK_UNAVAILABLE_MESSAGE, url)
  }
  const contentType = response.headers.get('Content-Type')
  const responseBody = await response.text()
  let responseObject: TResponse | BaseError | string = responseBody
  try {
    // try to parse it as json
    if (contentType && contentType.includes('application/json')) {
      responseObject = JSON.parse(responseBody) as TResponse | BaseError
    }
  } catch (error) {
    console.warn('Failed to parse response as JSON', responseBody)
  }

  if (response.ok) {
    return responseObject as TResponse
  } else if (
    responseObject !== null &&
    typeof responseObject === 'object' &&
    'reason' in responseObject
  ) {
    throw new SynapseClientError(
      response.status,
      responseObject.reason!,
      url,
      responseObject,
    )
  } else {
    throw new SynapseClientError(
      response.status,
      JSON.stringify(responseObject),
      url,
    )
  }
}
