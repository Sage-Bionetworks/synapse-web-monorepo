import React from 'react'
import { TextFieldProps } from '@mui/material/TextField'
import { TextField } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

/**
 * A @mui/material TextField component that a user can enter comma-separated values into.
 *
 * The component will store the entered state locally and call the onBlur callback with the parsed values.
 * @param props
 * @constructor
 */
export default function TextFieldCommaSeparatedInput(
  props: Omit<TextFieldProps, 'value' | 'onChange' | 'onBlur'> & {
    value: string[]
    onBlur: (newValue: string[]) => void
  },
) {
  const { value, onBlur, ...rest } = props
  const [displayedValue, setDisplayedValue] = useState('')

  useEffect(() => {
    setDisplayedValue(value.join(', '))
  }, [value])

  const handleBlur = useCallback(() => {
    onBlur(displayedValue.split(',').map(v => v.trim()))
  }, [onBlur, displayedValue])

  return (
    <TextField
      {...rest}
      value={displayedValue}
      onChange={e => setDisplayedValue(e.target.value)}
      onBlur={handleBlur}
    />
  )
}
