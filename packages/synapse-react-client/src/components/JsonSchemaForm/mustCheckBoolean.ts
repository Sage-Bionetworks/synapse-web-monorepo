import { RJSFSchema, RJSFValidationError } from '@rjsf/utils'

/** Shown against a must-be-true boolean that a requester has not checked. */
export const MUST_CHECK_ERROR_MESSAGE = 'You must check this box to continue'

/**
 * True for a boolean the schema only accepts as `true` (`{ type: 'boolean', const: true }`), which
 * a requester answers by checking a box, such as agreeing to terms.
 */
export function isMustCheckBoolean(schema: RJSFSchema | undefined): boolean {
  return schema?.type === 'boolean' && schema.const === true
}

/** The validator names a field `.key` in a `const` error and `key` in a `required` one. */
function errorPropertyKey(error: RJSFValidationError): string | undefined {
  if (error.name !== 'required' && error.name !== 'const') return undefined
  return error.property?.replace(/^\./, '')
}

/**
 * Explain an unchecked must-be-true box with a message a requester can act on, in place of the
 * validator's wording. A step's schema is flat, so each error names one of its top-level properties.
 */
export function explainMustCheckErrors(
  stepSchema: RJSFSchema,
  errors: RJSFValidationError[],
): RJSFValidationError[] {
  return errors.map(error => {
    const propertyKey = errorPropertyKey(error)
    const property = propertyKey
      ? stepSchema.properties?.[propertyKey]
      : undefined
    if (typeof property !== 'object' || !isMustCheckBoolean(property)) {
      return error
    }
    return { ...error, message: MUST_CHECK_ERROR_MESSAGE }
  })
}
