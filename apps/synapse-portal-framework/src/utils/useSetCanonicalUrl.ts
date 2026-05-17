import { useEffect, useRef } from 'react'

/**
 * Hook to set the canonical URL of the page.
 *
 * The canonical URL helps search crawlers understand which URL(s) to index when there are multiple URLs that point to
 * the same content.
 * @param canonicalUrl
 * @deprecated Prefer using exporting `meta` from the page's route module to set the canonical URL. This approach is brittle and can conflict with other components that manipulate the same tag, leading to obscure React errors.
 */
export function useSetCanonicalUrl(canonicalUrl?: string) {
  const tagWasCreated = useRef(false)
  useEffect(() => {
    if (canonicalUrl) {
      let canonicalUrlTag = document.querySelector('link[rel="canonical"]')
      if (canonicalUrlTag == null) {
        canonicalUrlTag = document.createElement('link')
        canonicalUrlTag.setAttribute('rel', 'canonical')
        tagWasCreated.current = true
      } else {
        tagWasCreated.current = false
      }
      canonicalUrlTag.setAttribute('href', canonicalUrl)
    }
    return () => {
      if (tagWasCreated.current) {
        document.querySelector('link[rel="canonical"]')?.remove()
      }
    }
  }, [canonicalUrl])
}
