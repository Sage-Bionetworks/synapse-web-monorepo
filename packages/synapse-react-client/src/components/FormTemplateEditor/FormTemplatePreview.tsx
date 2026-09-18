import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { generateDataAccessSchema } from '@/utils/jsonschema/generateDataAccessSchema'
import {
  DataAccessRequestType,
  FormTemplate,
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
import { useMemo, useState } from 'react'

type FormTemplatePreviewProps = {
  template: FormTemplate
  jsonSchema: RJSFSchema
}

/**
 * Renders a live preview of how a FormTemplate + its referenced JSON Schema will appear to a
 * requester. Computed client-side against the unsaved draft, purely to give ACT instant feedback
 * while editing.
 *
 * PLFM-9449 (design v34) removed the server-side schema generation service entirely: the client
 * is now permanently responsible for slicing a FormTemplate + its schema into per-step
 * (jsonSchema, uiSchema) bundles, both here and for the real requester/reviewer render paths.
 * The Request/Renewal toggle below resolves each property's applicable context from the schema's
 * `x-synapse-submissionContext` `allOf` conditionals (see `@/utils/jsonschema/submissionContext`)
 * -- there is no more per-field `submissionContext` on `FormTemplateField`.
 */
export function FormTemplatePreview({
  template,
  jsonSchema,
}: FormTemplatePreviewProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [requestType, setRequestType] = useState<DataAccessRequestType>(
    DataAccessRequestType.REQUEST,
  )

  const { steps } = useMemo(
    () => generateDataAccessSchema(template, jsonSchema, requestType),
    [template, jsonSchema, requestType],
  )

  if (steps.length === 0) {
    return (
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Add at least one step with a bound field to preview the form.
          </Typography>
        </Box>
      </Paper>
    )
  }

  const safeIndex = Math.min(activeStep, steps.length - 1)
  const currentStep = steps[safeIndex]
  const title = (currentStep.jsonSchema.title as string) ?? ''
  const description = (currentStep.jsonSchema.description as string) ?? ''

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
          {steps.map((step, index) => (
            <Step
              key={index}
              onClick={() => setActiveStep(index)}
              sx={{ cursor: 'pointer' }}
            >
              <StepLabel>
                {(step.jsonSchema.title as string) ?? `Step ${index + 1}`}
              </StepLabel>
            </Step>
          ))}
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
        schema={currentStep.jsonSchema}
        uiSchema={currentStep.uiSchema}
        formContext={{ descriptionVariant: 'inline' }}
        children={<></>}
        liveValidate={false}
      />
    </Paper>
  )
}
