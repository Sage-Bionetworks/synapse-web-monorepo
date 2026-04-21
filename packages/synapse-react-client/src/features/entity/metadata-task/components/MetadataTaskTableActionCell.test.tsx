import { displayToast } from '@/components/ToastMessage/ToastMessage'
import useGridSessionForCurationTask_legacy from '@/features/entity/metadata-task/hooks/useGridSessionForCurationTask_legacy'
import {
  createMockTaskBundle,
  MOCK_CURATION_TASK_ID,
} from '@/mocks/curation/mockCurationTask'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import { getLinkToGridSession } from '@/utils/functions/getSynapseWebClientLink'
import {
  CurationTask,
  GridSession,
  SynapseClientError,
  TaskBundle,
} from '@sage-bionetworks/synapse-client'
import type { UserEntityPermissions } from '@sage-bionetworks/synapse-types'
import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach } from 'vitest'
import MetadataTaskTableActionCell, {
  OPEN_CURATOR_ERROR_TITLE,
  OPEN_CURATOR_UNAUTHORIZED_ERROR_MESSAGE,
} from './MetadataTaskTableActionCell'

vi.mock('../hooks/useGridSessionForCurationTask_legacy', () => ({
  default: vi.fn(),
}))

vi.mock('@/utils/functions/getSynapseWebClientLink', () => ({
  getLinkToGridSession: vi.fn(),
}))

vi.mock('@/components/ToastMessage/ToastMessage')

vi.mock('@/synapse-queries/entity/useEntity', () => ({
  useGetEntityPermissions: vi.fn(),
}))

const mockDisplayToast = vi.mocked(displayToast)
const mockUseGridSessionForCurationTaskLegacy = vi.mocked(
  useGridSessionForCurationTask_legacy,
)
const mockGetLinkToGridSession = vi.mocked(getLinkToGridSession)
const mockUseGetEntityPermissions = vi.mocked(useGetEntityPermissions)

type UseGridForTaskLegacyMutationResult = UseMutationResult<
  GridSession,
  SynapseClientError,
  { curationTask: CurationTask }
>

const mockUseGridForTaskLegacyMutateAsync =
  vi.fn<UseGridForTaskLegacyMutationResult['mutateAsync']>()

const createUseGridForTaskLegacyMutationResult = (
  overrides: Partial<UseGridForTaskLegacyMutationResult> = {},
): UseGridForTaskLegacyMutationResult =>
  ({
    mutateAsync: mockUseGridForTaskLegacyMutateAsync,
    isPending: false,
    data: undefined,
    ...overrides,
  } as Partial<UseGridForTaskLegacyMutationResult> as UseGridForTaskLegacyMutationResult)

type EntityPermissionsQueryResult = UseQueryResult<
  UserEntityPermissions | null,
  SynapseClientError
>

const createPermissionsQueryResult = (
  overrides: Partial<EntityPermissionsQueryResult> = {},
): EntityPermissionsQueryResult =>
  ({
    data: { canView: true } as UserEntityPermissions,
    fetchStatus: 'idle',
    status: 'success',
    isLoading: false,
    ...overrides,
  } as Partial<EntityPermissionsQueryResult> as EntityPermissionsQueryResult)

const mockTaskBundle = createMockTaskBundle()

const renderComponent = (
  overrides: Partial<{ taskBundle: TaskBundle; canEdit: boolean }> = {},
) =>
  render(
    <MetadataTaskTableActionCell
      taskBundle={overrides.taskBundle ?? mockTaskBundle}
      canEdit={overrides.canEdit ?? false}
    />,
  )

beforeEach(() => {
  vi.clearAllMocks()
  mockUseGridForTaskLegacyMutateAsync.mockResolvedValue({
    sessionId: 'session-123',
  })

  mockUseGridSessionForCurationTaskLegacy.mockReturnValue(
    createUseGridForTaskLegacyMutationResult(),
  )
  mockUseGetEntityPermissions.mockReturnValue(createPermissionsQueryResult())
  mockGetLinkToGridSession.mockReturnValue('mock-grid-url')
})

describe('MetadataTaskTableActionCell', () => {
  it('disables the Open Curator button while checking READ access', () => {
    mockUseGetEntityPermissions.mockReturnValue(
      createPermissionsQueryResult({
        data: undefined,
        fetchStatus: 'fetching',
        status: 'pending',
        isLoading: true,
      }),
    )

    renderComponent()

    expect(screen.getByRole('button', { name: /open curator/i })).toBeDisabled()
  })

  it('disables the Open Curator button with no READ access on source entity', () => {
    mockUseGetEntityPermissions.mockReturnValue(
      createPermissionsQueryResult({
        data: { canView: false } as UserEntityPermissions,
      }),
    )

    renderComponent()

    expect(screen.getByRole('button', { name: /open curator/i })).toBeDisabled()
  })

  it('disables the Open Curator button while opening the grid session', () => {
    mockUseGridSessionForCurationTaskLegacy.mockReturnValue(
      createUseGridForTaskLegacyMutationResult({ isPending: true }),
    )

    renderComponent()

    expect(screen.getByRole('button', { name: /open curator/i })).toBeDisabled()
  })

  it('requests a grid session and opens it in a new tab when clicked', async () => {
    mockGetLinkToGridSession.mockReturnValue('https://example.org/grid')
    const windowOpenSpy = vi
      .spyOn(window, 'open')
      .mockReturnValue(null as unknown as Window)

    renderComponent()

    await userEvent.click(screen.getByRole('button', { name: /open curator/i }))

    await waitFor(() => {
      expect(mockUseGridForTaskLegacyMutateAsync).toHaveBeenCalledWith({
        curationTask: mockTaskBundle.task,
      })
      expect(mockGetLinkToGridSession).toHaveBeenCalledWith(
        'session-123',
        MOCK_CURATION_TASK_ID,
      )
      expect(windowOpenSpy).toHaveBeenCalledWith(
        'https://example.org/grid',
        '_blank',
        'noopener',
      )
    })

    windowOpenSpy.mockRestore()
  })

  it('displays an error toast if opening the data grid fails', async () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    const errorMessage = 'Failed to open grid session'
    mockUseGridForTaskLegacyMutateAsync.mockRejectedValue(
      new Error(errorMessage),
    )

    renderComponent()

    await userEvent.click(screen.getByRole('button', { name: /open curator/i }))

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Error opening Curator for curation task',
        expect.any(Error),
      )
      expect(mockDisplayToast).toHaveBeenCalledWith(
        errorMessage,
        'danger',
        expect.objectContaining({
          title: 'An error occurred while trying to open Curator',
        }),
      )
    })

    consoleErrorSpy.mockRestore()
  })

  it('shows an unauthorized error toast when the user has no access to the session', async () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    mockUseGridForTaskLegacyMutateAsync.mockRejectedValue(
      new SynapseClientError(
        403,
        'Forbidden',
        expect.getState().currentTestName!,
      ),
    )
    const windowOpenSpy = vi
      .spyOn(window, 'open')
      .mockReturnValue(null as unknown as Window)

    renderComponent()

    await userEvent.click(screen.getByRole('button', { name: /open curator/i }))

    await waitFor(() => {
      expect(mockDisplayToast).toHaveBeenCalledWith(
        expect.stringContaining(OPEN_CURATOR_UNAUTHORIZED_ERROR_MESSAGE),
        'danger',
        {
          title: OPEN_CURATOR_ERROR_TITLE,
        },
      )
      expect(windowOpenSpy).not.toHaveBeenCalled()
    })

    consoleErrorSpy.mockRestore()
    windowOpenSpy.mockRestore()
  })
})
