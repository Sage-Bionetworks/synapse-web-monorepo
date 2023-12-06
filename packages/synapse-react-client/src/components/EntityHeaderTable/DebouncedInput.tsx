import React, { useState } from 'react'
import { TextField, TextFieldProps, Autocomplete } from '@mui/material'
import { useDebouncedEffect } from '../../utils/hooks'

// A debounced input react component

export function DebouncedInput({
  value: initialValue,
  onChange,
  options,
  ...props
}: {
  value: string
  onChange: (value: string) => void
  options: string[]
} & Pick<
  React.InputHTMLAttributes<TextFieldProps>,
  'type' | 'min' | 'max' | 'value' | 'placeholder' | 'className' | 'list'
>) {
  const [value, setValue] = useState(initialValue)
  useDebouncedEffect(
    () => {
      onChange(value)
    },
    [value],
    300,
  )

  return (
    <Autocomplete
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
          {...props}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      )}
    />
  )
}
