/**
 * Appends a query param key to the passed URL and returns a URL string.
 *
 * This is useful for Synapse APIs where a URL is passed as a query parameter and a token is appended to the end of the URL,
 * such as initiating a reset password request or reset 2FA request.
 * @param url
 * @param queryParam
 */
export default function appendFinalQueryParamKey(
  url: URL,
  queryParam: string,
): string {
  // TODO: URLSearchParams.size returns undefined in our test environment
  if (Array.from(url.searchParams).length === 0) {
    // No params, so use `?`
    return `${url.toString()}?${queryParam}=`
  } else {
    // Already has params, so use '&'
    return `${url.toString()}&${queryParam}=`
  }
}
