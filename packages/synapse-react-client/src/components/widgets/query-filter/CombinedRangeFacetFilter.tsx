import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import { SynapseConstants } from '@/utils'
import { VALUE_NOT_SET } from '@/utils/SynapseConstants'
import { Skeleton } from '@mui/material'
import {
  ColumnType,
  FacetColumnResultRange,
} from '@sage-bionetworks/synapse-types'
import { isNumber } from 'lodash-es'
import { useMemo } from 'react'
import { useQueryContext } from '../../QueryContext'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { RangeValues } from '../Range'
import { RangeFacetFilterUI } from './RangeFacetFilterUI'

export type CombinedRangeFacetFilterProps = {
  facetResults: FacetColumnResultRange[]
  label: string
  columnType: ColumnType
}

/**
 * Inclusive range selector across two columns
 * Written for the ELITE portal cohort builder, may have other uses.
 * The following diagram shows how the Range Selector min and max values are used
 * to define the facet range values:
 * 

                            Range Selector      
                  min ├────────────────────────┤ max
                                                
                          Min Column facet      
 Column Min value ◄────────────────────────────┤  Range Selector max
                                                
                          Max Column facet
 Range Selector min   ├────────────────────────────► Column Max value
                       

*/
export function CombinedRangeFacetFilter({
  facetResults,
  label,
  columnType,
}: CombinedRangeFacetFilterProps) {
  const { getCurrentQueryRequest, setRangeFacetValue, removeSelectedFacet } =
    useQueryContext()
  const { getColumnDisplayName } = useQueryVisualizationContext()

  const {
    columnName: col1Name,
    // columnMax: col1Max  // not used
    // selectedMin: col1SelectedMin // not used
    selectedMax: col1SelectedMax,
  } = facetResults[0]
  const {
    columnName: col2Name,
    //columnMin: col2Min,  // not used
    selectedMin: col2SelectedMin,
    // selectedMax: col2SelectedMax, // not used
  } = facetResults[1]

  // Also query for the facet columns full range (without any selected facets), to set the range selector range
  const queryBundleRequest = useMemo(() => {
    const requestCopy = getCurrentQueryRequest()
    requestCopy.partMask = SynapseConstants.BUNDLE_MASK_QUERY_FACETS
    const { selectedFacets } = requestCopy.query
    requestCopy.query.selectedFacets = selectedFacets
      ? selectedFacets.filter(
          facetRequest =>
            facetRequest.columnName !== col1Name &&
            facetRequest.columnName !== col2Name,
        )
      : []
    return requestCopy
  }, [col1Name, col2Name, getCurrentQueryRequest])

  const { data: queryResultFacetResponse, isLoading: isLoadingFacetStats } =
    useGetQueryResultBundleWithAsyncStatus(queryBundleRequest)

  const fullFacetStats = queryResultFacetResponse?.responseBody?.facets

  const col1Facet = fullFacetStats?.find(facet => facet.columnName === col1Name)
  const col2Facet = fullFacetStats?.find(facet => facet.columnName === col2Name)
  const col1GlobalMin = (col1Facet as FacetColumnResultRange)?.columnMin
  const col2GlobalMax = (col2Facet as FacetColumnResultRange)?.columnMax
  const selectedMin = col2SelectedMin
  const selectedMax = col1SelectedMax

  if (isLoadingFacetStats || !col1Facet || !col2Facet) {
    return <Skeleton variant="rectangular" width="100" />
  }
  return (
    <RangeFacetFilterUI
      label={getColumnDisplayName(label)}
      facetResult={{
        columnMin: col1GlobalMin,
        columnMax: col2GlobalMax,
        selectedMin: selectedMin,
        selectedMax: selectedMax,
      }}
      columnType={columnType}
      onRangeValueSelected={(values: RangeValues) => {
        setRangeFacetValue(
          col1Facet,
          col1GlobalMin,
          isNumber(values.max) ? String(values.max) : values.max,
          { noCommit: true },
        )

        setRangeFacetValue(
          col2Facet,
          isNumber(values.min) ? String(values.min) : values.min,
          col2GlobalMax,
        )
      }}
      onNotSetSelected={() => {
        setRangeFacetValue(col1Facet, VALUE_NOT_SET, VALUE_NOT_SET)
        setRangeFacetValue(col2Facet, VALUE_NOT_SET, VALUE_NOT_SET)
      }}
      onAnySelected={() => {
        removeSelectedFacet(col1Facet)
        removeSelectedFacet(col2Facet)
      }}
    />
  )
}
