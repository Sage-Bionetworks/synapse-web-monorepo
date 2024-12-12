import { render, screen, waitFor } from '@testing-library/react'
import { ViewMoreQueryResultsButton } from './ViewMoreQueryResultsButton'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { QueryContextProvider, QueryContextType } from '../QueryContext'
import userEvent from '@testing-library/user-event'

function setUp(
  hasNextPage: boolean,
  initialLimit: number | undefined,
  queryCount: number,
  initialLimitIsApplied: boolean,
) {
  const user = userEvent.setup()
  const mockFetchNextPage = jest.fn()
  const mockOnRemoveInitialLimit = jest.fn()

  const queryContext: Pick<QueryContextType, 'queryMetadataQueryOptions'> = {
    queryMetadataQueryOptions: {
      queryKey: ['query-metadata'],
      queryFn: jest.fn().mockResolvedValue({
        queryCount: queryCount,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
      }),
    },
  }

  const component = render(
    <QueryContextProvider queryContext={queryContext as QueryContextType}>
      <ViewMoreQueryResultsButton
        hasNextPage={hasNextPage}
        fetchNextPage={mockFetchNextPage}
        isFetchingNextPage={false}
        initialLimit={initialLimit}
        initialLimitIsApplied={initialLimitIsApplied}
        onRemoveInitialLimit={mockOnRemoveInitialLimit}
      />
    </QueryContextProvider>,
    { wrapper: createWrapper() },
  )

  return { user, component, mockFetchNextPage, mockOnRemoveInitialLimit }
}

describe('ViewMoreQueryResultsButton', () => {
  it('is hidden when there are no more results', async () => {
    const hasNextPage = false
    const initialLimit = undefined
    const queryCount = 10
    const initialLimitIsApplied = false

    setUp(hasNextPage, initialLimit, queryCount, initialLimitIsApplied)

    // Verify button never appears
    await expect(
      screen.findByRole('button', { name: 'View More' }, { timeout: 100 }),
    ).rejects.toThrow()
  })

  it('fetches next page when clicked', async () => {
    const hasNextPage = true
    const initialLimit = undefined
    const queryCount = 10
    const initialLimitIsApplied = false

    const { user, mockFetchNextPage } = setUp(
      hasNextPage,
      initialLimit,
      queryCount,
      initialLimitIsApplied,
    )

    const button = await screen.findByRole('button', { name: 'View More' })
    await user.click(button)
    expect(mockFetchNextPage).toHaveBeenCalled()
  })

  it('shows more without triggering a query when an initial limit is set and the button is clicked', async () => {
    const hasNextPage = false
    const initialLimit = 5
    const queryCount = initialLimit
    const initialLimitIsApplied = true

    const { user, mockFetchNextPage, mockOnRemoveInitialLimit } = setUp(
      hasNextPage,
      initialLimit,
      queryCount,
      initialLimitIsApplied,
    )

    const button = await screen.findByRole('button', { name: 'View More' })
    await user.click(button)

    expect(mockOnRemoveInitialLimit).toHaveBeenCalled()
    expect(mockFetchNextPage).not.toHaveBeenCalled()
  })

  it('fetches next page on the second click when an initial limit is set', async () => {
    const hasNextPage = true
    const initialLimit = 5
    const queryCount = initialLimit + 1
    const initialLimitIsApplied = false // The initial limit is no longer being used

    const { user, mockFetchNextPage, mockOnRemoveInitialLimit } = setUp(
      hasNextPage,
      initialLimit,
      queryCount,
      initialLimitIsApplied,
    )

    const button = await screen.findByRole('button', { name: 'View More' })
    await user.click(button)

    expect(mockOnRemoveInitialLimit).not.toHaveBeenCalled()
    expect(mockFetchNextPage).toHaveBeenCalled()
  })

  it('disables the initial limit without user intervention when the query count is less than the initialLimit', async () => {
    const hasNextPage = false
    const initialLimit = 5
    const queryCount = initialLimit - 1
    const initialLimitIsApplied = true // The initial limit is used before it is automatically removed

    const { mockFetchNextPage, mockOnRemoveInitialLimit } = setUp(
      hasNextPage,
      initialLimit,
      queryCount,
      initialLimitIsApplied,
    )

    // Verify that the initial limit flag is automatically removed.
    await waitFor(() => {
      expect(mockOnRemoveInitialLimit).toHaveBeenCalled()
    })
    expect(mockFetchNextPage).not.toHaveBeenCalled()
  })

  it('disables the initial limit without user intervention when the query count is equal to the initialLimit', async () => {
    const hasNextPage = false
    const initialLimit = 5
    const queryCount = initialLimit
    const initialLimitIsApplied = true // The initial limit is used before it is automatically removed

    const { mockFetchNextPage, mockOnRemoveInitialLimit } = setUp(
      hasNextPage,
      initialLimit,
      queryCount,
      initialLimitIsApplied,
    )

    // Verify that the initial limit flag is automatically removed.
    await waitFor(() => {
      expect(mockOnRemoveInitialLimit).toHaveBeenCalled()
    })
    expect(mockFetchNextPage).not.toHaveBeenCalled()
  })
})
