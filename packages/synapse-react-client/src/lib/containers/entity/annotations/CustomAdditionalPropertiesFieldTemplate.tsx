import { FieldTemplateProps } from '@sage-bionetworks/rjsf-core'
import React from 'react'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'

/**
 * FieldTemplate override for "additionalProperties" fields to customize the form appearance.
 *
 * Adapted from 'WrapIfAdditional' in @rsjf/core.
 * @param props
 * @returns
 */
export const CustomAdditionalPropertiesFieldTemplate = (
  props: FieldTemplateProps & {
    onKeyChange: (newKey: string) => void
  },
) => {
  const {
    id,
    label,
    children,
    errors,
    help,
    description,
    hidden,
    required,
    displayLabel,
    classNames,
    disabled,
    onKeyChange,
    readonly,
  } = props

  const keyLabel = `Key` // i18n ?
  if (hidden) {
    return <div className="hidden">{children}</div>
  }
  return (
    <div className={`${classNames ?? ''} container-fluid`}>
      <div className="row form-additional">
        <div className="col-xs-3">
          <FormGroup>
            <FormLabel id={`${id}-key-label`} htmlFor={`${id}-key`}>
              {keyLabel}
            </FormLabel>
            <FormControl
              type="text"
              disabled={disabled}
              readOnly={readonly}
              defaultValue={label}
              required={required}
              id={`${id}-key`}
              onBlur={(event: {
                preventDefault: () => void
                target: { value: string }
              }) => {
                event.preventDefault()
                onKeyChange(event.target.value)
              }}
            />
          </FormGroup>
        </div>
        {displayLabel && <FormLabel id={id}>{label}</FormLabel>}
        {displayLabel && description ? description : null}
        {children}
        {errors}
        {help}
      </div>
    </div>
  )
}
