import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Slider, { SliderValueLabelProps } from '@mui/material/Slider'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { PropsWithChildren, useState } from 'react'
import { RangeValues } from '../Range'

export type RangeSliderProps = PropsWithChildren<{
  domain: string[]
  initialValues: RangeValues
  step: number
  onChange?: (values: RangeValues) => void
  onApplyClicked?: (values: RangeValues) => void
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

function RangeSlider(props: RangeSliderProps) {
  const { onApplyClicked, onChange, step } = props
  const stringArrToNumArr = (inputArr: string[]) =>
    inputArr.map(value => Number(value))

  const [values, setValues] = useState<number[]>(() =>
    getInitialValues(props.initialValues, props.domain),
  )

  const numDomain = stringArrToNumArr(props.domain)

  const handleSliderChange = (values: readonly number[]) => {
    setValues([...values])
    if (onChange) {
      onChange({ min: values[0], max: values[1] })
    }
  }

  return (
    <Box sx={{ ml: 1 }}>
      <Typography variant="smallText1">
        {values[0]} - {values[1]}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          ml: 1,
        }}
      >
        <Slider
          marks={[
            { value: numDomain[0], label: props.domain[0] },
            { value: numDomain[1], label: props.domain[1] },
          ]}
          min={numDomain[0]}
          max={numDomain[1]}
          value={values}
          onChange={(_, newValues) => handleSliderChange(newValues)}
          step={step}
          valueLabelDisplay="auto"
          slots={{
            valueLabel: ValueLabelComponent,
          }}
        />
        {onApplyClicked && (
          <Box>
            <Button
              size="small"
              variant="outlined"
              onClick={() => onApplyClicked({ min: values[0], max: values[1] })}
              sx={{ fontSize: 16 }}
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
