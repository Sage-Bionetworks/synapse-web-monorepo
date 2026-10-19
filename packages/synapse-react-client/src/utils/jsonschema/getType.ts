import { getOnlyNonNullOneOfOption } from '@/utils/jsonschema/getOnlyNonNullOneOfOption'
import { JSONSchema7 } from 'json-schema'
import isArray from 'lodash-es/isArray'

export interface FlatTypeInfo {
  type: string
  format?: string
  isArray: boolean
  readOnly?: boolean
}

const defaultFlatTypeInfo: FlatTypeInfo = {
  type: 'string',
  isArray: false,
}

export function getFlatTypeInfo(jsonSchema: JSONSchema7): FlatTypeInfo {
  const flatTypeInfo: FlatTypeInfo = {
    ...defaultFlatTypeInfo,
  }

  if (jsonSchema.format) {
    flatTypeInfo.format = jsonSchema.format
  }

  if (jsonSchema.readOnly) {
    flatTypeInfo.readOnly = jsonSchema.readOnly
  }

  if (jsonSchema.type) {
    if (jsonSchema.type === 'array' && jsonSchema.items) {
      const items = Array.isArray(jsonSchema.items)
        ? jsonSchema.items[0] // Take first item if tuple, assume same type for all
        : jsonSchema.items

      const itemTypeInfo: FlatTypeInfo =
        getFlatTypeInfo(items as JSONSchema7) ?? defaultFlatTypeInfo

      return { ...flatTypeInfo, ...itemTypeInfo, isArray: true }
    }

    return { ...flatTypeInfo, type: jsonSchema.type as string }
  }

  if (jsonSchema?.oneOf && isArray(jsonSchema.oneOf)) {
    const oneOfOption = getOnlyNonNullOneOfOption(
      jsonSchema as Record<string, unknown>,
    )
    if (oneOfOption) {
      // A nullable property commonly declares its type in the oneOf option while
      // keeping annotations like `format` and `readOnly` at the parent level, so
      // the parent's are retained wherever the option does not restate them.
      return {
        ...flatTypeInfo,
        ...getFlatTypeInfo(oneOfOption as JSONSchema7),
      }
    }
  }

  return flatTypeInfo
}
