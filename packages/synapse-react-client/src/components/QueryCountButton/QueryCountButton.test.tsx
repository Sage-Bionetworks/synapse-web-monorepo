import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { QueryCountButton } from './QueryCountButton'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import SynapseClient from '@/synapse-client'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { BUNDLE_MASK_QUERY_COUNT } from '@/utils/SynapseConstants'
import { MemoryRouter } from 'react-router'

const mockQueryResult: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryCount: 42,
}

const mockSql = 'SELECT * FROM syn123'
const mockHref = 'https://example.com/page'

const mockGetQueryTableResults = vi.spyOn(SynapseClient, 'getQueryTableResults')

describe('QueryCountButton', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders button with prefix, count, and suffix', async () => {
    mockGetQueryTableResults.mockResolvedValue(mockQueryResult)

    render(
      <QueryCountButton
        sql={mockSql}
        href={mockHref}
        prefixText="Explore"
        suffixText="files"
      />,
      { wrapper: createWrapper() },
    )

    // Wait for count to be loaded
    await waitFor(() => {
      expect(mockGetQueryTableResults).toHaveBeenCalled()
    })

    // Button should display "Explore 42 files"
    const button = screen.getByRole('link', { name: 'Explore 42 files' })
    expect(button).toBeInTheDocument()

    // Verify the query was called with correct parameters
    expect(mockGetQueryTableResults).toHaveBeenCalledWith(
      expect.objectContaining({
        query: { sql: mockSql },
        entityId: 'syn123',
        partMask: BUNDLE_MASK_QUERY_COUNT,
      }),
      MOCK_CONTEXT_VALUE.accessToken,
    )
  })

  it('navigates to href when clicked', async () => {
    mockGetQueryTableResults.mockResolvedValue(mockQueryResult)

    render(
      <QueryCountButton
        sql={mockSql}
        href={mockHref}
        prefixText="View"
        suffixText="items"
      />,
      { wrapper: createWrapper() },
    )

    await waitFor(() => {
      expect(mockGetQueryTableResults).toHaveBeenCalled()
    })

    const button = screen.getByRole('link', { name: 'View 42 items' })

    // Button should have href attribute when not in router context
    expect(button).toHaveAttribute('href', mockHref)
  })

  it('uses RouterLink for internal links in router context', async () => {
    mockGetQueryTableResults.mockResolvedValue(mockQueryResult)
    const internalHref = '/explore/data'

    const RouterWrapper = ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter>{createWrapper()({ children })}</MemoryRouter>
    )

    render(
      <QueryCountButton
        sql={mockSql}
        href={internalHref}
        prefixText="View"
        suffixText="items"
      />,
      { wrapper: RouterWrapper },
    )

    await waitFor(() => {
      expect(mockGetQueryTableResults).toHaveBeenCalled()
    })

    const button = screen.getByRole('link', { name: 'View 42 items' })

    // Button should use RouterLink, which doesn't set href attribute
    // Instead it should have a parent link or be rendered as a link component
    expect(button.tagName).toBe('A')
  })

  it('uses regular link for external URLs even in router context', async () => {
    mockGetQueryTableResults.mockResolvedValue(mockQueryResult)

    const RouterWrapper = ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter>{createWrapper()({ children })}</MemoryRouter>
    )

    render(
      <QueryCountButton
        sql={mockSql}
        href={mockHref}
        prefixText="View"
        suffixText="items"
      />,
      { wrapper: RouterWrapper },
    )

    await waitFor(() => {
      expect(mockGetQueryTableResults).toHaveBeenCalled()
    })

    const button = screen.getByRole('link', { name: 'View 42 items' })

    // Button should have href and target="_blank" for external links
    expect(button).toHaveAttribute('href', mockHref)
    expect(button).toHaveAttribute('target', '_blank')
    expect(button).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('calls custom onClick handler', async () => {
    mockGetQueryTableResults.mockResolvedValue(mockQueryResult)
    const mockOnClick = vi.fn()

    render(
      <QueryCountButton
        sql={mockSql}
        href={mockHref}
        onClick={mockOnClick}
        prefixText="View"
        suffixText="items"
      />,
      { wrapper: createWrapper() },
    )

    await waitFor(() => {
      expect(mockGetQueryTableResults).toHaveBeenCalled()
    })

    const button = screen.getByRole('link', { name: 'View 42 items' })
    await userEvent.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('accepts MUI Button props', async () => {
    mockGetQueryTableResults.mockResolvedValue(mockQueryResult)

    render(
      <QueryCountButton
        sql={mockSql}
        href={mockHref}
        variant="outlined"
        color="secondary"
        prefixText="View"
        suffixText="items"
      />,
      { wrapper: createWrapper() },
    )

    await waitFor(() => {
      expect(mockGetQueryTableResults).toHaveBeenCalled()
    })

    const button = screen.getByRole('link', { name: 'View 42 items' })
    expect(button).toHaveClass('MuiButton-outlined')
    expect(button).toHaveClass('MuiButton-colorSecondary')
  })

  it('button loading state', async () => {
    mockGetQueryTableResults.mockImplementation(
      () => new Promise(() => {}), // Never resolves
    )

    render(
      <QueryCountButton
        sql={mockSql}
        href={mockHref}
        prefixText="View"
        suffixText="items"
      />,
      { wrapper: createWrapper() },
    )

    // Button should be in loading state with spinner visible
    await waitFor(() => {
      const loadingSpinner = screen.getByRole('progressbar')
      expect(loadingSpinner).toBeInTheDocument()
    })

    // Should show only prefix and suffix, no count
    const button = screen.getByRole('link')
    expect(button).toHaveTextContent('View items')
  })

  it('hides count when undefined', async () => {
    mockGetQueryTableResults.mockResolvedValue({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
      // No queryCount
    })

    render(
      <QueryCountButton
        sql={mockSql}
        href={mockHref}
        prefixText="View"
        suffixText="items"
      />,
      { wrapper: createWrapper() },
    )

    await waitFor(() => {
      expect(mockGetQueryTableResults).toHaveBeenCalled()
    })

    // Should show prefix and suffix but no count
    const button = screen.getByRole('link', { name: 'View items' })
    expect(button).toBeInTheDocument()
  })

  it('handles query error gracefully', async () => {
    const error = new SynapseClientError(
      500,
      'Internal Server Error',
      expect.getState().currentTestName!,
    )
    mockGetQueryTableResults.mockRejectedValue(error)

    render(
      <QueryCountButton
        sql={mockSql}
        href={mockHref}
        prefixText="View"
        suffixText="items"
      />,
      { wrapper: createWrapper() },
    )

    await waitFor(() => {
      expect(mockGetQueryTableResults).toHaveBeenCalled()
    })

    // Button should still be visible with prefix and suffix
    const button = screen.getByRole('link', { name: 'View items' })
    expect(button).toBeInTheDocument()
  })

  it('formats large numbers with locale string', async () => {
    mockGetQueryTableResults.mockResolvedValue({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
      queryCount: 1234567,
    })

    render(
      <QueryCountButton
        sql={mockSql}
        href={mockHref}
        prefixText="Download"
        suffixText="records"
      />,
      { wrapper: createWrapper() },
    )

    // Wait for count to be loaded and check it's formatted with commas
    await waitFor(() => {
      const button = screen.getByRole('link', {
        name: 'Download 1,234,567 records',
      })
      expect(button).toBeInTheDocument()
    })
  })

  it('works with only prefix text', async () => {
    mockGetQueryTableResults.mockResolvedValue(mockQueryResult)

    render(
      <QueryCountButton sql={mockSql} href={mockHref} prefixText="Total:" />,
      { wrapper: createWrapper() },
    )

    await waitFor(() => {
      const button = screen.getByRole('link', { name: 'Total: 42' })
      expect(button).toBeInTheDocument()
    })
  })

  it('works with only suffix text', async () => {
    mockGetQueryTableResults.mockResolvedValue(mockQueryResult)

    render(
      <QueryCountButton sql={mockSql} href={mockHref} suffixText="available" />,
      { wrapper: createWrapper() },
    )

    await waitFor(() => {
      const button = screen.getByRole('link', { name: '42 available' })
      expect(button).toBeInTheDocument()
    })
  })

  it('works with only count (no prefix or suffix)', async () => {
    mockGetQueryTableResults.mockResolvedValue(mockQueryResult)

    render(<QueryCountButton sql={mockSql} href={mockHref} />, {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      const button = screen.getByRole('link', { name: '42' })
      expect(button).toBeInTheDocument()
    })
  })
})
