import { BaseError } from '../generated/models/BaseError'
import { NETWORK_UNAVAILABLE_MESSAGE } from './Constants'
import { SynapseClientError } from './SynapseClientError'

/**
 * Waits t number of milliseconds
 *
 * @export
 * @param {number} t milliseconds
 * @returns after t milliseconds
 */
export function delay(t: number) {
  return new Promise(resolve => {
    setTimeout(resolve.bind(null, {}), t)
  })
}

/*
  0 - no internet connection
  429 - Too Many Requests
  502 - Bad Gateway
  503 - Service Unavailable
  504 - Gateway Timeout
*/
const RETRY_STATUS_CODES = [0, 429, 502, 503, 504]
const MAX_RETRY_STATUS_CODES = [502, 503]
const MAX_RETRY = 3

/**
 * Fetches data, retrying if the HTTP status code indicates that it could be retried.
 * To use it in our generated client, this function must be SIDE-EFFECT FREE, so it does not
 * consume the response body.
 *
 * @throws SynapseClientError
 */
export const fetchResponseWithExponentialTimeout = async (
  requestInfo: RequestInfo,
  options: RequestInit,
  delayMs = 1000,
) => {
  let response = await fetch(requestInfo, options)

  let numOfTry = 1
  while (response.status && RETRY_STATUS_CODES.includes(response.status)) {
    await delay(delayMs)
    // Exponential backoff if we re-fetch
    delayMs = delayMs * 2
    response = await fetch(requestInfo, options)
    if (MAX_RETRY_STATUS_CODES.includes(response.status)) {
      numOfTry++
      if (numOfTry == MAX_RETRY) {
        break
      }
    }
  }

  return response
}

/**
 * Fetches data, retrying if the HTTP status code indicates that it could be retried. Contains custom logic for
 * handling errors returned by the Synapse backend.
 * @throws SynapseClientError
 */
export const fetchWithExponentialTimeout = async <TResponse>(
  requestInfo: RequestInfo,
  options: RequestInit,
  delayMs = 1000,
): Promise<TResponse> => {
  const url = typeof requestInfo === 'string' ? requestInfo : requestInfo.url
  let response
  try {
    response = await fetchResponseWithExponentialTimeout(
      requestInfo,
      options,
      delayMs,
    )
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
