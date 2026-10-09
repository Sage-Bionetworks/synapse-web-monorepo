import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ACCESS_REQUIREMENT_BY_ID,
  DATA_ACCESS_REQUEST_LIST,
  DATA_ACCESS_REQUEST_SIGNATURE,
} from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  AccessRequestSummary,
  AccessRequestSummaryStatusEnum,
} from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { delay, http, HttpResponse } from 'msw'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { InFlightEDucSignaturesTable } from './InFlightEDucSignaturesTable'

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

const mockedDisplayToast = vi.mocked(displayToast)
const MockAccessRequirementList = vi.mocked(AccessRequirementList)

function renderWithRouter() {
  const router = createMemoryRouter(
    [{ path: '/', element: <InFlightEDucSignaturesTable /> }],
    { initialEntries: ['/'] },
  )
  return render(<RouterProvider router={router} />, {
    wrapper: createWrapper(),
  })
}

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

function mockRequestList(summaries: AccessRequestSummary[]) {
  const requested = vi.fn()
  server.use(
    http.post(`${REPO_ENDPOINT}${DATA_ACCESS_REQUEST_LIST}`, () => {
      requested()
      return HttpResponse.json({ results: summaries })
    }),
  )
  return requested
}

function mockAccessRequirement(
  response: () => Promise<Response> | Response,
): void {
  server.use(
    http.get(`${REPO_ENDPOINT}${ACCESS_REQUIREMENT_BY_ID(':id')}`, response),
  )
}

