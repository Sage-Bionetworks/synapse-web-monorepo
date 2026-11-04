import {
  EnumerationFacet,
  getEnumerationFacets,
} from '@/utils/functions/enumerationFacet'
import { isSingleNotSetValue } from '@/utils/functions/queryUtils'
import {
  FacetColumnRequest,
  FacetColumnResultValueCount,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { useCallback, useMemo } from 'react'
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
          facetToPlot: facet,

          applyChangesToFacetFilter: applyChangesFromQueryFilter,

          applyChangesToGraphSlice: (
            facet: EnumerationFacet,
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
): EnumerationFacet[] {
  const result = getEnumerationFacets(
    data?.facets?.filter(facet => !isSingleNotSetValue(facet)),
  ).filter(
    facet =>
      (!facetsToPlot?.length || facetsToPlot.includes(facet.columnName)) &&
      // PORTALS-1993: only plot if the facet has count data
      facet.facetValues.length > 0,
  )
  if (facetsToPlot?.length) {
    result.sort(
      (a, b) =>
        facetsToPlot.indexOf(a.columnName) - facetsToPlot.indexOf(b.columnName),
    )
  }
  return result
}
