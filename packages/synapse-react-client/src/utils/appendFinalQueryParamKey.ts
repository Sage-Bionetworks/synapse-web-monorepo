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
  let targetUrl = url
  if (url.searchParams.has(queryParam)) {
    // Callers typically pass the current browser URL, which may already carry a token from an
    // earlier round-trip. Stale copies have to be dropped before appending: the API concatenates
    // the new token onto the end of this string, so keeping them produces a link with duplicate
    // keys, which `URLSearchParams.get` resolves to the first (stale or empty) value rather than
    // the newly minted token.
    targetUrl = new URL(url)
    targetUrl.searchParams.delete(queryParam)
  }

  // TODO: URLSearchParams.size returns undefined in our test environment
  const separator = Array.from(targetUrl.searchParams).length === 0 ? '?' : '&'
  return `${targetUrl.toString()}${separator}${queryParam}=`
}
