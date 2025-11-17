import { AdditionalPropertiesSchemaField } from '@/components/SchemaDrivenAnnotationEditor/field/AdditionalPropertiesSchemaField'
import {
  englishStringTranslator,
  RJSFValidationError,
  TranslatableString,
} from '@rjsf/utils'
import { JSONSchema7 } from 'json-schema'
import { JSONPath } from 'jsonpath-plus'
import { flatMap, groupBy, isEmpty, isObject } from 'lodash-es'

/**
 * Generates a JSON schema for the form UI based on the provided validation schema and entity schema base properties.
 *
 * To meet the requirements of the desired form to display, we cannot simply show the validation schema. This is because
 * validation schemas may use conditional logic based on default entity properties (e.g. concreteType) to show/hide fields.
 * This method combines the validation schema with the entity schema base properties to create a new schema that will yield
 * the expected form with desired logic.
 * @param validationSchema
 * @param entitySchema
 */
export function getJsonSchemaForForm(
  validationSchema: JSONSchema7 = {},
  entitySchema: JSONSchema7 = {},
): JSONSchema7 {
  const entitySchemaProperties =
    getPossibleTopLevelPropertiesInObjectSchema(entitySchema)

  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    // Spread the validation schema to ensure all other references are included
    // Top level properties like "$defs" get lost if we simply put the entire schema in `allOf`
    ...validationSchema,
    // JSON Schemas for Synapse types use "definitions", so it should be manually merged.
    definitions: {
      ...entitySchema.definitions,
      ...validationSchema.definitions,
    },
    allOf: [
      ...(validationSchema.allOf || []),
      // Add in the entity properties
      {
        type: 'object',
        properties: entitySchemaProperties,
      },
    ],
    // Always allow adding additional annotations (though it may violate the validationSchema)
    additionalProperties: true,
  }
}

/**
 * Generates the UiSchema for the annotations editor.
 * @param entitySchemaBaseProperties
 */
export function getUiSchemaForForm(
  entitySchemaBaseProperties: JSONSchema7['properties'] = {},
) {
  // Each 'base' entity field (id, name, concreteType, etc.) should be hidden
  const uiSchemaWithHiddenEntityProperties = Object.keys(
    entitySchemaBaseProperties,
  ).reduce((prev, curr) => ({ ...prev, [curr]: { 'ui:widget': 'hidden' } }), {})

  return {
    ...uiSchemaWithHiddenEntityProperties,
    'ui:globalOptions': {
      copyable: false, // copy button clutters the UI, is not very useful since schemas are flat objects
      duplicateKeySuffixSeparator: '_', // the default duplicateKeySuffixSeparator creates invalid annotation keys
    },
    additionalProperties: {
      'ui:field': AdditionalPropertiesSchemaField,
    },
  }
}
/**
 * Strips null values from arrays in the provided form data. If the array is empty after
 * removing null values, the key is removed from the form data.
 *
 * This allows users to submit forms with empty array fields (SWC-5762)
 */
export function dropNullishArrayValues(
  formData: Record<string, unknown>,
): Record<string, unknown> {
  const newFormData: Record<string, unknown> = {}
  Object.keys(formData).forEach(key => {
    let value = formData[key]
    if (Array.isArray(value)) {
      value = value.filter((item: any) => item != null)
      if (!isEmpty(value)) {
        newFormData[key] = value
      }
    } else {
      newFormData[key] = value
    }
  })
  return newFormData
}

export function dropNullValues(
  formData: Record<string, unknown> = {},
): Record<string, unknown> {
  return Object.keys(formData).reduce(
    (acc: Record<string, unknown>, key: string) => {
      if (formData[key] !== null) {
        acc[key] = formData[key]
      }
      return acc
    },
    {},
  )
}

/**
 * Inspects the property of the AjvError and modifies it to be comparable to simple key strings, like entity property keys.
 * @param error
 * @returns
 */
export function getFriendlyPropertyName(error: RJSFValidationError): string {
  if (error.property?.startsWith('[')) {
    // Additional properties are surrounded by brackets and quotations, so let's remove them
    return error.property.substring(2, error.property.length - 2)
  } else if (error.property?.startsWith('.')) {
    return error.property.substring(1)
  } else {
    return error.property || ''
  }
}

