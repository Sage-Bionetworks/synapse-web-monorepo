import { Collapse } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {
  FRIENDLY_VALUE_NOT_SET,
  VALUE_NOT_SET,
} from '../../../utils/SynapseConstants'
import { ColumnType } from '@sage-bionetworks/synapse-types'
import { FacetColumnResultRange } from '@sage-bionetworks/synapse-types'
import { RadioGroup } from '../RadioGroup'
import { Range, RangeValues } from '../Range'
import { RangeSlider } from '../RangeSlider/RangeSlider'
import { FacetFilterHeader } from './FacetFilterHeader'
import dayjs from 'dayjs'

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
  label: string
  columnType: ColumnType
  onChange: (range: (RadioValuesEnum | number | string | undefined)[]) => void
  collapsed?: boolean
}

export const getRadioValue = (min: string, isAnyValue: boolean) => {
  if (isAnyValue) {
    return RadioValuesEnum.ANY
  } else if (min === VALUE_NOT_SET) {
    return RadioValuesEnum.NOT_SET
  }
  return RadioValuesEnum.RANGE
}

export const RangeFacetFilter: React.FunctionComponent<
  RangeFacetFilterProps
> = ({
  facetResult,
  label,
  columnType,
  onChange,
  collapsed = false,
}: RangeFacetFilterProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed)

  const { columnMin, columnMax, selectedMin, selectedMax } = facetResult // the upper bound of the selected range

  const hasAnyValue = !selectedMin && !selectedMax

  const currentMin = selectedMin || columnMin
  const currentMax = selectedMax || columnMax

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
        label={label}
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
              {columnType === 'INTEGER' && (
                <RangeSlider
                  key="RangeSlider"
                  domain={[columnMin, columnMax]}
                  initialValues={{
                    min: parseInt(currentMin),
                    max: parseInt(currentMax),
                  }}
                  step={1}
                  doUpdateOnApply={true}
                  onChange={(values: RangeValues) =>
                    onChange([values.min, values.max])
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
                    min: selectedMin ?? dayjs(parseInt(columnMin)).toString(),
                    max: selectedMax ?? dayjs(parseInt(columnMax)).toString(),
                  }}
                  type={rangeType}
                  onChange={(values: RangeValues) =>
                    onChange([values.min, values.max])
                  }
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
}
