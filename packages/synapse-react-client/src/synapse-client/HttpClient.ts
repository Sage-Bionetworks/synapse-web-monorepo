import { BackendDestinationEnum, getEndpoint } from '../utils/functions'
import { SynapseClientError } from '../utils'
import { NETWORK_UNAVAILABLE_MESSAGE } from '../utils/SynapseConstants'
import { SynapseError } from '../utils/SynapseError'

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
    response = await fetch(requestInfo, options)
  } catch (err) {
    console.error(err)
    throw new SynapseClientError(0, NETWORK_UNAVAILABLE_MESSAGE, url)
  }

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

  const contentType = response.headers.get('Content-Type')
  const responseBody = await response.text()
  let responseObject: TResponse | SynapseError | string = responseBody
  try {
    // try to parse it as json
    if (contentType && contentType.includes('application/json')) {
      responseObject = JSON.parse(responseBody) as TResponse | SynapseError
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
      responseObject.reason,
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
export const doPost = <T>(
  url: string,
  requestJsonObject: unknown,
  accessToken: string | undefined,
  endpoint: BackendDestinationEnum,
  additionalOptions: RequestInit = {},
): Promise<T> => {
  const options: RequestInit = {
    body: JSON.stringify(requestJsonObject),
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'authorization',
      'Content-Type': 'application/json; charset=utf8',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    method: 'POST',
    mode: 'cors',
    ...additionalOptions,
  }
  const usedEndpoint = getEndpoint(endpoint)
  return fetchWithExponentialTimeout<T>(usedEndpoint + url, options)
}
export const doGet = <T>(
  url: string,
  accessToken: string | undefined,
  endpoint: BackendDestinationEnum,
  additionalOptions: RequestInit = {},
) => {
  const options: RequestInit = {
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'authorization',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    method: 'GET',
    mode: 'cors',
    ...additionalOptions,
  }
  const usedEndpoint = getEndpoint(endpoint)
  return fetchWithExponentialTimeout<T>(usedEndpoint + url, options)
}
export const doDelete = (
  url: string,
  accessToken: string | undefined,
  endpoint: BackendDestinationEnum,
  additionalOptions: RequestInit = {},
) => {
  const options: RequestInit = {
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'authorization',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    method: 'DELETE',
    mode: 'cors',
    ...additionalOptions,
  }
  const usedEndpoint = getEndpoint(endpoint)
  return fetchWithExponentialTimeout<void>(usedEndpoint + url, options)
}
export const doPut = <T>(
  url: string,
  requestJsonObject: unknown,
  accessToken: string | undefined,
  endpoint: BackendDestinationEnum,
  additionalOptions: RequestInit = {},
): Promise<T> => {
  const options: RequestInit = {
    body: JSON.stringify(requestJsonObject),
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'authorization',
      'Content-Type': 'application/json; charset=utf8',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    method: 'PUT',
    mode: 'cors',
    ...additionalOptions,
  }
  const usedEndpoint = getEndpoint(endpoint)
  return fetchWithExponentialTimeout<T>(usedEndpoint + url, options)
}
