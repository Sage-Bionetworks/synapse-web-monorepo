import React, { useEffect, useState } from 'react'
import { FormLabel } from 'react-bootstrap'
import { FieldTemplateProps } from '@sage-bionetworks/rjsf-core'
import { HelpOutline } from '@mui/icons-material'
import FieldDescriptionTable from './FieldDescriptionTable'

export function CustomDefaultTemplate<T>(
  props: FieldTemplateProps<T> & {
    onChange: (newValue: unknown) => void
  },
) {
  const {
    id,
    label,
    children,
    errors,
    help,
    hidden,
    required,
    displayLabel,
    formData,
    onChange,
    schema,
  } = props

  const description = props.description ?? props.schema.description
  const [showDetails, setShowDetails] = useState(false)

  // The formData that we get may be an array (for example, if it was an additionalProperty, but then the key was added to the schema)
  // If the object passes through this template, then it should no longer be an array, so we coerce it to a string.
  useEffect(() => {
    if (schema.type !== 'array' && Array.isArray(formData)) {
      const newValue = formData.map(v => `${v}`).join(', ')
      // TODO: This only works when we have a short delay
      setTimeout(() => {
        onChange(newValue)
      }, 50)
    }
  }, [])

  if (hidden) {
    return <div className="hidden">{children}</div>
  }

  return (
    <>
      {/* RJSF hides labels for boolean checkboxes, but since we replaced checkboxes with a custom component, we want to show them */}
      {label && (displayLabel || schema.type === 'boolean') && (
        <div className="LabelContainer">
          <FormLabel htmlFor={id}>
            {label}
            {required && <span className="required">*</span>}
          </FormLabel>
          <button
            aria-label="More Info"
            aria-expanded={showDetails}
            onClick={e => {
              e.preventDefault()
              setShowDetails(!showDetails)
            }}
          >
            <HelpOutline className="HelpButton SRC-primary-text-color" />
          </button>
        </div>
      )}
      {children}
      <FieldDescriptionTable
        required={required}
        type={schema.type as string}
        description={description}
        show={showDetails}
      />
      {errors}
      {help}
    </>
  )
}
