import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { BUNDLE_MASK_COMBINED_SQL } from '@/utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { UseQueryResult } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useQueryContext } from '../QueryContext'
import { qbNodeToApiFilter } from './queryBuilderTranslation'
import { QBGroup } from './QueryBuilderTypes'

/**
 * Ask the backend to produce the effective SQL for a given QB tree by firing a
 * `QueryBundleRequest` with `BUNDLE_MASK_COMBINED_SQL` and the tree translated
 * into an `additionalFilters` `FilterGroup`. The QB does not otherwise drive
 * the outgoing query in V1 — this hook exists purely to power the SQL preview
 * tab in the summary bar.
 */
export function useQBCombinedSql(
  tree: QBGroup | null,
): UseQueryResult<string | undefined> {
  const { currentQueryRequest } = useQueryContext()

  const request: QueryBundleRequest = useMemo(() => {
    const translated = tree ? qbNodeToApiFilter(tree) : null
    // Reuse the current query's SQL + entity so the backend combines the QB
    // filters against the same base view, but ask only for combinedSql.
    return {
      ...currentQueryRequest,
      partMask: BUNDLE_MASK_COMBINED_SQL,
      query: {
        ...currentQueryRequest.query,
        additionalFilters: translated ? [translated] : undefined,
        // combinedSql is unaffected by paging/sort, so drop them to keep the
        // cache key stable across scroll and re-sort.
        offset: undefined,
        limit: undefined,
        sort: undefined,
        selectedFacets: undefined,
      },
    }
  }, [currentQueryRequest, tree])

  return useGetQueryResultBundle(request, {
    select: bundle => bundle.combinedSql,
  })
}
