import { useMemo } from 'react'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

type RestUsage = {
  viewCount: number
  downloadCount: number
  citationCount: number
}

export const getDataCiteUsageQueryKey = (doi?: string) =>
  ['datacite-usage', doi] as const

async function fetchDataCiteUsage(
  signal: AbortSignal,
  doi: string,
): Promise<RestUsage | null> {
  const encoded = encodeURIComponent(doi)
  const url = `https://api.datacite.org/dois/${encoded}`
  const r = await fetch(url, { signal })
  if (!r.ok) throw new Error(`DataCite REST ${r.status}`)
  const json = await r.json()
  const a = json?.data?.attributes
  if (!a) return null
  return {
    viewCount: a.viewCount ?? 0,
    downloadCount: a.downloadCount ?? 0,
    citationCount: a.citationCount ?? 0,
  }
}

export function useDataCiteUsage(
  doi?: string,
  options?: Omit<
    UseQueryOptions<
      RestUsage | null,
      Error,
      RestUsage | null,
      ReturnType<typeof getDataCiteUsageQueryKey>
    >,
    'queryKey' | 'queryFn' | 'enabled'
  >,
) {
  const key = useMemo(() => getDataCiteUsageQueryKey(doi), [doi])

  return useQuery({
    queryKey: key,
    // use an AbortController-friendly queryFn
    queryFn: ({ signal }) => {
      if (!doi) return Promise.resolve(null)
      return fetchDataCiteUsage(signal, doi)
    },
    enabled: !!doi, // don’t run until we have a DOI
    staleTime: 5 * 60 * 1000, // 5 minutes fresh
    gcTime: 30 * 60 * 1000, // keep in cache for 30 minutes
    retry: 2, // a couple of retries on transient errors
    refetchOnWindowFocus: false,
    ...options,
  })
}
