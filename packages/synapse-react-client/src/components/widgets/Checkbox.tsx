import Typography from '@mui/material/Typography'
import { uniqueId as _uniqueId } from 'lodash-es'
import React, { useState } from 'react'

export type CheckboxProps = React.PropsWithChildren<
  {
    hideLabel?: boolean
    checked?: boolean
    className?: string
    onChange: (newValue: boolean) => void
    isSelectAll?: boolean
    onClick?: (event: React.SyntheticEvent<HTMLDivElement>) => void
    disabled?: boolean
    'data-testid'?: string
    'aria-label'?: string
  } & (
    | {
        label?: React.ReactNode
        /* If the label is not a string, then we require an aria-label */
        'aria-label': string
      }
    | { label: string }
  )
>

export const Checkbox: React.FunctionComponent<CheckboxProps> = (
  props: CheckboxProps,
) => {
  const {
    checked = false,
    hideLabel = false,
    isSelectAll = false,
    disabled = false,
    onChange,
  } = props
  const [uniqueId] = useState(_uniqueId('src-checkbox-'))

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isSelectAll && event.target.checked === false) {
      /* 
         You can click the all checkbox from off -> on
         but clicking it off is a no-op
      */
      onChange(true)
    } else {
      onChange(event.target.checked)
    }
  }

  let className = 'checkbox'
  if (props.className) {
    className += ` ${props.className}`
  }

  return (
    <div className={className} onClick={props.onClick}>
      <input
        aria-label={'aria-label' in props ? props['aria-label'] : props.label}
        type="checkbox"
        checked={checked}
        id={uniqueId}
        onChange={handleCheckboxChange}
        disabled={disabled}
        data-testid={props['data-testid']}
      />
      <Typography
        sx={{ lineHeight: '20px' }}
        component={'label'}
        variant={'smallText1'}
        htmlFor={uniqueId}
      >
        {/* Note: the `label` element MUST be rendered for our checkbox CSS to work! */}
        {hideLabel ? <></> : props.label}
      </Typography>
      {props.children ?? <></>}
    </div>
  )
}
