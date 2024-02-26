import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

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
  const { data: blob, error } = useQuery({
    queryKey: ['usePreFetchResource', preSignedURL],
    queryFn: () => fetchBlob(preSignedURL!),
    enabled: !!preSignedURL,
    // The URL may expire, so the fetched item should never be marked as 'stale'; a refetch may not work.
    staleTime: Infinity,
  })

  useEffect(() => {
    if (error) {
      console.error(
        `Failed to fetch object with presigned URL ${preSignedURL}. See network log for details`,
      )
    }
  }, [error, preSignedURL])

  // While the retrieved data is cached by react-query, the object created by URL.createObjectURL is not. More specifically,
  // the stored object is different for each instance of this hook, so when one instance tears down and deletes its object,
  // other instances of the hook are not affected.
  // This uses more memory than necessary in cases where the same object is fetched multiple times, but it's a tradeoff
  // for simple cache and resource management.
  return useCreateUrlForData(blob)
}

/**
 * Uses URL.createObjectURL to create a URL for the given blob. When this hook unmounts, the URL is released.
 * @param blob
 */
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
