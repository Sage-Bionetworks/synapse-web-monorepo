import { getOnlyNonNullOneOfOption } from '@/utils/jsonschema/getOnlyNonNullOneOfOption'
import { JSONSchema7Type } from 'json-schema'
import isArray from 'lodash-es/isArray'

export function getType(
  jsonSchema: Record<string, unknown>,
): JSONSchema7Type | undefined {
  if (jsonSchema.type) {
    return jsonSchema.type as JSONSchema7Type
  }
  if (jsonSchema?.oneOf && isArray(jsonSchema.oneOf)) {
    // PORTALS-3723
    // Also handle our special 'oneOf' enum case just like in `getEnumeratedValues`
    const oneOfOption = getOnlyNonNullOneOfOption(jsonSchema)

    if (oneOfOption) {
      return getType(oneOfOption)
    }
  }
  return undefined
}
