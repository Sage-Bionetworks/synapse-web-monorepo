import { FileHandleWidgetContext } from '@/components/JsonSchemaForm/CustomFormContext'
import SchemaStepForm, {
  SchemaStepFormHandle,
} from '@/components/JsonSchemaForm/SchemaStepForm'
import { generateDataAccessSchema } from '@/utils/jsonschema/generateDataAccessSchema'
import { getStepTitle, SchemaData } from '@/utils/jsonschema/schemaData'
import {
  DataAccessRequestType,
  FormTemplate,
} from '@sage-bionetworks/synapse-client'
import TuneIcon from '@mui/icons-material/Tune'
import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  Step,
  StepButton,
  Stepper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { RJSFSchema } from '@rjsf/utils'
import { ReactNode, useId, useMemo, useRef, useState } from 'react'
import styles from './FormTemplatePreview.module.scss'
import { getTemplateFileSource } from './utils'

export const VALIDATE_PREVIEW_RESPONSES_LABEL = 'Validate preview responses'

type FormTemplatePreviewProps = {
  template: FormTemplate
  jsonSchema: RJSFSchema
  /** The saved version of the template, if any. The template files of file fields that it lists are downloaded through it. */
  savedTemplate?: FormTemplate
}

/**
 * Renders a live preview of how a FormTemplate + its referenced JSON Schema will appear to a
 * requester. Computed client-side against the unsaved draft, purely to give ACT instant feedback
 * while editing. The preview controls sit above, outside the preview itself, since a requester
 * never sees them.
 */
export function FormTemplatePreview({
  template,
  jsonSchema,
  savedTemplate,
}: FormTemplatePreviewProps) {
  const [activeStep, setActiveStep] = useState(0)
  // Kept across steps and request types so ACT can see how answers carry through the form
  const [schemaData, setSchemaData] = useState<SchemaData>({})
  const [requestType, setRequestType] = useState<DataAccessRequestType>(
    DataAccessRequestType.REQUEST,
  )
  // Off by default so ACT can move freely between steps; on, moving forward is gated as in the request wizard
  const [validateResponses, setValidateResponses] = useState(false)
  const schemaStepFormRef = useRef<SchemaStepFormHandle>(null)
  // The step a step-button click asked for, until validation settles; Enter in a field also submits, and must not
  // later move to a step that was blocked
  const pendingStepRef = useRef<number | null>(null)

  const { steps } = useMemo(
    () => generateDataAccessSchema(template, jsonSchema, requestType),
    [template, jsonSchema, requestType],
  )

  // The preview has no request, so a requester's files cannot be uploaded or shown here
  const fileHandleWidgetContext = useMemo<FileHandleWidgetContext>(
    () => ({
      answerFileHandleIds: [],
      ...getTemplateFileSource(savedTemplate),
      canEdit: false,
    }),
    [savedTemplate],
  )

  const controls = (
    <PreviewControls
      requestType={requestType}
      onRequestTypeChange={setRequestType}
      validateResponses={validateResponses}
      onValidateResponsesChange={setValidateResponses}
    />
  )

  if (steps.length === 0) {
    // The controls stay available: when every field belongs to the other request type, this view has no
    // steps, and the Request/Renewal toggle is the only way to reach them
    return (
      <Stack gap={2}>
        {controls}
        <LivePreview>
          <Box sx={{ py: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Add at least one step with a bound field to preview the form.
            </Typography>
          </Box>
        </LivePreview>
      </Stack>
    )
  }

  const safeIndex = Math.min(activeStep, steps.length - 1)
  const currentStep = steps[safeIndex]

  function goToStep(index: number) {
    if (index === safeIndex) return
    // The request wizard's Back button never validates, so going back is never gated
    if (!validateResponses || index < safeIndex) {
      setActiveStep(index)
      return
    }
    pendingStepRef.current = index
    // The same validation the request wizard's Next button runs
    schemaStepFormRef.current?.submit()
  }

  return (
    <Stack gap={2}>
      {controls}
      <LivePreview>
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
          fileHandleWidgetContext={fileHandleWidgetContext}
          // Files cannot be uploaded here, so a required file question must not block the step
          ignoreRequiredFileAnswers
          onValid={() => {
            if (pendingStepRef.current !== null) {
              setActiveStep(pendingStepRef.current)
              pendingStepRef.current = null
            }
          }}
          onInvalid={() => {
            pendingStepRef.current = null
          }}
        />
      </LivePreview>
    </Stack>
  )
}

function LivePreview({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        Live Preview
      </Typography>
      <Paper variant="outlined" sx={{ p: 2 }}>
        {children}
      </Paper>
    </Box>
  )
}

type PreviewControlsProps = {
  requestType: DataAccessRequestType
  onRequestTypeChange: (requestType: DataAccessRequestType) => void
  validateResponses: boolean
  onValidateResponsesChange: (validateResponses: boolean) => void
}

function PreviewControls({
  requestType,
  onRequestTypeChange,
  validateResponses,
  onValidateResponsesChange,
}: PreviewControlsProps) {
  const titleId = useId()
  return (
    <section aria-labelledby={titleId} className={styles.controls}>
      <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 1.5 }}>
        <TuneIcon fontSize="small" color="action" />
        <Typography id={titleId} variant="subtitle2">
          Preview controls
        </Typography>
      </Stack>
      <Stack direction="row" flexWrap="wrap" columnGap={4} rowGap={2}>
        <PreviewControl caption="Show the form for a">
          <ToggleButtonGroup
            value={requestType}
            exclusive
            size="small"
            onChange={(_, next: DataAccessRequestType | null) => {
              if (next) onRequestTypeChange(next)
            }}
          >
            <ToggleButton value={DataAccessRequestType.REQUEST}>
              Request
            </ToggleButton>
            <ToggleButton value={DataAccessRequestType.RENEWAL}>
              Renewal
            </ToggleButton>
          </ToggleButtonGroup>
        </PreviewControl>
        <PreviewControl caption="Between steps">
          <FormControlLabel
            control={
              <Checkbox
                checked={validateResponses}
                onChange={event =>
                  onValidateResponsesChange(event.target.checked)
                }
              />
            }
            label={VALIDATE_PREVIEW_RESPONSES_LABEL}
            // The theme's bottom margin would pull the checkbox above the toggle group's center line
            sx={{ m: 0 }}
          />
        </PreviewControl>
      </Stack>
    </section>
  )
}

function PreviewControl({
  caption,
  children,
}: {
  caption: string
  children: ReactNode
}) {
  return (
    <div>
      <Typography variant="caption" color="text.secondary" component="div">
        {caption}
      </Typography>
      <div className={styles.controlRow}>{children}</div>
    </div>
  )
}
