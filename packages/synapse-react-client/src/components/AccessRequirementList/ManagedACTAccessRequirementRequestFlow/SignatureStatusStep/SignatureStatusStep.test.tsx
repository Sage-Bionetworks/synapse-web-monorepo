import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_DATA_ACCESS_REQUEST } from '@/mocks/dataaccess/MockDataAccessRequest'
import { server } from '@/mocks/msw/server'
import { MOCK_USER_ID, mockUserData } from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  DATA_ACCESS_REQUEST,
  DATA_ACCESS_REQUEST_SIGNATURE_FILEHANDLE_ID,
  DATA_ACCESS_REQUEST_SIGNATURE_STATUS,
  DATA_ACCESS_REQUEST_SUBMISSION,
} from '@/utils/APIConstants'
import { EDucSignatureStatus } from '@sage-bionetworks/synapse-client'
import { RestrictableObjectType } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import SignatureStatusStep, {
  SignatureStatusStepProps,
} from './SignatureStatusStep'

vi.spyOn(SynapseClient, 'getUserProfileById').mockImplementation(id => {
  return Promise.resolve(
    mockUserData.find(user => String(user.id) === String(id))!.userProfile!,
  )
})

const mockGetDataRequestForUpdate = vi.spyOn(
  SynapseClient,
  'getDataAccessRequestForUpdate',
)

const mockOnHide = vi.fn()
const mockOnBackClicked = vi.fn()
const mockOnSubmissionCreated = vi.fn()

const defaultProps: SignatureStatusStepProps = {
  managedACTAccessRequirement: {
    ...mockManagedACTAccessRequirement,
    eDucTemplateId: 'educ-template-123',
  },
  subjectId: '9876543',
  subjectType: RestrictableObjectType.ENTITY,
  onHide: mockOnHide,
  onBackClicked: mockOnBackClicked,
  onSubmissionCreated: mockOnSubmissionCreated,
}

function renderComponent(props: Partial<SignatureStatusStepProps> = {}) {
  const user = userEvent.setup()
  const component = render(
    <SignatureStatusStep {...defaultProps} {...props} />,
    { wrapper: createWrapper({ withErrorBoundary: true }) },
  )
  return { user, component }
}

const statusEndpoint = `*${DATA_ACCESS_REQUEST_SIGNATURE_STATUS(
  MOCK_DATA_ACCESS_REQUEST.id,
)}`
const signedFileHandleEndpoint = `*${DATA_ACCESS_REQUEST_SIGNATURE_FILEHANDLE_ID(
  MOCK_DATA_ACCESS_REQUEST.id,
)}`
const updateEndpoint = `*${DATA_ACCESS_REQUEST}`
const submissionEndpoint = `*${DATA_ACCESS_REQUEST_SUBMISSION(
  MOCK_DATA_ACCESS_REQUEST.id,
)}`

const partiallySignedStatus: EDucSignatureStatus = {
  ducStatus: 'sent',
  includesRequestChanges: true,
  signerStatus: [
    { name: 'Alice Accessor', userId: String(MOCK_USER_ID), status: 'done' },
    { name: 'Bob Collaborator', userId: '3388889', status: 'pending' },
    { name: 'Cara Officer', status: 'pending' },
    { name: 'Dan Declined', status: 'declined' },
  ],
}

const fullySignedStatus: EDucSignatureStatus = {
  ducStatus: 'completed',
  includesRequestChanges: true,
  signerStatus: [
    { name: 'Alice Accessor', userId: String(MOCK_USER_ID), status: 'done' },
    { name: 'Bob Collaborator', userId: '3388889', status: 'done' },
    { name: 'Cara Officer', status: 'done' },
  ],
}

