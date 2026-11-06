import {
  DATA_SHARING_QUESTION,
  getGenomicsDataSharingHandlers,
} from '@/mocks/accessRequirement/mockGenomicsDataSharing'
import {
  mockJsonSchemaAR1,
  mockJsonSchemaAR2,
} from '@/mocks/accessRequirement/mockJsonSchemaAccessRequirements'
import { MOCK_FILE_HANDLE_ID } from '@/mocks/mock_file_handle'
import { FileUploadProps } from '@/components/FileUpload/FileUpload'
import {
  GENOMICS_TERMS_LABEL as TERMS_LABEL,
  mockClinicalSchema,
  mockGenomicsSchema,
} from '@/mocks/accessRequirement/mockJsonSchemas'
import { getRegisteredSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SUBMISSION_CONTEXT_PROPERTY } from '@/utils/jsonschema/submissionContext'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
  JsonSchemaAccessRequirement,
  Renewal,
  Request,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { JSONSchema7 } from 'json-schema'
import { http, HttpResponse } from 'msw'
import JsonSchemaRequestWizard, {
  REQUESTER_INFORMATION_STEP_LABEL,
  JsonSchemaRequestWizardProps,
} from './JsonSchemaRequestWizard'

// The upload completes with whichever file handle the test sets, or fails. While `holdUploads` is set, it completes
// only when the test calls `completeHeldUpload`.
let uploadedFileHandleId = '4242'
let uploadFailure: string | undefined
let holdUploads = false
let completeHeldUpload: (() => void) | undefined
vi.mock('@/components/FileUpload/FileUpload', () => {
  const FileUpload = (props: FileUploadProps) => (
    <button
      type="button"
      disabled={props.buttonProps?.disabled}
      onClick={() => {
        props.onUploadStart?.()
        const complete = () =>
          props.onComplete?.(
            uploadFailure
              ? { success: false, error: { reason: uploadFailure } }
              : {
                  success: true,
                  resp: {
                    fileHandleId: uploadedFileHandleId,
                    fileName: 'a.pdf',
                  },
                },
          )
        if (holdUploads) {
          completeHeldUpload = complete
        } else {
          complete()
        }
      }}
    >
      {props.label}
    </button>
  )
  return { FileUpload, default: FileUpload }
})
vi.mock('@/components/DirectDownloadButton', () => ({
  default: (props: { fileHandleAssociation: FileHandleAssociation }) => (
    <div data-testid="DirectDownloadButton">
      {JSON.stringify(props.fileHandleAssociation)}
    </div>
  ),
}))
vi.mock('@/components/widgets/FileHandleLink', () => ({
  FileHandleLink: (props: {
    fileHandleAssociation?: FileHandleAssociation
    creatorFileHandleId?: string
    displayValue?: string
    buttonVariant?: string
  }) => (
    <div
      data-testid="FileHandleLink"
      data-button-variant={props.buttonVariant}
      data-display-value={props.displayValue}
    >
      {JSON.stringify(
        props.fileHandleAssociation ?? {
          creatorFileHandleId: props.creatorFileHandleId,
        },
      )}
    </div>
  ),
}))

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const genomicsAccessRequirement =
  mockJsonSchemaAR1 as unknown as JsonSchemaAccessRequirement
const clinicalAccessRequirement =
  mockJsonSchemaAR2 as unknown as JsonSchemaAccessRequirement

const REQUEST_ID = '9100'
const SUBMISSION_ID = '5551212'

function createRequest(
  accessRequirement: JsonSchemaAccessRequirement,
  overrides: Partial<Request> = {},
): Request {
  return {
    id: REQUEST_ID,
    accessRequirementId: String(accessRequirement.id),
    irbFileHandleId: '',
    createdOn: '2026-01-01T00:00:00.000Z',
    modifiedOn: '2026-01-01T00:00:00.000Z',
    createdBy: '1',
    modifiedBy: '1',
    accessorChanges: [],
    etag: 'etag-0',
    concreteType: 'org.sagebionetworks.repo.model.dataaccess.Request',
    ...overrides,
  }
}

function createRenewal(
  accessRequirement: JsonSchemaAccessRequirement,
): Renewal {
  return {
    ...createRequest(accessRequirement),
    concreteType: 'org.sagebionetworks.repo.model.dataaccess.Renewal',
  }
}

