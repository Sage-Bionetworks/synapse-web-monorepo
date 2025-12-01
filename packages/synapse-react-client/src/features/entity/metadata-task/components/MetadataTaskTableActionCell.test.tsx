import MetadataTaskTableActionCell from './MetadataTaskTableActionCell'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { getLinkToGridSession } from '@/utils/functions/getSynapseWebClientLink'
import useGridSessionForCurationTask from '../hooks/useGridSessionForCurationTask'
import { useQuery } from '@tanstack/react-query'
import type {
  CurationTask,
  GridSession,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query'

vi.mock('../hooks/useGridSessionForCurationTask', () => ({
  default: vi.fn(),
}))

vi.mock('@/utils/functions/getSynapseWebClientLink', () => ({
  getLinkToGridSession: vi.fn(),
}))

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual<typeof import('@tanstack/react-query')>(
    '@tanstack/react-query',
  )
  return {
    ...actual,
    useQuery: vi.fn(),
  }
})

const mockUseGridSessionForCurationTask = vi.mocked(
  useGridSessionForCurationTask,
)
const mockGetLinkToGridSession = vi.mocked(getLinkToGridSession)
const mockUseQuery = vi.mocked(useQuery)
type MutationResult = UseMutationResult<
  GridSession,
  SynapseClientError,
  { curationTask: CurationTask }
>
type BooleanQueryResult = UseQueryResult<boolean>

const mockMutateAsync = vi.fn<MutationResult['mutateAsync']>()

const createMutationResult = (
  overrides: Partial<MutationResult> = {},
): MutationResult =>
  ({
    mutateAsync: mockMutateAsync,
    isPending: false,
    ...overrides,
  } as Partial<MutationResult> as MutationResult)

const createQueryResult = (
  overrides: Partial<BooleanQueryResult> = {},
): BooleanQueryResult =>
  ({
    data: true,
    fetchStatus: 'idle',
    status: 'success',
    ...overrides,
  } as Partial<BooleanQueryResult> as BooleanQueryResult)

const mockCurationTask = {
  taskId: 123,
  taskProperties: {
    concreteType:
      'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
    fileViewId: 'syn999',
  },
} as unknown as CurationTask

const renderComponent = () =>
  render(
    <MetadataTaskTableActionCell
      curationTask={mockCurationTask}
      canEdit={false}
    />,
  )

beforeEach(() => {
  vi.clearAllMocks()
  mockMutateAsync.mockResolvedValue({ sessionId: 'session-123' })
  mockUseGridSessionForCurationTask.mockReturnValue(createMutationResult())
  mockUseQuery.mockReturnValue(createQueryResult())
  mockGetLinkToGridSession.mockReturnValue('mock-grid-url')
})

describe('MetadataTaskTableActionCell', () => {
  it('disables the Working Copy button while checking READ access', () => {
    mockUseQuery.mockReturnValue(
      createQueryResult({
        data: undefined,
        fetchStatus: 'fetching',
        status: 'pending',
        isPending: true,
        isFetching: true,
      }),
    )

    renderComponent()

    expect(screen.getByRole('button', { name: /working copy/i })).toBeDisabled()
  })

  it('disables the Working Copy button when READ access is denied', () => {
    mockUseQuery.mockReturnValue(
      createQueryResult({
        data: false,
        fetchStatus: 'idle',
        status: 'success',
      }),
    )

    renderComponent()

    expect(screen.getByRole('button', { name: /working copy/i })).toBeDisabled()
  })

  it('disables the Working Copy button while opening the grid session', () => {
    mockUseQuery.mockReturnValue(
      createQueryResult({
        data: true,
        fetchStatus: 'idle',
        status: 'success',
      }),
    )
    mockUseGridSessionForCurationTask.mockReturnValue(
      createMutationResult({
        isPending: true,
      }),
    )

    renderComponent()

    expect(screen.getByRole('button', { name: /working copy/i })).toBeDisabled()
  })

  it('requests a grid session and opens it in a new tab when clicked', async () => {
    mockUseQuery.mockReturnValue(
      createQueryResult({
        data: true,
        fetchStatus: 'idle',
        status: 'success',
      }),
    )
    mockMutateAsync.mockResolvedValue({ sessionId: 'session-123' })
    mockGetLinkToGridSession.mockReturnValue('https://example.org/grid')

    const windowOpenSpy = vi
      .spyOn(window, 'open')
      .mockReturnValue(null as unknown as Window)

    renderComponent()

    const button = screen.getByRole('button', { name: /working copy/i })
    expect(button).toBeEnabled()

    const user = userEvent.setup()
    await user.click(button)

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalledWith({
        curationTask: mockCurationTask,
      })
      expect(mockGetLinkToGridSession).toHaveBeenCalledWith(
        'session-123',
        mockCurationTask.taskId,
      )
      expect(windowOpenSpy).toHaveBeenCalledWith(
        'https://example.org/grid',
        '_blank',
        'noopener',
      )
    })

    windowOpenSpy.mockRestore()
  })
})
