import {
  useGetCurrentJsonSchemaAccessRequirement,
  useGetCurrentUserProfile,
  useGetDataAccessRequestForUpdate,
  useSubmitDataAccessRequest,
  useUpdateDataAccessRequest,
} from '@/synapse-queries'
import {
  GeneratedRequestForm,
  useGeneratedRequestForm,
} from '@/synapse-queries/dataaccess/useGeneratedRequestForm'
import { useSynapseContext } from '@/utils'
import { useConstant } from '@/utils/hooks/useConstant'
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
import isEmpty from 'lodash-es/isEmpty'
import isEqual from 'lodash-es/isEqual'
import pick from 'lodash-es/pick'
import pickBy from 'lodash-es/pickBy'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { DialogBaseTitle } from '../../DialogBase'
import {
  ACCESS_REQUIREMENT_CHANGED_ON_SUBMIT_MESSAGE,
  isAccessRequirementOutOfDateError,
} from '../accessRequirementOutOfDate'
import {
  RequestCreationRejectedAlert,
  useRequestCreationRejection,
} from '../RequestCreationRejectedAlert'
import { AnswersNeedAttentionAlert } from './AnswersNeedAttentionAlert'
import RequesterInformationFields from './RequesterInformationFields'
import {
  isRequesterInformationComplete,
  buildRequest,
  RequesterInformationValues,
  getRequestType,
  toRequesterInformationValues,
} from './requesterInformation'
import { findRequestAnswerIssues } from './requestAnswerIssues'
import SchemaStepForm, {
  SchemaStepFormHandle,
} from '@/components/JsonSchemaForm/SchemaStepForm'
import { FileHandleWidgetContext } from '@/components/JsonSchemaForm/CustomFormContext'
import {
  fileAnswersChanged,
  getStepPropertyKeys,
  getStepTitle,
  SchemaData,
  withoutUnaskedAnswers,
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
 * per step of the access requirement's FormTemplate. The form is the one the access requirement uses on the server
 * when the wizard opens, and it is checked again before the requester finishes.
 */
export default function JsonSchemaRequestWizard(
  props: JsonSchemaRequestWizardProps,
) {
  const { onHide } = props
  const { isAuthenticated } = useSynapseContext()
  const { data: user } = useGetCurrentUserProfile({ enabled: isAuthenticated })
  const { data: request } = useGetDataAccessRequestForUpdate(
    String(props.accessRequirement.id),
    {
      enabled: isAuthenticated,
      // Infinite staleTime ensures this won't be re-fetched unless explicitly invalidated by a mutation
      staleTime: Infinity,
      throwOnError: true,
    },
  )
  const {
    accessRequirement: currentAccessRequirement,
    error: accessRequirementError,
    refetch: refetchAccessRequirement,
  } = useGetCurrentJsonSchemaAccessRequirement(props.accessRequirement.id)
  // The access requirement the form is generated from: the one fetched on open, replaced only by a newer form found
  // when the requester finishes. A later fetch must not swap the form under answers that are not yet saved.
  const [accessRequirement, setAccessRequirement] = useState<
    JsonSchemaAccessRequirement | undefined
  >()
  if (!accessRequirement && currentAccessRequirement) {
    setAccessRequirement(currentAccessRequirement)
  }
  const [formChangedDuringSession, setFormChangedDuringSession] =
    useState(false)
  const { form, error: formError } = useGeneratedRequestForm(
    accessRequirement?.formTemplateRef,
    request ? getRequestType(request) : undefined,
  )

  /** The access requirement, if it now uses a different form than the one shown. */
  async function fetchNewerForm(): Promise<
    JsonSchemaAccessRequirement | undefined
  > {
    const { data } = await refetchAccessRequirement()
    // If the access requirement cannot be fetched, the requester continues: the server checks the answers on submit
    return data &&
      !isEqual(data.formTemplateRef, accessRequirement?.formTemplateRef)
      ? data
      : undefined
  }

  const loadError = accessRequirementError ?? formError
  if (loadError) {
    return (
      <WizardFrame onHide={onHide}>
        <Alert severity="error">
          The request form could not be loaded. {loadError.reason}
        </Alert>
      </WizardFrame>
    )
  }
  if (!request || !user || !accessRequirement || !form) {
    return (
      <WizardFrame onHide={onHide}>
        <Skeleton variant="rectangular" height={300} />
      </WizardFrame>
    )
  }
  const { templateId, templateVersionNumber } =
    accessRequirement.formTemplateRef
  return (
    <JsonSchemaRequestWizardContent
      // A newer form starts the wizard again, from the answers saved before it was loaded
      key={`${templateId}@${templateVersionNumber}`}
      {...props}
      accessRequirement={accessRequirement}
      request={request}
      currentUserId={user.ownerId}
      form={form}
      formChangedDuringSession={formChangedDuringSession}
      fetchNewerForm={fetchNewerForm}
      onFormChanged={newerAccessRequirement => {
        setAccessRequirement(newerAccessRequirement)
        setFormChangedDuringSession(true)
      }}
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
  form: GeneratedRequestForm
  /** Whether this form replaced the one the requester was finishing the request with */
  formChangedDuringSession: boolean
  /** Resolves to the access requirement if it now uses a different form than this one */
  fetchNewerForm: () => Promise<JsonSchemaAccessRequirement | undefined>
  /** Replaces this form with the given access requirement's, once the answers are saved */
  onFormChanged: (newerAccessRequirement: JsonSchemaAccessRequirement) => void
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
    form,
    formChangedDuringSession,
    fetchNewerForm,
    onFormChanged,
  } = props
  const { steps, schema } = form
  const isEDucEnabled = Boolean(accessRequirement.eDucTemplateId)

  // The saved answers that this form rejects, found once as it opens. A requester resuming a draft is expected to have
  // questions left to answer; one who was finishing the request when the form changed is not.
  const initialAnswerIssues = useConstant(() => {
    const answers = request.schemaData ?? {}
    const issues = findRequestAnswerIssues(
      answers,
      getRequestType(request),
      form,
      formChangedDuringSession,
    )
    return { issues, answers: pick(answers, Object.keys(issues)) }
  })
  const [activeStepIndex, setActiveStepIndex] = useState(() => {
    if (!formChangedDuringSession) {
      return 0
    }
    // Return to the first step that needs attention, or to the last step to finish the request
    const firstStepWithIssues = steps.findIndex(step =>
      getStepPropertyKeys(step).some(key => key in initialAnswerIssues.issues),
    )
    return firstStepWithIssues === -1 ? steps.length : firstStepWithIssues + 1
  })
  const [alertMessage, setAlertMessage] = useState<string | undefined>()
  const [requesterInformation, setRequesterInformation] =
    useState<RequesterInformationValues>(() =>
      toRequesterInformationValues(request, currentUserId),
    )
  const [schemaData, setSchemaData] = useState<SchemaData>(
    request.schemaData ?? {},
  )
  // An issue stands until the requester changes the answer it was found with
  const answerIssues = useMemo(
    () =>
      pickBy(initialAnswerIssues.issues, (_message, key) =>
        isEqual(schemaData[key], initialAnswerIssues.answers[key]),
      ),
    [initialAnswerIssues, schemaData],
  )
  const stepIssueCounts = steps.map(
    step => getStepPropertyKeys(step).filter(key => key in answerIssues).length,
  )
  const schemaStepFormRef = useRef<SchemaStepFormHandle>(null)
  // The IDs of the file fields whose upload is running. Leaving the step would drop the uploaded file.
  const [uploadingFieldIds, setUploadingFieldIds] = useState<
    ReadonlySet<string>
  >(() => new Set())
  const isUploading = uploadingFieldIds.size > 0
  const onUploadingChange = useCallback(
    (fieldId: string, fieldIsUploading: boolean) =>
      setUploadingFieldIds(previous => {
        const next = new Set(previous)
        if (fieldIsUploading) {
          next.add(fieldId)
        } else {
          next.delete(fieldId)
        }
        return next
      }),
    [],
  )
  // The request as last saved. Saves run one at a time, each built on the previous one's result, so that each carries
  // the latest etag and, once the request is created, its ID.
  const savedRequestRef = useRef(request)
  const saveQueueRef = useRef<Promise<unknown>>(Promise.resolve())
  const [isCheckingForm, setIsCheckingForm] = useState(false)
  // A submission rejected because the access requirement changed is finished again once, which checks the form again
  const hasRetriedOutOfDateSubmissionRef = useRef(false)

  const { requestCreationRejection, onUpdateRequestError } =
    useRequestCreationRejection(e => setAlertMessage(e.reason))
  const { mutateAsync: updateRequest, isPending: isSaving } =
    useUpdateDataAccessRequest({ onError: onUpdateRequestError })
  const { mutate: submit, isPending: isSubmitting } =
    useSubmitDataAccessRequest({
      onSuccess: submission => onSubmissionCreated(submission.submissionId),
      onError: e => {
        if (!isAccessRequirementOutOfDateError(e)) {
          setAlertMessage(e.reason)
        } else if (!hasRetriedOutOfDateSubmissionRef.current) {
          hasRetriedOutOfDateSubmissionRef.current = true
          void finishRequest(schemaData)
        } else {
          setAlertMessage(ACCESS_REQUIREMENT_CHANGED_ON_SUBMIT_MESSAGE)
        }
      },
    })

  const isBusy = isSaving || isSubmitting || isCheckingForm
  // Step 0 is the requester information; schema steps follow
  const lastStepIndex = steps.length
  const isLastStep = activeStepIndex === lastStepIndex
  const isRequesterInformationStep = activeStepIndex === 0
  const activeSchemaStep = isRequesterInformationStep
    ? undefined
    : steps[activeStepIndex - 1]

  /**
   * Saves the request built from the last saved one, after any save already in flight settles. Resolves to undefined
   * if the save failed.
   */
  function enqueueSave(
    build: (savedRequest: Request | Renewal) => Request | Renewal,
  ): Promise<Request | Renewal | undefined> {
    const save = saveQueueRef.current.then(async () => {
      // Cleared as this save starts, so that a message left by the save before it is not shown after this one succeeds
      setAlertMessage(undefined)
      try {
        const saved = await updateRequest(build(savedRequestRef.current))
        savedRequestRef.current = saved
        return saved
      } catch {
        // The mutation's onError displays the message
        return undefined
      }
    })
    saveQueueRef.current = save
    return save
  }

  /** Saves the request with the given answers. Resolves to undefined if the save failed. */
  function saveRequest(
    latestSchemaData: SchemaData,
  ): Promise<Request | Renewal | undefined> {
    return enqueueSave(savedRequest =>
      buildRequest(
        savedRequest,
        requesterInformation,
        latestSchemaData,
        schema,
        isEDucEnabled,
      ),
    )
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
      // Any version of the template may list a file, so the files are not filtered by the version of this form
      templateObject: {
        associateObjectType: FileHandleAssociateType.FormTemplateAttachment,
        associateObjectId: accessRequirement.formTemplateRef.templateId,
      },
      // Saves are queued, so answers can change while one is in flight
      canEdit: !isSubmitting,
      onUploadingChange,
    }),
    [
      request.id,
      request.attachments,
      accessRequirement.formTemplateRef.templateId,
      isSubmitting,
      onUploadingChange,
    ],
  )

  /**
   * Saves the answers and submits the request, or continues to the eDUC steps. If the access requirement now uses a
   * different form, the answers are saved as they are and shown against that form instead.
   */
  async function finishRequest(latestSchemaData: SchemaData) {
    setIsCheckingForm(true)
    const newerAccessRequirement = await fetchNewerForm()
    setIsCheckingForm(false)
    if (newerAccessRequirement) {
      if (await saveRequest(latestSchemaData)) {
        onFormChanged(newerAccessRequirement)
      }
      return
    }
    const saved = await saveRequest(
      withoutUnaskedAnswers(latestSchemaData, steps),
    )
    if (!saved) {
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

  // A requester finishing the request when the form changed under them continues without interruption if every answer
  // fits the newer form. Refs survive StrictMode's remount, so the request is finished once.
  const hasContinuedAfterFormChangeRef = useRef(false)
  useEffect(() => {
    if (
      formChangedDuringSession &&
      isEmpty(initialAnswerIssues.issues) &&
      !hasContinuedAfterFormChangeRef.current
    ) {
      hasContinuedAfterFormChangeRef.current = true
      void finishRequest(schemaData)
    }
    // Runs on mount only: the request is finished with the answers it opened with
  }, [])

  async function saveAndAdvance(latestSchemaData: SchemaData = schemaData) {
    // Enter in a field also submits the step, so this is guarded as well as the Next button
    if (isUploading || isBusy || requestCreationRejection) {
      return
    }
    if (isLastStep) {
      await finishRequest(latestSchemaData)
      return
    }
    if (await saveRequest(latestSchemaData)) {
      setActiveStepIndex(activeStepIndex + 1)
    }
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
      const ducFileHandleId = response.resp.fileHandleId
      void enqueueSave(savedRequest => ({
        ...buildRequest(
          savedRequest,
          requesterInformation,
          schemaData,
          schema,
          isEDucEnabled,
        ),
        ducFileHandleId,
      }))
    } else if (response.error) {
      setAlertMessage(response.error.reason)
    }
  }

  const disableNext =
    isBusy ||
    isUploading ||
    Boolean(requestCreationRejection) ||
    (isRequesterInformationStep &&
      !isRequesterInformationComplete(requesterInformation, isEDucEnabled))

  let primaryActionText = 'Next'
  if (isLastStep) {
    primaryActionText = onEDucContinue ? 'Continue' : 'Submit'
  }

  const stepTitles = steps.map((step, index) =>
    // The requester information step comes first, so schema steps start at position 2
    getStepTitle(step, index + 2),
  )
  const activeStepAnswerIssues = useMemo(
    () =>
      activeSchemaStep
        ? pick(answerIssues, getStepPropertyKeys(activeSchemaStep))
        : undefined,
    [answerIssues, activeSchemaStep],
  )

  return (
    <>
      <DialogBaseTitle title={REQUEST_ACCESS_TITLE} onCancel={onHide} />
      <DialogContent>
        {!isEmpty(answerIssues) && (
          <AnswersNeedAttentionAlert
            steps={stepTitles
              .map((title, index) => ({
                title,
                issueCount: stepIssueCounts[index],
              }))
              .filter(step => step.issueCount > 0)}
            formChangedDuringSession={formChangedDuringSession}
            sx={{ mb: 2 }}
          />
        )}
        {steps.length > 0 && (
          <Stepper activeStep={activeStepIndex} sx={{ mb: 3 }}>
            <Step>
              <StepLabel>{REQUESTER_INFORMATION_STEP_LABEL}</StepLabel>
            </Step>
            {stepTitles.map((title, index) => (
              <Step key={index}>
                <StepLabel error={stepIssueCounts[index] > 0}>
                  {title}
                </StepLabel>
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
            answerIssues={activeStepAnswerIssues}
            onValid={latestSchemaData => void saveAndAdvance(latestSchemaData)}
          />
        )}
        {requestCreationRejection && (
          <RequestCreationRejectedAlert
            error={requestCreationRejection}
            identityProviders={accessRequirement.identityProviders}
            sx={{ mt: 2 }}
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
            disabled={isBusy || isUploading}
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
                savedRequestRef.current,
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
