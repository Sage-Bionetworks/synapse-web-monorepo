import { useEffect, useState } from 'react'

/**
 * Fetches a URL with credentials and returns a blob object URL.
 * The object URL is revoked when the hook unmounts or the URL changes.
 */
export function useFetchBlobUrl(url: string | undefined): {
  blobUrl: string | undefined
  error: Error | undefined
} {
  const [blobUrl, setBlobUrl] = useState<string | undefined>()
  const [error, setError] = useState<Error | undefined>()

  useEffect(() => {
    if (!url) return

    const controller = new AbortController()
    let objectUrl: string | undefined

    fetch(url, { credentials: 'include', signal: controller.signal })
      .then(r => r.blob())
      .then(blob => {
        objectUrl = URL.createObjectURL(blob)
        setBlobUrl(objectUrl)
      })
      .catch(e => {
        if (e instanceof Error && e.name === 'AbortError') return
        setError(e instanceof Error ? e : new Error(String(e)))
      })

    return () => {
      controller.abort()
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [url])

  return { blobUrl, error }
}
