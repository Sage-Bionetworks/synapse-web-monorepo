import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { GenerateDataAccessSchemaStep } from '@/utils/types/AccessRequirementFormTypes'
import { Box, Typography } from '@mui/material'
import { IChangeEvent } from '@rjsf/core'

type DataAccessRequestStepProps = {
  step: GenerateDataAccessSchemaStep
  formData: Record<string, unknown>
  onChange: (data: Record<string, unknown>) => void
}

export function DataAccessRequestStep({
  step,
  formData,
  onChange,
}: DataAccessRequestStepProps) {
  const handleChange = (e: IChangeEvent<Record<string, unknown>>) => {
    if (e.formData) {
      onChange(e.formData)
    }
  }

  return (
    <Box className="JsonSchemaFormContainer">
      <Typography variant="h6" gutterBottom>
        {step.stepTitle}
      </Typography>
      {step.stepDescription && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {step.stepDescription}
        </Typography>
      )}
      <JsonSchemaForm
        schema={step.jsonSchema}
        uiSchema={step.uiSchema}
        formContext={{ descriptionVariant: 'inline' }}
        formData={formData}
        onChange={handleChange}
        liveValidate={false}
        // Hide the default submit button
        children={<></>}
      />
    </Box>
  )
}
