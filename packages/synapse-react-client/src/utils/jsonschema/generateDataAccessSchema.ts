import { RJSFSchema, UiSchema } from '@rjsf/utils'
import {
  DataAccessRequestType,
  FormTemplate,
} from '@sage-bionetworks/synapse-client'
import {
  contextAppliesForRequestType,
  listResolvedSchemaProperties,
  pointerToPropertyKey,
} from './submissionContext'

/**
 * Describes the inputs to RJSF for a single step in the form.
 */
export type GeneratedFormStepForRjsf = {
  jsonSchema: RJSFSchema
  uiSchema: UiSchema
}

export type GeneratedFormSchemaForRjsf = { steps: GeneratedFormStepForRjsf[] }

/**
 * Generate a per-step (jsonSchema, uiSchema) bundle from a FormTemplate and its referenced JSON
 * Schema body. Each step's `jsonSchema` slices the referenced schema to the properties targeted
 * by that step's fields, with the step's title/description encoded as `jsonSchema.title` /
 * `jsonSchema.description`. A field whose property only applies to the other `requestType` (per
 * the `x-synapse-submissionContext` convention -- see `./submissionContext`) is omitted.
 *
 * @param template The form template defining the steps and fields.
 * @param schema The full JSON Schema referenced by the form template.
 * @param requestType The type of data access request, used to filter fields based on context.
 * @returns A bundle of per-step (jsonSchema, uiSchema) objects suitable for RJSF.
 */
export function generateDataAccessSchema(
  template: FormTemplate,
  schema: RJSFSchema,
  requestType: DataAccessRequestType = DataAccessRequestType.REQUEST,
): GeneratedFormSchemaForRjsf {
  const resolvedByKey = new Map(
    listResolvedSchemaProperties(schema).map(p => [p.propertyKey, p]),
  )

  const steps: GeneratedFormStepForRjsf[] = []

  for (const step of template.steps) {
    const properties: Record<string, RJSFSchema> = {}
    const required: string[] = []
    const uiSchema: UiSchema = {}
    const uiOrder: string[] = []

    for (const field of step.fields) {
      const propertyKey = pointerToPropertyKey(field.schemaPath)
      const resolved = propertyKey ? resolvedByKey.get(propertyKey) : undefined
      if (!resolved) continue
      if (!contextAppliesForRequestType(resolved.context, requestType)) {
        continue
      }

      properties[resolved.propertyKey] = { ...resolved.subSchema }
      if (resolved.isRequired) {
        required.push(resolved.propertyKey)
      }
      if (field.uiDefinition && Object.keys(field.uiDefinition).length > 0) {
        uiSchema[resolved.propertyKey] = { ...(field.uiDefinition as UiSchema) }
      }
      uiOrder.push(resolved.propertyKey)
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
