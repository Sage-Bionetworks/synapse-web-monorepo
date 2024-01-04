import React, { useState } from 'react'
import { TextField, TextFieldProps, Autocomplete } from '@mui/material'
import { useDebouncedEffect } from '../../utils/hooks'

// A debounced input react component

export function DebouncedInput({
  initialValue,
  onChange,
  options,
  delay = 250,
  ...textFieldProps
}: {
  initialValue: string
  onChange: (value: string) => void
  options: string[]
  delay?: number
} & Pick<
  TextFieldProps,
  'type' | 'value' | 'placeholder' | 'className' | 'label'
>) {
  const [value, setValue] = useState(initialValue)
  useDebouncedEffect(
    () => {
      onChange(value)
    },
    [onChange, value],
    delay,
  )

  return (
    <Autocomplete
      freeSolo
      disablePortal
      isOptionEqualToValue={(option, value) =>
        value.length == 0 || option === value
      }
      options={options}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue ?? '')
      }}
      sx={{ marginRight: '10px' }}
      renderInput={params => (
        <TextField
          {...params}
          {...textFieldProps}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      )}
    />
  )
}
