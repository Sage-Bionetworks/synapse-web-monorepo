import { Add, Close, HelpOutline } from '@mui/icons-material'
import { ArrayFieldTemplateProps, utils } from '@sage-bionetworks/rjsf-core'
import React, { useEffect, useState } from 'react'
import { Button, FormGroup, FormLabel } from 'react-bootstrap'
import FieldDescriptionTable from './FieldDescriptionTable'

/**
 * Custom field template for array properties in a react-jsonschema-form component.
 * Used just to apply custom styling.
 */
export function CustomArrayFieldTemplate<T>(props: ArrayFieldTemplateProps<T>) {
  const { DescriptionField } = props

  const isAdditionalProperty = props.schema[utils.ADDITIONAL_PROPERTY_FLAG]

  useEffect(() => {
    if (props.items.length === 0) {
      props.onAddClick()
    }
  }, [props])

  const [showDetails, setShowDetails] = useState(false)

  return (
    <FormGroup className={props.className}>
      <div className="LabelContainer">
        <FormLabel>
          {props.title}
          {props.required && <span className="required">*</span>}
        </FormLabel>
        {!isAdditionalProperty && (
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
        )}
      </div>
      {props.items && (
        <>
          {props.items.map((element, index) => (
            <div key={element.key} className="array-item">
              {element.children}
              {(isAdditionalProperty || props.items.length > 1) && (
                <Button
                  aria-label={`Remove ${props.title}[${index}]`}
                  variant="transparent-primary-500"
                  className="RemoveButton"
                  disabled={props.disabled}
                  onClick={element.onDropIndexClick(element.index)}
                >
                  <Close />
                </Button>
              )}
              {props.canAdd && index === props.items.length - 1 && (
                <Button
                  aria-label={`Add new ${props.title}`}
                  variant="primary-500"
                  className="AddButton"
                  onClick={props.onAddClick}
                  type="button"
                  disabled={props.disabled}
                >
                  <Add />
                </Button>
              )}
            </div>
          ))}
          {props.items.length === 0 && (
            <div style={{ display: 'flex' }}>
              <Button
                variant="primary-500"
                onClick={props.onAddClick}
                type="button"
                disabled={props.disabled}
              >
                Add Value
              </Button>
            </div>
          )}
        </>
      )}
      <FieldDescriptionTable
        required={props.required}
        type={props.schema.type as string}
        description={
          <DescriptionField
            id={`${props.idSchema.$id}__description`}
            description={props.schema.description ?? ''}
          />
        }
        show={showDetails}
      />
    </FormGroup>
  )
}
