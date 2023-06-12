import React, { useState } from 'react'
import { uniqueId as _uniqueId } from 'lodash-es'

export type RadioGroupProps<T extends string | boolean | number = string> = {
  options: { label: string; value: T }[]
  id: string
  className?: string
  value?: T
  onChange: (value: T) => void
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
          groupId={props.id}
          label={option.label}
          value={option.value}
          currentValue={props.value}
          onChange={props.onChange}
        />
      ))}
    </div>
  )
}

export type RadioOptionProps<T extends string | boolean | number = string> = {
  groupId: string
  label: string
  value: T
  currentValue?: T
  style?: React.CSSProperties
  onChange: (value: T) => void
}

export function RadioOption<T extends string | boolean | number = string>(
  props: RadioOptionProps<T>,
) {
  const [uniqueId] = useState(_uniqueId('src-radio-'))
  return (
    <div onClick={() => props.onChange(props.value)}>
      <input
        id={uniqueId}
        type="radio"
        onChange={() => {
          // no-op -- change is handled by the div
        }}
        checked={props.currentValue === props.value}
        value={props.value.toString()}
      />
      <label htmlFor={uniqueId} style={props.style}>
        {props.label}
      </label>
    </div>
  )
}
