import { JSONSchema7, JSONSchema7Definition } from 'json-schema'
import { resolveRef } from './collectTopLevelProperties'
import { isSchemaDescribingNullType } from './getOnlyNonNullOneOfOption'

/**
 * The `title` that marks the string branch of an age property as the set of
 * values that stand in for a masked age (e.g. ">= 90", "Unknown").
 */
export const AGE_MASK_TITLE = 'AgeMask'

export type AgeMaskInfo = {
  numericType: 'number' | 'integer'
  sentinels: string[]
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
): AgeMaskInfo['numericType'] | undefined {
  return branch.type === 'number' || branch.type === 'integer'
    ? branch.type
    : undefined
}

function getSentinels(branch: JSONSchema7): string[] | undefined {
  if (branch.title !== AGE_MASK_TITLE || branch.type !== 'string') {
    return undefined
  }
  const values =
    branch.enum ?? (branch.const !== undefined ? [branch.const] : [])
  return values.length > 0 && values.every(value => typeof value === 'string')
    ? values
    : undefined
}

function matchBranches(
  numericBranch: JSONSchema7,
  maskBranch: JSONSchema7,
): AgeMaskInfo | null {
  const numericType = getNumericType(numericBranch)
  const sentinels = getSentinels(maskBranch)
  return numericType && sentinels ? { numericType, sentinels } : null
}

/**
 * Detects a masked age property: an `anyOf` (or `oneOf`) whose values are either
 * a number or one of the strings in an `enum` (or `const`) branch titled
 * {@link AGE_MASK_TITLE}. Branches may appear in either order, may be local
 * `#/definitions/` references, and may be accompanied by a `null` branch.
 *
 * @param propertySchema the schema of a single property
 * @param definitions the root schema's `definitions`, used to resolve `$ref` branches
 * @returns the numeric branch's type and the sentinel strings, or null if the
 * property is not a masked age
 */
export function getAgeMaskInfo(
  propertySchema: JSONSchema7Definition | undefined,
  definitions?: Definitions,
): AgeMaskInfo | null {
  if (typeof propertySchema !== 'object') {
    return null
  }
  const branches = propertySchema.anyOf ?? propertySchema.oneOf
  if (!branches) {
    return null
  }

  const nonNullBranches = branches
    .map(branch => resolveBranch(branch, definitions))
    .filter(branch => !isSchemaDescribingNullType(branch))
  if (nonNullBranches.length !== 2) {
    return null
  }

  const [first, second] = nonNullBranches
  if (!first || !second) {
    return null
  }
  return matchBranches(first, second) ?? matchBranches(second, first)
}
