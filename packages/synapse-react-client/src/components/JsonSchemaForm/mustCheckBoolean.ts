import { RJSFSchema, schemaRequiresTrueValue } from '@rjsf/utils'

/** Shown against a must-be-true boolean that a requester has not checked. */
export const MUST_CHECK_ERROR_MESSAGE = 'You must check this box to continue'

/**
 * True for a boolean the schema only accepts as `true` (e.g. `{ type: 'boolean', const: true }`),
 * which a requester answers by checking a box, such as agreeing to terms.
 */
export function isMustCheckBoolean(schema: RJSFSchema | undefined): boolean {
  return schema?.type === 'boolean' && schemaRequiresTrueValue(schema)
}
