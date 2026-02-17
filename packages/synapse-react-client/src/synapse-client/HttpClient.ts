import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { synapseClientFetch } from '@sage-bionetworks/synapse-client/util/synapseClientFetch'

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
      'Content-Type': 'application/json; charset=UTF-8',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    method: 'POST',
    mode: 'cors',
    ...additionalOptions,
  }
  const usedEndpoint = getEndpoint(endpoint)
  return synapseClientFetch<T>(usedEndpoint + url, options)
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
  return synapseClientFetch<T>(usedEndpoint + url, options)
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
  return synapseClientFetch<void>(usedEndpoint + url, options)
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
      'Content-Type': 'application/json; charset=UTF-8',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    method: 'PUT',
    mode: 'cors',
    ...additionalOptions,
  }
  const usedEndpoint = getEndpoint(endpoint)
  return synapseClientFetch<T>(usedEndpoint + url, options)
}
