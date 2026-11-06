import { FileHandleWidgetContext } from '@/components/JsonSchemaForm/CustomFormContext'
import SchemaStepForm from '@/components/JsonSchemaForm/SchemaStepForm'
import { generateDataAccessSchema } from '@/utils/jsonschema/generateDataAccessSchema'
import { getStepTitle, SchemaData } from '@/utils/jsonschema/schemaData'
import {
  DataAccessRequestType,
  FormTemplate,
} from '@sage-bionetworks/synapse-client'
import {
  Box,
  Paper,
  Step,
  StepButton,
  Stepper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { RJSFSchema } from '@rjsf/utils'
import { FileHandleAssociateType } from '@sage-bionetworks/synapse-types'
import { useMemo, useState } from 'react'

type FormTemplatePreviewProps = {
  template: FormTemplate
  jsonSchema: RJSFSchema
  /** The ID of the saved template, if it has been saved. Used to download the template files of file fields. */
  formTemplateId?: string
}

/**
 * Renders a live preview of how a FormTemplate + its referenced JSON Schema will appear to a
 * requester. Computed client-side against the unsaved draft, purely to give ACT instant feedback
 * while editing.
 */
export function FormTemplatePreview({
  template,
  jsonSchema,
  formTemplateId,
}: FormTemplatePreviewProps) {
  const [activeStep, setActiveStep] = useState(0)
  // Kept across steps and request types so ACT can see how answers carry through the form
  const [schemaData, setSchemaData] = useState<SchemaData>({})
  const [requestType, setRequestType] = useState<DataAccessRequestType>(
    DataAccessRequestType.REQUEST,
  )

  const { steps } = useMemo(
    () => generateDataAccessSchema(template, jsonSchema, requestType),
    [template, jsonSchema, requestType],
  )

  // The preview has no request, so a requester's files cannot be uploaded or shown here
  const fileHandleWidgetContext = useMemo<FileHandleWidgetContext>(
    () => ({
      answerFileHandleIds: [],
      templateObject: formTemplateId
        ? {
            // AccessRequirementAttachment is a stand-in: a FormTemplate is not an
            // AccessRequirement, so the server may not authorize this download.
            // Supported FormTemplate template-file downloads are tracked in PLFM-10013.
            associateObjectType:
              FileHandleAssociateType.AccessRequirementAttachment,
            associateObjectId: formTemplateId,
          }
        : undefined,
      canEdit: false,
    }),
    [formTemplateId],
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

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
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
        <Stepper activeStep={safeIndex} nonLinear sx={{ mb: 2 }}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepButton onClick={() => setActiveStep(index)}>
                {getStepTitle(step, index + 1)}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      )}

      <SchemaStepForm
        // Each step is a separate form, as it is for a requester
        key={safeIndex}
        step={currentStep}
        schemaData={schemaData}
        onSchemaDataChange={setSchemaData}
        fileHandleWidgetContext={fileHandleWidgetContext}
      />
    </Paper>
  )
}
