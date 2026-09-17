/*
 * Network orchestration for saving a FormTemplate draft: pre-flight client-side validation
 * (mirroring the server's per-field rules, since the server only returns a flat message),
 * registering a new JSON Schema version when the schema body changed, and creating or updating
 * the FormTemplate against that schema version.
 */
import { useCreateJsonSchema } from '@/synapse-queries/jsonschema/useCreateJsonSchema'
import {
  useCreateFormTemplate,
  useUpdateFormTemplate,
} from '@/synapse-queries/dataaccess/useFormTemplate'
import { FormTemplate, JsonSchema } from '@sage-bionetworks/synapse-client'
import { RJSFSchema } from '@rjsf/utils'
import isEqual from 'lodash-es/isEqual'
import { EditableFormTemplateStep, toFormTemplateSteps } from './utils'
import {
  FormTemplateFieldValidationError,
  validateFormTemplateFields,
} from './formTemplateValidation'

export type SaveFormTemplateDraftParams = {
  initialTemplate?: FormTemplate
  initialJsonSchema?: RJSFSchema
  name: string
  jsonSchema: RJSFSchema
  steps: EditableFormTemplateStep[]
}

export type SaveFormTemplateDraftResult =
  | { ok: true; template: FormTemplate }
  | { ok: false; validationErrors: FormTemplateFieldValidationError[] }

/**
 * Owns the create-schema, create-template, and update-template mutations, and sequences them
 * into a single save operation. Network failures (including a 412 conflict from a concurrent
 * edit) are left to reject from `save()` for the caller to catch and present.
 */
export function useSaveFormTemplate() {
  const createSchema = useCreateJsonSchema()
  const createTemplate = useCreateFormTemplate()
  const updateTemplate = useUpdateFormTemplate()

  const isSaving =
    createSchema.isPending ||
    createTemplate.isPending ||
    updateTemplate.isPending

  async function save(
    params: SaveFormTemplateDraftParams,
  ): Promise<SaveFormTemplateDraftResult> {
    const formTemplateSteps = toFormTemplateSteps(params.steps)

    const validationErrors = validateFormTemplateFields(
      formTemplateSteps,
      params.jsonSchema,
    )
    if (validationErrors.length > 0) {
      return { ok: false, validationErrors }
    }

    // The schema registry has no update operation — every save that changed the schema body
    // registers a fresh, immutable version. Re-registering an unchanged body would still create
    // an unnecessary version, so skip it when the draft's schema matches what was last resolved.
    let schema$id = params.initialTemplate?.schema$id ?? ''
    const schemaChanged = !isEqual(params.jsonSchema, params.initialJsonSchema)
    if (schemaChanged || !schema$id) {
      const response = await createSchema.mutateAsync(
        params.jsonSchema as JsonSchema,
      )
      schema$id = response.newVersionInfo!.$id!
    }

    const formTemplate: FormTemplate = {
      ...params.initialTemplate,
      name: params.name,
      schema$id,
      steps: formTemplateSteps,
    }

    const template = params.initialTemplate?.id
      ? await updateTemplate.mutateAsync({
          templateId: params.initialTemplate.id,
          formTemplate,
        })
      : await createTemplate.mutateAsync(formTemplate)

    return { ok: true, template }
  }

  return { save, isSaving }
}
