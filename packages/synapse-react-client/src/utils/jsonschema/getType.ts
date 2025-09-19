import { getOnlyNonNullOneOfOption } from '@/utils/jsonschema/getOnlyNonNullOneOfOption'
import { JSONSchema7Type } from 'json-schema'
import isArray from 'lodash-es/isArray'

export function getType(
  jsonSchema: Record<string, unknown>,
): JSONSchema7Type | string | undefined {
  if (jsonSchema.type) {
    const type = jsonSchema.type as JSONSchema7Type

    // If type is 'array', determine the array element type
    if (type === 'array' && jsonSchema.items) {
      const items = jsonSchema.items as Record<string, unknown>
      const itemType = getType(items)

      if (itemType && typeof itemType === 'string') {
        return `${itemType}[]`
      }
      return 'array'
    }

    return type
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