describe('SignatureStatusStep', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    mockOnHide.mockReset()
    mockOnBackClicked.mockReset()
    mockOnSubmissionCreated.mockReset()
    mockGetDataRequestForUpdate.mockResolvedValue({
      ...MOCK_DATA_ACCESS_REQUEST,
      eDucSignatureEnvelopeId: 'docusign-envelope-xyz',
    })
  })

  it('renders the heading and instructional copy', async () => {
    server.use(
      http.get(statusEndpoint, () =>
        HttpResponse.json(partiallySignedStatus, { status: 200 }),
      ),
    )
    renderComponent()

    await screen.findByRole('heading', {
      name: /Sign a Data Use Certificate/i,
    })
    expect(
      screen.getByText(/Your DUC has been emailed to your Collaborators/i),
    ).toBeInTheDocument()
  })

  it('shows the count of collected signatures and lists outstanding signers', async () => {
    server.use(
      http.get(statusEndpoint, () =>
        HttpResponse.json(partiallySignedStatus, { status: 200 }),
      ),
    )
    renderComponent()

    await screen.findByText(/1 out of 4 signatures collected/i)
    await screen.findByText(/still waiting for signatures from/i)

    // Signer with a userId is linked to their Synapse profile in a new tab.
    const bobLink = screen.getByRole('link', { name: 'Bob Collaborator' })
    expect(bobLink).toHaveAttribute('target', '_blank')
    expect(bobLink).toHaveAttribute(
      'href',
      expect.stringMatching(/Profile:3388889$/),
    )

    // Signer without a userId is rendered as plain text (no link).
    expect(screen.getByText('Cara Officer').tagName).not.toBe('A')

    // Signers whose status is neither 'pending' nor 'done' show a status label.
    expect(screen.getByText(/Dan Declined/)).toBeInTheDocument()
    expect(screen.getByText(/\(declined\)/)).toBeInTheDocument()

    // The already-signed accessor is not listed as outstanding.
    expect(screen.queryByText('Alice Accessor')).not.toBeInTheDocument()
  })

  it('shows the "All signatures collected" message when every signer is done', async () => {
    server.use(
      http.get(statusEndpoint, () =>
        HttpResponse.json(fullySignedStatus, { status: 200 }),
      ),
    )
    renderComponent()

    await screen.findByText(/All signatures collected/i)
    expect(
      screen.queryByText(/still waiting for signatures from/i),
    ).not.toBeInTheDocument()
  })

  it('disables Submit until all signatures are collected', async () => {
    server.use(
      http.get(statusEndpoint, () =>
        HttpResponse.json(partiallySignedStatus, { status: 200 }),
      ),
    )
    renderComponent()

    const submit = await screen.findByRole('button', { name: 'Submit' })
    await waitFor(() => expect(submit).toBeDisabled())
  })

  it('enables Submit once all signatures are collected and the signed file handle loads', async () => {
    server.use(
      http.get(statusEndpoint, () =>
        HttpResponse.json(fullySignedStatus, { status: 200 }),
      ),
      http.get(signedFileHandleEndpoint, () =>
        HttpResponse.json(
          { fileHandleId: 'signed-duc-file-handle' },
          { status: 200 },
        ),
      ),
    )
    renderComponent()

    const submit = await screen.findByRole('button', { name: 'Submit' })
    await waitFor(() => expect(submit).toBeEnabled())
  })

  it('invokes onBackClicked when Back is clicked', async () => {
    server.use(
      http.get(statusEndpoint, () =>
        HttpResponse.json(partiallySignedStatus, { status: 200 }),
      ),
    )
    const { user } = renderComponent()
    await user.click(await screen.findByRole('button', { name: 'Back' }))
    expect(mockOnBackClicked).toHaveBeenCalledTimes(1)
  })

  it('hides the Back button when onBackClicked is not provided', async () => {
    server.use(
      http.get(statusEndpoint, () =>
        HttpResponse.json(partiallySignedStatus, { status: 200 }),
      ),
    )
    renderComponent({ onBackClicked: undefined })
    await screen.findByRole('button', { name: 'Submit' })
    expect(
      screen.queryByRole('button', { name: 'Back' }),
    ).not.toBeInTheDocument()
  })

  it('invokes onHide when the close icon is clicked', async () => {
    server.use(
      http.get(statusEndpoint, () =>
        HttpResponse.json(partiallySignedStatus, { status: 200 }),
      ),
    )
    const { user } = renderComponent()
    await user.click(await screen.findByRole('button', { name: 'Close' }))
    expect(mockOnHide).toHaveBeenCalledTimes(1)
  })

  it('refetches the status when the Refresh button is clicked', async () => {
    let callCount = 0
    server.use(
      http.get(statusEndpoint, () => {
        callCount += 1
        return HttpResponse.json(partiallySignedStatus, { status: 200 })
      }),
    )
    const { user } = renderComponent()
    await screen.findByText(/1 out of 4 signatures collected/i)
    const initialCount = callCount
    await user.click(screen.getByRole('button', { name: /Refresh/i }))
    await waitFor(() => expect(callCount).toBeGreaterThan(initialCount))
  })

  it('renders the View DUC link using viewDucHrefOverride when provided', async () => {
    server.use(
      http.get(statusEndpoint, () =>
        HttpResponse.json(partiallySignedStatus, { status: 200 }),
      ),
    )
    renderComponent({
      viewDucHrefOverride: 'https://example.com/mock-duc.pdf',
    })
    const viewDucLink = await screen.findByRole('link', { name: /View DUC/i })
    expect(viewDucLink).toHaveAttribute(
      'href',
      'https://example.com/mock-duc.pdf',
    )
    expect(viewDucLink).toHaveAttribute('target', '_blank')
  })

  it('shows an error alert when the status query fails', async () => {
    server.use(
      http.get(statusEndpoint, () =>
        HttpResponse.json({ reason: 'status failed' }, { status: 500 }),
      ),
    )
    renderComponent()

    await screen.findByText(/couldn't load the current signature status/i)
    expect(screen.getByText('status failed')).toBeInTheDocument()
  })

  it('submits the request with the signed DUC file handle attached', async () => {
    server.use(
      http.get(statusEndpoint, () =>
        HttpResponse.json(fullySignedStatus, { status: 200 }),
      ),
      http.get(signedFileHandleEndpoint, () =>
        HttpResponse.json(
          { fileHandleId: 'signed-duc-file-handle' },
          { status: 200 },
        ),
      ),
    )
    let updatedBody: { ducFileHandleId?: string } | undefined
    let submitCallCount = 0
    server.use(
      http.post(updateEndpoint, async ({ request }) => {
        const body = (await request.json()) as {
          id: string
          etag: string
          ducFileHandleId?: string
        }
        updatedBody = body
        return HttpResponse.json({ ...body, etag: 'new-etag' }, { status: 201 })
      }),
      http.post(submissionEndpoint, () => {
        submitCallCount += 1
        return HttpResponse.json({ submissionId: 'sub-99' }, { status: 201 })
      }),
    )

    const { user } = renderComponent()
    const submit = await screen.findByRole('button', { name: 'Submit' })
    await waitFor(() => expect(submit).toBeEnabled())
    await user.click(submit)

    await waitFor(() =>
      expect(mockOnSubmissionCreated).toHaveBeenCalledWith('sub-99'),
    )
    expect(updatedBody?.ducFileHandleId).toBe('signed-duc-file-handle')
    expect(submitCallCount).toBe(1)
  })

  it('shows the save-error alert when the pre-submit DAR persist fails', async () => {
    server.use(
      http.get(statusEndpoint, () =>
        HttpResponse.json(fullySignedStatus, { status: 200 }),
      ),
      http.get(signedFileHandleEndpoint, () =>
        HttpResponse.json(
          { fileHandleId: 'signed-duc-file-handle' },
          { status: 200 },
        ),
      ),
      http.post(updateEndpoint, () =>
        HttpResponse.json({ reason: 'Server error' }, { status: 500 }),
      ),
    )
    const { user } = renderComponent()
    const submit = await screen.findByRole('button', { name: 'Submit' })
    await waitFor(() => expect(submit).toBeEnabled())
    await user.click(submit)

    await screen.findByText(/couldn't save your change/i)
    expect(screen.getByText('Server error')).toBeInTheDocument()
    expect(mockOnSubmissionCreated).not.toHaveBeenCalled()
  })

  it('shows the submit-error alert when the submission call fails', async () => {
    server.use(
      http.get(statusEndpoint, () =>
        HttpResponse.json(fullySignedStatus, { status: 200 }),
      ),
      http.get(signedFileHandleEndpoint, () =>
        HttpResponse.json(
          { fileHandleId: 'signed-duc-file-handle' },
          { status: 200 },
        ),
      ),
      http.post(updateEndpoint, async ({ request }) => {
        const body = (await request.json()) as { id: string; etag: string }
        return HttpResponse.json({ ...body, etag: 'new-etag' }, { status: 201 })
      }),
      http.post(submissionEndpoint, () =>
        HttpResponse.json({ reason: 'Something went wrong' }, { status: 500 }),
      ),
    )
    const { user } = renderComponent()
    const submit = await screen.findByRole('button', { name: 'Submit' })
    await waitFor(() => expect(submit).toBeEnabled())
    await user.click(submit)

    await screen.findByText(/couldn't submit your request/i)
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
    expect(mockOnSubmissionCreated).not.toHaveBeenCalled()
  })
})
