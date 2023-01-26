import { Collapse } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import {
  FRIENDLY_VALUE_NOT_SET,
  VALUE_NOT_SET,
} from '../../../utils/SynapseConstants'
import { SelectColumn } from '../../../utils/synapseTypes'
import { FacetColumnResultRange } from '../../../utils/synapseTypes/Table/FacetColumnResult'
import { RadioGroup } from '../RadioGroup'
import { Range, RangeValues } from '../Range'
import { RangeSlider } from '../RangeSlider'
import { FacetFilterHeader } from './FacetFilterHeader'

export enum RadioValuesEnum {
  NOT_SET = 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
  RANGE = 'RANGE',
  ANY = '',
}

export type RangeFacetFilterProps = {
  facetResult: FacetColumnResultRange
  columnModel: SelectColumn
  onChange: (range: (RadioValuesEnum | number | string | undefined)[]) => void
  collapsed?: boolean
}

export type RangeFacetFilterState = {
  facetResult: FacetColumnResultRange
  columnModel: SelectColumn
}

export const RangeFacetFilter: React.FunctionComponent<
  RangeFacetFilterProps
> = ({
  facetResult,
  columnModel,
  onChange,
  collapsed = false,
}: RangeFacetFilterProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed)
  const options = [
    { label: FRIENDLY_VALUE_NOT_SET, value: RadioValuesEnum.NOT_SET },
    { label: 'Any', value: RadioValuesEnum.ANY },
    { label: 'Range', value: RadioValuesEnum.RANGE },
  ]

  let { columnMin, columnMax, selectedMin, selectedMax } = facetResult // the upper bound of the selected range

  const hasAnyValue = !selectedMin && !selectedMax

  selectedMin = selectedMin || columnMin
  selectedMax = selectedMax || columnMax

  const rangeType = columnModel.columnType === 'DOUBLE' ? 'number' : 'date'

  const getRadioValue = (min: string, isAnyValue: boolean) => {
    if (isAnyValue) {
      return RadioValuesEnum.ANY
    } else if (min === VALUE_NOT_SET) {
      return RadioValuesEnum.NOT_SET
    }
    return RadioValuesEnum.RANGE
  }

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
    getRadioValue(selectedMin, hasAnyValue),
  )

  const result = (
    <div>
      <FacetFilterHeader
        isCollapsed={isCollapsed}
        label={columnModel.name}
        onClick={(isCollapsed: boolean) => setIsCollapsed(isCollapsed)}
      ></FacetFilterHeader>
      <Collapse in={!isCollapsed}>
        <RadioGroup
          value={radioValue}
          id="rangeSelector"
          options={options}
          onChange={(radioValue: string) =>
            handleRadioGroupChange(radioValue as RadioValuesEnum, onChange)
          }
        ></RadioGroup>
        {radioValue === RadioValuesEnum.RANGE &&
          (columnMin === columnMax ? (
            <label>{columnMax}</label>
          ) : (
            <>
              {columnModel.columnType === 'INTEGER' && (
                <RangeSlider
                  key="RangeSlider"
                  domain={[columnMin, columnMax]}
                  initialValues={{ min: selectedMin, max: selectedMax }}
                  step={1}
                  doUpdateOnApply={true}
                  onChange={(values: RangeValues) =>
                    onChange([values.min, values.max])
                  }
                >
                  ) {'>'}
                </RangeSlider>
              )}

              {(columnModel.columnType === 'DATE' ||
                columnModel.columnType === 'DOUBLE') && (
                <Range
                  key="Range"
                  initialValues={{
                    min: selectedMin,
                    max: selectedMax,
                  }}
                  type={rangeType}
                  onChange={(values: RangeValues) =>
                    onChange([values.min, values.max])
                  }
                ></Range>
              )}
            </>
          ))}
      </Collapse>
    </div>
  )
  return result
}
