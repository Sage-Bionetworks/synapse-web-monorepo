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
  AccessRequestSummaryStatusEnum,
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

/**
 * Every status the list endpoint can return, mapped to the text the table displays for it, or
 * `null` when the request is not in-flight and must be filtered out of the table entirely.
 *
 * Typing this as a total `Record` over the enum makes adding a new status a type error here, so a
 * new case can't silently fall through the table's filter.
 */
const STATUS_EXPECTATIONS: Record<
  AccessRequestSummaryStatusEnum,
  string | null
> = {
  created: null,
  draft: null,
  sent: 'Signatures pending',
  delivered: 'Signatures pending',
  completed: 'Ready to submit',
  declined: 'Signature declined',
  voided: null,
  correct: null,
  submitted: null,
  approved: null,
  rejected: null,
  cancelled: null,
}

const statusesWithExpectation = Object.entries(STATUS_EXPECTATIONS) as [
  AccessRequestSummaryStatusEnum,
  string | null,
][]

const inFlightStatuses = statusesWithExpectation.filter(
  (entry): entry is [AccessRequestSummaryStatusEnum, string] =>
    entry[1] !== null,
)
const nonInFlightStatuses = statusesWithExpectation
  .filter(([, display]) => display === null)
  .map(([status]) => status)

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
    // The list request passes `isEDuc: true` server-side, so the hook only ever sees eDUC
    // records. Client-side we still drop anything past submission (draft / submitted / voided).
    const { container } = renderWithRouter()
    act(() => {
      setListSuccess([
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
        {
          requestId: '13',
          accessRequirementId: 'ar-4',
          accessRequirementName: 'Requirement D',
          isEDuc: true,
          status: 'declined',
          signaturesAcquired: 1,
          signaturesRequested: 5,
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
    expect(rows).toHaveLength(5)
    const row1Cells = within(rows[1]).getAllByRole('cell')
    expect(row1Cells[0]).toHaveTextContent('Requirement A')
    expect(row1Cells[1]).toHaveTextContent('2 of 5')
    expect(row1Cells[2]).toHaveTextContent('Signatures pending')

    const declinedRowCells = within(rows[4]).getAllByRole('cell')
    expect(declinedRowCells[0]).toHaveTextContent('Requirement D')
    expect(declinedRowCells[1]).toHaveTextContent('1 of 5')
    expect(declinedRowCells[2]).toHaveTextContent('Signature declined')
  })

  it.each(inFlightStatuses)(
    'renders a request with status "%s" as "%s"',
    (status, expectedDisplay) => {
      renderWithRouter()
      act(() => {
        setListSuccess([
          {
            requestId: '10',
            accessRequirementId: 'ar-1',
            accessRequirementName: 'Requirement A',
            isEDuc: true,
            status,
            signaturesAcquired: 2,
            signaturesRequested: 5,
          },
        ])
      })

      const dataRow = within(screen.getByRole('table')).getAllByRole('row')[1]
      expect(within(dataRow).getAllByRole('cell')[2]).toHaveTextContent(
        expectedDisplay,
      )
    },
  )

  it.each(nonInFlightStatuses)(
    'filters out a request with status "%s"',
    status => {
      const { container } = renderWithRouter()
      act(() => {
        setListSuccess([
          {
            requestId: '10',
            accessRequirementId: 'ar-1',
            accessRequirementName: 'Requirement A',
            isEDuc: true,
            status,
          },
        ])
      })

      expect(container).toBeEmptyDOMElement()
    },
  )

  it('keeps a declined request actionable so the user can modify or cancel it', () => {
    renderWithRouter()
    act(() => {
      setListSuccess([
        {
          requestId: '10',
          accessRequirementId: 'ar-1',
          accessRequirementName: 'Requirement A',
          isEDuc: true,
          status: 'declined',
          signaturesAcquired: 1,
          signaturesRequested: 5,
        },
      ])
    })

    expect(
      screen.getByRole('link', { name: 'Review Signatures and Submit' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Modify Request' }),
    ).not.toBeDisabled()
    expect(
      screen.getByRole('button', { name: 'Cancel Request' }),
    ).toBeInTheDocument()
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

  it('shows a loading state on the Modify button while the access requirement is fetching', async () => {
    mockUseGetAccessRequirements.mockReturnValue({
      data: undefined,
      isFetching: true,
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

    const modifyButton = screen.getByRole('button', { name: 'Modify Request' })
    await user.click(modifyButton)

    const loadingButton = await screen.findByRole('button', {
      name: 'Loading…',
    })
    expect(loadingButton).toBeDisabled()
    // Wizard hasn't mounted yet because the AR is still loading.
    expect(
      screen.queryByTestId('MockAccessRequirementList'),
    ).not.toBeInTheDocument()
  })

  it('toasts and bails out of the Modify flow when the access requirement fails to load', async () => {
    mockUseGetAccessRequirements.mockReturnValue({
      data: undefined,
      error: { reason: 'boom' } as SynapseClientError,
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

    await waitFor(() =>
      expect(mockedDisplayToast).toHaveBeenCalledWith(
        expect.stringContaining('boom'),
        'danger',
      ),
    )
    expect(
      screen.queryByTestId('MockAccessRequirementList'),
    ).not.toBeInTheDocument()
    // Modify button is re-enabled so the user can retry.
    expect(
      screen.getByRole('button', { name: 'Modify Request' }),
    ).not.toBeDisabled()
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
