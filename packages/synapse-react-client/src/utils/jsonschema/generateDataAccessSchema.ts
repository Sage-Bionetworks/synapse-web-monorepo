import { RJSFSchema, UiSchema } from '@rjsf/utils'
import {
  FormTemplate,
  GenerateDataAccessSchemaResponse,
  GenerateDataAccessSchemaStep,
  SubmissionContext,
  SubmissionRequestType,
} from '@/utils/types/AccessRequirementFormTypes'

/**
 * Resolve a JSON Pointer (RFC 6901) into a JSON Schema, returning the
 * referenced sub-schema. Supports the common single-segment pointers used by
 * FormTemplateField.schemaPath (e.g. "/institution"). Returns undefined if
 * the path cannot be resolved.
 */
function resolveJsonPointer(
  schema: RJSFSchema,
  pointer: string,
): { propertyName: string; subSchema: RJSFSchema } | undefined {
  if (!pointer.startsWith('/')) return undefined
  const segments = pointer
    .slice(1)
    .split('/')
    .map(s => s.replace(/~1/g, '/').replace(/~0/g, '~'))

  // We only support one-level property pointers in this prototype.
  if (segments.length !== 1) return undefined
  const propertyName = segments[0]
  const sub = schema.properties?.[propertyName]
  if (!sub || typeof sub === 'boolean') return undefined
  return { propertyName, subSchema: sub as RJSFSchema }
}

/** Whether a field's submission context applies for the given requestType. */
function fieldAppliesForContext(
  context: SubmissionContext,
  requestType: SubmissionRequestType,
): boolean {
  if (context === SubmissionContext.ALWAYS) return true
  if (context === SubmissionContext.REQUEST_ONLY)
    return requestType === 'REQUEST'
  if (context === SubmissionContext.RENEWAL_ONLY)
    return requestType === 'RENEWAL'
  return false
}

/**
 * Generate a per-step (jsonSchema, uiSchema) bundle from a FormTemplate and
 * its referenced JSON Schema body. Mirrors the server-side
 * `GenerateDataAccessSchemaResponse`: each step's `jsonSchema` slices the
 * referenced schema to the properties targeted by that step's surviving
 * fields, with the step's title/description encoded as
 * `jsonSchema.title` / `jsonSchema.description`.
 */
export function generateDataAccessSchema(
  template: FormTemplate,
  schema: RJSFSchema,
  requestType: SubmissionRequestType = 'REQUEST',
): GenerateDataAccessSchemaResponse {
  const requiredSet = new Set<string>(
    Array.isArray(schema.required) ? schema.required : [],
  )

  const steps: GenerateDataAccessSchemaStep[] = []

  for (const step of template.steps) {
    const properties: Record<string, RJSFSchema> = {}
    const required: string[] = []
    const uiSchema: UiSchema = {}
    const uiOrder: string[] = []

    for (const field of step.fields) {
      if (!fieldAppliesForContext(field.submissionContext, requestType)) {
        continue
      }
      const resolved = resolveJsonPointer(schema, field.schemaPath)
      if (!resolved) continue

      const { propertyName, subSchema } = resolved
      properties[propertyName] = { ...subSchema }
      if (requiredSet.has(propertyName)) {
        required.push(propertyName)
      }
      if (field.uiDefinition && Object.keys(field.uiDefinition).length > 0) {
        uiSchema[propertyName] = { ...field.uiDefinition }
      }
      uiOrder.push(propertyName)
    }

    if (uiOrder.length === 0) continue

    const stepJsonSchema: RJSFSchema = {
      type: 'object',
      title: step.title,
      properties,
    }
    if (step.description) {
      stepJsonSchema.description = step.description
    }
    if (required.length > 0) {
      stepJsonSchema.required = required
    }
    uiSchema['ui:order'] = uiOrder

    steps.push({ jsonSchema: stepJsonSchema, uiSchema })
  }

  return { steps }
}
