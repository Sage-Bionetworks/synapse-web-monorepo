import { JSONSchema7, JSONSchema7Definition } from 'json-schema'

const DEFINITIONS_PREFIX = '#/definitions/'

function resolveRef(
  ref: string,
  definitions: Record<string, JSONSchema7Definition> | undefined,
): JSONSchema7Definition | undefined {
  if (!definitions) {
    return undefined
  }
  const key = ref.startsWith(DEFINITIONS_PREFIX)
    ? ref.slice(DEFINITIONS_PREFIX.length)
    : ref
  return definitions[key]
}

function collectFromNode(
  node: JSONSchema7Definition | undefined,
  definitions: Record<string, JSONSchema7Definition> | undefined,
  visitedRefs: Set<string>,
  seen: Set<string>,
  result: string[],
): void {
  if (node == null || typeof node === 'boolean') {
    return
  }

  if (node.$ref != null) {
    if (visitedRefs.has(node.$ref)) {
      return
    }
    visitedRefs.add(node.$ref)
    collectFromNode(
      resolveRef(node.$ref, definitions),
      definitions,
      visitedRefs,
      seen,
      result,
    )
    return
  }

  if (node.properties) {
    for (const name of Object.keys(node.properties)) {
      if (!seen.has(name)) {
        seen.add(name)
        result.push(name)
      }
    }
  }

  collectFromAll(node.allOf, definitions, visitedRefs, seen, result)
  collectFromAll(node.anyOf, definitions, visitedRefs, seen, result)
  collectFromAll(node.oneOf, definitions, visitedRefs, seen, result)
  collectFromNode(node.if, definitions, visitedRefs, seen, result)
  collectFromNode(node.then, definitions, visitedRefs, seen, result)
  collectFromNode(node.else, definitions, visitedRefs, seen, result)
}

function collectFromAll(
  nodes: JSONSchema7Definition[] | undefined,
  definitions: Record<string, JSONSchema7Definition> | undefined,
  visitedRefs: Set<string>,
  seen: Set<string>,
  result: string[],
): void {
  if (!nodes) {
    return
  }
  for (const node of nodes) {
    collectFromNode(node, definitions, visitedRefs, seen, result)
  }
}

/**
 * Collects the top-level property names that could appear on an instance validated by `schema`, in
 * first-encountered order (first occurrence wins). Follows schema combination keywords (`$ref`,
 * `allOf`, `anyOf`, `oneOf`, `if`/`then`/`else`) so properties declared in referenced or composed
 * sub-schemas are included. Does NOT descend into a property's own value, `items`, `contains`,
 * `additionalProperties`, or `not` -- ports the walk in Synapse's `JsonSchemaProperties.java`
 * (org.sagebionetworks.repo.model.schema) for use on an already-dereferenced schema.
 */
export function collectTopLevelSchemaProperties(
  schema: JSONSchema7 | undefined | null,
): string[] {
  const result: string[] = []
  if (schema == null) {
    return result
  }

  collectFromNode(schema, schema.definitions, new Set(), new Set(), result)

  return result
}
