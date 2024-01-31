import {
  FacetColumnRequest,
  FacetColumnResult,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { isSingleNotSetValue } from '../../../utils/functions/queryUtils'
import { tableQueryDataAtom } from '../../QueryWrapper/QueryWrapper'
import { useAtomValue } from 'jotai'
import { useMemo, useEffect, useCallback } from 'react'
import { UniqueFacetIdentifier } from '../../../utils/types/UniqueFacetIdentifier'
import { FacetNavPanelProps } from './FacetNavPanel'
import FacetPlotsCard from '../../FeaturedDataTabs/FacetPlotsCard'
import { useQueryContext } from '../../QueryContext'
import { applyChangesToValuesColumn } from '../query-filter/FacetFilterControls'

export default function useFacetPlots(
  facetsToPlot: string[],
): Pick<
  FacetNavPanelProps,
  'applyChangesToFacetFilter' | 'applyChangesToGraphSlice' | 'facetToPlot'
>[] {
  const data = useAtomValue(tableQueryDataAtom)
  const { getCurrentQueryRequest, executeQueryRequest, error } =
    useQueryContext()

  const lastQueryRequest = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )
  const facets = useMemo(
    () => getFacets(data, facetsToPlot),
    [data, facetsToPlot],
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
    // FIXME: For some reason, lastQueryRequest causes this to constantly re-run
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
