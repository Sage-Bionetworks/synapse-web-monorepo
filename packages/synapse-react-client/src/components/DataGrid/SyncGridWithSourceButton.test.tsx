import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useGridSourceSyncStatus, {
  GridSourceSyncStatus,
} from '@/components/DataGrid/hooks/useGridSourceSyncStatus'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { IMPORT_LATEST_CHANGES_TEXT } from '@/components/DataGrid/utils/gridSyncMessages'
import {
  getUseMutationIdleMock,
  getUseMutationPendingMock,
} from '@/testutils/ReactQueryMockUtils'
import {
  EntityType,
  GridSession,
  SynchronizeGridResponse,
} from '@sage-bionetworks/synapse-client'
import SyncGridWithSourceButton from './SyncGridWithSourceButton'
import useMergeGridWithSource, {
  MergeGridResult,
} from './useMergeGridWithSource'

vi.mock('@/components/DataGrid/hooks/useGridSourceSyncStatus')
// Mock only the mutation hook; buildMergeGridVariables is part of the behavior under test.
vi.mock('./useMergeGridWithSource', async importOriginal => ({
  ...(await importOriginal<typeof import('./useMergeGridWithSource')>()),
  default: vi.fn(),
}))
vi.mock('@/components/ToastMessage/ToastMessage', () => ({
  displayToast: vi.fn(),
}))

const mockUseGridSourceSyncStatus = vi.mocked(useGridSourceSyncStatus)
const mockUseMergeGridWithSource = vi.mocked(useMergeGridWithSource)
const mockDisplayToast = vi.mocked(displayToast)

function mockSyncStatus(overrides: Partial<GridSourceSyncStatus> = {}) {
  mockUseGridSourceSyncStatus.mockReturnValue({
    isSourceOutdated: false,
    sourceEntityName: 'my source',
    sourceEntityType: undefined,
    isLoading: false,
    ...overrides,
  })
}

function renderComponent(gridSession: GridSession) {
  return render(<SyncGridWithSourceButton gridSession={gridSession} />)
}

function mockSynchronizeGridResponse(
  overrides: Partial<SynchronizeGridResponse> = {},
): SynchronizeGridResponse {
  return {
    concreteType: 'org.sagebionetworks.repo.model.grid.SynchronizeGridResponse',
    errorMessages: [],
    ...overrides,
  }
}

type OnSuccessHandler = (
  result: MergeGridResult,
  variables: { syncType?: 'PULL' | 'PULL_PUSH' },
) => void

// Captures the onSuccess handler passed to useMergeGridWithSource so tests can invoke it
// directly, simulating a successful mutation without going through the full click/mutate flow.
function captureOnSuccessHandler(): { current: OnSuccessHandler | undefined } {
  const captured: { current: OnSuccessHandler | undefined } = {
    current: undefined,
  }
  mockUseMergeGridWithSource.mockImplementation(options => {
    captured.current = options?.onSuccess as OnSuccessHandler
    return getUseMutationIdleMock()
  })
  return captured
}

describe('SyncGridWithSourceButton', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockSyncStatus()
    mockUseMergeGridWithSource.mockReturnValue(getUseMutationIdleMock())
  })

  it('shows a loading skeleton instead of a button while the sync status is loading', () => {
    mockSyncStatus({ isLoading: true })

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn222' })

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('shows a loading indicator while the mutation is pending', () => {
    mockSyncStatus({ sourceEntityType: EntityType.table })
    mockUseMergeGridWithSource.mockReturnValue(getUseMutationPendingMock())

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn222' })

    expect(screen.getByRole('button', { name: 'Apply changes' })).toBeDisabled()
  })

  it('renders "Sync changes" for an entity view source and triggers a PULL_PUSH on click', async () => {
    mockSyncStatus({ sourceEntityType: EntityType.entityview })
    const mockMergeGrid = getUseMutationIdleMock()
    mockUseMergeGridWithSource.mockReturnValue(mockMergeGrid)

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn222' })

    const button = screen.getByRole('button', { name: 'Sync changes' })
    await userEvent.click(button)

    expect(mockMergeGrid.mutate).toHaveBeenCalledWith({
      gridSessionId: 'session-1',
      sourceEntityId: 'syn222',
      sourceEntityType: EntityType.entityview,
      syncType: 'PULL_PUSH',
    })
  })

  it('renders "Import latest changes" and triggers a PULL when the source has been updated', async () => {
    mockSyncStatus({
      isSourceOutdated: true,
      sourceEntityType: EntityType.recordset,
    })
    const mockMergeGrid = getUseMutationIdleMock()
    mockUseMergeGridWithSource.mockReturnValue(mockMergeGrid)

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn111' })

    const button = screen.getByRole('button', {
      name: IMPORT_LATEST_CHANGES_TEXT,
    })
    await userEvent.click(button)

    expect(mockMergeGrid.mutate).toHaveBeenCalledWith({
      gridSessionId: 'session-1',
      sourceEntityId: 'syn111',
      sourceEntityType: EntityType.recordset,
      syncType: 'PULL',
    })
  })

  it('renders "Sync changes" for an up-to-date RecordSet source', async () => {
    mockSyncStatus({ sourceEntityType: EntityType.recordset })
    const mockMergeGrid = getUseMutationIdleMock()
    mockUseMergeGridWithSource.mockReturnValue(mockMergeGrid)

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn111' })

    const button = screen.getByRole('button', { name: 'Sync changes' })
    await userEvent.click(button)

    expect(mockMergeGrid.mutate).toHaveBeenCalledWith({
      gridSessionId: 'session-1',
      sourceEntityId: 'syn111',
      sourceEntityType: EntityType.recordset,
      syncType: 'PULL_PUSH',
    })
  })

  it('wires a successful "synchronize" mutation result to a success toast', () => {
    mockSyncStatus({ sourceEntityType: EntityType.entityview })
    const captureOnSuccess = captureOnSuccessHandler()

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn222' })

    captureOnSuccess.current?.(
      { type: 'synchronize', data: mockSynchronizeGridResponse() },
      { syncType: 'PULL_PUSH' },
    )

    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Successfully synchronized changes.',
      'success',
    )
  })
})
