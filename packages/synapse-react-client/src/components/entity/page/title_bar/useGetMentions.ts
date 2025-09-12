import { useMemo } from 'react'
import { skipToken, useQuery, UseQueryOptions } from '@tanstack/react-query'
import {
  COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  ColumnSingleValueFilterOperator,
  Query,
} from '@sage-bionetworks/synapse-types'
import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import { CitingWork } from './useDataCiteUsage'
export type EuropePMCAuthor = {
  fullName?: string
  firstName?: string
  lastName?: string
}

export type EuropePMCAuthorList = {
  author?: EuropePMCAuthor[]
}

export type EuropePMCResult = {
  id?: string
  pmid?: string
  pmcid?: string
  doi?: string
  title?: string
  journalTitle?: string
  pubYear?: string
  authorList?: EuropePMCAuthorList
}

export type EuropePMCResponse = {
  resultList: {
    result: EuropePMCResult[]
  }
}

export const getMentionsQueryKey = (entityId: string) =>
  ['europepmc', entityId] as const

export async function fetchMetadataForPMCIDs(
  signal: AbortSignal,
  pmcids: string[],
): Promise<CitingWork[]> {
  if (pmcids.length === 0) return []
  const query = pmcids
    .map(id => `PMCID:${id.toUpperCase().startsWith('PMC') ? id : `PMC${id}`}`)
    .join(' OR ')

  const url = new URL('https://www.ebi.ac.uk/europepmc/webservices/rest/search')
  url.searchParams.set('query', query)
  url.searchParams.set('format', 'json')
  url.searchParams.set('pageSize', String(pmcids.length))

  const resp = await fetch(url.toString(), {
    headers: { Accept: 'application/json' },
    signal,
  })
  if (!resp.ok)
    throw new Error(`Europe PMC error ${resp.status}: ${await resp.text()}`)

  const json: {
    resultList: { result: EuropePMCResult[] }
  } = (await resp.json()) as EuropePMCResponse
  return json.resultList.result.map(
    r =>
      ({
        id: r.pmcid,
        title: r.title ?? '(Untitled)',
        doi: r.doi,
        publisher: r.journalTitle,
        publicationYear: r.pubYear ? Number(r.pubYear) : undefined,
        // authors: r.authorList?.author?.map((a: EuropePMCAuthor) => a.fullName ?? `${a.firstName ?? ""} ${a.lastName ?? ""}`.trim()) ?? [],
      } as CitingWork),
  )
}

export function useGetMentions(
  entityId: string,
  options?: Omit<UseQueryOptions<CitingWork[], Error>, 'queryKey' | 'queryFn'>,
) {
  const query: Query = {
    sql: 'select pmcid from syn66047339',
    additionalFilters: [
      {
        concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'synid',
        operator: ColumnSingleValueFilterOperator.EQUAL,
        values: [entityId],
      },
    ],
  }

  const { data } = useGetQueryResultBundleWithAsyncStatus({
    entityId: entityId,
    query,
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })

  const rows = data?.responseBody?.queryResult?.queryResults?.rows
  const pcmids = rows
    ?.map(row => {
      const pmcid = row.values[0]
      // remove "pmc:" prefix if present
      return pmcid?.toString().replace(/^pmc:/i, '')
    })
    .filter(pmcid => pmcid != null) as string[]
  const key = useMemo(() => getMentionsQueryKey(entityId), [entityId])
  return useQuery({
    ...options,
    queryKey: key,
    queryFn: pcmids
      ? ({ signal }) => {
          return fetchMetadataForPMCIDs(signal, pcmids)
        }
      : skipToken,
  })
}
