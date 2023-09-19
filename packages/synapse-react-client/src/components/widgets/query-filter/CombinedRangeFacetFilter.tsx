import { Collapse, Skeleton } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'
import { ColumnType } from '@sage-bionetworks/synapse-types'
import { FacetColumnResultRange } from '@sage-bionetworks/synapse-types'
import { RadioGroup } from '../RadioGroup'
import { Range, RangeValues } from '../Range'
import { FacetFilterHeader } from './FacetFilterHeader'
import { RadioValuesEnum, getRadioValue, options } from './RangeFacetFilter'
import dayjs from 'dayjs'
import RangeSlider from '../RangeSlider/RangeSlider'
import { useQueryContext } from '../../QueryContext'
import { SynapseConstants } from '../../../utils'
import { useGetQueryResultBundleWithAsyncStatus } from '../../../synapse-queries'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'

export type CombinedRangeFacetFilterProps = {
  facetResults: FacetColumnResultRange[]
  label: string
  columnType: ColumnType
  onChange: (range: (RadioValuesEnum | number | string | undefined)[]) => void
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
export const CombinedRangeFacetFilter: React.FunctionComponent<
  CombinedRangeFacetFilterProps
> = ({
  facetResults,
  label,
  columnType,
  onChange,
}: CombinedRangeFacetFilterProps) => {
  const { getCurrentQueryRequest } = useQueryContext()
  const { getColumnDisplayName } = useQueryVisualizationContext()

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const {
    columnName: col1Name,
    // columnMax: col1Max  // not used
    selectedMin: col1SelectedMin,
    selectedMax: col1SelectedMax,
  } = facetResults[0]
  const {
    columnName: col2Name,
    //columnMin: col2Min,  // not used
    selectedMin: col2SelectedMin,
    selectedMax: col2SelectedMax,
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
  const isAnyValue =
    !col1SelectedMin && !col1SelectedMax && !col2SelectedMin && !col2SelectedMax
  const selectedMin = col2SelectedMin || col1GlobalMin
  const selectedMax = col1SelectedMax || col2GlobalMax

  const rangeType = columnType === 'DOUBLE' ? 'number' : 'date'

  const handleRadioGroupChange = (
    radioValue: RadioValuesEnum,
    onChangeCallback: (
      range: (RadioValuesEnum | number | string | undefined)[],
    ) => void,
  ) => {
    setRadioValue(radioValue)

    if (radioValue !== RadioValuesEnum.RANGE) {
      onChangeCallback([radioValue, radioValue])
    }
  }

  const [radioValue, setRadioValue] = useState(
    getRadioValue(selectedMin, isAnyValue),
  )

  useEffect(() => {
    setRadioValue(getRadioValue(selectedMin, isAnyValue))
  }, [selectedMin, isAnyValue])

  if (isLoadingFacetStats) {
    return <Skeleton variant="rectangular" width="100" />
  }
  return (
    <div>
      <FacetFilterHeader
        isCollapsed={isCollapsed}
        label={getColumnDisplayName(label)}
        onClick={(isCollapsed: boolean) => setIsCollapsed(isCollapsed)}
      ></FacetFilterHeader>
      <Collapse in={!isCollapsed}>
        <RadioGroup
          value={radioValue}
          id="combinedRangeSelector"
          options={options}
          onChange={(radioValue: string) =>
            handleRadioGroupChange(radioValue as RadioValuesEnum, onChange)
          }
        ></RadioGroup>
        {radioValue === RadioValuesEnum.RANGE &&
          (col1GlobalMin === col2GlobalMax ? (
            <label>{col2GlobalMax}</label>
          ) : (
            <>
              {columnType === 'INTEGER' && (
                <RangeSlider
                  key={`RangeSlider-${selectedMin}-${selectedMax}`}
                  domain={[col1GlobalMin, col2GlobalMax]}
                  initialValues={{ min: selectedMin, max: selectedMax }}
                  step={1}
                  onApplyClicked={(values: RangeValues) =>
                    onChange([
                      col1GlobalMin,
                      values.max,
                      values.min,
                      col2GlobalMax,
                    ])
                  }
                >
                  {'>'}
                </RangeSlider>
              )}
              {columnType === 'DATE' && (
                <Range
                  key="Range"
                  initialValues={{
                    // From the backend, selectedMin is a formatted date (like "2021-06-15"), but columnMin is a unix timestamp in millis (like "1624651794856")
                    min:
                      col2SelectedMin ??
                      dayjs(parseInt(col1GlobalMin)).toString(),
                    max:
                      col1SelectedMax ??
                      dayjs(parseInt(col2GlobalMax)).toString(),
                  }}
                  type={rangeType}
                  onApplyClicked={(values: RangeValues) =>
                    onChange([
                      col1GlobalMin,
                      values.max,
                      values.min,
                      col2GlobalMax,
                    ])
                  }
                ></Range>
              )}
              {columnType === 'DOUBLE' && (
                <Range
                  key="Range"
                  initialValues={{
                    min: parseFloat(selectedMin),
                    max: parseFloat(selectedMax),
                  }}
                  type={rangeType}
                  onApplyClicked={(values: RangeValues) =>
                    onChange([
                      col1GlobalMin,
                      values.max,
                      values.min,
                      col2GlobalMax,
                    ])
                  }
                ></Range>
              )}
            </>
          ))}
      </Collapse>
    </div>
  )
}