export function transformErrors(
  errors: RJSFValidationError[],
): RJSFValidationError[] {
  // Transform the errors in the following ways:
  // - Simplify the set of errors when failing to select an enumeration defined with an anyOf (SWC-5724)
  // - Show a custom error message when using a property that collides with an internal entity property (SWC-5678)

  // Fixing anyOf errors
  // Group the errors by the property that the error applies to
  const grouped = groupBy(errors, error => error.property)
  Object.keys(grouped).map(property => {
    const errorGroup = grouped[property]

    // First, see if it is an anyOf error
    const hasAnyOfError = errorGroup.some(
      e => e.message === 'should match some schema in anyOf',
    )

    // We determine if it's an anyOf *enum* error if all error messages in the property match one of these three messages:
    const isEnumError =
      hasAnyOfError &&
      errorGroup.every(error => {
        if (error.message === 'should be string') {
          return true
        } else if (error.message === 'should be equal to constant') {
          return true
        } else if (error.message === 'should match some schema in anyOf') {
          return true
        } else {
          return false
        }
      })

    // If it's an anyOf enum error, we just modify the first message and drop the rest
    if (isEnumError && errorGroup.length > 0) {
      errorGroup[0].message = 'should be equal to one of the allowed values'
      grouped[property] = [errorGroup[0]]
    }
  })

  // Ungroup the errors after potentially modifying them
  errors = flatMap(grouped)

  // Return the transformed errors.
  return errors
}

/**
 * Custom annotations in Synapse are always arrays. This function converts initial data to be an array type.
 * If the initial data is an array, return the data itself.
 * Otherwise, wrap the data in an array.
 */
export function convertToArray<T>(value: T): Array<unknown> {
  if (Array.isArray(value)) {
    return value
  } else {
    return [value]
  }
}

/**
 * Returns true if the default behavior of the form should be to live validate
 * @param existingAnnotations
 * @param validationSchema
 */
export function shouldLiveValidate(
  existingAnnotations: Record<string, unknown> | undefined,
  validationSchema: JSONSchema7 | undefined,
): boolean {
  const hasExistingAnnotations =
    existingAnnotations && Object.keys(existingAnnotations).length > 0
  return Boolean(hasExistingAnnotations && validationSchema)
}

/**
 * Returns all possible properties in the schema, including those in nested schemas/definitions. Note that this function
 * only works for 'flat objects', i.e. the schema must
 *  - define an object AND
 *  - the properties of the object cannot be objects
 * which is compatible with how Synapse Annotations are defined.
 * @param resolvedSchema
 */
export function getPossibleTopLevelPropertiesInObjectSchema(
  resolvedSchema: JSONSchema7,
): JSONSchema7['properties'] {
  const allProperties = {}
  const foundPropertiesObjects = JSONPath({
    path: '$..properties',
    json: resolvedSchema,
  })
  for (const propertiesObject of foundPropertiesObjects) {
    Object.assign(allProperties, propertiesObject)
  }
  // Use the schema.properties to override any properties defined in definitions
  if (isObject(resolvedSchema.properties)) {
    Object.assign(allProperties, resolvedSchema.properties)
  }
  return allProperties
}

/**
 * Get the Synapse entity schema ID for a particular concrete type.
 * @param concreteType
 */
export function getSchemaIdForConcreteType(
  concreteType: string,
): string | null {
  if (!concreteType || !concreteType.startsWith('org.sagebionetworks')) {
    return null
  }
  // e.g. 'org.sagebionetworks.repo.model.FileEntity' -> 'org.sagebionetworks-repo.model.FileEntity'
  return (
    'org.sagebionetworks-' +
    concreteType.substring('org.sagebionetworks'.length + 1)
  )
}

/**
 * Custom string translator for react-jsonschema-form.
 * Overrides the translation for "NewStringDefault" by returning an empty string.
 * For all other keys, falls back to the default English string translator.
 *
 * @param stringToTranslate
 * @param params -  Optional parameters used to format the translated string.
 * @returns - The translated string.
 */
export function customTranslateString(
  stringToTranslate: TranslatableString,
  params?: string[],
): string {
  switch (stringToTranslate) {
    case TranslatableString.NewStringDefault:
      return ''
    default:
      return englishStringTranslator(stringToTranslate, params)
  }
}
