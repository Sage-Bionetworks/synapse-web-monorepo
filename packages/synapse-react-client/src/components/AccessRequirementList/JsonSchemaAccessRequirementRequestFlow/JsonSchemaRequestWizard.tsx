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
  Skeleton,
  Step,
  StepLabel,
  Stepper,
} from '@mui/material'
import {
  FileHandleAssociateType,
  JsonSchemaAccessRequirement,
  Renewal,
  Request,
  RestrictableObjectType,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import { RJSFSchema } from '@rjsf/utils'
import { useMemo, useRef, useState } from 'react'
import { DialogBaseTitle } from '../../DialogBase'
import RequesterInformationFields from './RequesterInformationFields'
import {
  isRequesterInformationComplete,
  buildRequest,
  RequesterInformationValues,
  getRequestType,
  toRequesterInformationValues,
} from './requesterInformation'
import SchemaStepForm, {
  SchemaStepFormHandle,
} from '@/components/JsonSchemaForm/SchemaStepForm'
import { FileHandleWidgetContext } from '@/components/JsonSchemaForm/CustomFormContext'
import {
  fileAnswersChanged,
  getStepTitle,
  SchemaData,
} from '@/utils/jsonschema/schemaData'

export const REQUESTER_INFORMATION_STEP_LABEL = 'Requester information'
const REQUEST_ACCESS_TITLE = 'Request Access'

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
 * The request wizard for a JsonSchemaAccessRequirement: a fixed step of requester information followed by one step
 * per step of the access requirement's FormTemplate.
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
      schema={form.schema}
    />
  )
}

function WizardFrame(props: { onHide: () => void; children: React.ReactNode }) {
  return (
    <>
      <DialogBaseTitle title={REQUEST_ACCESS_TITLE} onCancel={props.onHide} />
      <DialogContent>{props.children}</DialogContent>
    </>
  )
}

type JsonSchemaRequestWizardContentProps = JsonSchemaRequestWizardProps & {
  request: Request | Renewal
  currentUserId: string
  steps: GeneratedFormStepForRjsf[]
  schema: RJSFSchema
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
    schema,
  } = props
  const isEDucEnabled = Boolean(accessRequirement.eDucTemplateId)

  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [alertMessage, setAlertMessage] = useState<string | undefined>()
  const [requesterInformation, setRequesterInformation] =
    useState<RequesterInformationValues>(() =>
      toRequesterInformationValues(request, currentUserId),
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

  const isBusy = isSaving || isSubmitting
  // Step 0 is the requester information; schema steps follow
  const lastStepIndex = steps.length
  const isLastStep = activeStepIndex === lastStepIndex
  const isRequesterInformationStep = activeStepIndex === 0
  const activeSchemaStep = isRequesterInformationStep
    ? undefined
    : steps[activeStepIndex - 1]

  /** Saves the request with the given answers. Resolves to undefined if the save failed. */
  async function saveRequest(
    latestSchemaData: SchemaData,
  ): Promise<Request | Renewal | undefined> {
    setAlertMessage(undefined)
    try {
      return await updateRequest(
        buildRequest(
          request,
          requesterInformation,
          latestSchemaData,
          schema,
          isEDucEnabled,
        ),
      )
    } catch {
      // The mutation's onError displays the message
      return undefined
    }
  }

  function onSchemaDataChange(latestSchemaData: SchemaData) {
    setSchemaData(latestSchemaData)
    if (fileAnswersChanged(schema, schemaData, latestSchemaData)) {
      // Save a file answer as soon as it changes: the request must list the file in its attachments before the file can
      // be downloaded through the request, and the file should not be lost if the requester leaves the wizard
      void saveRequest(latestSchemaData)
    }
  }

  const fileHandleWidgetContext = useMemo<FileHandleWidgetContext>(
    () => ({
      answerObject: request.id
        ? {
            associateObjectType:
              FileHandleAssociateType.DataAccessRequestAttachment,
            associateObjectId: String(request.id),
          }
        : undefined,
      answerFileHandleIds: request.attachments ?? [],
      templateObject: {
        associateObjectType:
          FileHandleAssociateType.AccessRequirementAttachment,
        associateObjectId: String(accessRequirement.id),
      },
      // A second save started before the first one finishes would use a stale etag
      canEdit: !isBusy,
    }),
    [request.id, request.attachments, accessRequirement.id, isBusy],
  )

  async function saveAndAdvance(latestSchemaData: SchemaData = schemaData) {
    const saved = await saveRequest(latestSchemaData)
    if (!saved) {
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
    if (isRequesterInformationStep) {
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
        ...buildRequest(
          request,
          requesterInformation,
          schemaData,
          schema,
          isEDucEnabled,
        ),
        ducFileHandleId: response.resp.fileHandleId,
      }).catch(() => {})
    } else if (response.error) {
      setAlertMessage(response.error.reason)
    }
  }

  const disableNext =
    isBusy ||
    (isRequesterInformationStep &&
      !isRequesterInformationComplete(requesterInformation, isEDucEnabled))

  let primaryActionText = 'Next'
  if (isLastStep) {
    primaryActionText = onEDucContinue ? 'Continue' : 'Submit'
  }

  return (
    <>
      <DialogBaseTitle title={REQUEST_ACCESS_TITLE} onCancel={onHide} />
      <DialogContent>
        {steps.length > 0 && (
          <Stepper activeStep={activeStepIndex} sx={{ mb: 3 }}>
            {[REQUESTER_INFORMATION_STEP_LABEL]
              // The requester information step comes first, so schema steps start at position 2
              .concat(steps.map((step, index) => getStepTitle(step, index + 2)))
              .map((label, index) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
          </Stepper>
        )}
        {isRequesterInformationStep && (
          <RequesterInformationFields
            accessRequirement={accessRequirement}
            request={request}
            values={requesterInformation}
            onChange={changes =>
              setRequesterInformation(previous => ({
                ...previous,
                ...changes,
              }))
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
            onSchemaDataChange={onSchemaDataChange}
            fileHandleWidgetContext={fileHandleWidgetContext}
            onValid={latestSchemaData => void saveAndAdvance(latestSchemaData)}
          />
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
        {!isRequesterInformationStep && (
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
                requesterInformation,
                schemaData,
                schema,
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
