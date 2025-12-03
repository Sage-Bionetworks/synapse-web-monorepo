import React, { useState } from 'react'
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers'
import { Box, Button, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

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

export function Range(props: RangeProps): React.JSX.Element {
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
        flexWrap: 'wrap',
        flex: '1 0',
        marginRight: '10px',
        gap: '10px',
        '& .MuiInputBase-root': {
          minWidth: '150px',
        },
        '& .MuiInputBase-root,.MuiButton-root': {
          height: '38px',
        },
        '& .MuiInputLabel-root': {
          color: 'grey.700',
          fontWeight: 400,
        },
      }}
    >
      {props.type === 'date' ? (
        <>
          <Box key="range_min">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                enableAccessibleFieldDOMStructure={false}
                label="From"
                slots={{
                  textField: TextField,
                }}
                slotProps={{
                  textField: {
                    inputProps: {
                      'aria-label': 'min',
                    },
                  },
                }}
                value={values.min ? dayjs(values.min) : null}
                onChange={date =>
                  setValues({
                    min: date ? dayjs(date).format('YYYY-MM-DD') : undefined,
                    max: values.max,
                  })
                }
              />
            </LocalizationProvider>
          </Box>
          <Box key="range_max">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                enableAccessibleFieldDOMStructure={false}
                label="To"
                slots={{
                  textField: TextField,
                }}
                slotProps={{
                  textField: {
                    inputProps: {
                      'aria-label': 'max',
                    },
                  },
                }}
                value={values.max ? dayjs(values.max) : null}
                onChange={date =>
                  setValues({
                    max: date ? dayjs(date).format('YYYY-MM-DD') : undefined,
                    min: values.min,
                  })
                }
              />
            </LocalizationProvider>
          </Box>
        </>
      ) : (
        <>
          <Box key="range_min">
            <TextField
              label="From"
              type="number"
              value={values.min ?? ''}
              onChange={e =>
                setValues({
                  min: e.target.value,
                  max: values.max,
                })
              }
              slotProps={{
                htmlInput: { 'aria-label': 'min' },
              }}
            />
          </Box>
          <Box key="range_max">
            <TextField
              label="To"
              type="number"
              value={values.max ?? ''}
              onChange={e =>
                setValues({
                  max: e.target.value,
                  min: values.min,
                })
              }
              slotProps={{
                htmlInput: { 'aria-label': 'max' },
              }}
            />
          </Box>
        </>
      )}
      <Button
        size="small"
        variant="outlined"
        onClick={() =>
          handleAppyChanges(values, props.onApplyClicked, props.type)
        }
        sx={{
          alignSelf: 'flex-end',
          fontSize: 16,
        }}
      >
        Apply
      </Button>
      {error && (
        <div className="SRC-danger-color">{props.errorText || errorText}</div>
      )}
    </Box>
  )
}
