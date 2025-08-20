import { EnumOptionsType, optionsList } from '@rjsf/utils'
import isArray from 'lodash-es/isArray'
import isEqual from 'lodash-es/isEqual'
import isObject from 'lodash-es/isObject'

type EnumeratedValue =
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

function isSchemaDescribingNullType(s: any) {
  return (
    isObject(s) &&
    'type' in s &&
    (s.type == 'null' || isEqual(s.type, ['null']))
  )
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
  jsonSchema: Record<string, any>,
): { value: EnumeratedValue }[] {
  let rjsfOptionsList: EnumOptionsType[] = []

  if (jsonSchema?.oneOf && !isOneOfSchemaDescribingEnum(jsonSchema.oneOf)) {
    // PORTALS-3723
    // RJSF assumes that a schema with a `oneOf` passed to `optionsList` is a list of options with `const` properties.
    // That is not the case in some of our schemas, so if there is only one `oneOf` schema that does not describe `null`,
    // we use that schema directly.
    const oneOfSchemasOmitNulltype = jsonSchema.oneOf.filter(
      (s: any) => !isSchemaDescribingNullType(s),
    )
    if (
      oneOfSchemasOmitNulltype.length == 1 &&
      isObject(jsonSchema.oneOf[0]) &&
      Object.hasOwn(jsonSchema.oneOf[0], 'enum')
    ) {
      isObject(oneOfSchemasOmitNulltype[0]) &&
      Object.hasOwn(oneOfSchemasOmitNulltype[0], 'enum')
    ) {
      rjsfOptionsList = optionsList(oneOfSchemasOmitNulltype[0]) || []
    }
  } else {
    rjsfOptionsList = optionsList(jsonSchema) || []
  }
  return rjsfOptionsList.map(rjsfOptionsListToValueList)
}
