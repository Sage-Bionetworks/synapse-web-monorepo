import { RJSFSchema, UiSchema } from '@rjsf/utils'
import {
  DataAccessRequestType,
  FormTemplate,
} from '@sage-bionetworks/synapse-client'
import { TEMPLATE_FILE_HANDLE_ID_OPTION } from './schemaData'
import {
  contextAppliesForRequestType,
  listResolvedSchemaProperties,
  pointerToPropertyKey,
  requestTypeOnlyContext,
  SchemaPropertyContext,
} from './submissionContext'

/**
 * Describes the inputs to RJSF for a single step in the form.
 */
export type GeneratedFormStepForRjsf = {
  jsonSchema: RJSFSchema
  uiSchema: UiSchema
}

/**
 * A template step left out because every field it binds applies only to the other request type.
 * `position` is the step's 1-based position among all of the template's steps.
 */
export type HiddenFormStep = { position: number; title: string }

export type GeneratedFormSchemaForRjsf = {
  steps: GeneratedFormStepForRjsf[]
  /** Steps left out for the request type, in template order. */
  hiddenSteps: HiddenFormStep[]
}

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
 * @returns A bundle of per-step (jsonSchema, uiSchema) objects suitable for RJSF, and the steps
 *   left out because all of their fields belong to the other request type.
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
  const hiddenSteps: HiddenFormStep[] = []

  for (const [stepIndex, step] of template.steps.entries()) {
    const properties: Record<string, RJSFSchema> = {}
    const required: string[] = []
    const uiSchema: UiSchema = {}
    const uiOrder: string[] = []
    const resolvedFieldContexts: SchemaPropertyContext[] = []

    for (const field of step.fields) {
      const propertyKey = pointerToPropertyKey(field.schemaPath)
      const resolved = propertyKey ? resolvedByKey.get(propertyKey) : undefined
      if (!resolved) continue
      resolvedFieldContexts.push(resolved.context)
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
      if (field.templateFileHandleId) {
        // The file field's widget offers the template for download
        const fieldUiSchema = uiSchema[resolved.propertyKey] as
          | UiSchema
          | undefined
        uiSchema[resolved.propertyKey] = {
          ...fieldUiSchema,
          'ui:options': {
            ...fieldUiSchema?.['ui:options'],
            [TEMPLATE_FILE_HANDLE_ID_OPTION]: field.templateFileHandleId,
          },
        }
      }
      uiOrder.push(resolved.propertyKey)
    }

    if (uiOrder.length === 0) {
      // With no field for this request type, any field that resolves belongs to the other one
      if (requestTypeOnlyContext(resolvedFieldContexts)) {
        hiddenSteps.push({ position: stepIndex + 1, title: step.title })
      }
      continue
    }

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

  return { steps, hiddenSteps }
}
