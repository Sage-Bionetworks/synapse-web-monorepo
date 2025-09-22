import { getOnlyNonNullOneOfOption } from '@/utils/jsonschema/getOnlyNonNullOneOfOption'
import { JSONSchema7 } from 'json-schema'
import isArray from 'lodash-es/isArray'

export interface TypeInfo {
  type: string
  itemType?: TypeInfo
  isArray: boolean
}

export function getType(jsonSchema: JSONSchema7): TypeInfo | undefined {
  if (jsonSchema.type) {
    if (jsonSchema.type === 'array' && jsonSchema.items) {
      const items = Array.isArray(jsonSchema.items)
        ? jsonSchema.items[0] // Take first item if tuple
        : jsonSchema.items

      const itemTypeInfo = getType(items as JSONSchema7)

      return {
        type: 'array',
        itemType: itemTypeInfo,
        isArray: true,
      }
    }

    return {
      type: jsonSchema.type as string,
      isArray: false,
    }
  }

  if (jsonSchema?.oneOf && isArray(jsonSchema.oneOf)) {
    const oneOfOption = getOnlyNonNullOneOfOption(
      jsonSchema as Record<string, unknown>,
    )
    if (oneOfOption) {
      return getType(oneOfOption as JSONSchema7)
    }
  }

  return undefined
}
