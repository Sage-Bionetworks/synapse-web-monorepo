import { RJSFSchema } from '@rjsf/utils'
import {
  FormTemplateField,
  FormTemplateStep,
} from '@sage-bionetworks/synapse-client'
import {
  listResolvedSchemaProperties,
  pointerToPropertyKey,
  propertyKeyToPointer,
  resolveSchemaPropertyAtPointer,
} from '@/utils/jsonschema/submissionContext'

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
  /** Index of the step/field slot this error is anchored to. Omitted for an error against a
   * schema-required property that isn't bound to any field -- there is no slot to anchor it to. */
  stepIndex?: number
  fieldIndex?: number
  schemaPath: string
  message: string
}

/**
 * Replicates the three rules the server enforces on `FormTemplateField` at create/update time
 * (see the `FormTemplateField` doc comment), so the editor can block save and point the error at
 * the offending field before ever reaching the server: the server only returns a flat,
 * concatenated message, not per-field errors. Also flags a schema property the server will
 * require (per its resolved submission context) that no field in the template binds to -- the
 * server accepts this silently, but the requester would then be unable to satisfy it.
 */
export function validateFormTemplateFields(
  steps: FormTemplateStep[],
  jsonSchema: RJSFSchema,
): FormTemplateFieldValidationError[] {
  const errors: FormTemplateFieldValidationError[] = []
  const seenSchemaPaths = new Set<string>()
  const boundPropertyKeys = new Set<string>()

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

      const propertyKey = pointerToPropertyKey(schemaPath)
      if (propertyKey) boundPropertyKeys.add(propertyKey)

      const subSchema = resolveSchemaPropertyAtPointer(
        jsonSchema,
        schemaPath,
      )?.subSchema
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

  for (const property of listResolvedSchemaProperties(jsonSchema)) {
    if (property.isRequired && !boundPropertyKeys.has(property.propertyKey)) {
      errors.push({
        schemaPath: propertyKeyToPointer(property.propertyKey),
        message: `"${property.propertyKey}" is required by the schema but is not bound to any field in this template.`,
      })
    }
  }

  return errors
}
