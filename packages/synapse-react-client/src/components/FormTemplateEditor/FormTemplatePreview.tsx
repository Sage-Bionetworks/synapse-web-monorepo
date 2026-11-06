import SchemaStepForm, {
  SchemaStepFormHandle,
} from '@/components/JsonSchemaForm/SchemaStepForm'
import { generateDataAccessSchema } from '@/utils/jsonschema/generateDataAccessSchema'
import { getStepTitle, SchemaData } from '@/utils/jsonschema/schemaData'
import {
  DataAccessRequestType,
  FormTemplate,
} from '@sage-bionetworks/synapse-client'
import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Step,
  StepButton,
  Stepper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { RJSFSchema } from '@rjsf/utils'
import { useMemo, useRef, useState } from 'react'

type FormTemplatePreviewProps = {
  template: FormTemplate
  jsonSchema: RJSFSchema
}

/**
 * Renders a live preview of how a FormTemplate + its referenced JSON Schema will appear to a
 * requester. Computed client-side against the unsaved draft, purely to give ACT instant feedback
 * while editing.
 */
export function FormTemplatePreview({
  template,
  jsonSchema,
}: FormTemplatePreviewProps) {
  const [activeStep, setActiveStep] = useState(0)
  // Kept across steps and request types so ACT can see how answers carry through the form
  const [schemaData, setSchemaData] = useState<SchemaData>({})
  const [requestType, setRequestType] = useState<DataAccessRequestType>(
    DataAccessRequestType.REQUEST,
  )
  // Off by default so ACT can move freely between steps; on, steps are gated as in the request wizard
  const [validateResponses, setValidateResponses] = useState(false)
  const schemaStepFormRef = useRef<SchemaStepFormHandle>(null)
  // The step to move to once the current step's answers pass validation
  const pendingStepRef = useRef<number | null>(null)

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

  function goToStep(index: number) {
    if (!validateResponses) {
      setActiveStep(index)
      return
    }
    pendingStepRef.current = index
    // Validates the step; onValid is invoked only if the answers are valid
    schemaStepFormRef.current?.submit()
  }

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          mb: 2,
        }}
      >
        <ToggleButtonGroup
          value={requestType}
          exclusive
          size="small"
          onChange={(_, next: DataAccessRequestType | null) => {
            if (next) setRequestType(next)
          }}
        >
          <ToggleButton value={DataAccessRequestType.REQUEST}>
            Request
          </ToggleButton>
          <ToggleButton value={DataAccessRequestType.RENEWAL}>
            Renewal
          </ToggleButton>
        </ToggleButtonGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={validateResponses}
              onChange={event => setValidateResponses(event.target.checked)}
            />
          }
          label="Validate responses"
        />
      </Box>

      {steps.length > 1 && (
        <Stepper activeStep={safeIndex} nonLinear sx={{ mb: 2 }}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepButton onClick={() => goToStep(index)}>
                {getStepTitle(step, index + 1)}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      )}

      <SchemaStepForm
        // Each step is a separate form, as it is for a requester
        key={safeIndex}
        ref={schemaStepFormRef}
        step={currentStep}
        schemaData={schemaData}
        onSchemaDataChange={setSchemaData}
        onValid={() => {
          if (pendingStepRef.current !== null) {
            setActiveStep(pendingStepRef.current)
            pendingStepRef.current = null
          }
        }}
      />
    </Paper>
  )
}
