/**
 * Convention for gating a JSON Schema property to a data access REQUEST or RENEWAL submission.
 *
 * The server no longer resolves a per-field submission context -- `FormTemplateField` is losing
 * its `submissionContext` property (PLFM-9449, design v34). The client now expresses this
 * directly in the JSON Schema: a property that should only appear for a RENEWAL (or only for a
 * REQUEST) is declared inside an `allOf` entry keyed on the reserved `x-synapse-submissionContext`
 * property, e.g.:
 *
 * ```json
 * {
 *   "allOf": [{
 *     "if": { "properties": { "x-synapse-submissionContext": { "const": "RENEWAL" } } },
 *     "then": {
 *       "properties": { "summaryOfUse": { "type": "string" } },
 *       "required": ["summaryOfUse"]
 *     }
 *   }]
 * }
 * ```
 *
 * The submitted `schemaData` MUST include `x-synapse-submissionContext`; the server validates
 * that it matches the actual submission context. This module resolves the convention client-side
 * so the FormTemplateEditor's field library, step slots, and preview can discover and render such
 * properties, and provides a guided authoring API (`setSchemaProperty`,
 * `setSchemaPropertyContext`, `setSchemaPropertyRequired`, `removeSchemaProperty`,
 * `renameSchemaProperty`) so ACT can author a Request/Renewal-only field from a "Submission
 * context" select box, without hand-editing `allOf`.
 *
 * PLFM-9449 v34 is design-approved but not yet implemented server-side: production's
 * `FormTemplateField.submissionContext` (the per-field enum this convention replaces) is still
 * live and is what the server actually gates on today. Until the server ships this design, a
 * property authored here as Request-only/Renewal-only has no effect in production -- tracked
 * against PLFM-9449.
 */
import { RJSFSchema } from '@rjsf/utils'
import { DataAccessRequestType } from '@sage-bionetworks/synapse-client'

export const SUBMISSION_CONTEXT_PROPERTY = 'x-synapse-submissionContext'

export type SchemaPropertyContext = 'ALWAYS' | 'REQUEST_ONLY' | 'RENEWAL_ONLY'

export type ResolvedSchemaProperty = {
  propertyKey: string
  subSchema: RJSFSchema
  isRequired: boolean
  context: SchemaPropertyContext
}

type ConditionalBranch = {
  requestType: DataAccessRequestType
  properties: Record<string, RJSFSchema>
  required: Set<string>
}

function contextForRequestType(
  requestType: DataAccessRequestType,
): SchemaPropertyContext {
  return requestType === DataAccessRequestType.REQUEST
    ? 'REQUEST_ONLY'
    : 'RENEWAL_ONLY'
}

/**
 * Parse `schema.allOf` for entries following the `x-synapse-submissionContext` `if`/`then`
 * convention above. Entries that don't match it (an unrelated `if` key, or a missing
 * `then.properties`) are left alone -- they're none of this module's concern.
 */
function readConditionalBranches(schema: RJSFSchema): ConditionalBranch[] {
  const branches: ConditionalBranch[] = []
  for (const entry of schema.allOf ?? []) {
    if (typeof entry === 'boolean') continue
    const ifClause = (entry as RJSFSchema).if
    const thenClause = (entry as RJSFSchema).then
    if (
      !ifClause ||
      typeof ifClause === 'boolean' ||
      !thenClause ||
      typeof thenClause === 'boolean'
    ) {
      continue
    }
    const contextConst = (
      ifClause.properties?.[SUBMISSION_CONTEXT_PROPERTY] as
        | RJSFSchema
        | undefined
    )?.const as DataAccessRequestType | undefined
    if (
      contextConst !== DataAccessRequestType.REQUEST &&
      contextConst !== DataAccessRequestType.RENEWAL
    ) {
      continue
    }
    branches.push({
      requestType: contextConst,
      properties: (thenClause.properties ?? {}) as Record<string, RJSFSchema>,
      required: new Set(thenClause.required ?? []),
    })
  }
  return branches
}

/**
 * Enumerate every leaf property the schema declares -- both unconditional (top-level
 * `properties`) and gated behind an `x-synapse-submissionContext` conditional in `allOf` -- along
 * with which submission context applies to each. The reserved `x-synapse-submissionContext`
 * property itself is never included; it isn't a bindable field.
 */
export function listResolvedSchemaProperties(
  schema: RJSFSchema,
): ResolvedSchemaProperty[] {
  const required = new Set(schema.required ?? [])
  const result: ResolvedSchemaProperty[] = []
  const seen = new Set<string>([SUBMISSION_CONTEXT_PROPERTY])

  for (const [propertyKey, subSchema] of Object.entries(
    (schema.properties ?? {}) as Record<string, RJSFSchema>,
  )) {
    if (seen.has(propertyKey)) continue
    seen.add(propertyKey)
    result.push({
      propertyKey,
      subSchema,
      isRequired: required.has(propertyKey),
      context: 'ALWAYS',
    })
  }

  for (const branch of readConditionalBranches(schema)) {
    for (const [propertyKey, subSchema] of Object.entries(branch.properties)) {
      // An unconditional definition of the same key wins; conditional branches only add
      // properties that aren't already declared at the top level.
      if (seen.has(propertyKey)) continue
      seen.add(propertyKey)
      result.push({
        propertyKey,
        subSchema,
        isRequired: branch.required.has(propertyKey),
        context: contextForRequestType(branch.requestType),
      })
    }
  }

  return result
}

