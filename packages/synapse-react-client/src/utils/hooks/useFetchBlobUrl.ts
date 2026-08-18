import { useQuery } from '@tanstack/react-query'
import { useCreateUrlForData } from './usePreFetchResource'

/**
 * Fetches a URL with credentials and returns a blob object URL.
 * The object URL is revoked when the hook unmounts or the URL changes.
 */
export function useFetchBlobUrl(url: string | undefined): {
  blobUrl: string | undefined
  error: Error | undefined
} {
  const { data: blob, error } = useQuery({
    queryKey: ['useFetchBlobUrl', url],
    queryFn: async () => {
      const response = await fetch(url!, { credentials: 'include' })
      return response.blob()
    },
    enabled: !!url,
    // Fetched blobs should not be refetched automatically since the URL may expire.
    staleTime: Infinity,
  })

  const blobUrl = useCreateUrlForData(blob)

  return {
    blobUrl,
    error:
      error instanceof Error
        ? error
        : error != null
          ? new Error(String(error))
          : undefined,
  }
}
