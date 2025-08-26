import { useMemo } from 'react'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

type RestUsage = {
  citationCount: number
  citations: CitingWork[]
}

export type CitingWork = {
  id: string // DOI in bare form (e.g., 10.1234/abcd)
  doi: string
  title?: string
  publisher?: string
  publicationYear?: number
  containerTitle?: string
}

export const maxCitationCount = 500

export const getDataCiteUsageQueryKey = (doi?: string) =>
  ['datacite-usage', doi] as const

function toBareDoi(idOrUrl: string): string {
  return idOrUrl.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '')
}

async function fetchCitationsViaGraphQL(signal: AbortSignal, doi: string) {
  const body = JSON.stringify({
    query: `
      query($id: ID!) {
        work(id: $id) {
          citations(first: ${maxCitationCount}) {
            nodes {
              id
              titles { title }
              publisher { name }
              publicationYear
              
              # publication (container) info
              container {
                title
              }
            }
          }
        }
      }
    `,
    variables: { id: `https://doi.org/${doi}` },
  })

  const r = await fetch('https://api.datacite.org/graphql', {
    method: 'POST',
    signal,
    headers: { 'content-type': 'application/json', accept: 'application/json' },
    body,
  })
  if (!r.ok) throw new Error(`DataCite GraphQL ${r.status}`)
  const json = await r.json()
  const nodes = json?.data?.work?.citations?.nodes ?? []
  return nodes.map((n: any) => {
    const bare = toBareDoi(n?.id ?? '')
    const title =
      Array.isArray(n?.titles) && n.titles.length
        ? n.titles[0]?.title.replaceAll('?', '') // many extended characters are returned as '?'s from DataCite
        : // for example, see https://commons.datacite.org/doi.org/10.1101%2F205807
          undefined
    const publisher = n?.publisher?.name ?? undefined
    const publicationYear = n?.publicationYear ?? undefined
    const containerTitle = n?.container?.title ?? undefined

    return {
      id: bare,
      doi: bare,
      title,
      publisher,
      publicationYear,
      containerTitle,
    } as CitingWork
  })
}

async function fetchDataCiteUsage(
  signal: AbortSignal,
  doi: string,
): Promise<RestUsage | null> {
  const citations: CitingWork[] = await fetchCitationsViaGraphQL(signal, doi)
  return {
    citationCount: citations.length ?? 0,
    citations,
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
    queryFn: ({ signal }) => {
      if (!doi) return Promise.resolve(null)
      return fetchDataCiteUsage(signal, doi)
    },
    enabled: !!doi,
    ...options,
  })
}
