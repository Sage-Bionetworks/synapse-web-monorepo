import {
  FormTemplate,
  GenerateDataAccessSchemaResponse,
  JsonSchemaAccessRequirement,
  SubmissionRequestType,
} from '@/utils/types/AccessRequirementFormTypes'
import { generateDataAccessSchema } from '@/utils/jsonschema/generateDataAccessSchema'
import {
  Alert,
  Box,
  Button,
  Chip,
  Paper,
  Snackbar,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import { RJSFSchema } from '@rjsf/utils'
import { useMemo, useState } from 'react'
import { DataAccessRequestStep } from './DataAccessRequestStep'

export type DataAccessRequestFormProps = {
  /**
   * The Access Requirement the user must satisfy. Per the new design, each
   * data access request is for exactly one AR (multi-AR coalescing is out
   * of scope).
   */
  accessRequirement: JsonSchemaAccessRequirement
  /** The FormTemplate referenced by `accessRequirement.formTemplateRef`. */
  formTemplate: FormTemplate
  /** The JSON Schema body the template's `schemaRef` resolves to. */
  jsonSchema: RJSFSchema
  /** Whether this is an initial REQUEST or a RENEWAL. Default REQUEST. */
  requestType?: SubmissionRequestType
  /**
   * Optional initial submission data, e.g. loaded from a SchemaDataDraft.
   * Keyed by the schema's top-level property names.
   */
  initialSubmissionData?: Record<string, unknown>
}

export function DataAccessRequestForm({
  accessRequirement,
  formTemplate,
  jsonSchema,
  requestType = 'REQUEST',
  initialSubmissionData,
}: DataAccessRequestFormProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)

  const schemaResponse: GenerateDataAccessSchemaResponse = useMemo(
    () => generateDataAccessSchema(formTemplate, jsonSchema, requestType),
    [formTemplate, jsonSchema, requestType],
  )

  // Initialize per-step form data with any pre-filled values.
  const [formDataByStep, setFormDataByStep] = useState<
    Record<number, Record<string, unknown>>
  >(() => {
    if (!initialSubmissionData) return {}
    const byStep: Record<number, Record<string, unknown>> = {}
    schemaResponse.steps.forEach((step, idx) => {
      const props = step.jsonSchema.properties ?? {}
      const stepData: Record<string, unknown> = {}
      for (const propertyName of Object.keys(props)) {
        if (propertyName in initialSubmissionData) {
          stepData[propertyName] = initialSubmissionData[propertyName]
        }
      }
      if (Object.keys(stepData).length > 0) {
        byStep[idx] = stepData
      }
    })
    return byStep
  })

  const currentStep = schemaResponse.steps[activeStep]

  const handleStepDataChange = (data: Record<string, unknown>) => {
    setFormDataByStep(prev => ({
      ...prev,
      [activeStep]: data,
    }))
  }

  const handleNext = () => {
    if (activeStep < schemaResponse.steps.length - 1) {
      setActiveStep(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    setShowSuccess(true)
  }

  const isLastStep = activeStep === schemaResponse.steps.length - 1

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Data Access Request
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
        <Chip
          label={accessRequirement.name}
          variant="outlined"
          color="primary"
          size="small"
        />
        <Chip
          label={requestType === 'RENEWAL' ? 'Renewal' : 'Initial Request'}
          variant="outlined"
          size="small"
        />
      </Box>

      {schemaResponse.steps.length > 1 && (
        <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
          {schemaResponse.steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                {(step.jsonSchema.title as string) ?? `Step ${index + 1}`}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      )}

      {currentStep && (
        <DataAccessRequestStep
          step={currentStep}
          formData={formDataByStep[activeStep] ?? {}}
          onChange={handleStepDataChange}
        />
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 3,
          pt: 2,
          borderTop: 1,
          borderColor: 'divider',
        }}
      >
        <Button
          variant="outlined"
          onClick={handlePrevious}
          disabled={activeStep === 0}
        >
          Previous
        </Button>

        {isLastStep ? (
          <Button variant="contained" onClick={handleSubmit}>
            Submit Request
          </Button>
        ) : (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        )}
      </Box>

      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          onClose={() => setShowSuccess(false)}
          variant="filled"
        >
          Data access request submitted successfully for{' '}
          {accessRequirement.name}.
        </Alert>
      </Snackbar>
    </Paper>
  )
}
