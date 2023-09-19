import { Collapse } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
  FRIENDLY_VALUE_NOT_SET,
  VALUE_NOT_SET,
} from '../../../utils/SynapseConstants'
import { FacetColumnResultRange } from '@sage-bionetworks/synapse-types'
import { RadioGroup } from '../RadioGroup'
import { Range, RangeValues } from '../Range'
import RangeSlider from '../RangeSlider/RangeSlider'
import { FacetFilterHeader } from './FacetFilterHeader'
import dayjs from 'dayjs'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { useAtomValue } from 'jotai'
import { tableQueryDataAtom } from '../../QueryWrapper/QueryWrapper'
import { getCorrespondingColumnForFacet } from '../../../utils/functions/queryUtils'
import { useQueryContext } from '../../QueryContext'
import { isNumber } from 'lodash-es'

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

export const getRadioValue = (min: string, isAnyValue: boolean) => {
  if (isAnyValue) {
    return RadioValuesEnum.ANY
  } else if (min === VALUE_NOT_SET) {
    return RadioValuesEnum.NOT_SET
  }
  return RadioValuesEnum.RANGE
}

export function RangeFacetFilter(props: RangeFacetFilterProps) {
  const { facetResult, hideCollapsible = false } = props
  const data = useAtomValue(tableQueryDataAtom)
  const { setRangeFacetValue, removeSelectedFacet, getCurrentQueryRequest } =
    useQueryContext()
  const columnModel = data?.columnModels
    ? getCorrespondingColumnForFacet(facetResult, data.columnModels)
    : undefined

  const columnType = columnModel?.columnType
  const { getColumnDisplayName } = useQueryVisualizationContext()
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const { columnMin, columnMax, selectedMin, selectedMax } = facetResult // the upper bound of the selected range

  const hasAnyValue = !selectedMin && !selectedMax

  const currentMin = selectedMin || columnMin
  const currentMax = selectedMax || columnMax

  const rangeType = columnType === 'DOUBLE' ? 'number' : 'date'

  const handleRadioGroupChange = (radioValue: RadioValuesEnum) => {
    setRadioValue(radioValue)

    switch (radioValue) {
      case RadioValuesEnum.RANGE:
        // The range facet value will update when the user clicks the apply button
        break
      case RadioValuesEnum.NOT_SET:
        setRangeFacetValue(facetResult, radioValue, radioValue)
        break
      case RadioValuesEnum.ANY: {
        const selectedFacet =
          getCurrentQueryRequest().query.selectedFacets?.find(
            selectedFacet =>
              selectedFacet.columnName === facetResult.columnName &&
              selectedFacet.jsonPath === facetResult.jsonPath,
          )
        if (selectedFacet) {
          removeSelectedFacet(selectedFacet)
        }

        break
      }
    }
  }

  useEffect(() => {
    setRadioValue(getRadioValue(currentMin, hasAnyValue))
  }, [currentMin, hasAnyValue])

  const [radioValue, setRadioValue] = useState(
    getRadioValue(currentMin, hasAnyValue),
  )
  return (
    <div>
      <FacetFilterHeader
        isCollapsed={isCollapsed}
        label={getColumnDisplayName(
          facetResult.columnName,
          facetResult.jsonPath,
        )}
        onClick={(isCollapsed: boolean) => setIsCollapsed(isCollapsed)}
        hideCollapsible={hideCollapsible}
      />
      <Collapse in={!isCollapsed}>
        <RadioGroup
          value={radioValue}
          id="rangeSelector"
          options={options}
          onChange={(radioValue: string) =>
            handleRadioGroupChange(radioValue as RadioValuesEnum)
          }
        ></RadioGroup>
        {radioValue === RadioValuesEnum.RANGE &&
          (columnMin === columnMax ? (
            <label>{columnMax}</label>
          ) : (
            <>
              {columnType === 'INTEGER' && (
                <RangeSlider
                  key="RangeSlider"
                  domain={[columnMin, columnMax]}
                  initialValues={{
                    min: parseInt(currentMin),
                    max: parseInt(currentMax),
                  }}
                  step={1}
                  onApplyClicked={(values: RangeValues) => {
                    setRangeFacetValue(
                      facetResult,
                      isNumber(values.min) ? String(values.min) : values.min,
                      isNumber(values.max) ? String(values.max) : values.max,
                    )
                  }}
                >
                  {'>'}
                </RangeSlider>
              )}

              {columnType === 'DATE' && (
                <Range
                  key="Range"
                  initialValues={{
                    // From the backend, selectedMin is a formatted date (like "2021-06-15"), but columnMin is a unix timestamp in millis (like "1624651794856")
                    min: selectedMin ?? dayjs(parseInt(columnMin)).toString(),
                    max: selectedMax ?? dayjs(parseInt(columnMax)).toString(),
                  }}
                  type={rangeType}
                  onApplyClicked={(values: RangeValues) => {
                    setRangeFacetValue(
                      facetResult,
                      isNumber(values.min) ? String(values.min) : values.min,
                      isNumber(values.max) ? String(values.max) : values.max,
                    )
                  }}
                ></Range>
              )}
              {columnType === 'DOUBLE' && (
                <Range
                  key="Range"
                  initialValues={{
                    min: parseFloat(currentMin),
                    max: parseFloat(currentMax),
                  }}
                  type={rangeType}
                  onApplyClicked={(values: RangeValues) =>
                    setRangeFacetValue(
                      facetResult,
                      isNumber(values.min) ? String(values.min) : values.min,
                      isNumber(values.max) ? String(values.max) : values.max,
                    )
                  }
                ></Range>
              )}
            </>
          ))}
      </Collapse>
    </div>
  )
}
