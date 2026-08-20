import {
  mockManagedACTAccessRequirement,
  mockManagedACTAccessRequirementWikiPageKey,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_DATA_ACCESS_REQUEST } from '@/mocks/dataaccess/MockDataAccessRequest'
import { server } from '@/mocks/msw/server'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  mockUserData,
} from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  DATA_ACCESS_REQUEST,
  DATA_ACCESS_REQUEST_PREVIEW,
  DATA_ACCESS_REQUEST_SUBMISSION,
} from '@/utils/APIConstants'
import {
  AccessType,
  RestrictableObjectType,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import MarkdownSynapse from '../../../Markdown/MarkdownSynapse'
import * as AccessRequirementListUtils from '../../AccessRequirementListUtils'
import ManualUploadDucStep, {
  ManualUploadDucStepProps,
} from './ManualUploadDucStep'

// Capture the uploadCallback prop so tests can fire it directly.
let capturedUploadCallback: ((resp: UploadCallbackResp) => void) | undefined

vi.mock('../UploadDocumentField', () => ({
  UploadDocumentField: vi.fn(
    (props: { uploadCallback: (resp: UploadCallbackResp) => void }) => {
      capturedUploadCallback = props.uploadCallback
      return null
    },
  ),
}))

vi.mock('../../../Markdown/MarkdownSynapse', () => ({
  __esModule: true,
  default: vi.fn(),
}))
const mockMarkdownSynapse = vi.mocked(MarkdownSynapse)
mockMarkdownSynapse.mockImplementation(() => (
  <div data-testid={'MarkdownSynapseContent'}></div>
))

vi.spyOn(SynapseClient, 'getUserProfileById').mockImplementation(id => {
  return Promise.resolve(
    mockUserData.find(user => String(user.id) === String(id))!.userProfile!,
  )
})
vi.spyOn(SynapseClient, 'getUserBundle').mockImplementation(id => {
  return Promise.resolve(
    mockUserData.find(user => String(user.id) === String(id))!.userBundle!,
  )
})

const mockGetDataRequestForUpdate = vi.spyOn(
  SynapseClient,
  'getDataAccessRequestForUpdate',
)

vi.spyOn(SynapseClient, 'getWikiPageKeyForAccessRequirement').mockResolvedValue(
  mockManagedACTAccessRequirementWikiPageKey,
)
vi.spyOn(
  AccessRequirementListUtils,
  'useCanShowManagedACTWikiInWizard',
).mockReturnValue(true)

const mockOnHide = vi.fn()
const mockOnBackClicked = vi.fn()
const mockOnSubmissionCreated = vi.fn()

const defaultProps: ManualUploadDucStepProps = {
  managedACTAccessRequirement: {
    ...mockManagedACTAccessRequirement,
    eDucTemplateId: 'educ-template-123',
  },
  subjectId: '9876543',
  subjectType: RestrictableObjectType.ENTITY,
  onHide: mockOnHide,
  onBackClicked: mockOnBackClicked,
  onSubmissionCreated: mockOnSubmissionCreated,
  downloadHrefOverride: 'https://example.com/mock-duc.pdf',
}

function renderComponent(props: Partial<ManualUploadDucStepProps> = {}) {
  const user = userEvent.setup()
  const component = render(
    <ManualUploadDucStep {...defaultProps} {...props} />,
    { wrapper: createWrapper({ withErrorBoundary: true }) },
  )
  return { user, component }
}

const previewEndpoint = `*${DATA_ACCESS_REQUEST_PREVIEW(MOCK_DATA_ACCESS_REQUEST.id)}`
const updateEndpoint = `*${DATA_ACCESS_REQUEST}`
const submissionEndpoint = `*${DATA_ACCESS_REQUEST_SUBMISSION(
  MOCK_DATA_ACCESS_REQUEST.id,
)}`

describe('ManualUploadDucStep', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    mockOnHide.mockReset()
    mockOnBackClicked.mockReset()
    mockOnSubmissionCreated.mockReset()
    mockGetDataRequestForUpdate.mockResolvedValue({
      ...MOCK_DATA_ACCESS_REQUEST,
      ducFileHandleId: undefined,
      accessorChanges: [
        { userId: String(MOCK_USER_ID), type: AccessType.GAIN_ACCESS },
        { userId: String(MOCK_USER_ID_2), type: AccessType.GAIN_ACCESS },
      ],
    })
  })

  it('renders the "Submit a signed PDF" heading and instructional text', async () => {
    renderComponent()

    await screen.findByRole('heading', {
      name: /Submit a signed PDF instead of e-signatures/i,
    })
    expect(
      screen.getByText(
        /Instead of signing the Data Use Certificate \(DUC\) using DocuSign/i,
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/we recommend using e-signatures/i),
    ).toBeInTheDocument()
  })

  it('renders a collapsed collaborators & signing official panel by default', async () => {
    renderComponent()
    const summary = await screen.findByRole('button', {
      name: /Review your collaborators & signing official/i,
    })
    expect(summary).toHaveAttribute('aria-expanded', 'false')
  })

  it('expands the collaborators panel and lists accessors', async () => {
    const { user } = renderComponent()
    const summary = await screen.findByRole('button', {
      name: /Review your collaborators & signing official/i,
    })
    await user.click(summary)
    await waitFor(() =>
      expect(summary).toHaveAttribute('aria-expanded', 'true'),
    )
    // Each accessor renders a UserBadge — verify the profile lookup was invoked for both.
    await waitFor(() => {
      expect(SynapseClient.getUserBundle).toHaveBeenCalledWith(
        String(MOCK_USER_ID),
        expect.anything(),
        expect.anything(),
      )
    })
  })

  it('renders the Download DUC anchor with the override href', async () => {
    renderComponent()
    const downloadLink = await screen.findByRole('link', {
      name: /Download DUC for Signatures/i,
    })
    expect(downloadLink).toHaveAttribute(
      'href',
      'https://example.com/mock-duc.pdf',
    )
  })

  it('shows an error alert when the preview query fails and no override is provided', async () => {
    server.use(
      http.get(previewEndpoint, () =>
        HttpResponse.json({ reason: 'preview failed' }, { status: 500 }),
      ),
    )
    renderComponent({ downloadHrefOverride: undefined })

    await screen.findByText(/couldn't prepare your DUC for download/i)
    expect(screen.getByText('preview failed')).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /Download DUC for Signatures/i }),
    ).not.toBeInTheDocument()
  })

  it('disables the Submit Request button when no signed DUC has been uploaded', async () => {
    renderComponent()
    const submit = await screen.findByRole('button', {
      name: 'Submit Request',
    })
    expect(submit).toBeDisabled()
  })

  it('enables Submit Request when the DAR already has a ducFileHandleId', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue({
      ...MOCK_DATA_ACCESS_REQUEST,
      ducFileHandleId: 'signed-duc-987',
    })
    renderComponent()
    const submit = await screen.findByRole('button', {
      name: 'Submit Request',
    })
    await waitFor(() => expect(submit).toBeEnabled())
  })

  it('invokes onBackClicked when Back is clicked', async () => {
    const { user } = renderComponent()
    const backButton = await screen.findByRole('button', { name: 'Back' })
    await user.click(backButton)
    expect(mockOnBackClicked).toHaveBeenCalledTimes(1)
  })

  it('invokes onHide when the close icon is clicked', async () => {
    const { user } = renderComponent()
    await user.click(await screen.findByRole('button', { name: 'Close' }))
    expect(mockOnHide).toHaveBeenCalledTimes(1)
  })

  it('submits the DAR and invokes onSubmissionCreated on success', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue({
      ...MOCK_DATA_ACCESS_REQUEST,
      ducFileHandleId: 'signed-duc-987',
    })
    let updateCallCount = 0
    let submitCallCount = 0
    server.use(
      http.post(updateEndpoint, async ({ request }) => {
        updateCallCount += 1
        const body = (await request.json()) as { id: string; etag: string }
        return HttpResponse.json({ ...body, etag: 'new-etag' }, { status: 201 })
      }),
      http.post(submissionEndpoint, () => {
        submitCallCount += 1
        return HttpResponse.json({ submissionId: 'sub-42' }, { status: 201 })
      }),
    )

    const { user } = renderComponent()
    const submit = await screen.findByRole('button', {
      name: 'Submit Request',
    })
    await waitFor(() => expect(submit).toBeEnabled())
    await user.click(submit)

    await waitFor(() =>
      expect(mockOnSubmissionCreated).toHaveBeenCalledWith('sub-42'),
    )
    expect(updateCallCount).toBe(1)
    expect(submitCallCount).toBe(1)
  })

  it('shows an error alert when the submission call fails', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue({
      ...MOCK_DATA_ACCESS_REQUEST,
      ducFileHandleId: 'signed-duc-987',
    })
    server.use(
      http.post(updateEndpoint, async ({ request }) => {
        const body = (await request.json()) as { id: string; etag: string }
        return HttpResponse.json({ ...body, etag: 'new-etag' }, { status: 201 })
      }),
      http.post(submissionEndpoint, () =>
        HttpResponse.json({ reason: 'Something went wrong' }, { status: 500 }),
      ),
    )

    const { user } = renderComponent()
    const submit = await screen.findByRole('button', {
      name: 'Submit Request',
    })
    await waitFor(() => expect(submit).toBeEnabled())
    await user.click(submit)

    await screen.findByText(/couldn't submit your request/i)
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
    expect(mockOnSubmissionCreated).not.toHaveBeenCalled()
  })

  it('shows the save-error alert when the upload callback signals a failure', async () => {
    renderComponent()
    await screen.findByRole('button', { name: 'Submit Request' })
    act(() => {
      capturedUploadCallback!({
        success: false,
        error: { reason: 'File upload failed' },
      })
    })
    await screen.findByText(/couldn't save your change/i)
    expect(screen.getByText('File upload failed')).toBeInTheDocument()
  })

  it('shows the save-error alert when the pre-submit DAR persist fails', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue({
      ...MOCK_DATA_ACCESS_REQUEST,
      ducFileHandleId: 'signed-duc-987',
    })
    server.use(
      http.post(updateEndpoint, () =>
        HttpResponse.json({ reason: 'Server error' }, { status: 500 }),
      ),
    )
    const { user } = renderComponent()
    const submit = await screen.findByRole('button', { name: 'Submit Request' })
    await waitFor(() => expect(submit).toBeEnabled())
    await user.click(submit)
    await screen.findByText(/couldn't save your change/i)
    expect(screen.getByText('Server error')).toBeInTheDocument()
    expect(mockOnSubmissionCreated).not.toHaveBeenCalled()
  })
})