/** The property key addressed by a single-segment JSON Pointer (e.g. `/institution` -> `institution`). */
export function pointerToPropertyKey(pointer: string): string | null {
  if (!pointer.startsWith('/')) return null
  const segment = pointer.slice(1)
  if (!segment || segment.includes('/')) return null
  return segment.replace(/~1/g, '/').replace(/~0/g, '~')
}

/** The single-segment JSON Pointer addressing a property key (e.g. `institution` -> `/institution`),
 * the inverse of `pointerToPropertyKey`. */
export function propertyKeyToPointer(propertyKey: string): string {
  return `/${propertyKey.replace(/~/g, '~0').replace(/\//g, '~1')}`
}

/** Resolve a `FormTemplateField.schemaPath`-style JSON Pointer, applying the same rules as
 * `listResolvedSchemaProperties`. */
export function resolveSchemaPropertyAtPointer(
  schema: RJSFSchema,
  pointer: string,
): ResolvedSchemaProperty | undefined {
  const propertyKey = pointerToPropertyKey(pointer)
  if (!propertyKey) return undefined
  return listResolvedSchemaProperties(schema).find(
    p => p.propertyKey === propertyKey,
  )
}

/** Whether a property's context applies for the given requestType (`ALWAYS` always applies). */
export function contextAppliesForRequestType(
  context: SchemaPropertyContext,
  requestType: DataAccessRequestType,
): boolean {
  if (context === 'ALWAYS') return true
  return context === contextForRequestType(requestType)
}

/** Human label for display, e.g. a field library row or step slot badge. */
export function submissionContextLabel(context: SchemaPropertyContext): string {
  switch (context) {
    case 'ALWAYS':
      return 'Always'
    case 'REQUEST_ONLY':
      return 'Request only'
    case 'RENEWAL_ONLY':
      return 'Renewal only'
  }
}

function requestTypeForContext(
  context: SchemaPropertyContext,
): DataAccessRequestType | undefined {
  if (context === 'REQUEST_ONLY') return DataAccessRequestType.REQUEST
  if (context === 'RENEWAL_ONLY') return DataAccessRequestType.RENEWAL
  return undefined
}

/** Index of the `allOf` entry gating on `requestType` per the convention above, or -1. */
function findBranchIndex(
  allOf: (RJSFSchema | boolean)[],
  requestType: DataAccessRequestType,
): number {
  return allOf.findIndex(entry => {
    if (typeof entry === 'boolean') return false
    const ifClause = entry.if
    if (!ifClause || typeof ifClause === 'boolean') return false
    const contextConst = (
      ifClause.properties?.[SUBMISSION_CONTEXT_PROPERTY] as
        | RJSFSchema
        | undefined
    )?.const
    return contextConst === requestType
  })
}

/** Ensure the schema declares `x-synapse-submissionContext` as a required top-level property,
 * so a schema with at least one conditional field is self-describing and matches what the
 * submitted `schemaData` is required to include. A no-op if already declared. */
function ensureSubmissionContextDeclared(schema: RJSFSchema): RJSFSchema {
  const properties = (schema.properties ?? {}) as Record<string, RJSFSchema>
  if (SUBMISSION_CONTEXT_PROPERTY in properties) return schema
  return {
    ...schema,
    properties: {
      ...properties,
      [SUBMISSION_CONTEXT_PROPERTY]: {
        type: 'string',
        enum: [DataAccessRequestType.REQUEST, DataAccessRequestType.RENEWAL],
      },
    },
    required: [...(schema.required ?? []), SUBMISSION_CONTEXT_PROPERTY],
  }
}

/**
 * Remove `propertyKey` from wherever it's currently defined -- the top-level `properties`, and
 * every `allOf` branch's `then` -- dropping now-empty `then.properties`/branches/the `allOf`
 * array itself so relocating or deleting a property never leaves a dangling husk behind.
 */
export function removeSchemaProperty(
  schema: RJSFSchema,
  propertyKey: string,
): RJSFSchema {
  const properties = {
    ...((schema.properties ?? {}) as Record<string, RJSFSchema>),
  }
  let changed = propertyKey in properties
  delete properties[propertyKey]
  const required = (schema.required ?? []).filter(k => k !== propertyKey)

  const allOf = (schema.allOf ?? [])
    .map(entry => {
      if (typeof entry === 'boolean') return entry
      const thenClause = entry.then
      if (!thenClause || typeof thenClause === 'boolean') return entry
      const thenProps = {
        ...((thenClause.properties ?? {}) as Record<string, RJSFSchema>),
      }
      if (!(propertyKey in thenProps)) return entry
      changed = true
      delete thenProps[propertyKey]
      if (Object.keys(thenProps).length === 0) return null
      return {
        ...entry,
        then: {
          ...thenClause,
          properties: thenProps,
          required: (thenClause.required ?? []).filter(k => k !== propertyKey),
        },
      }
    })
    .filter((entry): entry is RJSFSchema | boolean => entry !== null)

  if (!changed) return schema

  const next: RJSFSchema = { ...schema, properties, required }
  if (allOf.length > 0) {
    next.allOf = allOf
  } else {
    delete next.allOf
  }
  return next
}

