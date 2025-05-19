import { getDefaultRegistry } from '@rjsf/core'
import {
  ADDITIONAL_PROPERTY_FLAG,
  deepEquals,
  FieldProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'
import { JSONSchema7Definition } from 'json-schema'
import { useEffect } from 'react'
import {
  convertToArray,
  getPossibleTopLevelPropertiesInObjectSchema,
} from '../AnnotationEditorUtils'

/**
 * Extends the @rjsf/core `ObjectField` and just adds a custom hook for Synapse annotation business logic
 */
export function SynapseAnnotationsRJSFObjectField<
  T extends Record<string, any> | null | undefined = Record<string, any>,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldProps<T, S, F>) {
  const { schema, formData, onChange } = props
  const {
    fields: { ObjectField },
  } = getDefaultRegistry<T, S, F>()
  /**
   * For an object, this will
   * - convert additionalProperties formData to arrays
   * - convert schema-defined formData from an array to a non-array if the schema type is not an array
   * @param props
   */
  useEffect(() => {
    const newFormData: Record<string, any> = { ...formData }
    const allProperties = getPossibleTopLevelPropertiesInObjectSchema(schema)
    if (allProperties) {
      Object.entries(allProperties).forEach(([key, propertySchema]) => {
        // Since the annotations object is flat, we can safely use the property name as the key (no nested properties)
        const data = newFormData[key]
        if (
          (
            propertySchema as JSONSchema7Definition &
              Record<typeof ADDITIONAL_PROPERTY_FLAG, any>
          )[ADDITIONAL_PROPERTY_FLAG]
        ) {
          /**
           * All additional properties should be converted to arrays.
           *
           * We need to convert it right away because the order of items is not stable, and seems to depend on if the item is an array or not
           */
          if (!Array.isArray(data)) {
            newFormData[key] = convertToArray(data)
          }
        } else {
          /**
           * If the schema does not call for an array, but the formData is an array, then this will coerce it to a string.
           *
           * This can occur when a formData value is an additionalProperty, which we always treat as an array, then the key
           * is added to the schema (e.g. conditionally).
           */
          if (
            typeof propertySchema === 'object' &&
            'type' in propertySchema &&
            propertySchema.type !== 'array' &&
            Array.isArray(data)
          ) {
            newFormData[key] = data.map(v => `${v}`).join(', ')
          }
        }
      })
      if (!deepEquals(formData, newFormData)) {
        onChange(newFormData as T)
      }
    }
  }, [schema, formData, onChange])

  return <ObjectField {...props} />
}

export default SynapseAnnotationsRJSFObjectField
