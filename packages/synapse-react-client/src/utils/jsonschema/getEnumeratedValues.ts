import { getOnlyNonNullOneOfOption } from '@/utils/jsonschema/getOnlyNonNullOneOfOption'
import { EnumOptionsType, optionsList } from '@rjsf/utils'
import isArray from 'lodash-es/isArray'
import isObject from 'lodash-es/isObject'

export type EnumeratedValue =
  | string
  | number
  | boolean
  | null
  | Record<string, unknown>
  | Array<unknown>

// maps the RJSF type to our type, so we are not dependent on the RJSF type
function rjsfOptionsListToValueList(option: EnumOptionsType): {
  value: EnumeratedValue
} {
  return { value: option.value as EnumeratedValue }
}

function isOneOfSchemaDescribingEnum(
  oneOfSchemas: any,
): oneOfSchemas is Array<Record<string, unknown>> {
  // RJSF allows describing an enum using `oneOf` where every schema has a `const` property. We must check this
  // before we pass it to RJSF's `optionsList` function.
  return (
    isArray(oneOfSchemas) &&
    oneOfSchemas.every(s => isObject(s) && 'const' in s)
  )
}

/**
 * Returns a list of enumerated values from the given JSON schema.
 * @param jsonSchema the JSON schema to extract enumerated values from
 * @returns an array of values that are valid options for the schema
 */
export default function getEnumeratedValues(
  jsonSchema: Record<string, unknown>,
): { value: EnumeratedValue }[] {
  let rjsfOptionsList: EnumOptionsType[] = []

  try {
    if (
      jsonSchema?.oneOf &&
      isArray(jsonSchema.oneOf) &&
      !isOneOfSchemaDescribingEnum(jsonSchema.oneOf)
    ) {
      // PORTALS-3723
      // RJSF assumes that a schema with a `oneOf` passed to `optionsList` is a list of options with `const` properties.
      // That is not the case in some of our schemas, so if there is only one `oneOf` schema that does not describe `null`,
      // we use that schema directly.
      const nonNullOneOfOption = getOnlyNonNullOneOfOption(jsonSchema)
      if (nonNullOneOfOption && Object.hasOwn(nonNullOneOfOption, 'enum')) {
        rjsfOptionsList = optionsList(nonNullOneOfOption) || []
      }
    } else {
      rjsfOptionsList = optionsList(jsonSchema) || []
    }
  } catch (e) {
    // optionsList can throw if the schema does not describe an enumeration
    console.error('Error getting enumerated values from schema', e, jsonSchema)
  }
  return rjsfOptionsList.map(rjsfOptionsListToValueList)
}
