/**
 * Determines whether a given URL is external relative to the current page.
 *
 * @param url - The URL to check. Can be relative or absolute.
 * @returns true if the link points to a different origin (external), false otherwise.
 */
export function isExternalLink(url: string): boolean {
  try {
    const linkUrl = new URL(url, window.location.href)
    return linkUrl.origin !== window.location.origin
  } catch {
    return false
  }
}
