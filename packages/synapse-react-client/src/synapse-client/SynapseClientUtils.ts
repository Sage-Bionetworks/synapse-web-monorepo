import { ErrorResponseCode } from '@sage-bionetworks/synapse-client/generated/models/ErrorResponseCode'
import {
  instanceOfTwoFactorAuthErrorResponse,
  TwoFactorAuthErrorResponse,
} from '@sage-bionetworks/synapse-client/generated/models/TwoFactorAuthErrorResponse'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'

export function isOutsideSynapseOrg() {
  if (typeof window === 'undefined') {
    return true // In Node.js/test environment, treat as outside synapse.org
  }
  return !window.location.hostname.toLowerCase().endsWith('.synapse.org')
}

/**
 * Invokes a function that makes a request to Synapse and returns null if the server responds with a 404.
 * @param fn a function that may throw a SynapseClientError when encountering an HTTP Error Code
 * @returns The result of the function call, or null if the result is a 404 "Not Found" error.
 */
export async function allowNotFoundError<T>(
  fn: () => Promise<T>,
): Promise<T | null> {
  let response: Awaited<T> | null = null
  try {
    response = await fn()
  } catch (e) {
    if (e instanceof SynapseClientError && e.status === 404) {
      // Permitted
    } else {
      throw e
    }
  }
  return response
}

/**
 * If the asynchronous request returns a TwoFactorAuthErrorResponse, return that error instead of throwing it. Other
 * types of errors will still be thrown.
 * @param fn
 */
export async function returnIfTwoFactorAuthError<T>(
  fn: () => Promise<T>,
): Promise<T | TwoFactorAuthErrorResponse> {
  let response: Awaited<T>
  try {
    response = await fn()
  } catch (e) {
    if (
      e instanceof SynapseClientError &&
      e.status === 401 &&
      e.errorResponse &&
      'errorCode' in e.errorResponse &&
      e.errorResponse.errorCode === ErrorResponseCode.TWO_FA_REQUIRED &&
      instanceOfTwoFactorAuthErrorResponse(e.errorResponse)
    ) {
      return e.errorResponse
    } else {
      throw e
    }
  }
  return response
}
