import { CustomFormContext } from '@/components/JsonSchemaForm/CustomFormContext'
import {
  EnumOptionsType,
  hasWidgetErrors,
  Widget,
  WidgetProps,
} from '@rjsf/utils'
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
  value: unknown,
  options: EnumOptionsType[],
): EnumOptionsType | string | null {
  if (value == null) {
    return null
  }

  const correspondingOption = options.filter(option => option.value === value)
  if (correspondingOption.length > 0) {
    return correspondingOption[0]
  } else {
    // A free-solo answer is text the user typed; any other value is shown as JSON
    const label = typeof value === 'string' ? value : JSON.stringify(value)
    return { value: value, label }
  }
}

/**
 * Maps a multi-select form value (an array of enum values) to the Autocomplete option objects it
 * selects. Values with no matching option (e.g. free-solo input) become `{ value, label: value }`.
 * A non-array value selects nothing.
 */
export function toMultipleAutocompleteValue(
  value: unknown,
  options: EnumOptionsType[],
): EnumOptionsType[] {
  if (!Array.isArray(value)) {
    return []
  }
  return value.map(
    v =>
      options.find(option => option.value === v) ?? {
        value: v,
        label: String(v),
      },
  )
}

/**
 * Maps a multi-select Autocomplete selection (option objects and/or free-solo strings) back to the
 * array of enum values stored in the form data.
 */
export function fromMultipleAutocompleteValue(newValue: unknown): unknown[] {
  if (!Array.isArray(newValue)) {
    return []
  }
  return newValue.map((v: unknown) =>
    isObject(v) && 'value' in v ? v.value : v,
  )
}

/**
 * Select widget compatible with react-jsonschema-form enumerations. Set `ui:options.isClearable` to `false` to keep
 * the user from clearing a choice.
 */
export const SelectWidget: Widget = (props: WidgetProps) => {
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
    registry,
  } = props

  const { enumOptions, isClearable: _isClearable = true } = options as {
    enumOptions: EnumOptionsType[]
    isClearable?: boolean
  }

  // If the ID includes one of these, then this is a widget used to select a schema in `oneOf` or `anyOf`.
  // In these cases, we should not allow free solo input.
  const isAnyOrOneOfOption = ['__oneof_select', '__anyof_select'].some(
    multiSchemaTag => id.includes(multiSchemaTag),
  )

  const allowFreeSolo =
    !isAnyOrOneOfOption &&
    Boolean((registry.formContext as CustomFormContext).allowFreeSoloEnum)

  // any/oneOf options should not be clearable
  const isClearable = _isClearable && !isAnyOrOneOfOption

  return (
    <Autocomplete
      id={id}
      value={
        multiple
          ? toMultipleAutocompleteValue(value, enumOptions)
          : findValueOption(value, enumOptions)
      }
      freeSolo={allowFreeSolo}
      forcePopupIcon
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={enumOptions}
      readOnly={readonly}
      disabled={disabled}
      multiple={multiple}
      disableCloseOnSelect={multiple}
      disableClearable={!isClearable}
      onChange={(event, newValue) => {
        if (multiple) {
          onChange(fromMultipleAutocompleteValue(newValue))
        } else if (isObject(newValue) && 'inputValue' in newValue) {
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
          error={hasWidgetErrors(props)}
          autoFocus={autofocus}
          onFocus={onFocus && (() => onFocus(id, value))}
          onBlur={onBlur && (() => onBlur(id, value))}
        />
      )}
      filterOptions={(options, params) => {
        const filtered = filter(options, params)

        const { inputValue } = params
        // Suggest the creation of a new value
        const isExisting = options.some(option => inputValue === option.label)
        if (allowFreeSolo && inputValue !== '' && !isExisting) {
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
