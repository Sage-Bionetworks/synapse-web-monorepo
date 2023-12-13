import React, { useId } from 'react'

export type RadioGroupProps<T extends string | boolean | number = string> = {
  options: { label: React.ReactNode; value: T }[]
  className?: string
  value?: T
  onChange: (value: T) => void
  disabled?: boolean
}

export function RadioGroup<T extends string | boolean | number = string>(
  props: RadioGroupProps<T>,
) {
  const className = props.className
    ? `radiogroup ${props.className}`
    : `radiogroup`

  return (
    <div className={className} role="radiogroup">
      {props.options.map((option, index) => (
        <RadioOption<T>
          key={index.toString()}
          label={option.label}
          value={option.value}
          currentValue={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
        />
      ))}
    </div>
  )
}

export type RadioOptionProps<T extends string | boolean | number = string> = {
  label: React.ReactNode
  value: T
  currentValue?: T
  style?: React.CSSProperties
  onChange: (value: T) => void
  disabled?: boolean
}

export function RadioOption<T extends string | boolean | number = string>(
  props: RadioOptionProps<T>,
) {
  const uniqueId = useId()
  return (
    <div className={'radio'} onClick={() => props.onChange(props.value)}>
      <input
        id={uniqueId}
        type="radio"
        onChange={() => {
          // no-op -- change is handled by the div
        }}
        checked={props.currentValue === props.value}
        value={props.value.toString()}
        disabled={props.disabled}
      />
      <label htmlFor={uniqueId} style={props.style}>
        {props.label}
      </label>
    </div>
  )
}
