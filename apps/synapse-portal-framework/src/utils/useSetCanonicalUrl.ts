import { useEffect } from 'react'

/**
 * Hook to set the canonical URL of the page.
 *
 * The canonical URL helps search crawlers understand which URL(s) to index when there are multiple URLs that point to
 * the same content.
 * @param canonicalUrl
 */
export function useSetCanonicalUrl(canonicalUrl?: string) {
  useEffect(() => {
    const previousCanonicalUrlTag = document.querySelector(
      'link[rel="canonical"]',
    )
    if (canonicalUrl) {
      if (previousCanonicalUrlTag) {
        document.head.removeChild(previousCanonicalUrlTag)
      }
      const newCanonicalUrlTag = document.createElement('link')
      newCanonicalUrlTag.setAttribute('rel', 'canonical')
      newCanonicalUrlTag.setAttribute('href', canonicalUrl)
      document.head.appendChild(newCanonicalUrlTag)
    }

    return () => {
      document.querySelector('link[rel="canonical"]')?.remove()
      if (previousCanonicalUrlTag) {
        document.head.appendChild(previousCanonicalUrlTag)
      }
    }
  }, [canonicalUrl])
}
