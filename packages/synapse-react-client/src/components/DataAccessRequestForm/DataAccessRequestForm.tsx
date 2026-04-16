import {
  FormField,
  FormStep,
  GenerateDataAccessSchemaResponse,
  JsonSchemaAccessRequirement,
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
import { useMemo, useState } from 'react'
import { DataAccessRequestStep } from './DataAccessRequestStep'

export type DataAccessRequestFormProps = {
  /** The Access Requirements the user must satisfy. */
  accessRequirements: JsonSchemaAccessRequirement[]
  /** All available form fields (for resolving field references). */
  allFields: FormField[]
  /** All available form steps. */
  formSteps: FormStep[]
}

export function DataAccessRequestForm({
  accessRequirements,
  allFields,
  formSteps,
}: DataAccessRequestFormProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [formDataByStep, setFormDataByStep] = useState<
    Record<number, Record<string, unknown>>
  >({})
  const [showSuccess, setShowSuccess] = useState(false)

  // Build a field lookup
  const fieldLookup = useMemo(() => {
    const map = new Map<string, FormField>()
    for (const field of allFields) {
      map.set(field.id, field)
    }
    return map
  }, [allFields])

  // Collect all references and resolve fields from all ARs
  const allReferences = useMemo(
    () => accessRequirements.flatMap(ar => ar.formFields),
    [accessRequirements],
  )

  const resolvedFields = useMemo(() => {
    const fields: FormField[] = []
    for (const ref of allReferences) {
      const field = fieldLookup.get(ref.fieldId)
      if (field) {
        fields.push(field)
      }
    }
    return fields
  }, [allReferences, fieldLookup])

  // Count total unique fields and total before dedup for display
  const totalFieldsBeforeDedup = useMemo(
    () => accessRequirements.reduce((sum, ar) => sum + ar.formFields.length, 0),
    [accessRequirements],
  )

  const schemaResponse: GenerateDataAccessSchemaResponse = useMemo(
    () =>
      generateDataAccessSchema(resolvedFields, allReferences, formSteps, true),
    [resolvedFields, allReferences, formSteps],
  )

  const uniqueFieldCount = useMemo(() => {
    const ids = new Set(resolvedFields.map(f => f.id))
    return ids.size
  }, [resolvedFields])

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
        {accessRequirements.map(ar => (
          <Chip
            key={ar.id}
            label={ar.name}
            variant="outlined"
            color="primary"
            size="small"
          />
        ))}
      </Box>

      {totalFieldsBeforeDedup !== uniqueFieldCount && (
        <Alert severity="info" sx={{ mb: 2 }}>
          {accessRequirements.length} access requirements share{' '}
          {totalFieldsBeforeDedup - uniqueFieldCount} field(s) in common. Shared
          fields appear only once in this form ({uniqueFieldCount} unique fields
          total).
        </Alert>
      )}

      {schemaResponse.steps.length > 1 && (
        <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
          {schemaResponse.steps.map((step, index) => (
            <Step key={step.stepId ?? index}>
              <StepLabel>{step.stepTitle}</StepLabel>
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
          {accessRequirements.length} access requirement(s).
        </Alert>
      </Snackbar>
    </Paper>
  )
}
