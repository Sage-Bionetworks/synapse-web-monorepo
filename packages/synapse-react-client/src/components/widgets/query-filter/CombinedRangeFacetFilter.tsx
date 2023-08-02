import { Collapse } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { ColumnType } from '@sage-bionetworks/synapse-types'
import { FacetColumnResultRange } from '@sage-bionetworks/synapse-types'
import { RadioGroup } from '../RadioGroup'
import { Range, RangeValues } from '../Range'
import { FacetFilterHeader } from './FacetFilterHeader'
import { RadioValuesEnum, getRadioValue, options } from './RangeFacetFilter'
import dayjs from 'dayjs'
import RangeSlider from '../RangeSlider/RangeSlider'

export type CombinedRangeFacetFilterProps = {
  facetResults: FacetColumnResultRange[]
  label: string
  columnType: ColumnType
  onChange: (range: (RadioValuesEnum | number | string | undefined)[]) => void
  collapsed?: boolean
}

/**
 * Inclusive range selector across two columns
 * Written for the ELITE portal cohort builder, may have other uses.
 * The following diagram shows how the Range Selector min and max values are used
 * to define the facet range values:
 * 

                                   │     Range Selector     │
                               min ├────────────────────────┤ max
                                   │                        │

                                       Min Column facet     │
Column Min value ◄──────────────────────────────────────────┤  Range Selector max
                                                            │

                                   │   Max Column facet
              Range Selector min   ├─────────────────────────────────────────► Column Max value
                                   │

*/
export const CombinedRangeFacetFilter: React.FunctionComponent<
  CombinedRangeFacetFilterProps
> = ({
  facetResults,
  label,
  columnType,
  onChange,
  collapsed = false,
}: CombinedRangeFacetFilterProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed)
  const {
    columnMin: col1Min,
    // columnMax: col1Max  // not used
    selectedMin: col1SelectedMin,
    selectedMax: col1SelectedMax,
  } = facetResults[0]
  const {
    //columnMin: col2Min,  // not used
    columnMax: col2Max,
    selectedMin: col2SelectedMin,
    selectedMax: col2SelectedMax,
  } = facetResults[1]

  const isAnyValue =
    !col1SelectedMin && !col1SelectedMax && !col2SelectedMin && !col2SelectedMax
  const selectedMin = col2SelectedMin || col1Min
  const selectedMax = col1SelectedMax || col2Max

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
          (col1Min === col2Max ? (
            <label>{col2Max}</label>
          ) : (
            <>
              {columnType === 'INTEGER' && (
                <RangeSlider
                  key="RangeSlider"
                  domain={[col1Min, col2Max]}
                  initialValues={{ min: selectedMin, max: selectedMax }}
                  step={1}
                  doUpdateOnApply={true}
                  onChange={(values: RangeValues) =>
                    onChange([col1Min, values.max, values.min, col2Max])
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
                    min: col2SelectedMin ?? dayjs(parseInt(col1Min)).toString(),
                    max: col1SelectedMax ?? dayjs(parseInt(col2Max)).toString(),
                  }}
                  type={rangeType}
                  onChange={(values: RangeValues) =>
                    onChange([col1Min, values.max, values.min, col2Max])
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
                  onChange={(values: RangeValues) =>
                    onChange([col1Min, values.max, values.min, col2Max])
                  }
                ></Range>
              )}
            </>
          ))}
      </Collapse>
    </div>
  )
}
