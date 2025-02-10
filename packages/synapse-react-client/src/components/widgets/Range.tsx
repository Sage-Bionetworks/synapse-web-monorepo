import { ChangeEvent, useState } from 'react'
import dayjs from 'dayjs'
import { Box, Button, Typography } from '@mui/material'

type ControlType = 'number' | 'date'

export type RangeValues<T = string | number> = {
  min?: T
  max?: T
}

export type RangeProps = {
  type: ControlType
  initialValues?: RangeValues
  className?: string
  errorText?: string
  onApplyClicked: (newValues: RangeValues) => void
}

export function Range(props: RangeProps) {
  const errorText = 'Min value should be less than max value'
  const [error, setError] = useState(false)
  const [values, setValues] = useState(() =>
    props.type === 'number' && props.initialValues
      ? props.initialValues
      : (props.initialValues && {
          min: dayjs(props.initialValues.min).format('YYYY-MM-DD'),
          max: dayjs(props.initialValues.max).format('YYYY-MM-DD'),
        }) || {
          min: undefined,
          max: undefined,
        },
  )

  const isValid = (
    { min, max }: RangeValues,

    type: ControlType = 'number',
  ) => {
    if (
      min === null ||
      min === undefined ||
      max === null ||
      max === undefined
    ) {
      setError(false)
      return true
    }

    if (type === 'number') {
      if (Number(min) > Number(max)) {
        setError(true)
        return false
      }
    } else if (Date.parse(min as string) > Date.parse(max as string)) {
      setError(true)
      return false
    }
    setError(false)
    return true
  }

  const handleAppyChanges = (
    values: RangeValues,
    callBackFn: (newValues: RangeValues) => void,
    type: ControlType = 'number',
  ) => {
    if (isValid(values, type)) {
      callBackFn(values)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          marginRight: '10px',
          gap: '10px',
        }}
      >
        <Box>
          <Typography>From</Typography>
          <input
            aria-label="min"
            key="range_min"
            type={props.type}
            value={values.min}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              setValues({ min: target.value, max: values.max })
            }
          />
        </Box>
        <Box>
          <Typography>To</Typography>
          <input
            aria-label="max"
            key="range_max"
            type={props.type}
            value={values.max}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              setValues({ min: values.min, max: target.value })
            }
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Button
          size="small"
          variant="outlined"
          onClick={() =>
            handleAppyChanges(values, props.onApplyClicked, props.type)
          }
          sx={{
            height: '38px',
            borderRadius: 0,
            border: '1px solid #395979',
            p: '6px 8px',
            fontSize: 14,
          }}
        >
          Apply
        </Button>
        {error && (
          <div className="SRC-danger-color">{props.errorText || errorText}</div>
        )}
      </Box>
    </Box>
  )
}
