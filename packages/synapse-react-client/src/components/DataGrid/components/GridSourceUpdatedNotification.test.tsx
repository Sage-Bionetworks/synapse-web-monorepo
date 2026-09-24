import useGridSourceSyncStatus, {
  GridSourceSyncStatus,
} from '@/components/DataGrid/hooks/useGridSourceSyncStatus'
import useMergeGridWithSource, {
  MergeGridResult,
} from '@/components/DataGrid/useMergeGridWithSource'
import { IMPORT_LATEST_CHANGES_TEXT } from '@/components/DataGrid/utils/gridSyncMessages'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { getUseMutationIdleMock } from '@/testutils/ReactQueryMockUtils'
import { CANCEL_BUTTON_TEXT } from '@/components/ConfirmationDialog/ConfirmationDialog'
import { CLOSE_BUTTON_LABEL } from '@/components/DialogBase'
import { EntityType, GridSession } from '@sage-bionetworks/synapse-client'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GridSourceUpdatedNotification, {
  SOURCE_UPDATED_BANNER_TEXT,
  SOURCE_UPDATED_TITLE,
} from './GridSourceUpdatedNotification'

vi.mock('@/components/DataGrid/hooks/useGridSourceSyncStatus')
// Mock only the mutation hook; buildMergeGridVariables is part of the behavior under test.
vi.mock(
  '@/components/DataGrid/useMergeGridWithSource',
  async importOriginal => ({
    ...(await importOriginal<
      typeof import('@/components/DataGrid/useMergeGridWithSource')
    >()),
    default: vi.fn(),
  }),
)
vi.mock('@/components/ToastMessage/ToastMessage', () => ({
  displayToast: vi.fn(),
}))

const mockUseGridSourceSyncStatus = vi.mocked(useGridSourceSyncStatus)
const mockUseMergeGridWithSource = vi.mocked(useMergeGridWithSource)
const mockDisplayToast = vi.mocked(displayToast)

const gridSession: GridSession = {
  sessionId: 'session-1',
  sourceEntityId: 'syn111',
  sourceEntityVersionNumber: 1,
}

const EXPECTED_PULL_VARIABLES = {
  gridSessionId: 'session-1',
  sourceEntityId: 'syn111',
  sourceEntityType: EntityType.recordset,
  syncType: 'PULL',
}

function mockSyncStatus(overrides: Partial<GridSourceSyncStatus> = {}) {
  mockUseGridSourceSyncStatus.mockReturnValue({
    isSourceOutdated: true,
    sourceEntityName: 'my record set',
    sourceEntityType: EntityType.recordset,
    isLoading: false,
    ...overrides,
  })
}

type OnSuccessHandler = (
  result: MergeGridResult,
  variables: { syncType?: 'PULL' | 'PULL_PUSH' },
) => void

// Captures the onSuccess handler passed to useMergeGridWithSource so tests can invoke it
// directly, simulating a successful mutation without going through the full mutate flow.
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

function renderComponent() {
  return render(<GridSourceUpdatedNotification gridSession={gridSession} />)
}

describe('GridSourceUpdatedNotification', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockSyncStatus()
    mockUseMergeGridWithSource.mockReturnValue(getUseMutationIdleMock())
  })

  it('renders nothing when the source is up to date', () => {
    mockSyncStatus({ isSourceOutdated: false })

    renderComponent()

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('opens a dialog when the source has been updated', () => {
    renderComponent()

    expect(screen.getByText(SOURCE_UPDATED_TITLE)).toBeInTheDocument()
    expect(screen.getByRole('dialog')).toHaveTextContent(
      'my record set has changed since this Curator session was started.',
    )
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('imports the latest changes when the dialog is confirmed', async () => {
    const mockMergeGrid = getUseMutationIdleMock()
    mockUseMergeGridWithSource.mockReturnValue(mockMergeGrid)

    renderComponent()

    await userEvent.click(
      screen.getByRole('button', { name: IMPORT_LATEST_CHANGES_TEXT }),
    )

    expect(mockMergeGrid.mutate).toHaveBeenCalledWith(EXPECTED_PULL_VARIABLES)
  })

  it('replaces the dialog with a banner when the dialog is cancelled', async () => {
    renderComponent()

    await userEvent.click(
      screen.getByRole('button', { name: CANCEL_BUTTON_TEXT }),
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    const banner = screen.getByRole('alert')
    expect(banner).toHaveTextContent(SOURCE_UPDATED_BANNER_TEXT)
  })

  it('replaces the dialog with a banner when the dialog is dismissed with the close button', async () => {
    renderComponent()

    await userEvent.click(
      screen.getByRole('button', { name: CLOSE_BUTTON_LABEL }),
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('imports the latest changes from the banner', async () => {
    const mockMergeGrid = getUseMutationIdleMock()
    mockUseMergeGridWithSource.mockReturnValue(mockMergeGrid)

    renderComponent()

    await userEvent.click(
      screen.getByRole('button', { name: CANCEL_BUTTON_TEXT }),
    )
    await userEvent.click(
      screen.getByRole('button', { name: IMPORT_LATEST_CHANGES_TEXT }),
    )

    expect(mockMergeGrid.mutate).toHaveBeenCalledWith(EXPECTED_PULL_VARIABLES)
  })

  it('stops prompting after a successful import, even if the source still reports as outdated', () => {
    const captureOnSuccess = captureOnSuccessHandler()

    renderComponent()
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    act(() => {
      captureOnSuccess.current?.(
        {
          type: 'synchronize',
          data: {
            concreteType:
              'org.sagebionetworks.repo.model.grid.SynchronizeGridResponse',
            errorMessages: [],
          },
        },
        { syncType: 'PULL' },
      )
    })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Successfully imported latest changes.',
      'success',
    )
  })
})
