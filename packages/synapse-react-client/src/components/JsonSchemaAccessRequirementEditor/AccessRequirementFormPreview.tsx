import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import {
  FormField,
  FormFieldReference,
  FormStep,
  GenerateDataAccessSchemaResponse,
} from '@/utils/types/AccessRequirementFormTypes'
import { generateDataAccessSchema } from '@/utils/jsonschema/generateDataAccessSchema'
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { useMemo, useState } from 'react'

type AccessRequirementFormPreviewProps = {
  open: boolean
  onClose: () => void
  selectedFields: FormField[]
  fieldReferences: FormFieldReference[]
  formSteps: FormStep[]
}

export function AccessRequirementFormPreview({
  open,
  onClose,
  selectedFields,
  fieldReferences,
  formSteps,
}: AccessRequirementFormPreviewProps) {
  const [activeStep, setActiveStep] = useState(0)

  const schemaResponse: GenerateDataAccessSchemaResponse = useMemo(
    () =>
      generateDataAccessSchema(
        selectedFields,
        fieldReferences,
        formSteps,
        true,
      ),
    [selectedFields, fieldReferences, formSteps],
  )

  const currentStep = schemaResponse.steps[activeStep]

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        Form Preview
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {schemaResponse.steps.length === 0 ? (
          <Box sx={{ py: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              No fields selected. Add fields to preview the form.
            </Typography>
          </Box>
        ) : (
          <>
            {schemaResponse.steps.length > 1 && (
              <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
                {schemaResponse.steps.map((step, index) => (
                  <Step
                    key={step.stepId ?? index}
                    onClick={() => setActiveStep(index)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <StepLabel>{step.stepTitle}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            )}

            {currentStep && (
              <Box className="JsonSchemaFormContainer">
                <Typography variant="h6" gutterBottom>
                  {currentStep.stepTitle}
                </Typography>
                {currentStep.stepDescription && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {currentStep.stepDescription}
                  </Typography>
                )}
                <JsonSchemaForm
                  schema={currentStep.jsonSchema}
                  uiSchema={currentStep.uiSchema}
                  formContext={{ descriptionVariant: 'inline' }}
                  children={<></>}
                  liveValidate={false}
                />
              </Box>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