/**
 * Serves the request for the access requirement, records what is saved to it, and creates a submission (or rejects it).
 * Like Synapse, a save with an etag other than the current one is rejected as a conflict.
 */
function mockRequestServices(
  accessRequirement: JsonSchemaAccessRequirement,
  initialRequest: Request | Renewal,
  options: { submissionRejection?: string } = {},
) {
  let currentRequest = initialRequest
  const savedRequests: Array<Request | Renewal> = []
  const submissionRequests: unknown[] = []
  let heldSave: Promise<void> | undefined
  server.use(
    ...getRegisteredSchemaHandlers(REPO_ENDPOINT, [
      mockGenomicsSchema as JSONSchema7,
      mockClinicalSchema as JSONSchema7,
    ]),
    http.get(
      `${REPO_ENDPOINT}/repo/v1/accessRequirement/${accessRequirement.id}/dataAccessRequestForUpdate`,
      () => HttpResponse.json(currentRequest),
    ),
    http.post(
      `${REPO_ENDPOINT}/repo/v1/dataAccessRequest`,
      async ({ request }) => {
        const body = (await request.json()) as Request | Renewal
        if (heldSave) {
          const gate = heldSave
          heldSave = undefined
          await gate
        }
        if (body.etag !== currentRequest.etag) {
          return HttpResponse.json(
            { reason: 'The request was updated since it was read' },
            { status: 409 },
          )
        }
        currentRequest = { ...body, etag: `etag-${savedRequests.length + 1}` }
        savedRequests.push(currentRequest)
        return HttpResponse.json(currentRequest)
      },
    ),
    http.post(
      `${REPO_ENDPOINT}/repo/v1/dataAccessRequest/:requestId/submission`,
      async ({ request }) => {
        submissionRequests.push(await request.json())
        if (options.submissionRejection) {
          return HttpResponse.json(
            { reason: options.submissionRejection },
            { status: 400 },
          )
        }
        return HttpResponse.json({ submissionId: SUBMISSION_ID })
      },
    ),
  )
  /** Holds the response to the next save until the returned function is called */
  function holdNextSave() {
    const { promise, resolve } = Promise.withResolvers<void>()
    heldSave = promise
    return resolve
  }
  return { savedRequests, submissionRequests, holdNextSave }
}

function renderWizard(
  accessRequirement: JsonSchemaAccessRequirement,
  overrides: Partial<JsonSchemaRequestWizardProps> = {},
) {
  const props: JsonSchemaRequestWizardProps = {
    accessRequirement,
    subjectId: 'syn123',
    subjectType: RestrictableObjectType.ENTITY,
    onHide: vi.fn(),
    onCancel: vi.fn(),
    onSubmissionCreated: vi.fn(),
    ...overrides,
  }
  render(<JsonSchemaRequestWizard {...props} />, {
    wrapper: createWrapper(),
  })
  return props
}

async function acceptTerms(user: UserEvent) {
  await user.click(await screen.findByRole('checkbox', { name: TERMS_LABEL }))
}

/** Answers the Research Use step of the plain genomics form, reaching its Agreements step. */
async function advanceToAgreementsStep(user: UserEvent) {
  await advanceToStep(user)
  await user.type(await screen.findByRole('textbox'), 'Studying the genome')
  await user.click(screen.getByRole('button', { name: 'Next' }))
  return screen.findByRole('checkbox', { name: TERMS_LABEL })
}

/** Answers the Research Use step of the genomics form served by getGenomicsDataSharingHandlers */
async function advanceToDataSharingStep(user: UserEvent) {
  await advanceToStep(user)
  await user.type(await screen.findByRole('textbox'), 'Studying the genome')
  await user.click(screen.getByRole('button', { name: 'Next' }))
  return screen.findByRole('radiogroup', { name: DATA_SHARING_QUESTION })
}

async function advanceToStep(user: ReturnType<typeof userEvent.setup>) {
  await user.click(await screen.findByRole('button', { name: 'Next' }))
}

