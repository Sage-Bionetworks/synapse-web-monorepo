import { useMutation, useQueryClient } from '@tanstack/react-query'

interface UseCreateShortUrlOptions {
  shortIoPublicApiKey?: string
  domain: string
  onSuccess?: (shortUrl: string) => void
  onError?: (error: Error) => void
}

export function useCreateShortUrl({
  shortIoPublicApiKey,
  domain,
  onSuccess,
  onError,
}: UseCreateShortUrlOptions) {
  const queryClient = useQueryClient()
  const currentUrl = window.location.href
  // Create a unique cache key based on the current URL to store the short URL
  const cacheKey = ['shortUrl', currentUrl]

  // Check if we have a cached short URL
  // This prevents regenerating the same short URL multiple times
  const cachedUrl = queryClient.getQueryData<string>(cacheKey)

  return useMutation({
    mutationFn: async () => {
      if (cachedUrl) {
        return cachedUrl
      }

      if (!shortIoPublicApiKey) {
        return window.location.href
      } else {
        const response = await fetch('https://api.short.io/links/public', {
          method: 'POST',
          headers: {
            Authorization: shortIoPublicApiKey,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            originalURL: window.location.href,
            domain: domain,
          }),
        })
        if (!response.ok) {
          const responseText = await response.text()
          throw new Error(responseText)
        }
        const jsonResponse = await response.json()
        const shortUrl = jsonResponse.shortURL
        // Store the short URL in the React Query cache so we can reuse it
        queryClient.setQueryData(cacheKey, shortUrl)
        return shortUrl
      }
    },
    onSuccess,
    onError,
  })
}
