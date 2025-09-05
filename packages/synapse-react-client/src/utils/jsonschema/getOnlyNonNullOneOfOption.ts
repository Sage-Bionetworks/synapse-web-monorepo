import isArray from 'lodash-es/isArray'
import isEqual from 'lodash-es/isEqual'
import isObject from 'lodash-es/isObject'

function isSchemaDescribingNullType(s: any) {
  return (
    isObject(s) &&
    'type' in s &&
    (s.type == 'null' || isEqual(s.type, ['null']))
  )
}

export function getOnlyNonNullOneOfOption(
  jsonSchema: Record<string, unknown>,
): Record<string, unknown> | undefined {
  if (jsonSchema?.oneOf && isArray(jsonSchema.oneOf)) {
    // PORTALS-3723
    // Also handle our special 'oneOf' enum case just like in `getEnumeratedValues`
    const oneOfSchemasOmitNulltype = jsonSchema.oneOf.filter(
      s => !isSchemaDescribingNullType(s),
    )
    if (
      oneOfSchemasOmitNulltype.length == 1 &&
      isObject(oneOfSchemasOmitNulltype[0])
    ) {
      return oneOfSchemasOmitNulltype[0] as Record<string, unknown>
    }
  }

  return undefined
}
