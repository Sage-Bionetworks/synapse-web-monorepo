import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import {
  ariaDescribedByIds,
  enumOptionsIndexForValue,
  enumOptionsValueForIndex,
  optionId,
  WidgetProps,
} from '@rjsf/utils'
import { FocusEvent } from 'react'

/**
 * Yes/No radio group for react-jsonschema-form booleans, storing `true`/`false`. The "Yes"/"No"
 * labels are the `enumOptions` that RJSF's `BooleanField` supplies. `FieldTemplate` renders the
 * field's visible label and description, so the group renders none of its own.
 */
export function YesNoRadioWidget(props: WidgetProps) {
  const { id, options, value, label, disabled, readonly } = props
  const { enumOptions = [], emptyValue } = options
  const valueForIndex = (index: string) =>
    enumOptionsValueForIndex(index, enumOptions, emptyValue)

  return (
    // RJSF's RadioWidget can't take an accessible name, and FieldTemplate's label can't name a
    // radiogroup (`for` only names form controls), so the group is named here.
    <RadioGroup
      id={id}
      name={id}
      row
      aria-label={label}
      aria-describedby={ariaDescribedByIds(id)}
      value={enumOptionsIndexForValue(value, enumOptions) ?? null}
      onChange={(_, index) => props.onChange(valueForIndex(index))}
      onBlur={({ target }: FocusEvent<HTMLInputElement>) =>
        props.onBlur(id, valueForIndex(target.value))
      }
      onFocus={({ target }: FocusEvent<HTMLInputElement>) =>
        props.onFocus(id, valueForIndex(target.value))
      }
    >
      {enumOptions.map((option, index) => (
        <FormControlLabel
          key={String(option.value)}
          value={String(index)}
          control={<Radio id={optionId(id, index)} />}
          label={option.label}
          disabled={disabled || readonly}
        />
      ))}
    </RadioGroup>
  )
}
