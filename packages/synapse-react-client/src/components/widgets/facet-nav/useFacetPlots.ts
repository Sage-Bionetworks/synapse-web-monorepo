import {
  FacetColumnRequest,
  FacetColumnResult,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { isSingleNotSetValue } from '../../../utils/functions/queryUtils'
import { useMemo, useCallback } from 'react'
import { FacetNavPanelProps } from './FacetNavPanel'
import { useQueryContext } from '../../QueryContext'
import { applyChangesToValuesColumn } from '../query-filter/FacetFilterControls'
import { useSuspenseQuery } from '@tanstack/react-query'

// Custom hook for generating properties for FacetNavPanel components with filter controls based on the given facets
export default function useFacetPlots(
  facetsToPlot: string[],
): Pick<
  FacetNavPanelProps,
  'applyChangesToFacetFilter' | 'applyChangesToGraphSlice' | 'facetToPlot'
>[] {
  const {
    getCurrentQueryRequest,
    executeQueryRequest,
    queryMetadataQueryOptions,
  } = useQueryContext()

  const { data: queryMetadata } = useSuspenseQuery(queryMetadataQueryOptions)

  const lastQueryRequest = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )
  const facets = useMemo(
    () => getFacets(queryMetadata, facetsToPlot),
    [queryMetadata, facetsToPlot],
  )

  const applyChangesFromQueryFilter = useCallback(
    (facets: FacetColumnRequest[]) => {
      executeQueryRequest(
        lastQueryRequest => {
          lastQueryRequest.query.selectedFacets = facets
          lastQueryRequest.query.offset = 0
          return lastQueryRequest
        },
        { debounce: true },
      )
    },
    [executeQueryRequest],
  )

  const facetNavPanelProps = useMemo(
    () =>
      facets.map(facet => {
        return {
          facetToPlot: facet as FacetColumnResultValues,

          applyChangesToFacetFilter: applyChangesFromQueryFilter,

          applyChangesToGraphSlice: (
            facet: FacetColumnResultValues,
            value: FacetColumnResultValueCount | undefined,
            isSelected: boolean,
          ) =>
            applyChangesToValuesColumn(
              lastQueryRequest,
              facet,
              applyChangesFromQueryFilter,
              value?.value,
              isSelected,
            ),
        }
      }),
    [facets, applyChangesFromQueryFilter, lastQueryRequest],
  )
  return facetNavPanelProps
}

export function getFacets(
  data: QueryResultBundle | undefined,
  facetsToPlot?: string[],
): FacetColumnResult[] {
  const result =
    data?.facets?.filter(item => {
      const isFacetToPlot =
        item.facetType === 'enumeration' &&
        (!facetsToPlot?.length || facetsToPlot.indexOf(item.columnName) > -1)
      // PORTALS-1993: only plot if the facet has count data
      return (
        isFacetToPlot &&
        item.facetValues.length > 0 &&
        !isSingleNotSetValue(item)
      )
    }) ?? []
  return result
}
