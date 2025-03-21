import {
  FacetColumnRequest,
  FacetColumnResult,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { useCallback, useMemo } from 'react'
import { isSingleNotSetValue } from '../../../utils/functions/queryUtils'
import { useQueryContext } from '../../QueryContext'
import { useSuspenseGetQueryMetadata } from '../../QueryWrapper/useGetQueryMetadata'
import { applyChangesToValuesColumn } from '../query-filter/FacetFilterControls'
import { FacetNavPanelProps } from './FacetNavPanel'

// Custom hook for generating properties for FacetNavPanel components with filter controls based on the given facets
export default function useFacetPlots(
  facetsToPlot: string[],
): Pick<
  FacetNavPanelProps,
  'applyChangesToFacetFilter' | 'applyChangesToGraphSlice' | 'facetToPlot'
>[] {
  const { getCurrentQueryRequest, executeQueryRequest } = useQueryContext()

  const { data: queryMetadata } = useSuspenseGetQueryMetadata()

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
