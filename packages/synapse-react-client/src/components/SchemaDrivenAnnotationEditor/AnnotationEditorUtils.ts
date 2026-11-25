import { ALLOWED_VALUES_MESSAGE } from '@/components/JsonSchemaForm/JsonSchemaFormValidator'
import { AdditionalPropertiesSchemaField } from '@/components/SchemaDrivenAnnotationEditor/field/AdditionalPropertiesSchemaField'
import { collectTopLevelProperties } from '@/utils/jsonschema/collectTopLevelProperties'
import {
  ADDITIONAL_PROPERTY_FLAG,
  englishStringTranslator,
  hasSchemaMarker,
  RJSFValidationError,
  SchemaUtilsType,
  TranslatableString,
} from '@rjsf/utils'
import { JSONSchema7, JSONSchema7Definition } from 'json-schema'
import { flatMap, groupBy, isEmpty } from 'lodash-es'

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
  const entitySchemaProperties = collectTopLevelProperties(entitySchema)

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

/** The error names (ajv keywords) a value missing every option of an anyOf enum produces. */
const ANY_OF_ENUM_ERROR_NAMES: Record<string, true> = {
  type: true,
  const: true,
  anyOf: true,
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
    const hasAnyOfError = errorGroup.some(e => e.name === 'anyOf')

    // It's an anyOf *enum* error if every error on the property comes from the anyOf or one of
    // its `type`/`const` options
    const isEnumError =
      hasAnyOfError &&
      errorGroup.every(
        error => ANY_OF_ENUM_ERROR_NAMES[error.name ?? ''] === true,
      )

    // If it's an anyOf enum error, we just modify the first message and drop the rest
    if (isEnumError && errorGroup.length > 0) {
      errorGroup[0].message = ALLOWED_VALUES_MESSAGE
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

export type AnnotationFormData = Record<string, unknown>

function isDeclaredProperty(property: JSONSchema7Definition | undefined) {
  return (
    typeof property === 'object' &&
    !hasSchemaMarker(property, ADDITIONAL_PROPERTY_FLAG)
  )
}

/**
 * Puts annotation form data in the shape Synapse stores annotations in, under the schema the data selects:
 * - a custom annotation (an additional property) is an array;
 * - a schema-defined property that is not an array holds a single value, so a custom annotation that the schema comes to
 *   define (e.g. through a conditional) is joined into a string.
 *
 * Given the data before an edit, it also keeps the values of schema-defined properties that the edit took out of the
 * schema (e.g. by flipping a conditional), as custom annotations. RJSF drops a value whose field left the form unless it
 * can render the value as an additional property, which it can't for an array.
 *
 * Pure, so it can be the form's `transformChange`. Unchanged values are returned as they are.
 */
export function shapeAnnotationFormData(
  schemaUtils: SchemaUtilsType<AnnotationFormData>,
  schema: JSONSchema7,
  next: AnnotationFormData | undefined,
  previous?: AnnotationFormData,
): AnnotationFormData | undefined {
  if (!next) {
    return next
  }
  const properties = schemaUtils.retrieveSchema(schema, next).properties ?? {}
  let shaped = next
  const set = (key: string, value: unknown) => {
    if (shaped === next) {
      shaped = { ...next }
    }
    shaped[key] = value
  }
  for (const [key, value] of Object.entries(next)) {
    const property = properties[key]
    if (typeof property !== 'object' || value === undefined) {
      continue
    }
    if (hasSchemaMarker(property, ADDITIONAL_PROPERTY_FLAG)) {
      if (!Array.isArray(value)) {
        set(key, convertToArray(value))
      }
    } else if (
      property.type !== undefined &&
      property.type !== 'array' &&
      Array.isArray(value)
    ) {
      set(key, value.map(v => `${v}`).join(', '))
    }
  }
  if (previous) {
    const previousProperties =
      schemaUtils.retrieveSchema(schema, previous).properties ?? {}
    for (const [key, value] of Object.entries(previous)) {
      if (
        value != null &&
        !Object.hasOwn(next, key) &&
        isDeclaredProperty(previousProperties[key]) &&
        !isDeclaredProperty(properties[key])
      ) {
        set(key, convertToArray(value))
      }
    }
  }
  return shaped
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