const IN_FLIGHT_SUMMARY: AccessRequestSummary = {
  requestId: '10',
  accessRequirementId: 'ar-1',
  accessRequirementName: 'Requirement A',
  isEDuc: true,
  status: 'sent',
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
  const onVoidSignature = vi.fn()

  beforeAll(() => server.listen())
  beforeEach(() => {
    mockedDisplayToast.mockReset()
    onVoidSignature.mockReset()
    server.use(
      http.delete(
        `${REPO_ENDPOINT}${DATA_ACCESS_REQUEST_SIGNATURE(':requestId')}`,
        ({ params }) => {
          onVoidSignature(params.requestId)
          return new HttpResponse(null, { status: 200 })
        },
      ),
    )
    MockAccessRequirementList.mockImplementation(() => (
      <div data-testid={'MockAccessRequirementList'} />
    ))
  })
  afterEach(() => {
    server.resetHandlers()
  })
  afterAll(() => server.close())

  it('renders nothing when the fully-loaded, filtered list is empty', async () => {
    // The list request passes `isEDuc: true` server-side, so the hook only ever sees eDUC
    // records. Client-side we still drop anything past submission (draft / submitted / voided).
    const requestedBodies: unknown[] = []
    server.use(
      http.post(
        `${REPO_ENDPOINT}${DATA_ACCESS_REQUEST_LIST}`,
        async ({ request }) => {
          requestedBodies.push(await request.json())
          return HttpResponse.json({
            results: [
              // eDUC past submission is ignored.
              { requestId: '2', isEDuc: true, status: 'submitted' },
              // Draft eDUC has not been routed for signature yet.
              { requestId: '3', isEDuc: true, status: 'draft' },
            ],
          })
        },
      ),
    )
    const { container } = renderWithRouter()
    await waitFor(() => expect(requestedBodies).toHaveLength(1))
    expect(requestedBodies[0]).toEqual(
      expect.objectContaining({ isEDuc: true }),
    )
    await waitFor(() => expect(container).toBeEmptyDOMElement())
  })

  it('renders a row for each in-flight eDUC request with the expected columns', async () => {
    mockRequestList([
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
    renderWithRouter()

    await screen.findByText(/In-flight eDUC signatures/i)
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
    async (status, expectedDisplay) => {
      mockRequestList([
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
      renderWithRouter()

      const dataRow = within(await screen.findByRole('table')).getAllByRole(
        'row',
      )[1]
      expect(within(dataRow).getAllByRole('cell')[2]).toHaveTextContent(
        expectedDisplay,
      )
    },
  )

  it.each(nonInFlightStatuses)(
    'filters out a request with status "%s"',
    async status => {
      const requested = mockRequestList([
        {
          requestId: '10',
          accessRequirementId: 'ar-1',
          accessRequirementName: 'Requirement A',
          isEDuc: true,
          status,
        },
      ])
      const { container } = renderWithRouter()

      await waitFor(() => expect(requested).toHaveBeenCalled())
      await waitFor(() => expect(container).toBeEmptyDOMElement())
    },
  )

  it('keeps a declined request actionable so the user can modify or cancel it', async () => {
    mockRequestList([
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
    renderWithRouter()

    expect(
      await screen.findByRole('link', { name: 'Review Signatures and Submit' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Modify Request' }),
    ).not.toBeDisabled()
    expect(
      screen.getByRole('button', { name: 'Cancel Request' }),
    ).toBeInTheDocument()
  })

  it('links "Review Signatures and Submit" to the deep-link signature route', async () => {
    mockRequestList([
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
    renderWithRouter()
    const link = await screen.findByRole('link', {
      name: 'Review Signatures and Submit',
    })
    expect(link).toHaveAttribute('href', '/request/10/signature')
  })

  it('opens the modify wizard when "Modify Request" is clicked', async () => {
    mockAccessRequirement(() =>
      HttpResponse.json({ id: 1, eDucTemplateId: 'template-x' }),
    )
    mockRequestList([IN_FLIGHT_SUMMARY])
    const user = userEvent.setup()
    renderWithRouter()

    await user.click(
      await screen.findByRole('button', { name: 'Modify Request' }),
    )
    await screen.findByTestId('MockAccessRequirementList')
    // The wizard is mounted with an initialWizardEntry pointing at the research project step.
    const props = MockAccessRequirementList.mock.lastCall![0]
    expect(props.renderAsModal).toBe(true)
    expect(props.initialWizardEntry?.step).toBeDefined()
  })

  it('shows a loading state on the Modify button while the access requirement is fetching', async () => {
    mockAccessRequirement(async () => {
      await delay('infinite')
      return HttpResponse.json({ id: 1, eDucTemplateId: 'template-x' })
    })
    mockRequestList([IN_FLIGHT_SUMMARY])
    const user = userEvent.setup()
    renderWithRouter()

    const modifyButton = await screen.findByRole('button', {
      name: 'Modify Request',
    })
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
    mockAccessRequirement(() =>
      HttpResponse.json({ reason: 'boom' }, { status: 403 }),
    )
    mockRequestList([IN_FLIGHT_SUMMARY])
    const user = userEvent.setup()
    renderWithRouter()

    await user.click(
      await screen.findByRole('button', { name: 'Modify Request' }),
    )

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
    await waitFor(() =>
      expect(
        screen.getByRole('button', { name: 'Modify Request' }),
      ).not.toBeDisabled(),
    )
  })

  it('voids the signature after confirming Cancel Request', async () => {
    mockRequestList([IN_FLIGHT_SUMMARY])
    const user = userEvent.setup()
    renderWithRouter()

    // Row-level "Cancel Request" opens the confirmation dialog.
    await user.click(
      await screen.findByRole('button', { name: 'Cancel Request' }),
    )
    const confirmationDialog = await screen.findByRole('dialog')
    within(confirmationDialog).getByText(/void the electronic signature/i)

    // Clicking the destructive button fires the mutation.
    await user.click(
      within(confirmationDialog).getByRole('button', {
        name: 'Cancel Request',
      }),
    )
    await waitFor(() => expect(onVoidSignature).toHaveBeenCalledWith('10'))
  })

  it('backs out of Cancel Request without mutating when Keep Request is clicked', async () => {
    mockRequestList([IN_FLIGHT_SUMMARY])
    const user = userEvent.setup()
    renderWithRouter()

    await user.click(
      await screen.findByRole('button', { name: 'Cancel Request' }),
    )
    const dialog = await screen.findByRole('dialog')
    await user.click(
      within(dialog).getByRole('button', { name: 'Keep Request' }),
    )
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
    expect(onVoidSignature).not.toHaveBeenCalled()
  })

  it('shows a skeleton loader while the request list is loading', () => {
    server.use(
      http.post(`${REPO_ENDPOINT}${DATA_ACCESS_REQUEST_LIST}`, async () => {
        await delay('infinite')
        return HttpResponse.json({ results: [IN_FLIGHT_SUMMARY] })
      }),
    )
    renderWithRouter()
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
    expect(
      screen.queryByText(/In-flight eDUC signatures/i),
    ).not.toBeInTheDocument()
  })

  it('shows an error alert when the request list fails to load', async () => {
    server.use(
      http.post(`${REPO_ENDPOINT}${DATA_ACCESS_REQUEST_LIST}`, () =>
        HttpResponse.json({ reason: 'boom' }, { status: 403 }),
      ),
    )
    renderWithRouter()
    await screen.findByText(/couldn't load your in-flight eDUC signatures/i)
    expect(screen.getByText('boom')).toBeInTheDocument()
  })
})
