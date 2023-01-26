import { useEffect, useState } from 'react'

export async function fetchBlob(url: string): Promise<Blob> {
  const response = await fetch(url)
  return await response.blob()
}

export function releaseResourceUrl(resourceUrl: string) {
  URL.revokeObjectURL(resourceUrl)
}

/**
 * Custom hook for retrieving a resource and assigning it a localhost URL. This is useful for
 * fetching resources from URLs that may expire before the resource renders.
 * @param preSignedURL
 * @returns a localhost URL referencing the prefetched resource
 */
export default function usePreFetchResource(
  preSignedURL?: string,
): string | undefined {
  const [blob, setBlob] = useState<Blob | undefined>(undefined)
  const url = useCreateUrlForData(blob)

  useEffect(() => {
    let isMounted = true
    const getData = async (url: string) => {
      try {
        const blob = await fetchBlob(url)
        if (isMounted) {
          setBlob(blob)
        }
      } catch (e) {
        console.error(
          `Failed to fetch object with presigned URL ${url}. See network log for details`,
        )
      }
    }
    if (preSignedURL) {
      getData(preSignedURL)
    }

    return () => {
      isMounted = false
    }
  }, [preSignedURL])

  return url
}

export function useCreateUrlForData(blob: Blob | null | undefined) {
  const [resourceUrl, setResourceURL] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (blob) {
      const objectUrl = URL.createObjectURL(blob)
      setResourceURL(objectUrl)
    } else {
      setResourceURL(undefined)
    }
  }, [blob])

  useEffect(() => {
    return () => {
      // When we no longer need the object, we release it.
      // See https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
      if (resourceUrl) {
        releaseResourceUrl(resourceUrl)
      }
    }
  }, [resourceUrl])

  return resourceUrl
}
