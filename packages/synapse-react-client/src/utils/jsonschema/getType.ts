import { getOnlyNonNullOneOfOption } from '@/utils/jsonschema/getOnlyNonNullOneOfOption'
import { JSONSchema7 } from 'json-schema'
import isArray from 'lodash-es/isArray'

export interface FlatTypeInfo {
  type: string
  format?: string
  isArray: boolean
  readOnly?: boolean
}

export function getFlatTypeInfo(
  jsonSchema: JSONSchema7,
): FlatTypeInfo | undefined {
  if (jsonSchema.type) {
    if (jsonSchema.type === 'array' && jsonSchema.items) {
      const items = Array.isArray(jsonSchema.items)
        ? jsonSchema.items[0] // Take first item if tuple, assume same type for all
        : jsonSchema.items

      const itemTypeInfo: FlatTypeInfo = getFlatTypeInfo(
        items as JSONSchema7,
      ) ?? {
        type: 'string',
        isArray: false,
      }

      return {
        ...itemTypeInfo,
        isArray: true,
      }
    }

    return {
      type: jsonSchema.type as string,
      format: jsonSchema.format,
      isArray: false,
      readOnly: jsonSchema.readOnly,
    }
  }

  if (jsonSchema?.oneOf && isArray(jsonSchema.oneOf)) {
    const oneOfOption = getOnlyNonNullOneOfOption(
      jsonSchema as Record<string, unknown>,
    )
    if (oneOfOption) {
      return getFlatTypeInfo(oneOfOption as JSONSchema7)
    }
  }

  return undefined
}
