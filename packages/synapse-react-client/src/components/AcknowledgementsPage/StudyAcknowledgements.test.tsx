import { render, screen } from '@testing-library/react'
import { StudyAcknowledgements } from './StudyAcknowledgements'

// Mock StudyAcknowledgement component
vi.mock('./StudyAcknowledgement', () => ({
  StudyAcknowledgement: ({
    studyName,
    acknowledgementStatementWikiRef,
    onSelectChange,
  }: any) => (
    <div data-testid="StudyAcknowledgement">
      <span>{studyName}</span>
      <span>{acknowledgementStatementWikiRef}</span>
      <button
        onClick={() =>
          onSelectChange &&
          onSelectChange({ title: studyName, statement: 'statement' }, true)
        }
      >
        Select
      </button>
    </div>
  ),
}))

// Mock Synapse query hook
vi.mock('@/synapse-queries', () => ({
  useGetQueryResultBundleWithAsyncStatus: vi.fn(),
}))

import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'

describe('StudyAcknowledgements', () => {
  const sql = 'SELECT studyName, acknowledgment FROM syn123'
  const rows = [
    { values: ['Study 1', 'WikiRef 1'] },
    { values: ['Study 2', 'WikiRef 2'] },
  ]

  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('renders nothing if there are no rows', () => {
    vi.mocked(useGetQueryResultBundleWithAsyncStatus).mockReturnValue({
      data: { responseBody: { queryResult: { queryResults: { rows: [] } } } },
    } as any)
    render(<StudyAcknowledgements sql={sql} />)
    expect(screen.queryByTestId('StudyAcknowledgement')).not.toBeInTheDocument()
  })

  it('renders a StudyAcknowledgement for each row', () => {
    vi.mocked(useGetQueryResultBundleWithAsyncStatus).mockReturnValue({
      data: { responseBody: { queryResult: { queryResults: { rows } } } },
    } as any)
    render(<StudyAcknowledgements sql={sql} />)
    const items = screen.getAllByTestId('StudyAcknowledgement')
    expect(items).toHaveLength(2)
    expect(items[0]).toHaveTextContent('Study 1')
    expect(items[0]).toHaveTextContent('WikiRef 1')
    expect(items[1]).toHaveTextContent('Study 2')
    expect(items[1]).toHaveTextContent('WikiRef 2')
  })

  it('calls onSelectChange when StudyAcknowledgement triggers selection', () => {
    vi.mocked(useGetQueryResultBundleWithAsyncStatus).mockReturnValue({
      data: { responseBody: { queryResult: { queryResults: { rows } } } },
    } as any)
    const onSelectChange = vi.fn()
    render(<StudyAcknowledgements sql={sql} onSelectChange={onSelectChange} />)
    const buttons = screen.getAllByRole('button', { name: /Select/i })
    buttons[0].click()
    expect(onSelectChange).toHaveBeenCalledWith(
      { title: 'Study 1', statement: 'statement' },
      true,
    )
  })

  it('skips rows with missing studyName or acknowledgementStatementWikiRef', () => {
    const badRows = [
      { values: [null, 'WikiRef'] },
      { values: ['Study', null] },
      { values: ['Study', 'WikiRef'] },
    ]
    vi.mocked(useGetQueryResultBundleWithAsyncStatus).mockReturnValue({
      data: {
        responseBody: { queryResult: { queryResults: { rows: badRows } } },
      },
    } as any)
    render(<StudyAcknowledgements sql={sql} />)
    const items = screen.getAllByTestId('StudyAcknowledgement')
    expect(items).toHaveLength(1)
    expect(items[0]).toHaveTextContent('Study')
    expect(items[0]).toHaveTextContent('WikiRef')
  })
})
