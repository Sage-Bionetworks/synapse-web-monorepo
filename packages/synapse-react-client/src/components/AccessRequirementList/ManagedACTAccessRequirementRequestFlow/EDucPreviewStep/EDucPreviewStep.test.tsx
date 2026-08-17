import {
  mockManagedACTAccessRequirement,
  mockManagedACTAccessRequirementWikiPageKey,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_DATA_ACCESS_REQUEST } from '@/mocks/dataaccess/MockDataAccessRequest'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import MarkdownSynapse from '../../../Markdown/MarkdownSynapse'
import * as AccessRequirementListUtils from '../../AccessRequirementListUtils'
import EDucPreviewStep, { EDucPreviewStepProps } from './EDucPreviewStep'

vi.mock('@/utils/hooks/useFetchBlobUrl', () => ({
  useFetchBlobUrl: vi.fn().mockReturnValue({
    blobUrl: 'blob:mockBlobUrl',
    error: undefined,
  }),
}))

vi.mock('../../../Markdown/MarkdownSynapse', () => ({
  __esModule: true,
  default: vi.fn(),
}))
const mockMarkdownSynapse = vi.mocked(MarkdownSynapse)
mockMarkdownSynapse.mockImplementation(() => (
  <div data-testid={'MarkdownSynapseContent'}></div>
))

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
const mockOnSendForSignature = vi.fn()
const mockOnManualUpload = vi.fn()

const defaultProps: EDucPreviewStepProps = {
  managedACTAccessRequirement: {
    ...mockManagedACTAccessRequirement,
    eDucTemplateId: 'educ-template-123',
  },
  onHide: mockOnHide,
  onBackClicked: mockOnBackClicked,
  onSendForSignature: mockOnSendForSignature,
  onManualUpload: mockOnManualUpload,
}

function renderComponent(props: EDucPreviewStepProps = defaultProps) {
  const user = userEvent.setup()
  const component = render(<EDucPreviewStep {...props} />, {
    wrapper: createWrapper({ withErrorBoundary: true }),
  })
  return { user, component }
}

const previewEndpoint = `*/repo/v1/dataAccessRequest/${MOCK_DATA_ACCESS_REQUEST.id}/preview`

describe('EDucPreviewStep', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    mockOnHide.mockReset()
    mockOnBackClicked.mockReset()
    mockOnSendForSignature.mockReset()
    mockOnManualUpload.mockReset()
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
  })

  it('shows a loading skeleton while the preview is loading', async () => {
    server.use(http.get(previewEndpoint, () => new Promise<never>(() => {})))
    renderComponent()

    await screen.findByTestId('EDucPreviewStep-loading')
  })

  it('renders the iframe when the preview loads successfully', async () => {
    server.use(
      http.get(previewEndpoint, () =>
        HttpResponse.json(
          { fileHandleId: 'preview-file-handle-456' },
          { status: 200 },
        ),
      ),
    )
    renderComponent()

    const iframe = await screen.findByTitle('eDUC preview')
    expect(iframe).toHaveAttribute('src', 'blob:mockBlobUrl')
  })

  it('shows an error alert when the preview query fails', async () => {
    server.use(
      http.get(previewEndpoint, () =>
        HttpResponse.json({ reason: 'preview failed' }, { status: 500 }),
      ),
    )
    renderComponent()

    await screen.findByText(/couldn't load your DUC preview/i)
    expect(screen.getByText('preview failed')).toBeInTheDocument()
  })

  it('invokes onBackClicked when Back is clicked', async () => {
    server.use(
      http.get(previewEndpoint, () =>
        HttpResponse.json(
          { fileHandleId: 'preview-file-handle-456' },
          { status: 200 },
        ),
      ),
    )
    const { user } = renderComponent()

    const backButton = await screen.findByRole('button', { name: 'Back' })
    await user.click(backButton)

    expect(mockOnBackClicked).toHaveBeenCalledTimes(1)
  })

  it('invokes onSendForSignature when the Send button is clicked', async () => {
    server.use(
      http.get(previewEndpoint, () =>
        HttpResponse.json(
          { fileHandleId: 'preview-file-handle-456' },
          { status: 200 },
        ),
      ),
    )
    const { user } = renderComponent()

    const sendButton = await screen.findByRole('button', {
      name: 'Send for electronic signature',
    })
    await waitFor(() => expect(sendButton).toBeEnabled())
    await user.click(sendButton)

    expect(mockOnSendForSignature).toHaveBeenCalledTimes(1)
  })

  it('invokes onManualUpload when the Manually print button is clicked', async () => {
    server.use(
      http.get(previewEndpoint, () =>
        HttpResponse.json(
          { fileHandleId: 'preview-file-handle-456' },
          { status: 200 },
        ),
      ),
    )
    const { user } = renderComponent()

    const uploadButton = await screen.findByRole('button', {
      name: 'Manually print and upload PDF',
    })
    await waitFor(() => expect(uploadButton).toBeEnabled())
    await user.click(uploadButton)

    expect(mockOnManualUpload).toHaveBeenCalledTimes(1)
  })
})
