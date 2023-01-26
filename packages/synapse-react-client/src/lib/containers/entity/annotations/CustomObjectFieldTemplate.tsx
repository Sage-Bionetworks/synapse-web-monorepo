import { ObjectFieldTemplateProps, utils } from '@sage-bionetworks/rjsf-core'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'
import AddToList from '../../../assets/icons/AddToList'
import { Tooltip } from '@mui/material'
import { displayToast } from '../../ToastMessage'

/**
 * Basically identical to the default object field template, with a custom button.
 *
 * See {@link node_modules/@rjsf/core/src/components/fields/ObjectField.js#DefaultObjectFieldTemplate}
 * @param props
 * @returns
 */
export function CustomObjectFieldTemplate(
  props: ObjectFieldTemplateProps<Record<string, unknown>>,
) {
  const { TitleField, DescriptionField } = props

  const [previousSchemaDefinedProperties, setPreviousSchemaDefinedProperties] =
    useState<Set<string>>(new Set())

  /**
   * We track how the schema changes as the user enters data, causing conditional subschemas to be evaluated.
   *
   * If a property exists in the previous version of the schema and has user data, and then is dropped from the schema due to a data update, then
   * we need to prompt the user whether they want to undo the change, or continue and keep/remove those fields
   *
   * In this component, we can identify when one or more fields with user data are dropped (the field gains the additional property flag in the schema prop).
   * We then use a function provided by the context to report which fields were lost.
   */
  useDeepCompareEffectNoCheck(() => {
    if (props.schema.properties) {
      const propertyKeys = Object.keys(props.schema.properties)
      // Schema-defined properties are those properties in the schema without the additional property flag.
      const schemaDefinedProperties = new Set<string>(
        propertyKeys.filter(key => {
          const propertyObject = props.schema.properties![key]
          return !propertyObject[utils.ADDITIONAL_PROPERTY_FLAG]
        }),
      )

      if (previousSchemaDefinedProperties != null) {
        // Compare the schema defined properties with the previous version to see if any were lost.

        const lostProperties = Array.from(
          previousSchemaDefinedProperties,
        ).filter(
          schemaDefinedProperty =>
            !schemaDefinedProperties.has(schemaDefinedProperty) &&
            props.formData[schemaDefinedProperty] != null, // if the data is null, then we don't need to worry about it; user data isn't lost
        )
        if (lostProperties.length > 0) {
          // Report the converted fields in a toast message
          displayToast(
            `The following annotations are no longer specified by the schema and have been converted to Custom Fields: ${lostProperties.join(
              ', ',
            )}.`,
            'warning',
            {
              title: 'Fields No Longer Specified By Schema',
            },
          )
        }
      }
      setPreviousSchemaDefinedProperties(schemaDefinedProperties)
    }
  }, [props.schema.properties])

  return (
    <fieldset id={props.idSchema.$id}>
      {(props.uiSchema['ui:title'] || props.title) && (
        <TitleField
          id={`${props.idSchema.$id}__title`}
          title={props.title || (props.uiSchema['ui:title'] as string)}
          required={props.required}
        />
      )}
      {props.description && (
        <DescriptionField
          id={`${props.idSchema.$id}__description`}
          description={props.description}
        />
      )}
      {props.properties.map(prop => {
        return <div key={prop.name}>{prop.content}</div>
      })}
      {utils.canExpand(props.schema, props.uiSchema, props.formData) && (
        <div className="container-fluid">
          <Tooltip title="Add a new custom field" placement="top">
            <Button
              variant="gray"
              className="object-property-expand"
              onClick={props.onAddClick(props.schema)}
              disabled={props.disabled || props.readonly}
              aria-label={'Add Custom Field'}
            >
              <AddToList />
            </Button>
          </Tooltip>
        </div>
      )}
    </fieldset>
  )
}
