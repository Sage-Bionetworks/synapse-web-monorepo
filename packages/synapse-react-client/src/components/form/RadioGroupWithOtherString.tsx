import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

const OTHER_OPTION_VALUE = '__other'

export type RadioGroupWithOtherStringProps = {
  radioGroupProps?: Omit<RadioGroupProps, 'value' | 'onChange'>
  value: string
  onChange: (newValue: string) => void
  options: { value: string; label: string }[]
}

/**
 * A form component that renders a group of radio buttons with an "Other" option that allows the user to enter a custom string.
 */
export default function RadioGroupWithOtherString(
  props: RadioGroupWithOtherStringProps,
) {
  const { value, onChange, options, radioGroupProps } = props
  const [radioValue, setRadioValue] = useState(value)
  const [inputValue, setInputValue] = useState('')

  return (
    <RadioGroup
      {...radioGroupProps}
      value={radioValue}
      onChange={e => {
        setRadioValue(e.target.value)

        let actualValue = e.target.value
        if (actualValue === OTHER_OPTION_VALUE) {
          actualValue = inputValue
        }
        onChange(actualValue)
      }}
    >
      {options.map(option => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
      <FormControlLabel
        value={OTHER_OPTION_VALUE}
        control={<Radio />}
        label={'Other'}
      />
      <TextField
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value)
          onChange(e.target.value)
        }}
        disabled={radioValue !== OTHER_OPTION_VALUE}
      />
    </RadioGroup>
  )
}
