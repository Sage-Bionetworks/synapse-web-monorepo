import { Widget, WidgetProps, EnumOptionsType } from '@rjsf/utils'
import React from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { createFilterOptions } from '@mui/material/Autocomplete'
import { isObject } from 'lodash-es'

const filter = createFilterOptions<EnumOptionsType>()

/**
 * This function finds the enum option that has the corresponding value and returns it.
 *
 * If value is nullish, this fn returns null. If there is no corresponding option, then a new object is returned
 * where the label and value are set to the provided value.
 */
export function findValueOption(
  value: string | null | undefined,
  options: EnumOptionsType[],
): EnumOptionsType | string | null {
  if (value == null) {
    return null
  }

  const correspondingOption = options.filter(option => option.value === value)
  if (correspondingOption.length > 0) {
    return correspondingOption[0]
  } else {
    return { value: value, label: value }
  }
}

type SelectWidgetProps = WidgetProps & {
  isClearable?: boolean
}

/**
 * Select widget compatible with react-jsonschema-form enumerations
 */
export const SelectWidget: Widget = (props: SelectWidgetProps) => {
  const {
    id,
    options,
    value,
    required,
    disabled,
    readonly,
    multiple,
    autofocus,
    onChange,
    onBlur,
    onFocus,
    placeholder,
    isClearable = true,
    rawErrors,
  } = props
  const { enumOptions } = options as {
    enumOptions: EnumOptionsType[]
  }
  return (
    <Autocomplete
      id={id}
      value={findValueOption(value, enumOptions)}
      freeSolo
      forcePopupIcon
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={enumOptions}
      readOnly={readonly}
      disabled={disabled}
      multiple={multiple}
      disableClearable={!isClearable}
      onChange={(event, newValue) => {
        if (isObject(newValue) && 'inputValue' in newValue) {
          // Create a new value from the user input
          onChange(newValue.inputValue)
        } else if (isObject(newValue) && 'value' in newValue) {
          onChange(newValue.value)
        } else if (typeof newValue === 'string') {
          onChange(newValue)
        } else {
          onChange(newValue)
        }
      }}
      renderInput={params => (
        <TextField
          {...params}
          required={required}
          placeholder={placeholder}
          error={rawErrors && rawErrors.length > 0}
          autoFocus={autofocus}
          onFocus={onFocus && (() => onFocus(id, value?.value))}
          onBlur={onBlur && (() => onBlur(id, value?.value))}
        />
      )}
      filterOptions={(options, params) => {
        const filtered = filter(options, params)

        const { inputValue } = params
        // Suggest the creation of a new value
        const isExisting = options.some(option => inputValue === option.label)
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            value: inputValue,
            label: `Set to custom value "${inputValue}"`,
          })
        }

        return filtered
      }}
    />
  )
}