/**
 * Insert or replace a property's definition at the given submission context, relocating it there
 * from wherever it previously lived. Leaves the property's required-ness behind at its old
 * location -- callers that need to preserve it (e.g. changing a property's context) should
 * follow up with `setSchemaPropertyRequired`.
 */
export function setSchemaProperty(
  schema: RJSFSchema,
  propertyKey: string,
  subSchema: RJSFSchema,
  context: SchemaPropertyContext,
): RJSFSchema {
  const withoutProperty = removeSchemaProperty(schema, propertyKey)
  const requestType = requestTypeForContext(context)

  if (!requestType) {
    return {
      ...withoutProperty,
      properties: {
        ...((withoutProperty.properties ?? {}) as Record<string, RJSFSchema>),
        [propertyKey]: subSchema,
      },
    }
  }

  const base = ensureSubmissionContextDeclared(withoutProperty)
  const allOf = [...(base.allOf ?? [])]
  const branchIndex = findBranchIndex(allOf, requestType)
  if (branchIndex === -1) {
    allOf.push({
      if: {
        properties: { [SUBMISSION_CONTEXT_PROPERTY]: { const: requestType } },
      },
      then: { properties: { [propertyKey]: subSchema }, required: [] },
    })
  } else {
    const entry = allOf[branchIndex] as RJSFSchema
    const thenClause = entry.then as RJSFSchema
    allOf[branchIndex] = {
      ...entry,
      then: {
        ...thenClause,
        properties: {
          ...((thenClause.properties ?? {}) as Record<string, RJSFSchema>),
          [propertyKey]: subSchema,
        },
      },
    }
  }
  return { ...base, allOf }
}

/** Set whether a property is required within its current context's branch (top-level `required`
 * for `ALWAYS`, or the matching `allOf` branch's `then.required` otherwise). A no-op if the
 * property isn't actually defined at that context. */
export function setSchemaPropertyRequired(
  schema: RJSFSchema,
  propertyKey: string,
  context: SchemaPropertyContext,
  isRequired: boolean,
): RJSFSchema {
  const requestType = requestTypeForContext(context)
  if (!requestType) {
    const properties = (schema.properties ?? {}) as Record<string, RJSFSchema>
    if (!(propertyKey in properties)) return schema
    const required = (schema.required ?? []).filter(k => k !== propertyKey)
    if (isRequired) required.push(propertyKey)
    return { ...schema, required }
  }
  const allOf = [...(schema.allOf ?? [])]
  const branchIndex = findBranchIndex(allOf, requestType)
  if (branchIndex === -1) return schema
  const entry = allOf[branchIndex] as RJSFSchema
  const thenClause = entry.then as RJSFSchema
  const thenProperties = (thenClause.properties ?? {}) as Record<
    string,
    RJSFSchema
  >
  if (!(propertyKey in thenProperties)) return schema
  const required = (thenClause.required ?? []).filter(k => k !== propertyKey)
  if (isRequired) required.push(propertyKey)
  allOf[branchIndex] = { ...entry, then: { ...thenClause, required } }
  return { ...schema, allOf }
}

/**
 * Move a property to a different submission context, preserving its definition and
 * required-ness. A no-op if the property doesn't resolve, or is already at that context.
 */
export function setSchemaPropertyContext(
  schema: RJSFSchema,
  propertyKey: string,
  context: SchemaPropertyContext,
): RJSFSchema {
  const resolved = resolveSchemaPropertyAtPointer(schema, `/${propertyKey}`)
  if (!resolved || resolved.context === context) return schema
  const next = setSchemaProperty(
    schema,
    propertyKey,
    resolved.subSchema,
    context,
  )
  return resolved.isRequired
    ? setSchemaPropertyRequired(next, propertyKey, context, true)
    : next
}

/**
 * Rename a property's key wherever it's defined (top-level or an `allOf` branch), preserving its
 * definition, context, and required-ness. A no-op if `oldKey` doesn't resolve.
 */
export function renameSchemaProperty(
  schema: RJSFSchema,
  oldKey: string,
  newKey: string,
): RJSFSchema {
  const resolved = resolveSchemaPropertyAtPointer(schema, `/${oldKey}`)
  if (!resolved) return schema
  const withoutOld = removeSchemaProperty(schema, oldKey)
  const withNew = setSchemaProperty(
    withoutOld,
    newKey,
    resolved.subSchema,
    resolved.context,
  )
  return resolved.isRequired
    ? setSchemaPropertyRequired(withNew, newKey, resolved.context, true)
    : withNew
}
