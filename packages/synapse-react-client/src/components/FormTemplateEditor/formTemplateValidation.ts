import { RJSFSchema } from '@rjsf/utils'
import {
  FormTemplateField,
  FormTemplateStep,
} from '@sage-bionetworks/synapse-client'

/**
 * Reserved for the first-class fields that always render statically outside any authored
 * template (institution, PI, signing official, accessor changes, and the DUC/eDUC file). A
 * template property sharing one of these keys collides with a field the requester will already
 * see, so authoring one produces a warning — never a hard block, since the collision is only
 * cosmetic (both would render) rather than a data-integrity problem the server needs to reject.
 */
export const FIRST_CLASS_RESERVED_PROPERTY_KEYS = [
  'institution',
  'principalInvestigator',
  'signingOfficial',
  'accessorChanges',
  'ducFileHandleId',
] as const

/** Whether an authored top-level property key collides with a first-class field's reserved key. */
export function isFirstClassFieldKeyCollision(propertyKey: string): boolean {
  return (FIRST_CLASS_RESERVED_PROPERTY_KEYS as readonly string[]).includes(
    propertyKey,
  )
}

/**
 * Resolve a single-segment JSON Pointer (e.g. `/institution`) against the schema's top-level
 * `properties`, mirroring how the server resolves a `FormTemplateField.schemaPath`. Returns
 * `undefined` when the pointer is malformed, multi-segment, or does not resolve — all of which
 * the server rejects as "unresolvable schemaPath".
 */
export function resolveSchemaProperty(
  jsonSchema: RJSFSchema,
  schemaPath: string,
): RJSFSchema | undefined {
  if (!schemaPath.startsWith('/')) return undefined
  const segments = schemaPath
    .slice(1)
    .split('/')
    .map(s => s.replace(/~1/g, '/').replace(/~0/g, '~'))
  if (segments.length !== 1 || !segments[0]) return undefined
  const sub = jsonSchema.properties?.[segments[0]]
  if (!sub || typeof sub === 'boolean') return undefined
  return sub as RJSFSchema
}

/**
 * A property is a "leaf" — the only kind a `FormTemplateField.schemaPath` may address — when it
 * is not itself a nested object schema with its own `properties`. The simple editor only ever
 * authors leaves, but the raw JSON Schema escape hatch can produce a nested object.
 */
export function isLeafSchemaProperty(subSchema: RJSFSchema): boolean {
  return !(subSchema.type === 'object' && subSchema.properties != null)
}

/** RJSF `ui:widget` names compatible with each JSON Schema property shape. */
const WIDGET_COMPATIBILITY: Record<string, (subSchema: RJSFSchema) => boolean> =
  {
    textarea: s => s.type === 'string' && !s.enum,
    password: s => s.type === 'string' && !s.enum,
    radio: s =>
      ((s.type === 'string' || s.type === 'boolean') && !!s.enum) ||
      s.type === 'boolean',
    select: s => s.type === 'string' && !!s.enum,
    checkboxes: s => s.type === 'array',
    checkbox: s => s.type === 'boolean',
    updown: s => s.type === 'number' || s.type === 'integer',
    range: s => s.type === 'number' || s.type === 'integer',
  }

/**
 * Whether a field's `uiDefinition` (an RJSF `UiSchema` fragment) declares a `ui:widget`
 * incompatible with the resolved property's type/format. An empty or widget-less `uiDefinition`
 * is always compatible — there is nothing to conflict with.
 */
export function isUiHintCompatible(
  subSchema: RJSFSchema,
  uiDefinition: unknown,
): boolean {
  const widget = (uiDefinition as Record<string, unknown> | undefined)?.[
    'ui:widget'
  ]
  if (typeof widget !== 'string') return true
  const isCompatible = WIDGET_COMPATIBILITY[widget]
  return isCompatible ? isCompatible(subSchema) : true
}

export type FormTemplateFieldValidationError = {
  stepIndex: number
  fieldIndex: number
  schemaPath: string
  message: string
}

/**
 * Replicates the three rules the server enforces on `FormTemplateField` at create/update time
 * (see the `FormTemplateField` doc comment), so the editor can block save and point the error at
 * the offending field before ever reaching the server: the server only returns a flat,
 * concatenated message, not per-field errors.
 */
export function validateFormTemplateFields(
  steps: FormTemplateStep[],
  jsonSchema: RJSFSchema,
): FormTemplateFieldValidationError[] {
  const errors: FormTemplateFieldValidationError[] = []
  const seenSchemaPaths = new Set<string>()

  steps.forEach((step, stepIndex) => {
    step.fields.forEach((field: FormTemplateField, fieldIndex: number) => {
      const { schemaPath } = field

      if (seenSchemaPaths.has(schemaPath)) {
        errors.push({
          stepIndex,
          fieldIndex,
          schemaPath,
          message: `"${schemaPath}" is already bound to another field in this template.`,
        })
        return
      }
      seenSchemaPaths.add(schemaPath)

      const subSchema = resolveSchemaProperty(jsonSchema, schemaPath)
      if (!subSchema) {
        errors.push({
          stepIndex,
          fieldIndex,
          schemaPath,
          message: `"${schemaPath}" does not resolve to a property in the schema.`,
        })
        return
      }

      if (!isLeafSchemaProperty(subSchema)) {
        errors.push({
          stepIndex,
          fieldIndex,
          schemaPath,
          message: `"${schemaPath}" is a nested object, not a single field.`,
        })
        return
      }

      if (!isUiHintCompatible(subSchema, field.uiDefinition)) {
        errors.push({
          stepIndex,
          fieldIndex,
          schemaPath,
          message: `The UI hint for "${schemaPath}" is incompatible with its property type.`,
        })
      }
    })
  })

  return errors
}
