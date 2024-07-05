import { Checkbox } from '../../Checkbox'
import React from 'react'
import { RadioOption } from '../../RadioGroup'

type EnumFacetFilterOptionProps = {
  readonly id: string
  readonly label: string
  readonly count?: number
  readonly isDropdown: boolean
  readonly checked: boolean
  readonly onChange: (selected: boolean) => void
  readonly onHover: () => void
  readonly inputType: 'checkbox' | 'radio'
}

export function EnumFacetFilterOption(props: EnumFacetFilterOptionProps) {
  const {
    id,
    label,
    count,
    isDropdown,
    checked,
    onChange,
    onHover,
    inputType,
  } = props
  return (
    <div
      className="EnumFacetFilter__checkboxContainer"
      onClick={() => {
        // If this is a dropdown option, clicking anywhere in the field should toggle selection
        if (isDropdown) {
          onChange(!checked)
        }
      }}
      onMouseEnter={onHover}
    >
      {inputType === 'checkbox' && (
        <Checkbox
          className="EnumFacetFilter__checkbox"
          onClick={event => event.stopPropagation()}
          onChange={newValue => {
            onChange(newValue)
          }}
          key={`${id}`}
          checked={checked}
          label={label}
        ></Checkbox>
      )}
      {inputType === 'radio' && (
        <RadioOption
          className="EnumFacetFilter__checkbox"
          value={id || label}
          onClick={event => event.stopPropagation()}
          onChange={() => {
            onChange(!checked)
          }}
          key={`${id}`}
          checked={checked}
          label={label}
        />
      )}
      {count != null && (
        <>
          {isDropdown && (
            <span className="EnumFacetFilter__count">
              ({count.toLocaleString()})
            </span>
          )}
          {!isDropdown && (
            <div className="EnumFacetFilter__count">
              {count.toLocaleString()}
            </div>
          )}
        </>
      )}
    </div>
  )
}
