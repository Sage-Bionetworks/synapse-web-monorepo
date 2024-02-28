import { Checkbox } from '../../Checkbox'
import React from 'react'

type EnumFacetFilterOptionProps = {
  readonly id: string
  readonly label: string
  readonly count: number
  readonly isDropdown: boolean
  readonly checked: boolean
  readonly onChange: (selected: boolean) => void
  readonly onHover: () => void
}

export function EnumFacetFilterOption(props: EnumFacetFilterOptionProps) {
  const { id, label, count, isDropdown, checked, onChange, onHover } = props
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
      {isDropdown && (
        <span className="EnumFacetFilter__count">
          ({count.toLocaleString()})
        </span>
      )}
      {!isDropdown && (
        <div className="EnumFacetFilter__count">{count.toLocaleString()}</div>
      )}
    </div>
  )
}