describe('JsonSchemaRequestWizard', () => {
  it('shows the requester information followed by the template steps, in order', async () => {
    mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement),
    )
    const user = userEvent.setup()
    renderWizard(genomicsAccessRequirement)

    await screen.findByText(REQUESTER_INFORMATION_STEP_LABEL, {
      selector: '.MuiStepLabel-label',
    })
    const stepLabels = Array.from(
      document.querySelectorAll('.MuiStepLabel-label'),
    ).map(label => label.textContent)
    expect(stepLabels).toEqual([
      REQUESTER_INFORMATION_STEP_LABEL,
      'Research Use',
      'Agreements',
    ])

    await advanceToStep(user)
    expect(await screen.findByRole('textbox')).toBeVisible()
    expect(screen.queryByRole('radio')).not.toBeInTheDocument()
  })

  it("renders a long-answer question, set by the slot's uiDefinition, as a multi-line box", async () => {
    mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement),
    )
    const user = userEvent.setup()
    renderWizard(genomicsAccessRequirement)
    await advanceToStep(user)

    // The genomics template's intendedDataUse slot sets `ui:widget: textarea` with 5 rows.
    const answer = await screen.findByRole('textbox')
    expect(answer.tagName).toBe('TEXTAREA')
    expect(answer).toHaveAttribute('rows', '5')
  })

  it('does not advance past a step with a missing required answer', async () => {
    const { savedRequests } = mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement),
    )
    const user = userEvent.setup()
    renderWizard(genomicsAccessRequirement)
    await advanceToStep(user)
    await screen.findByRole('textbox')
    const savesBeforeNext = savedRequests.length

    await user.click(screen.getByRole('button', { name: 'Next' }))

    expect(await screen.findAllByText(/required/i)).not.toHaveLength(0)
    expect(screen.queryByRole('radio')).not.toBeInTheDocument()
    expect(savedRequests).toHaveLength(savesBeforeNext)
  })

  it('submits the answers with the submission context and confirms the submission', async () => {
    const { savedRequests, submissionRequests } = mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement),
    )
    const user = userEvent.setup()
    const props = renderWizard(genomicsAccessRequirement)
    await advanceToStep(user)
    await user.type(await screen.findByRole('textbox'), 'Studying the genome')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await acceptTerms(user)
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    await waitFor(() =>
      expect(props.onSubmissionCreated).toHaveBeenCalledWith(SUBMISSION_ID),
    )
    expect(savedRequests.at(-1)?.schemaData).toEqual({
      intendedDataUse: 'Studying the genome',
      agreeToTerms: true,
      [SUBMISSION_CONTEXT_PROPERTY]: 'REQUEST',
    })
    expect(savedRequests.at(-1)?.attachments).toEqual([])
    expect(submissionRequests).toEqual([
      expect.objectContaining({
        requestId: REQUEST_ID,
        requestEtag: savedRequests.at(-1)?.etag,
      }),
    ])
  })

  it('asks the requester to check the terms box, and does not submit until it is checked', async () => {
    const { submissionRequests } = mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement),
    )
    const user = userEvent.setup()
    const props = renderWizard(genomicsAccessRequirement)
    const terms = await advanceToAgreementsStep(user)
    expect(terms).not.toBeChecked()
    expect(screen.queryByRole('radio')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(
      await screen.findByRole('checkbox', {
        name: TERMS_LABEL,
        description: /You must check this box to continue/,
      }),
    ).toHaveAttribute('aria-invalid', 'true')
    expect(submissionRequests).toHaveLength(0)

    await acceptTerms(user)
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    await waitFor(() =>
      expect(props.onSubmissionCreated).toHaveBeenCalledWith(SUBMISSION_ID),
    )
  })

  it('shows the server message and keeps the answers when the submission is rejected', async () => {
    const rejection = 'The intended data use is too vague'
    mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement),
      { submissionRejection: rejection },
    )
    const user = userEvent.setup()
    const props = renderWizard(genomicsAccessRequirement)
    await advanceToStep(user)
    await user.type(await screen.findByRole('textbox'), 'Studying the genome')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await acceptTerms(user)
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    await screen.findByText(rejection)
    expect(props.onSubmissionCreated).not.toHaveBeenCalled()
    await user.click(screen.getByRole('button', { name: 'Back' }))
    expect(await screen.findByRole('textbox')).toHaveValue(
      'Studying the genome',
    )
  })

  it('restores answers saved to the request', async () => {
    mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement, {
        schemaData: { intendedDataUse: 'Saved answer' },
      }),
    )
    const user = userEvent.setup()
    renderWizard(genomicsAccessRequirement)
    await advanceToStep(user)

    expect(await screen.findByRole('textbox')).toHaveValue('Saved answer')
  })

  it('replaces the saved attachments with the file handles that the saved answers reference', async () => {
    const { savedRequests } = mockRequestServices(
      clinicalAccessRequirement,
      createRequest(clinicalAccessRequirement, {
        schemaData: { projectTitle: 'Trial', signedDataUseAgreement: 123 },
        attachments: ['999'],
      }),
    )
    const user = userEvent.setup()
    renderWizard(clinicalAccessRequirement)
    await advanceToStep(user)

    await waitFor(() => expect(savedRequests).toHaveLength(1))
    expect(savedRequests[0].attachments).toEqual(['123'])
  })

  it('saves an uploaded DUC with the answers’ attachments, which do not include the DUC', async () => {
    const ducAccessRequirement = {
      ...clinicalAccessRequirement,
      isDUCRequired: true,
    }
    const { savedRequests } = mockRequestServices(
      ducAccessRequirement,
      createRequest(ducAccessRequirement, {
        schemaData: { projectTitle: 'Trial', signedDataUseAgreement: 123 },
        attachments: ['999'],
      }),
    )
    const user = userEvent.setup()
    renderWizard(ducAccessRequirement)
    await user.click(
      await screen.findByRole('button', {
        name: 'Upload Data Use Certificate',
      }),
    )

    await waitFor(() => expect(savedRequests).toHaveLength(1))
    expect(savedRequests[0]).toMatchObject({
      ducFileHandleId: uploadedFileHandleId,
      attachments: ['123'],
    })
  })

  it.each([
    { requestType: 'request', shown: false, request: createRequest },
    { requestType: 'renewal', shown: true, request: createRenewal },
  ])(
    'shows renewal-only questions only for a renewal ($requestType)',
    async ({ shown, request }) => {
      mockRequestServices(
        clinicalAccessRequirement,
        request(clinicalAccessRequirement),
      )
      const user = userEvent.setup()
      renderWizard(clinicalAccessRequirement)
      await advanceToStep(user)
      await user.type(await screen.findByRole('textbox'), 'Trial')
      await user.click(screen.getByRole('button', { name: 'Next' }))

      await screen.findByText('Provide any required compliance documentation.')
      if (shown) {
        expect(await screen.findByRole('textbox')).toBeVisible()
      } else {
        expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
      }
    },
  )

  describe('file questions', () => {
    const UPLOADED_FILE_HANDLE_ID = '4242'
    const REPLACEMENT_FILE_HANDLE_ID = '5353'

    const UPLOAD_BUTTON = 'Upload Signed Data Use Agreement'

    beforeEach(() => {
      uploadedFileHandleId = UPLOADED_FILE_HANDLE_ID
      uploadFailure = undefined
      holdUploads = false
      completeHeldUpload = undefined
    })

    async function advanceToFileQuestion(
      user: ReturnType<typeof userEvent.setup>,
    ) {
      await advanceToStep(user)
      await user.type(await screen.findByRole('textbox'), 'Trial')
      await user.click(screen.getByRole('button', { name: 'Next' }))
      await screen.findByRole('button', { name: UPLOAD_BUTTON })
    }

    async function upload(
      user: ReturnType<typeof userEvent.setup>,
      fileHandleId: string,
    ) {
      uploadedFileHandleId = fileHandleId
      await user.click(
        await screen.findByRole('button', { name: UPLOAD_BUTTON }),
      )
    }

    function getFileLinks() {
      return [
        ...screen.queryAllByTestId('FileHandleLink'),
        ...screen.queryAllByTestId('DirectDownloadButton'),
      ].map(
        link => JSON.parse(link.textContent ?? '') as Record<string, unknown>,
      )
    }

    it('offers the template file through the form template', async () => {
      mockRequestServices(
        clinicalAccessRequirement,
        createRequest(clinicalAccessRequirement),
      )
      const user = userEvent.setup()
      renderWizard(clinicalAccessRequirement)
      await advanceToFileQuestion(user)

      expect(getFileLinks()).toEqual([
        {
          fileHandleId: MOCK_FILE_HANDLE_ID,
          associateObjectType: FileHandleAssociateType.FormTemplateAttachment,
          associateObjectId:
            clinicalAccessRequirement.formTemplateRef.templateId,
        },
      ])
      // The template download is a call-to-action button
      const templateLink = screen.getByTestId('FileHandleLink')
      expect(templateLink).toHaveAttribute('data-button-variant', 'outlined')
      expect(templateLink).toHaveAttribute(
        'data-display-value',
        'Download Template',
      )
    })

    it('saves an uploaded file as the answer and in attachments, and shows it through the request', async () => {
      const { savedRequests } = mockRequestServices(
        clinicalAccessRequirement,
        createRequest(clinicalAccessRequirement),
      )
      const user = userEvent.setup()
      renderWizard(clinicalAccessRequirement)
      await advanceToFileQuestion(user)
      const savesBeforeUpload = savedRequests.length

      await upload(user, UPLOADED_FILE_HANDLE_ID)

      await waitFor(() =>
        expect(savedRequests).toHaveLength(savesBeforeUpload + 1),
      )
      expect(savedRequests.at(-1)?.schemaData).toMatchObject({
        projectTitle: 'Trial',
        signedDataUseAgreement: Number(UPLOADED_FILE_HANDLE_ID),
      })
      expect(savedRequests.at(-1)?.attachments).toEqual([
        UPLOADED_FILE_HANDLE_ID,
      ])
      await waitFor(() =>
        expect(getFileLinks()).toContainEqual({
          fileHandleId: UPLOADED_FILE_HANDLE_ID,
          associateObjectType:
            FileHandleAssociateType.DataAccessRequestAttachment,
          associateObjectId: REQUEST_ID,
        }),
      )
      // The wizard stays on the step
      expect(
        await screen.findByRole('button', { name: 'Remove file' }),
      ).toBeVisible()
    })

    it('replaces the attachment when the file is replaced, and drops it when the file is removed', async () => {
      const { savedRequests } = mockRequestServices(
        clinicalAccessRequirement,
        createRequest(clinicalAccessRequirement),
      )
      const user = userEvent.setup()
      renderWizard(clinicalAccessRequirement)
      await advanceToFileQuestion(user)
      await upload(user, UPLOADED_FILE_HANDLE_ID)
      await waitFor(() =>
        expect(savedRequests.at(-1)?.attachments).toEqual([
          UPLOADED_FILE_HANDLE_ID,
        ]),
      )
      await upload(user, REPLACEMENT_FILE_HANDLE_ID)
      await waitFor(() =>
        expect(savedRequests.at(-1)?.attachments).toEqual([
          REPLACEMENT_FILE_HANDLE_ID,
        ]),
      )

      const removeButton = await screen.findByRole('button', {
        name: 'Remove file',
      })
      await waitFor(() => expect(removeButton).toBeEnabled())
      await user.click(removeButton)
      await waitFor(() => expect(savedRequests.at(-1)?.attachments).toEqual([]))
      expect(savedRequests.at(-1)?.schemaData).not.toHaveProperty(
        'signedDataUseAgreement',
      )
      await waitFor(() =>
        expect(
          screen.queryByRole('button', { name: 'Remove file' }),
        ).toBeNull(),
      )
    })

    it('does not submit until a file is attached, then submits with the file in attachments', async () => {
      const { savedRequests, submissionRequests } = mockRequestServices(
        clinicalAccessRequirement,
        createRequest(clinicalAccessRequirement),
      )
      const user = userEvent.setup()
      const props = renderWizard(clinicalAccessRequirement)
      await advanceToFileQuestion(user)

      await user.click(screen.getByRole('button', { name: 'Submit' }))
      await screen.findAllByText(/required property/i)
      expect(submissionRequests).toHaveLength(0)

      await upload(user, UPLOADED_FILE_HANDLE_ID)
      await waitFor(() =>
        expect(screen.getByRole('button', { name: 'Submit' })).toBeEnabled(),
      )
      await user.click(screen.getByRole('button', { name: 'Submit' }))

      await waitFor(() =>
        expect(props.onSubmissionCreated).toHaveBeenCalledWith(SUBMISSION_ID),
      )
      expect(savedRequests.at(-1)?.attachments).toEqual([
        UPLOADED_FILE_HANDLE_ID,
      ])
    })

    it('reports a failed save of an uploaded file, keeps the answers, and shows the file through its creator', async () => {
      mockRequestServices(
        clinicalAccessRequirement,
        createRequest(clinicalAccessRequirement),
      )
      const user = userEvent.setup()
      renderWizard(clinicalAccessRequirement)
      await advanceToFileQuestion(user)
      server.use(
        http.post(`${REPO_ENDPOINT}/repo/v1/dataAccessRequest`, () =>
          HttpResponse.json(
            { reason: 'The file cannot be attached' },
            { status: 403 },
          ),
        ),
      )

      await upload(user, UPLOADED_FILE_HANDLE_ID)

      await screen.findByText(/The file cannot be attached/)
      expect(getFileLinks()).toContainEqual({
        creatorFileHandleId: UPLOADED_FILE_HANDLE_ID,
      })
      await user.click(await screen.findByRole('button', { name: 'Back' }))
      expect(await screen.findByRole('textbox')).toHaveValue('Trial')
    })

    it('blocks Submit and Back while an upload is running, so the uploaded file is not dropped', async () => {
      const { savedRequests } = mockRequestServices(
        clinicalAccessRequirement,
        createRequest(clinicalAccessRequirement),
      )
      const user = userEvent.setup()
      renderWizard(clinicalAccessRequirement)
      await advanceToFileQuestion(user)
      holdUploads = true

      await upload(user, UPLOADED_FILE_HANDLE_ID)

      expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled()
      expect(screen.getByRole('button', { name: 'Back' })).toBeDisabled()
      // A second upload could finish first and leave the step while the other is still running
      expect(screen.getByRole('button', { name: UPLOAD_BUTTON })).toBeDisabled()
      act(() => completeHeldUpload?.())
      await waitFor(() =>
        expect(savedRequests.at(-1)?.attachments).toEqual([
          UPLOADED_FILE_HANDLE_ID,
        ]),
      )
      await waitFor(() =>
        expect(screen.getByRole('button', { name: 'Submit' })).toBeEnabled(),
      )
      expect(screen.getByRole('button', { name: 'Back' })).toBeEnabled()
    })

    it('saves a file answer that changes during a save once that save finishes, with its etag', async () => {
      const { savedRequests, holdNextSave } = mockRequestServices(
        clinicalAccessRequirement,
        createRequest(clinicalAccessRequirement),
      )
      const user = userEvent.setup()
      renderWizard(clinicalAccessRequirement)
      await advanceToFileQuestion(user)
      const releaseFirstSave = holdNextSave()
      const savesBeforeUpload = savedRequests.length

      await upload(user, UPLOADED_FILE_HANDLE_ID)
      await upload(user, REPLACEMENT_FILE_HANDLE_ID)
      releaseFirstSave()

      await waitFor(() =>
        expect(savedRequests).toHaveLength(savesBeforeUpload + 2),
      )
      expect(savedRequests.at(-1)?.attachments).toEqual([
        REPLACEMENT_FILE_HANDLE_ID,
      ])
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })

    it('reports a failed upload and keeps the other answers', async () => {
      const { savedRequests } = mockRequestServices(
        clinicalAccessRequirement,
        createRequest(clinicalAccessRequirement),
      )
      const user = userEvent.setup()
      renderWizard(clinicalAccessRequirement)
      await advanceToFileQuestion(user)
      const savesBeforeUpload = savedRequests.length
      uploadFailure = 'The file is too large'

      await user.click(screen.getByRole('button', { name: UPLOAD_BUTTON }))

      await screen.findByText('The file is too large')
      expect(savedRequests).toHaveLength(savesBeforeUpload)
      expect(screen.queryByRole('button', { name: 'Remove file' })).toBeNull()
      await user.click(screen.getByRole('button', { name: 'Back' }))
      expect(await screen.findByRole('textbox')).toHaveValue('Trial')
    })

    it('shows a file saved to the request through the request', async () => {
      mockRequestServices(
        clinicalAccessRequirement,
        createRequest(clinicalAccessRequirement, {
          schemaData: { projectTitle: 'Trial', signedDataUseAgreement: 123 },
          attachments: ['123'],
        }),
      )
      const user = userEvent.setup()
      renderWizard(clinicalAccessRequirement)
      await advanceToStep(user)
      await user.click(await screen.findByRole('button', { name: 'Next' }))

      await screen.findByRole('button', { name: 'Remove file' })
      expect(getFileLinks()).toContainEqual({
        fileHandleId: '123',
        associateObjectType:
          FileHandleAssociateType.DataAccessRequestAttachment,
        associateObjectId: REQUEST_ID,
      })
    })
  })

  it('saves the answers and continues to the eDUC steps instead of submitting', async () => {
    const eDucAccessRequirement = {
      ...genomicsAccessRequirement,
      eDucTemplateId: 'educ-1',
    }
    const { savedRequests, submissionRequests } = mockRequestServices(
      eDucAccessRequirement,
      createRequest(eDucAccessRequirement, {
        institution: 'Sage',
        principalInvestigator: {
          name: 'Pat Investigator',
          userId: '2',
          institutionalEmail: 'pat@sage.org',
        },
        signingOfficial: {
          name: 'Sam Official',
          institutionalEmail: 'sam@sage.org',
        },
      }),
    )
    const user = userEvent.setup()
    const props = renderWizard(eDucAccessRequirement, {
      onEDucContinue: vi.fn(),
    })
    await advanceToStep(user)
    await user.type(await screen.findByRole('textbox'), 'Studying the genome')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await acceptTerms(user)
    await user.click(screen.getByRole('button', { name: 'Continue' }))

    await waitFor(() => expect(props.onEDucContinue).toHaveBeenCalled())
    expect(savedRequests.at(-1)?.schemaData).toMatchObject({
      intendedDataUse: 'Studying the genome',
    })
    expect(submissionRequests).toHaveLength(0)
  })

  it('does not advance past an unanswered required Yes/No question', async () => {
    const { savedRequests } = mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement),
    )
    server.use(...getGenomicsDataSharingHandlers(REPO_ENDPOINT))
    const user = userEvent.setup()
    renderWizard(genomicsAccessRequirement)
    const question = await advanceToDataSharingStep(user)
    const savesBeforeNext = savedRequests.length

    await user.click(screen.getByRole('button', { name: 'Next' }))

    expect(await screen.findAllByText(/required/i)).not.toHaveLength(0)
    expect(question).toBeVisible()
    expect(savedRequests).toHaveLength(savesBeforeNext)
  })

  it('saves a No answer to a Yes/No question as false', async () => {
    const { savedRequests } = mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement),
    )
    server.use(...getGenomicsDataSharingHandlers(REPO_ENDPOINT))
    const user = userEvent.setup()
    renderWizard(genomicsAccessRequirement)
    const question = await advanceToDataSharingStep(user)

    await user.click(within(question).getByRole('radio', { name: 'No' }))
    await user.click(screen.getByRole('button', { name: 'Next' }))

    await waitFor(() =>
      expect(savedRequests.at(-1)?.schemaData).toMatchObject({
        intendedDataUse: 'Studying the genome',
        sharesDataExternally: false,
      }),
    )
  })

  it('restores a saved No answer to a Yes/No question', async () => {
    mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement, {
        schemaData: {
          intendedDataUse: 'Saved answer',
          sharesDataExternally: false,
        },
      }),
    )
    server.use(...getGenomicsDataSharingHandlers(REPO_ENDPOINT))
    const user = userEvent.setup()
    renderWizard(genomicsAccessRequirement)
    await advanceToStep(user)
    await screen.findByRole('textbox')
    await user.click(screen.getByRole('button', { name: 'Next' }))

    const question = await screen.findByRole('radiogroup', {
      name: DATA_SHARING_QUESTION,
    })
    expect(within(question).getByRole('radio', { name: 'No' })).toBeChecked()
    expect(
      within(question).getByRole('radio', { name: 'Yes' }),
    ).not.toBeChecked()
  })
})
