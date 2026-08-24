import { useListUserDataAccessRequestsInfinite } from '@/synapse-queries'
import { getUseInfiniteQueryMock } from '@/testutils/ReactQueryMockUtils'
import {
  AccessRequestList,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import { InFlightEDucSignaturesTable } from './InFlightEDucSignaturesTable'

vi.mock('@/synapse-queries', () => ({
  useListUserDataAccessRequestsInfinite: vi.fn(),
}))

const mockUseListUserDataAccessRequestsInfinite = vi.mocked(
  useListUserDataAccessRequestsInfinite,
)

describe('InFlightEDucSignaturesTable', () => {
  const { mock, setSuccess, setError, mockFetchNextPage } =
    getUseInfiniteQueryMock<AccessRequestList, SynapseClientError>()

  beforeEach(() => {
    mockFetchNextPage.mockClear()
    mockUseListUserDataAccessRequestsInfinite.mockImplementation(mock)
  })

  it('renders nothing when the fully-loaded, filtered list is empty', () => {
    const { container } = render(<InFlightEDucSignaturesTable />)
    act(() => {
      setSuccess([
        {
          results: [
            // Non-eDUC is ignored.
            { requestId: '1', isEDuc: false, status: 'sent' },
            // eDUC past submission is ignored.
            { requestId: '2', isEDuc: true, status: 'submitted' },
            // Draft eDUC has not been routed for signature yet.
            { requestId: '3', isEDuc: true, status: 'draft' },
          ],
        },
      ])
    })
    expect(container).toBeEmptyDOMElement()
  })

  it('renders a row for each in-flight eDUC request with the expected columns', () => {
    render(<InFlightEDucSignaturesTable />)
    act(() => {
      setSuccess([
        {
          results: [
            {
              requestId: '10',
              accessRequirementName: 'Requirement A',
              isEDuc: true,
              status: 'sent',
              signaturesAcquired: 2,
              signaturesRequested: 5,
            },
            {
              requestId: '11',
              accessRequirementName: 'Requirement B',
              isEDuc: true,
              status: 'delivered',
              signaturesAcquired: 4,
              signaturesRequested: 5,
            },
            {
              requestId: '12',
              accessRequirementName: 'Requirement C',
              isEDuc: true,
              status: 'completed',
              signaturesAcquired: 5,
              signaturesRequested: 5,
            },
            // Non-eDUC row is filtered out.
            {
              requestId: '13',
              accessRequirementName: 'Requirement D',
              isEDuc: false,
              status: 'sent',
            },
          ],
        },
      ])
    })

    screen.getByRole('heading', { name: /In-flight eDUC signatures/i })
    const table = screen.getByRole('table')
    const columnHeaders = within(table).getAllByRole('columnheader')
    expect(columnHeaders).toHaveLength(3)
    expect(columnHeaders[0]).toHaveTextContent('Request type')
    expect(columnHeaders[1]).toHaveTextContent('Signature progress')
    expect(columnHeaders[2]).toHaveTextContent('Current status')

    const rows = within(table).getAllByRole('row')
    // header + 3 in-flight rows.
    expect(rows).toHaveLength(4)

    const row1Cells = within(rows[1]).getAllByRole('cell')
    expect(row1Cells[0]).toHaveTextContent('Requirement A')
    expect(row1Cells[1]).toHaveTextContent('2 of 5')
    expect(row1Cells[2]).toHaveTextContent('Signatures pending')

    const row3Cells = within(rows[3]).getAllByRole('cell')
    expect(row3Cells[0]).toHaveTextContent('Requirement C')
    expect(row3Cells[1]).toHaveTextContent('5 of 5')
    expect(row3Cells[2]).toHaveTextContent('Ready to submit')
  })

  it('auto-fetches subsequent pages while hasNextPage is true', async () => {
    render(<InFlightEDucSignaturesTable />)
    act(() => {
      setSuccess([{ results: [], nextPageToken: 'page-2' }], true)
    })
    await waitFor(() => expect(mockFetchNextPage).toHaveBeenCalled())
  })

  it('aggregates in-flight rows across all fetched pages', () => {
    render(<InFlightEDucSignaturesTable />)
    act(() => {
      setSuccess([
        {
          results: [
            // No in-flight rows on this page.
            { requestId: '1', isEDuc: false, status: 'sent' },
          ],
        },
        {
          results: [
            {
              requestId: '20',
              accessRequirementName: 'Requirement Late',
              isEDuc: true,
              status: 'sent',
              signaturesAcquired: 1,
              signaturesRequested: 3,
            },
          ],
        },
      ])
    })

    // The row from page 2 is visible even though page 1 had no in-flight rows.
    const rows = within(screen.getByRole('table')).getAllByRole('row')
    expect(rows).toHaveLength(2) // header + 1 data row
    expect(within(rows[1]).getAllByRole('cell')[0]).toHaveTextContent(
      'Requirement Late',
    )
  })

  it('shows a skeleton loader while more pages are still being fetched', () => {
    render(<InFlightEDucSignaturesTable />)
    act(() => {
      setSuccess([{ results: [], nextPageToken: 'page-2' }], true)
    })
    // No matching rows yet AND another page is coming: show skeleton, not the empty state.
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: /In-flight eDUC signatures/i }),
    ).not.toBeInTheDocument()
  })

  it('shows an error alert when the request list fails to load', () => {
    render(<InFlightEDucSignaturesTable />)
    act(() => {
      setError({ reason: 'boom' } as SynapseClientError)
    })
    screen.getByText(/couldn't load your in-flight eDUC signatures/i)
    expect(screen.getByText('boom')).toBeInTheDocument()
  })
})
