import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { useGenerateDataAccessSchema } from '@/synapse-queries/dataaccess/useGenerateDataAccessSchema'
import { createGenerateDataAccessSchemaFromTemplateDraftRequest } from '@/synapse-queries/dataaccess/useGenerateDataAccessSchema'
import { useCreateJsonSchema } from '@/synapse-queries/jsonschema/useCreateJsonSchema'
import { useDebouncedEffect } from '@/utils/hooks/useDebouncedEffect'
import {
  DataAccessRequestType,
  FormTemplate,
  JsonSchema,
  JsonSchemaToJSON,
} from '@sage-bionetworks/synapse-client'
import {
  Box,
  Paper,
  Step,
  StepLabel,
  Stepper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { RJSFSchema } from '@rjsf/utils'
import isEqual from 'lodash-es/isEqual'
import { useEffect, useRef, useState } from 'react'

type FormTemplatePreviewProps = {
  template: FormTemplate
  jsonSchema: RJSFSchema
}

/** How long to wait after the last edit before regenerating the preview. */
const PREVIEW_DEBOUNCE_DELAY_MS = 500

/**
 * Renders a live preview of how a FormTemplate + its referenced JSON Schema will appear to a
 * requester, generated server-side (the same generation service used to render the real
 * requester and reviewer forms) against the unsaved draft, debounced so rapid edits don't spam
 * the generation job. Since a `FormTemplate` only references its schema by `$id` and the schema
 * registry has no update operation, an edited-but-unsaved schema body has no `$id` the server
 * can resolve yet — so previewing schema edits (not just step rearrangement) means registering a
 * throwaway draft version of the schema after each debounced settle, purely so the generation
 * service has something to resolve. The final save (`useSaveFormTemplate`) registers the real
 * version independently and does not reuse these throwaway ones.
 *
 * The most recently generated steps stay on screen while a newer generation is in flight, so the
 * preview never flickers or blanks between edits.
 */
export function FormTemplatePreview({
  template,
  jsonSchema,
}: FormTemplatePreviewProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [requestType, setRequestType] = useState<DataAccessRequestType>(
    DataAccessRequestType.REQUEST,
  )
  const [debouncedTemplate, setDebouncedTemplate] = useState(template)
  const [debouncedJsonSchema, setDebouncedJsonSchema] = useState(jsonSchema)

  useDebouncedEffect(
    () => {
      setDebouncedTemplate(template)
      setDebouncedJsonSchema(jsonSchema)
    },
    [template, jsonSchema],
    PREVIEW_DEBOUNCE_DELAY_MS,
  )

  // Register a throwaway draft schema version whenever the debounced schema body diverges from
  // the last one registered for preview, so the generation service has a `$id` to resolve.
  const createSchema = useCreateJsonSchema()
  const [previewSchema$id, setPreviewSchema$id] = useState(
    debouncedJsonSchema.$id,
  )
  const lastRegisteredSchemaRef = useRef(debouncedJsonSchema)
  useEffect(() => {
    if (isEqual(debouncedJsonSchema, lastRegisteredSchemaRef.current)) return
    lastRegisteredSchemaRef.current = debouncedJsonSchema
    createSchema.mutate(debouncedJsonSchema as JsonSchema, {
      onSuccess: response => setPreviewSchema$id(response.newVersionInfo?.$id),
    })
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedJsonSchema])

  const request = previewSchema$id
    ? createGenerateDataAccessSchemaFromTemplateDraftRequest(
        { ...debouncedTemplate, schema$id: previewSchema$id },
        requestType,
      )
    : undefined

  const { data, isPending, isError } = useGenerateDataAccessSchema(request, {
    // Hold the last successfully generated steps on screen while a newer generation is in
    // flight, so the preview never flickers or blanks between edits.
    placeholderData: previousData => previousData,
  })

  const steps = data?.steps ?? []

  if (steps.length === 0) {
    return (
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {isPending
              ? 'Generating preview…'
              : isError
                ? 'Could not generate a preview for this template.'
                : 'Add at least one step with a bound field to preview the form.'}
          </Typography>
        </Box>
      </Paper>
    )
  }

  const safeIndex = Math.min(activeStep, steps.length - 1)
  const currentStep = steps[safeIndex]
  const currentSchema = (JsonSchemaToJSON(currentStep.jsonSchema) ??
    {}) as RJSFSchema
  const title = (currentSchema.title as string) ?? ''
  const description = (currentSchema.description as string) ?? ''

  return (
    <Paper className="JsonSchemaFormContainer" variant="outlined" sx={{ p: 2 }}>
      <ToggleButtonGroup
        value={requestType}
        exclusive
        size="small"
        onChange={(_, next: DataAccessRequestType | null) => {
          if (next) setRequestType(next)
        }}
        sx={{ mb: 2 }}
      >
        <ToggleButton value={DataAccessRequestType.REQUEST}>
          Request
        </ToggleButton>
        <ToggleButton value={DataAccessRequestType.RENEWAL}>
          Renewal
        </ToggleButton>
      </ToggleButtonGroup>

      {steps.length > 1 && (
        <Stepper activeStep={safeIndex} sx={{ mb: 2 }}>
          {steps.map((step, index) => {
            const stepSchema = (JsonSchemaToJSON(step.jsonSchema) ??
              {}) as RJSFSchema
            return (
              <Step
                key={index}
                onClick={() => setActiveStep(index)}
                sx={{ cursor: 'pointer' }}
              >
                <StepLabel>
                  {(stepSchema.title as string) ?? `Step ${index + 1}`}
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
      )}

      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
      )}
      <JsonSchemaForm
        schema={currentSchema}
        uiSchema={currentStep.uiSchema}
        formContext={{ descriptionVariant: 'inline' }}
        children={<></>}
        liveValidate={false}
      />
    </Paper>
  )
}
