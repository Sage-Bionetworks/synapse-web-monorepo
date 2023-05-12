import React from 'react'
import { RangeValues } from './Range'
import { useState } from 'react'
import {
  Box,
  Button,
  Slider,
  SliderValueLabelProps,
  Tooltip,
  Typography,
} from '@mui/material'

export type RangeSliderProps = React.PropsWithChildren<{
  domain: string[]
  initialValues: RangeValues
  step: number
  doUpdateOnApply?: boolean
  onChange: (values: RangeValues) => void
}>

function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  )
}

function getInitialValues(initialValues: RangeValues, domain: string[]) {
  const result = [
    initialValues.min ? Number(initialValues.min) : Number(domain[0]),
    initialValues.max ? Number(initialValues.max) : Number(domain[1]),
  ]
  return result
}

export function RangeSlider(props: RangeSliderProps) {
  const { doUpdateOnApply = true, onChange, step } = props
  const stringArrToNumArr = (inputArr: string[]) =>
    inputArr.map(value => Number(value))

  const [values, setValues] = useState<number[]>(() =>
    getInitialValues(props.initialValues, props.domain),
  )

  const numDomain = stringArrToNumArr(props.domain)

  const handleSliderChange = (values: readonly number[]) => {
    setValues([...values])
    if (!doUpdateOnApply && onChange) {
      onChange({ min: values[0], max: values[1] })
    }
  }

  return (
    <Box>
      <Typography variant="smallText1">
        {values[0]} - {values[1]}
      </Typography>
      <Box display="flex" gap={3}>
        <Slider
          marks={[
            { value: numDomain[0], label: props.domain[0] },
            { value: numDomain[1], label: props.domain[1] },
          ]}
          min={numDomain[0]}
          max={numDomain[1]}
          value={values}
          onChange={(_, newValues) => handleSliderChange(newValues as number[])}
          step={step}
          valueLabelDisplay="auto"
          slots={{
            valueLabel: ValueLabelComponent,
          }}
        />
        {doUpdateOnApply && (
          <Box>
            <Button
              size="small"
              variant="contained"
              onClick={() => props.onChange({ min: values[0], max: values[1] })}
            >
              Apply
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default RangeSlider
