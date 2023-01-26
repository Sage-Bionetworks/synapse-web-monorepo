import { uniqueId as _uniqueId } from 'lodash-es'
import React, { useEffect, useState } from 'react'

export type CheckboxProps = {
  label: string
  hideLabel?: boolean
  checked?: boolean
  className?: string
  onChange: (newValue: boolean) => void
  isSelectAll?: boolean
  children?: React.ReactChild
  onClick?: (event: React.SyntheticEvent<HTMLDivElement>) => void
  disabled?: boolean
  'data-testid'?: string
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = (
  props: CheckboxProps,
) => {
  const {
    checked: propsChecked = false,
    hideLabel = false,
    isSelectAll = false,
    disabled = false,
  } = props
  const [checked, setChecked] = useState<boolean>(propsChecked)
  const [uniqueId] = useState(_uniqueId('src-checkbox-'))

  useEffect(() => {
    setChecked(propsChecked)
  }, [propsChecked])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.checked)
    if (isSelectAll && event.target.checked === false) {
      /* 
         You can click the all checkbox from off -> on
         but clicking it off is a no-op
      */
      setChecked(true)
    } else {
      setChecked(event.target.checked)
    }
  }

  let className = 'checkbox'
  if (props.className) {
    className += ` ${props.className}`
  }

  return (
    <div className={className} onClick={props.onClick}>
      <input
        aria-label={props.label}
        type="checkbox"
        checked={checked}
        id={uniqueId}
        onChange={handleCheckboxChange}
        disabled={disabled}
        data-testid={props['data-testid']}
      />
      {<label htmlFor={uniqueId}>{hideLabel ? <></> : props.label}</label>}
      {props.children ?? <></>}
    </div>
  )
}
