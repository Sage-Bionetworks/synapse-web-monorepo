import { Widget, WidgetProps } from '@sage-bionetworks/rjsf-core'
import React from 'react'
import Creatable from 'react-select/creatable'
import { components, ControlProps, GroupBase } from 'react-select'

// Some types for rjsf and react-select don't seem to be accurate or useful, so we cast to this object when we're dealing with enumeration options
export type EnumOption = { value: string; label: string }

/**
 * We want to apply the 'form-control' bootstrap class to react-select's Control component, and the easiest way to do that is to make a custom version
 */
export const Control = ({
  children,
  ...rest
}: ControlProps<any, boolean, GroupBase<any>>) => {
  return (
    <components.Control {...rest} className="form-control">
      {children}
    </components.Control>
  )
}

/**
 * react-select's value prop should be an EnumOption (see custom type defined above)
 *
 * This function finds the enum option that has the corresponding value and returns it.
 *
 * If value is nullish, this fn returns undefined. If there is no corresponding option, then a new object is returned
 * where the label and value are set to the provided value.
 */
export function findValueOption(
  value: string | null | undefined,
  options: EnumOption[],
): EnumOption | undefined {
  if (value == null) {
    return undefined
  }

  const correspondingOption = options.filter(option => option.value === value)
  if (correspondingOption.length > 0) {
    return correspondingOption[0]
  } else {
    return { value: value, label: value }
  }
}

/**
 * Select widget compatible with react-jsonschema-form enumerations
 */
export const CustomSelectWidget: Widget = (props: WidgetProps) => {
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
  } = props
  const { enumOptions } = options as {
    enumOptions: EnumOption[]
  }
  return (
    <Creatable
      className="react-select-container"
      inputId={id}
      isMulti={multiple}
      placeholder={placeholder}
      value={findValueOption(value, enumOptions)}
      aria-required={required}
      isDisabled={disabled || readonly}
      autoFocus={autofocus}
      onBlur={onBlur && (() => onBlur(id, value?.value))}
      options={enumOptions}
      onFocus={onFocus && (() => onFocus(id, value?.value))}
      onChange={option => onChange((option as EnumOption | null)?.value)}
      isClearable={true}
      components={{ Control }}
      formatCreateLabel={currentInput =>
        `Set to custom value "${currentInput}"`
      }
      styles={{
        control: provided => ({
          ...provided,
          border: 'unset',
          borderColor: 'unset',
          boxShadow: 'unset',
          '&:hover': {},
        }),
        valueContainer: provided => ({ ...provided, padding: '0px' }),
      }}
    />
  )
}
