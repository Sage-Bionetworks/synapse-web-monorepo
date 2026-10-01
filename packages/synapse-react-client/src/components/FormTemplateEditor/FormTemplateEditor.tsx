/*
 * Data-fetching shell for the FormTemplate authoring experience. Resolves an existing template
 * and the JSON Schema it references (when `templateId` is given), then hands the resolved data
 * to `FormTemplateEditorForm`, which owns the actual editing state and save orchestration.
 * Passing no `templateId` opens a blank editor for creating a new template.
 *
 * The schema is loaded as registered, with its `$ref`s intact, so that saving a new version
 * preserves the reference to the base schema rather than inlining it.
 */
import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'
import { useGetFormTemplate } from '@/synapse-queries/dataaccess/useFormTemplate'
import { useGetRegisteredSchema } from '@/synapse-queries/jsonschema/useSchema'
import { Alert, Paper } from '@mui/material'
import { RJSFSchema } from '@rjsf/utils'
import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { FormTemplateEditorForm } from './FormTemplateEditorForm'

export type FormTemplateEditorProps = {
  /** Existing template to open for editing, or undefined to create a new one. */
  templateId?: string
  /** Called after the template is successfully created or a new version is saved. */
  onSaved?: (template: FormTemplate) => void
  onCancel?: () => void
}

export function FormTemplateEditor({
  templateId,
  onSaved,
  onCancel,
}: FormTemplateEditorProps) {
  const {
    data: template,
    isLoading: isLoadingTemplate,
    error: templateError,
  } = useGetFormTemplate(templateId)

  const {
    data: jsonSchema,
    isLoading: isLoadingSchema,
    error: schemaError,
  } = useGetRegisteredSchema(template?.schema$id ?? '', {
    enabled: !!template?.schema$id,
  })

  if (templateId && (isLoadingTemplate || (template && isLoadingSchema))) {
    return (
      <Paper sx={{ p: 3 }}>
        <SynapseSpinner size={40} />
      </Paper>
    )
  }

  const error = templateError ?? schemaError
  if (error) {
    return (
      <Paper sx={{ p: 3 }}>
        <Alert severity="error">
          Could not load the form template: {error.reason ?? error.message}
        </Alert>
      </Paper>
    )
  }

  return (
    <FormTemplateEditorForm
      initialTemplate={template}
      initialJsonSchema={jsonSchema as RJSFSchema | undefined}
      onSaved={onSaved}
      onCancel={onCancel}
    />
  )
}
