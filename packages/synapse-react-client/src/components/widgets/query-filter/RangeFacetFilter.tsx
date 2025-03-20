import { FacetColumnResultRange } from '@sage-bionetworks/synapse-types'
import { isNumber } from 'lodash-es'
import { useMemo } from 'react'
import { getCorrespondingColumnForFacet } from '../../../utils/functions/queryUtils'
import {
  FRIENDLY_VALUE_NOT_SET,
  VALUE_NOT_SET,
} from '../../../utils/SynapseConstants'
import { useQueryContext } from '../../QueryContext'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { useSuspenseGetQueryMetadata } from '../../QueryWrapper/useGetQueryMetadata'
import { RangeValues } from '../Range'
import { RangeFacetFilterUI } from './RangeFacetFilterUI'

export enum RadioValuesEnum {
  NOT_SET = 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
  RANGE = 'RANGE',
  ANY = '',
}
export const options = [
  { label: FRIENDLY_VALUE_NOT_SET, value: RadioValuesEnum.NOT_SET },
  { label: 'Any', value: RadioValuesEnum.ANY },
  { label: 'Range', value: RadioValuesEnum.RANGE },
]
export type RangeFacetFilterProps = {
  facetResult: FacetColumnResultRange
  hideCollapsible?: boolean
}

export function RangeFacetFilter(props: RangeFacetFilterProps) {
  const { facetResult, hideCollapsible = false } = props
  const { setRangeFacetValue, removeSelectedFacet, getCurrentQueryRequest } =
    useQueryContext()

  const { data: queryMetadata } = useSuspenseGetQueryMetadata()

  const columnModel = queryMetadata.columnModels
    ? getCorrespondingColumnForFacet(facetResult, queryMetadata.columnModels)
    : undefined

  const { getColumnDisplayName } = useQueryVisualizationContext()

  const lastQueryRequest = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )

  if (!columnModel) {
    return <></>
  }

  return (
    <RangeFacetFilterUI
      label={getColumnDisplayName(facetResult.columnName, facetResult.jsonPath)}
      facetResult={facetResult}
      columnType={columnModel.columnType}
      hideCollapsible={hideCollapsible}
      onRangeValueSelected={(values: RangeValues) => {
        setRangeFacetValue(
          facetResult,
          isNumber(values.min) ? String(values.min) : values.min,
          isNumber(values.max) ? String(values.max) : values.max,
        )
      }}
      onNotSetSelected={() => {
        setRangeFacetValue(facetResult, VALUE_NOT_SET, VALUE_NOT_SET)
      }}
      onAnySelected={() => {
        const selectedFacet = lastQueryRequest.query.selectedFacets?.find(
          selectedFacet =>
            selectedFacet.columnName === facetResult.columnName &&
            selectedFacet.jsonPath === facetResult.jsonPath,
        )
        if (selectedFacet) {
          removeSelectedFacet(selectedFacet)
        }
      }}
    />
  )
}
