import { displayToast } from '@/components/ToastMessage/ToastMessage'
import {
  useListAllUserDataAccessRequests,
  useVoidDataAccessRequestSignature,
} from '@/synapse-queries'
import { useGetAccessRequirements } from '@/synapse-queries/dataaccess/useAccessRequirements'
import {
  getUseMutationMock,
  getUseQueryMock,
} from '@/testutils/ReactQueryMockUtils'
import {
  AccessRequestSummary,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { InFlightEDucSignaturesTable } from './InFlightEDucSignaturesTable'

vi.mock('@/synapse-queries', () => ({
  useListAllUserDataAccessRequests: vi.fn(),
  useVoidDataAccessRequestSignature: vi.fn(),
}))
vi.mock('@/synapse-queries/dataaccess/useAccessRequirements')
vi.mock('@/components/ToastMessage/ToastMessage')
// The wizard is rendered inside the Modify modal; stub it to keep this test focused on
// InFlightEDucSignaturesTable behavior.
vi.mock(
  '@/components/AccessRequirementList/AccessRequirementList',
  async importOriginal => {
    const original = (await importOriginal()) as object
    return {
      ...original,
      __esModule: true,
      default: vi.fn(),
    }
  },
)

import AccessRequirementList from '@/components/AccessRequirementList/AccessRequirementList'

const mockUseListAllUserDataAccessRequests = vi.mocked(
  useListAllUserDataAccessRequests,
)
const mockUseVoidDataAccessRequestSignature = vi.mocked(
  useVoidDataAccessRequestSignature,
)
const mockUseGetAccessRequirements = vi.mocked(useGetAccessRequirements)
const mockedDisplayToast = vi.mocked(displayToast)
const MockAccessRequirementList = vi.mocked(AccessRequirementList)

function renderWithRouter() {
  const router = createMemoryRouter(
    [{ path: '/', element: <InFlightEDucSignaturesTable /> }],
    { initialEntries: ['/'] },
  )
  return render(<RouterProvider router={router} />)
}

describe('InFlightEDucSignaturesTable', () => {
  const {
    mock: listMock,
    setSuccess: setListSuccess,
    setError: setListError,
    setLoading: setListLoading,
  } = getUseQueryMock<AccessRequestSummary[], SynapseClientError>()

  const { mock: voidMock, mockMutate: mockVoidMutate } = getUseMutationMock<
    void,
    SynapseClientError,
    string
  >()

  beforeEach(() => {
    mockedDisplayToast.mockReset()
    mockVoidMutate.mockReset()
    mockUseListAllUserDataAccessRequests.mockImplementation(listMock)
    mockUseVoidDataAccessRequestSignature.mockImplementation(voidMock)
    // Default: AR fetch is idle — the Modify modal will render null until we opt in per-test.
    mockUseGetAccessRequirements.mockReturnValue({ data: undefined } as never)
    MockAccessRequirementList.mockImplementation(() => (
      <div data-testid={'MockAccessRequirementList'} />
    ))
  })

  it('renders nothing when the fully-loaded, filtered list is empty', () => {
    const { container } = renderWithRouter()
    act(() => {
      setListSuccess([
        // Non-eDUC is ignored.
        { requestId: '1', isEDuc: false, status: 'sent' },
        // eDUC past submission is ignored.
        { requestId: '2', isEDuc: true, status: 'submitted' },
        // Draft eDUC has not been routed for signature yet.
        { requestId: '3', isEDuc: true, status: 'draft' },
      ])
    })
    expect(container).toBeEmptyDOMElement()
  })

  it('renders a row for each in-flight eDUC request with the expected columns', () => {
    renderWithRouter()
    act(() => {
      setListSuccess([
        {
          requestId: '10',
          accessRequirementId: 'ar-1',
          accessRequirementName: 'Requirement A',
          isEDuc: true,
          status: 'sent',
          signaturesAcquired: 2,
          signaturesRequested: 5,
        },
        {
          requestId: '11',
          accessRequirementId: 'ar-2',
          accessRequirementName: 'Requirement B',
          isEDuc: true,
          status: 'delivered',
          signaturesAcquired: 4,
          signaturesRequested: 5,
        },
        {
          requestId: '12',
          accessRequirementId: 'ar-3',
          accessRequirementName: 'Requirement C',
          isEDuc: true,
          status: 'completed',
          signaturesAcquired: 5,
          signaturesRequested: 5,
        },
        // Non-eDUC row is filtered out.
        {
          requestId: '13',
          accessRequirementId: 'ar-4',
          accessRequirementName: 'Requirement D',
          isEDuc: false,
          status: 'sent',
        },
      ])
    })

    screen.getByText(/In-flight eDUC signatures/i)
    const table = screen.getByRole('table')
    const columnHeaders = within(table).getAllByRole('columnheader')
    expect(columnHeaders).toHaveLength(4)
    expect(columnHeaders[0]).toHaveTextContent('Request type')
    expect(columnHeaders[1]).toHaveTextContent('Signature progress')
    expect(columnHeaders[2]).toHaveTextContent('Current status')
    expect(columnHeaders[3]).toHaveTextContent('Actions')

    const rows = within(table).getAllByRole('row')
    expect(rows).toHaveLength(4)
    const row1Cells = within(rows[1]).getAllByRole('cell')
    expect(row1Cells[0]).toHaveTextContent('Requirement A')
    expect(row1Cells[1]).toHaveTextContent('2 of 5')
    expect(row1Cells[2]).toHaveTextContent('Signatures pending')
  })

  it('links "Review Signatures and Submit" to the deep-link signature route', () => {
    renderWithRouter()
    act(() => {
      setListSuccess([
        {
          requestId: '10',
          accessRequirementId: 'ar-1',
          accessRequirementName: 'Requirement A',
          isEDuc: true,
          status: 'sent',
          signaturesAcquired: 2,
          signaturesRequested: 5,
        },
      ])
    })
    const link = screen.getByRole('link', {
      name: 'Review Signatures and Submit',
    })
    expect(link).toHaveAttribute('href', '/request/10/signature')
  })

  it('opens the modify wizard when "Modify Request" is clicked', async () => {
    mockUseGetAccessRequirements.mockReturnValue({
      data: { id: 1, eDucTemplateId: 'template-x' },
    } as never)
    const user = userEvent.setup()
    renderWithRouter()
    act(() => {
      setListSuccess([
        {
          requestId: '10',
          accessRequirementId: 'ar-1',
          accessRequirementName: 'Requirement A',
          isEDuc: true,
          status: 'sent',
        },
      ])
    })

    await user.click(screen.getByRole('button', { name: 'Modify Request' }))
    await screen.findByTestId('MockAccessRequirementList')
    // The wizard is mounted with an initialWizardEntry pointing at the research project step.
    const props = MockAccessRequirementList.mock.lastCall![0]
    expect(props.renderAsModal).toBe(true)
    expect(props.initialWizardEntry?.step).toBeDefined()
  })

  it('voids the signature after confirming Cancel Request', async () => {
    const user = userEvent.setup()
    renderWithRouter()
    act(() => {
      setListSuccess([
        {
          requestId: '10',
          accessRequirementId: 'ar-1',
          accessRequirementName: 'Requirement A',
          isEDuc: true,
          status: 'sent',
        },
      ])
    })

    // Row-level "Cancel Request" opens the confirmation dialog.
    await user.click(screen.getByRole('button', { name: 'Cancel Request' }))
    const confirmationDialog = await screen.findByRole('dialog')
    within(confirmationDialog).getByText(/void the electronic signature/i)

    // Clicking the destructive button fires the mutation.
    await user.click(
      within(confirmationDialog).getByRole('button', {
        name: 'Cancel Request',
      }),
    )
    expect(mockVoidMutate).toHaveBeenCalledWith('10')
  })

  it('backs out of Cancel Request without mutating when Keep Request is clicked', async () => {
    const user = userEvent.setup()
    renderWithRouter()
    act(() => {
      setListSuccess([
        {
          requestId: '10',
          accessRequirementId: 'ar-1',
          accessRequirementName: 'Requirement A',
          isEDuc: true,
          status: 'sent',
        },
      ])
    })

    await user.click(screen.getByRole('button', { name: 'Cancel Request' }))
    const dialog = await screen.findByRole('dialog')
    await user.click(
      within(dialog).getByRole('button', { name: 'Keep Request' }),
    )
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
    expect(mockVoidMutate).not.toHaveBeenCalled()
  })

  it('shows a skeleton loader while the request list is loading', () => {
    renderWithRouter()
    act(() => setListLoading())
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
    expect(
      screen.queryByText(/In-flight eDUC signatures/i),
    ).not.toBeInTheDocument()
  })

  it('shows an error alert when the request list fails to load', () => {
    renderWithRouter()
    act(() => setListError({ reason: 'boom' } as SynapseClientError))
    screen.getByText(/couldn't load your in-flight eDUC signatures/i)
    expect(screen.getByText('boom')).toBeInTheDocument()
  })
})
