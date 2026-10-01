import {
  useGetCurrentUserProfile,
  useGetDataAccessRequestForUpdate,
  useSubmitDataAccessRequest,
  useUpdateDataAccessRequest,
} from '@/synapse-queries'
import { useGeneratedRequestForm } from '@/synapse-queries/dataaccess/useGeneratedRequestForm'
import { useSynapseContext } from '@/utils'
import { GeneratedFormStepForRjsf } from '@/utils/jsonschema/generateDataAccessSchema'
import {
  Alert,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Skeleton,
  Stack,
  Step,
  StepLabel,
  Stepper,
} from '@mui/material'
import {
  JsonSchemaAccessRequirement,
  Renewal,
  Request,
  RestrictableObjectType,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import { useRef, useState } from 'react'
import IconSvg from '../../IconSvg/IconSvg'
import FirstClassFields from './FirstClassFields'
import {
  areFirstClassFieldsComplete,
  buildRequest,
  FirstClassFieldValues,
  getRequestType,
  toFirstClassFieldValues,
} from './firstClassFieldValues'
import SchemaStepForm, { SchemaStepFormHandle } from './SchemaStepForm'
import { getFileUploadFieldTitles, SchemaData } from './schemaData'

export const FIRST_CLASS_FIELDS_STEP_LABEL = 'Requester information'

export type JsonSchemaRequestWizardProps = {
  accessRequirement: JsonSchemaAccessRequirement
  subjectId: string
  subjectType: RestrictableObjectType
  onHide: () => void
  /** Invoked when the user clicks cancel, with the request including unsaved answers. */
  onCancel: (modifiedDataAccessRequest: Request | Renewal) => void
  onSubmissionCreated: (submissionId: string) => void
  /**
   * When set (used for eDUC ARs), completing the last step saves the request and invokes this callback instead of
   * creating a submission. The submission is created later in the eDUC flow.
   */
  onEDucContinue?: () => void
}

/**
 * The request wizard for a JsonSchemaAccessRequirement: a fixed step of first-class fields followed by one step per
 * step of the access requirement's FormTemplate.
 */
export default function JsonSchemaRequestWizard(
  props: JsonSchemaRequestWizardProps,
) {
  const { accessRequirement, onHide } = props
  const { isAuthenticated } = useSynapseContext()
  const { data: user } = useGetCurrentUserProfile({ enabled: isAuthenticated })
  const { data: request } = useGetDataAccessRequestForUpdate(
    String(accessRequirement.id),
    {
      enabled: isAuthenticated,
      // Infinite staleTime ensures this won't be re-fetched unless explicitly invalidated by a mutation
      staleTime: Infinity,
      throwOnError: true,
    },
  )
  const { form, error: formError } = useGeneratedRequestForm(
    accessRequirement.formTemplateRef,
    request ? getRequestType(request) : undefined,
  )

  if (formError) {
    return (
      <WizardFrame onHide={onHide}>
        <Alert severity="error">
          The request form could not be loaded. {formError.reason}
        </Alert>
      </WizardFrame>
    )
  }
  if (!request || !user || !form) {
    return (
      <WizardFrame onHide={onHide}>
        <Skeleton variant="rectangular" height={300} />
      </WizardFrame>
    )
  }
  return (
    <JsonSchemaRequestWizardContent
      {...props}
      request={request}
      currentUserId={user.ownerId}
      steps={form.steps}
    />
  )
}

function WizardTitle(props: { onHide: () => void }) {
  return (
    <DialogTitle>
      <Stack direction="row" sx={{ alignItems: 'center', gap: '5px' }}>
        Request Access
        <Box sx={{ flexGrow: 1 }} />
        <IconButton aria-label={'Close'} onClick={props.onHide}>
          <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
        </IconButton>
      </Stack>
    </DialogTitle>
  )
}

function WizardFrame(props: { onHide: () => void; children: React.ReactNode }) {
  return (
    <>
      <WizardTitle onHide={props.onHide} />
      <DialogContent>{props.children}</DialogContent>
    </>
  )
}

type JsonSchemaRequestWizardContentProps = JsonSchemaRequestWizardProps & {
  request: Request | Renewal
  currentUserId: string
  steps: GeneratedFormStepForRjsf[]
}

function JsonSchemaRequestWizardContent(
  props: JsonSchemaRequestWizardContentProps,
) {
  const {
    accessRequirement,
    subjectId,
    subjectType,
    onHide,
    onCancel,
    onSubmissionCreated,
    onEDucContinue,
    request,
    currentUserId,
    steps,
  } = props
  const isEDucEnabled = Boolean(accessRequirement.eDucTemplateId)

  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [alertMessage, setAlertMessage] = useState<string | undefined>()
  const [firstClassValues, setFirstClassValues] =
    useState<FirstClassFieldValues>(() =>
      toFirstClassFieldValues(request, currentUserId),
    )
  const [schemaData, setSchemaData] = useState<SchemaData>(
    request.schemaData ?? {},
  )
  const schemaStepFormRef = useRef<SchemaStepFormHandle>(null)

  const { mutateAsync: updateRequest, isPending: isSaving } =
    useUpdateDataAccessRequest({
      onError: e => setAlertMessage(e.reason),
    })
  const { mutate: submit, isPending: isSubmitting } =
    useSubmitDataAccessRequest({
      onSuccess: submission => onSubmissionCreated(submission.submissionId),
      onError: e => setAlertMessage(e.reason),
    })

  const fileUploadFieldTitles = getFileUploadFieldTitles(steps)
  const isBusy = isSaving || isSubmitting
  // Step 0 is the first-class fields; schema steps follow
  const lastStepIndex = steps.length
  const isLastStep = activeStepIndex === lastStepIndex
  const isFirstClassStep = activeStepIndex === 0
  const activeSchemaStep = isFirstClassStep
    ? undefined
    : steps[activeStepIndex - 1]

  async function saveAndAdvance(latestSchemaData: SchemaData = schemaData) {
    setAlertMessage(undefined)
    let saved: Request | Renewal
    try {
      saved = await updateRequest(
        buildRequest(
          request,
          firstClassValues,
          latestSchemaData,
          isEDucEnabled,
        ),
      )
    } catch {
      // The mutation's onError displays the message
      return
    }
    if (!isLastStep) {
      setActiveStepIndex(activeStepIndex + 1)
      return
    }
    if (onEDucContinue) {
      onEDucContinue()
      return
    }
    submit({
      request: {
        requestId: saved.id,
        requestEtag: saved.etag,
        subjectId,
        subjectType,
      },
      accessRequirementId: String(accessRequirement.id),
    })
  }

  function onNextClicked() {
    if (isFirstClassStep) {
      void saveAndAdvance()
    } else {
      // Validates the step; onValid is invoked only if the answers are valid
      schemaStepFormRef.current?.submit()
    }
  }

  function onDucUpload(response: UploadCallbackResp) {
    if (response.success && response.resp) {
      // The mutation's onError displays the message
      updateRequest({
        ...request,
        ducFileHandleId: response.resp.fileHandleId,
      }).catch(() => {})
    } else if (response.error) {
      setAlertMessage(response.error.reason)
    }
  }

  const disableNext =
    isBusy ||
    (isFirstClassStep &&
      !areFirstClassFieldsComplete(firstClassValues, isEDucEnabled)) ||
    (isLastStep && fileUploadFieldTitles.length > 0)

  const primaryActionText = !isLastStep
    ? 'Next'
    : onEDucContinue
      ? 'Continue'
      : 'Submit'

  return (
    <>
      <WizardTitle onHide={onHide} />
      <DialogContent>
        {steps.length > 0 && (
          <Stepper activeStep={activeStepIndex} sx={{ mb: 3 }}>
            {[FIRST_CLASS_FIELDS_STEP_LABEL]
              .concat(steps.map(step => String(step.jsonSchema.title ?? '')))
              .map((label, index) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
          </Stepper>
        )}
        {isFirstClassStep && (
          <FirstClassFields
            accessRequirement={accessRequirement}
            request={request}
            values={firstClassValues}
            onChange={changes =>
              setFirstClassValues(previous => ({ ...previous, ...changes }))
            }
            disabled={isBusy}
            isLoading={isBusy}
            onDucUpload={onDucUpload}
          />
        )}
        {activeSchemaStep && (
          <SchemaStepForm
            // Reset the form's validation state when moving between steps
            key={activeStepIndex}
            ref={schemaStepFormRef}
            step={activeSchemaStep}
            schemaData={schemaData}
            onSchemaDataChange={setSchemaData}
            onValid={latestSchemaData => void saveAndAdvance(latestSchemaData)}
          />
        )}
        {isLastStep && fileUploadFieldTitles.length > 0 && (
          <Alert severity="warning" sx={{ mt: 2 }}>
            This request includes file upload questions (
            {fileUploadFieldTitles.join(', ')}), which cannot be answered here
            yet. The request cannot be submitted.
          </Alert>
        )}
        {alertMessage && (
          <Alert severity="error" sx={{ mt: 2 }}>
            <strong>
              Sorry, there is an error in submitting your request.
            </strong>
            <br />
            {alertMessage}
          </Alert>
        )}
      </DialogContent>
      <DialogActions>
        {!isFirstClassStep && (
          <Button
            variant="outlined"
            disabled={isBusy}
            onClick={() => setActiveStepIndex(activeStepIndex - 1)}
          >
            Back
          </Button>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="outlined"
          disabled={isBusy}
          onClick={() =>
            onCancel(
              buildRequest(
                request,
                firstClassValues,
                schemaData,
                isEDucEnabled,
              ),
            )
          }
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          loading={isBusy}
          disabled={disableNext}
          onClick={onNextClicked}
        >
          {primaryActionText}
        </Button>
      </DialogActions>
    </>
  )
}
