/**
 * Determines whether a given URL is external relative to the current page.
 *
 * @param url - The URL to check. Can be relative or absolute.
 * @returns true if the link points to a different origin (external), false otherwise.
 */
export function isExternalLink(url: string): boolean {
  try {
    // First, try parsing as an absolute URL (no base needed).
    // This works for URLs like "https://example.com/path".
    const absoluteUrl = new URL(url)
    // If window is available, compare origins precisely.
    if (typeof window !== 'undefined') {
      return absoluteUrl.origin !== window.location.origin
    }
    // During SSR, we can't compare origins, but the URL is absolute and
    // parseable, so it's almost certainly external (relative URLs would fail
    // the no-base parse above). Return true to be safe.
    return true
  } catch {
    // URL parsing without a base failed, so `url` is relative (e.g. "/about",
    // "#section", "page"). Relative URLs are always internal.
    // If window is available, we could also try with window.location.href as
    // base, but relative URLs are by definition same-origin.
    return false
  }
}
