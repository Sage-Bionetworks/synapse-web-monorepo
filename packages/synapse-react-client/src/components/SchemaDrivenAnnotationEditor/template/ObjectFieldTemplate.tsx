import AddToList from '@/assets/icons/AddToList'
import { Button, Tooltip } from '@mui/material'
import {
  ADDITIONAL_PROPERTY_FLAG,
  canExpand,
  FormContextType,
  getTemplate,
  getUiOptions,
  ObjectFieldTemplatePropertyType,
  ObjectFieldTemplateProps,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'
import { JSONSchema7Definition } from 'json-schema'
import { useRef } from 'react'
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'
import { displayToast } from '../../ToastMessage'

/**
 * Derived from the base ObjectFieldTemplate with annotations-editor-specific changes
 * - Custom button for adding additional properties
 * - Tracks properties to show a toast message if a property is converted to an additionalProperty because it was
 *   dropped from the schema (e.g. in a conditional schema)
 *
 * See https://github.com/rjsf-team/react-jsonschema-form/blob/main/packages/mui/src/ObjectFieldTemplate/ObjectFieldTemplate.tsx
 * @param props
 * @returns
 */
export function ObjectFieldTemplate<
  T extends Record<string, any> | null | undefined = Record<string, any>,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ObjectFieldTemplateProps<T, S, F>) {
  const {
    description,
    disabled,
    formData,
    idSchema,
    properties,
    readonly,
    registry,
    required,
    schema,
    title,
    onAddClick,
    uiSchema,
  } = props

  const options = getUiOptions<T, S, F>(uiSchema)
  const TitleFieldTemplate = getTemplate<'TitleFieldTemplate', T, S, F>(
    'TitleFieldTemplate',
    registry,
    options,
  )
  const DescriptionFieldTemplate = getTemplate<
    'DescriptionFieldTemplate',
    T,
    S,
    F
  >('DescriptionFieldTemplate', registry, options)

  /*
     Tracks the property keys that were last known to exist in the object.
     */
  const previousSchemaDefinedProperties = useRef<Set<string>>(new Set())

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
    if ('properties' in schema && schema.properties) {
      const propertyKeys = Object.keys(schema.properties)
      // Schema-defined properties are those properties in the schema without the additional property flag.
      const schemaDefinedProperties = new Set<string>(
        propertyKeys.filter(key => {
          const propertyObject = schema.properties![
            key
          ] as JSONSchema7Definition &
            Record<typeof ADDITIONAL_PROPERTY_FLAG, any>
          return !propertyObject[ADDITIONAL_PROPERTY_FLAG]
        }),
      )

      if (previousSchemaDefinedProperties.current != null) {
        // Compare the schema defined properties with the previous version to see if any were lost.
        const lostProperties = Array.from(
          previousSchemaDefinedProperties.current,
        ).filter(schemaDefinedProperty => {
          return (
            // Property is no longer in schema
            !schemaDefinedProperties.has(schemaDefinedProperty) &&
            // Form data exists
            !!formData &&
            // Property still exists in form data and is not null
            // if the data is null, then we don't need to worry about it; user data wasn't lost
            formData[schemaDefinedProperty] != null &&
            // Property matches `additionalProperties` requirements: is an array and contains non-null values
            Array.isArray(formData[schemaDefinedProperty]) &&
            (formData[schemaDefinedProperty] as Array<never>).filter(
              item => item != null,
            ).length > 0
          )
        })
        if (lostProperties.length > 0) {
          // Report the converted fields in a toast message
          displayToast(
            `The following annotations are no longer specified by the schema and have been converted to custom fields: ${lostProperties.join(
              ', ',
            )}.`,
            'warning',
            {
              title: 'Fields No Longer Specified By Schema',
            },
          )
        }
      }
      // Update the last known properties to match the current properties
      previousSchemaDefinedProperties.current = schemaDefinedProperties
    }
  }, [schema.properties])

  return (
    <fieldset id={idSchema.$id}>
      {(options.title || title) && (
        <TitleFieldTemplate
          id={`${idSchema.$id}__title`}
          schema={schema}
          title={options.title || title}
          required={required}
          uiSchema={uiSchema}
          registry={registry}
        />
      )}
      {(options.description || description) && (
        <DescriptionFieldTemplate
          id={`${idSchema.$id}__description`}
          description={options.description || description!}
          registry={registry}
          schema={schema}
        />
      )}
      {properties.map((prop: ObjectFieldTemplatePropertyType) => prop.content)}

      {canExpand(schema, uiSchema, formData) && (
        <Tooltip title="Add a new custom field" placement="top">
          <Button
            sx={{ my: 2 }}
            variant="contained"
            className="object-property-expand"
            onClick={onAddClick(schema)}
            disabled={disabled || readonly}
            aria-label={'Add Custom Field'}
          >
            <AddToList />
          </Button>
        </Tooltip>
      )}
    </fieldset>
  )
}
