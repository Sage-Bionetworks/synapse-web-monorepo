import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import {
  FormTemplate,
  GenerateDataAccessSchemaResponse,
} from '@/utils/types/AccessRequirementFormTypes'
import { generateDataAccessSchema } from '@/utils/jsonschema/generateDataAccessSchema'
import { Box, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { RJSFSchema } from '@rjsf/utils'
import { useMemo, useState } from 'react'

type FormTemplatePreviewProps = {
  template: FormTemplate
  jsonSchema: RJSFSchema
}

/**
 * Renders a live preview of how a FormTemplate + its referenced JSON Schema
 * will appear to a requester. Mirrors what
 * `GenerateDataAccessSchemaFromTemplateDraft` would produce on the server.
 */
export function FormTemplatePreview({
  template,
  jsonSchema,
}: FormTemplatePreviewProps) {
  const [activeStep, setActiveStep] = useState(0)

  const schemaResponse: GenerateDataAccessSchemaResponse = useMemo(
    () => generateDataAccessSchema(template, jsonSchema, 'REQUEST'),
    [template, jsonSchema],
  )

  if (schemaResponse.steps.length === 0) {
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

  const safeIndex = Math.min(activeStep, schemaResponse.steps.length - 1)
  const currentStep = schemaResponse.steps[safeIndex]
  const title = (currentStep.jsonSchema.title as string) ?? ''
  const description = (currentStep.jsonSchema.description as string) ?? ''

  return (
    <Paper className="JsonSchemaFormContainer" variant="outlined" sx={{ p: 2 }}>
      {schemaResponse.steps.length > 1 && (
        <Stepper activeStep={safeIndex} sx={{ mb: 2 }}>
          {schemaResponse.steps.map((step, index) => (
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
