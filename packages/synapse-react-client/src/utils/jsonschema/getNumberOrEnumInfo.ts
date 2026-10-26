import { JSONSchema7, JSONSchema7Definition } from 'json-schema'
import { resolveRef } from './collectTopLevelProperties'
import { isSchemaDescribingNullType } from './getOnlyNonNullOneOfOption'

export type NumberOrEnumInfo = {
  numericType: 'number' | 'integer'
  enumValues: string[]
}

type Definitions = JSONSchema7['definitions']

function resolveBranch(
  branch: JSONSchema7Definition,
  definitions: Definitions,
): JSONSchema7 | undefined {
  if (typeof branch !== 'object') {
    return undefined
  }
  return branch.$ref ? resolveRef(branch.$ref, definitions) : branch
}

function getNumericType(
  branch: JSONSchema7,
): NumberOrEnumInfo['numericType'] | undefined {
  return branch.type === 'number' || branch.type === 'integer'
    ? branch.type
    : undefined
}

function getStringEnumValues(branch: JSONSchema7): string[] | undefined {
  if (branch.type !== undefined && branch.type !== 'string') {
    return undefined
  }
  const values =
    branch.enum ?? (branch.const !== undefined ? [branch.const] : [])
  return values.length > 0 && values.every(value => typeof value === 'string')
    ? values
    : undefined
}

/**
 * Detects a property whose values are either a number or one of a closed set of
 * strings, such as a masked age (`43` or ">= 90") or a measurement that may be
 * "N/A". The property must be an `anyOf` (or `oneOf`) with exactly one `number`
 * or `integer` branch and one or more branches that each allow only strings,
 * through an `enum` or a `const`. Branches may appear in any order, may be local
 * `#/definitions/` references, and may be accompanied by `null` branches.
 *
 * @param propertySchema the schema of a single property
 * @param definitions the root schema's `definitions`, used to resolve `$ref` branches
 * @returns the numeric branch's type and the allowed strings, or null if the
 * property is not such a union
 */
export function getNumberOrEnumInfo(
  propertySchema: JSONSchema7Definition | undefined,
  definitions?: Definitions,
): NumberOrEnumInfo | null {
  if (typeof propertySchema !== 'object') {
    return null
  }
  const branches = propertySchema.anyOf ?? propertySchema.oneOf
  if (!branches) {
    return null
  }

  let numericType: NumberOrEnumInfo['numericType'] | undefined
  const enumValues = new Set<string>()
  const nonNullBranches = branches
    .map(branch => resolveBranch(branch, definitions))
    .filter(branch => !isSchemaDescribingNullType(branch))

  for (const branch of nonNullBranches) {
    if (!branch) {
      return null
    }
    const branchNumericType = getNumericType(branch)
    if (branchNumericType && !numericType) {
      numericType = branchNumericType
      continue
    }
    // Any branch that is neither the numeric branch nor a closed set of strings
    // (including a second numeric branch) makes the union something else
    const branchValues = getStringEnumValues(branch)
    if (!branchValues) {
      return null
    }
    branchValues.forEach(value => enumValues.add(value))
  }

  return numericType && enumValues.size > 0
    ? { numericType, enumValues: [...enumValues] }
    : null
}
