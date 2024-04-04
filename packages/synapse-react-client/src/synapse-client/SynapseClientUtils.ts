import {
  ErrorResponseCode,
  TwoFactorAuthErrorResponse,
} from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '../utils/SynapseClientError'

export function isOutsideSynapseOrg() {
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
      e.errorResponse.concreteType ===
        'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse'
    ) {
      return e.errorResponse
    } else {
      throw e
    }
  }
  return response
}
