import {
  FILTER_GROUP_CONCRETE_TYPE_VALUE,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useQueryContext } from '../QueryContext'
import { useTableQueryUseQueryOptions } from '../QueryWrapper/TableQueryUseQueryOptions'

/**
 * Facet + column-model metadata for the QB property picker and pill values,
 * fetched against the *base* query state with any QB-managed `FilterGroup`
 * entries stripped out of `additionalFilters`.
 *
 * Rationale: Synapse's facet-values computation applies `additionalFilters`
 * globally (unlike `selectedFacets`, which are self-excluded per facet). Once
 * the QB commits a `FilterGroup`, the current query's facet results collapse
 * to only the values that pass the QB filter — leaving the user unable to
 * add or edit values that were filtered out. Firing a separate metadata
 * query with the QB's own `FilterGroup` removed gives the QB stable
 * dropdowns while still honoring any non-QB filters and `selectedFacets`.
 */
export function useQBFacetSourceMetadata() {
  const { currentQueryRequest } = useQueryContext()

  const strippedRequest: QueryBundleRequest = useMemo(() => {
    const existingFilters = currentQueryRequest.query.additionalFilters ?? []
    const nonQbFilters = existingFilters.filter(
      f => f.concreteType !== FILTER_GROUP_CONCRETE_TYPE_VALUE,
    )
    return {
      ...currentQueryRequest,
      query: {
        ...currentQueryRequest.query,
        additionalFilters: nonQbFilters.length > 0 ? nonQbFilters : undefined,
      },
    } as QueryBundleRequest
  }, [currentQueryRequest])

  const { queryMetadataQueryOptions } =
    useTableQueryUseQueryOptions(strippedRequest)

  const { data } = useSuspenseQuery(queryMetadataQueryOptions)

  return useMemo(
    () => ({
      columnModels: data?.columnModels ?? [],
      facetResults: data?.facets ?? [],
    }),
    [data],
  )
}
