import {
  mockManagedACTAccessRequirement,
  mockManagedACTAccessRequirementWikiPageKey,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_DATA_ACCESS_REQUEST } from '@/mocks/dataaccess/MockDataAccessRequest'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  mockUserData,
} from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { AccessType } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MarkdownSynapse from '../../../Markdown/MarkdownSynapse'
import * as AccessRequirementListUtils from '../../AccessRequirementListUtils'
import ReviewDucStep, { ReviewDucStepProps } from './ReviewDucStep'

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
const mockOnCreateDuc = vi.fn()

const defaultProps: ReviewDucStepProps = {
  managedACTAccessRequirement: {
    ...mockManagedACTAccessRequirement,
    eDucTemplateId: 'educ-template-123',
  },
  onHide: mockOnHide,
  onBackClicked: mockOnBackClicked,
  onCreateDuc: mockOnCreateDuc,
}

function renderComponent(props: ReviewDucStepProps = defaultProps) {
  const user = userEvent.setup()
  const component = render(<ReviewDucStep {...props} />, {
    wrapper: createWrapper({ withErrorBoundary: true }),
  })
  return { user, component }
}

describe('ReviewDucStep', () => {
  beforeEach(() => {
    mockOnHide.mockReset()
    mockOnBackClicked.mockReset()
    mockOnCreateDuc.mockReset()
  })

  it('renders the "Sign a Data Use Certificate" heading and instructional text', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    renderComponent()

    await screen.findByRole('heading', {
      name: /Sign a Data Use Certificate/i,
    })
    expect(
      screen.getByText(/The DUC may be signed electronically/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /verify the information of each data requester listed in the previous step/i,
      ),
    ).toBeInTheDocument()
  })

  it('renders a collapsed review panel by default', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    renderComponent()

    const summary = await screen.findByRole('button', {
      name: /Review your collaborators & signing official/i,
    })
    expect(summary).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows collaborators, PI, and SO info when expanded', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue({
      ...MOCK_DATA_ACCESS_REQUEST,
      accessorChanges: [
        { userId: String(MOCK_USER_ID), type: AccessType.GAIN_ACCESS },
        { userId: String(MOCK_USER_ID_2), type: AccessType.GAIN_ACCESS },
      ],
      principalInvestigator: {
        userId: String(MOCK_USER_ID),
        name: 'Dr. Jane Smith',
        institutionalEmail: 'jane@example.edu',
      },
      signingOfficial: {
        name: 'John Official',
        institutionalEmail: 'john@example.edu',
      },
    })
    const { user } = renderComponent()

    const summary = await screen.findByRole('button', {
      name: /Review your collaborators & signing official/i,
    })
    await user.click(summary)

    await waitFor(() =>
      expect(summary).toHaveAttribute('aria-expanded', 'true'),
    )
    expect(screen.getByText('Your collaborators:')).toBeInTheDocument()
    expect(screen.getByText('Your Project Lead or PI:')).toBeInTheDocument()
    expect(screen.getByText('Dr. Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('jane@example.edu')).toBeInTheDocument()
    expect(screen.getByText('Your signing official:')).toBeInTheDocument()
    expect(screen.getByText('John Official')).toBeInTheDocument()
    expect(screen.getByText('john@example.edu')).toBeInTheDocument()
  })

  it('invokes onBackClicked when Back is clicked', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    const { user } = renderComponent()

    const backButton = await screen.findByRole('button', { name: 'Back' })
    await user.click(backButton)

    expect(mockOnBackClicked).toHaveBeenCalledTimes(1)
  })

  it('invokes onHide when Cancel is clicked', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    const { user } = renderComponent()

    const cancelButton = await screen.findByRole('button', { name: 'Cancel' })
    await user.click(cancelButton)

    expect(mockOnHide).toHaveBeenCalledTimes(1)
  })

  it('invokes onCreateDuc when Create a DUC is clicked', async () => {
    mockGetDataRequestForUpdate.mockResolvedValue(MOCK_DATA_ACCESS_REQUEST)
    const { user } = renderComponent()

    const createButton = await screen.findByRole('button', {
      name: 'Create a DUC',
    })
    await waitFor(() => expect(createButton).toBeEnabled())
    await user.click(createButton)

    expect(mockOnCreateDuc).toHaveBeenCalledTimes(1)
  })
})
