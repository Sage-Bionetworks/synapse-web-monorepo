import { OAuthClientError } from './OAuthClientError'
import { SynapseClientError } from 'synapse-react-client'

/**
 * Returns true iff a redirect has started
 * @param error
 */
export const handleErrorRedirect = (
  searchParams: URLSearchParams,
  error: Error | OAuthClientError | SynapseClientError,
): boolean => {
  console.error(error)
  const redirectUri = searchParams.get('redirect_uri')
  if ('error' in error && redirectUri) {
    // is this a valid URL, and has the backend validated the redirect uri (SWC-5596)?
    if (isValidUrl(redirectUri) && error['error'] !== 'invalid_redirect_uri') {
      // we have a redirectUri and an error code from the backend (and possibly an error description!).  Redirect.
      const redirectURLSearchParams = new URLSearchParams()

      redirectURLSearchParams.set('error', error['error'])
      if (error['error_description']) {
        redirectURLSearchParams.set(
          'error_description',
          //URLSearchParams.toString() already encodes value, do not encode here (would double encode)
          error['error_description'],
        )
      }
      let redirectUrl = `${redirectUri}?${redirectURLSearchParams.toString()}`
      const state = searchParams.get('state')
      if (state) {
        // SWC-7272 - append raw state to the end of the URL
        // We do not use URLSearchParams for state because it encodes the value, and it should be passed untouched.
        redirectUrl += `&state=${state}`
      }
      window.location.replace(redirectUrl)
      return true
    }
    // no need to pop up an alert here, since the error should be shown on the page (and we already sent to console.error)
  }
  return false
}

export const isValidUrl = (str: string) => {
  try {
    new URL(str)
  } catch (_) {
    return false
  }
  return true
}
