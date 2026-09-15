import { JSONSchema7, JSONSchema7Definition } from 'json-schema'

const DEFINITIONS_PREFIX = '#/definitions/'

type Definitions = NonNullable<JSONSchema7['definitions']>
type TopLevelProperties = Record<string, JSONSchema7Definition>

/**
 * Given a full `#/definitions/X` reference, return the relative key (`X`) used in the definitions
 * map. A reference that is already a bare key is returned as-is.
 */
function getRelativeRef(ref: string): string {
  return ref.startsWith(DEFINITIONS_PREFIX)
    ? ref.substring(DEFINITIONS_PREFIX.length)
    : ref
}

function resolveRef(
  ref: string,
  definitions: Definitions | undefined,
): JSONSchema7 | undefined {
  const resolved = definitions?.[getRelativeRef(ref)]
  // A boolean schema (`true`/`false`) carries no properties to collect
  return typeof resolved === 'object' ? resolved : undefined
}

/**
 * Resolve a property value: if it is a `$ref` it is replaced with the referenced schema. A dangling
 * or unresolvable `$ref` returns the raw node so the property name is preserved with an unknown type.
 */
function resolveProperty(
  property: JSONSchema7Definition,
  definitions: Definitions | undefined,
): JSONSchema7Definition {
  if (typeof property !== 'object' || !property.$ref) {
    return property
  }
  return resolveRef(property.$ref, definitions) ?? property
}

function collect(
  node: JSONSchema7Definition | undefined,
  definitions: Definitions | undefined,
  visitedRefs: Set<string>,
  result: TopLevelProperties,
): void {
  if (typeof node !== 'object') {
    return
  }

  // Follow a combination $ref to the schema it references. Nothing else on a $ref node contributes.
  if (node.$ref) {
    if (visitedRefs.has(node.$ref)) {
      return
    }
    visitedRefs.add(node.$ref)
    collect(
      resolveRef(node.$ref, definitions),
      definitions,
      visitedRefs,
      result,
    )
    return
  }

  if (node.properties) {
    for (const [name, propertySchema] of Object.entries(node.properties)) {
      if (!(name in result)) {
        result[name] = resolveProperty(propertySchema, definitions)
      }
    }
  }

  // Recurse through combination keywords in a fixed, deterministic order.
  node.allOf?.forEach(member =>
    collect(member, definitions, visitedRefs, result),
  )
  node.anyOf?.forEach(member =>
    collect(member, definitions, visitedRefs, result),
  )
  node.oneOf?.forEach(member =>
    collect(member, definitions, visitedRefs, result),
  )
  collect(node.if, definitions, visitedRefs, result)
  collect(node.then, definitions, visitedRefs, result)
  collect(node.else, definitions, visitedRefs, result)
}

/**
 * Collects the names that could appear as a top-level property of an instance validated by the given
 * JSON Schema, keyed by property name. Each value is the `$ref`-resolved schema for that property.
 *
 * The walk follows schema combination keywords (`$ref`, `allOf`, `anyOf`, `oneOf`, `if`, `then`,
 * `else`) so that properties declared in referenced or composed sub-schemas are included. It does
 * NOT descend into a property's own value, `items`, `contains`, `additionalProperties`, or `not`, so
 * the nested properties of an object or the elements of an array are never surfaced as top-level
 * properties.
 *
 * Insertion order is the order in which properties were first encountered, and the first occurrence
 * of a name wins -- so a schema's own properties take precedence over composed/inherited ones.
 *
 * This mirrors the backend's `JsonSchemaProperties.collectTopLevelProperties`, which is what defines
 * a RecordSet's schema columns. Only draft-07 `definitions` references are resolved (not `$defs`),
 * matching that implementation.
 */
export function collectTopLevelProperties(
  root: JSONSchema7 | undefined,
): TopLevelProperties {
  const result: TopLevelProperties = {}
  if (!root) {
    return result
  }
  collect(root, root.definitions, new Set<string>(), result)
  return result
}
