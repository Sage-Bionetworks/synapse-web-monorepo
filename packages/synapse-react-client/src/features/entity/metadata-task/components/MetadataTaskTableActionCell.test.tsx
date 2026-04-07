import { displayToast } from '@/components/ToastMessage/ToastMessage'
import useGridSessionForCurationTask_legacy from '@/features/entity/metadata-task/hooks/useGridSessionForCurationTask_legacy'
import {
  createMockTaskBundle,
  MOCK_CURATION_TASK_ID,
} from '@/mocks/curation/mockCurationTask'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import { useGetFeatureFlag } from '@/synapse-queries/index'
import { useGetIsPrincipalIdUserOrMemberOfTeam } from '@/synapse-queries/team/useTeamMembers'
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
import useGridSessionForCurationTask, {
  UseGridSessionForCurationTaskResult,
} from '../hooks/useGridSessionForCurationTask'
import MetadataTaskTableActionCell, {
  NO_TASK_ASSIGNEE_WARNING_DIALOG_TITLE,
  OPEN_CURATOR_ERROR_TITLE,
  OPEN_CURATOR_UNAUTHORIZED_ERROR_MESSAGE,
} from './MetadataTaskTableActionCell'

vi.mock('../hooks/useGridSessionForCurationTask', () => ({
  default: vi.fn(),
}))

vi.mock('../hooks/useGridSessionForCurationTask_legacy', () => ({
  default: vi.fn(),
}))

vi.mock('@/utils/functions/getSynapseWebClientLink', () => ({
  getLinkToGridSession: vi.fn(),
}))

vi.mock('@/components/ToastMessage/ToastMessage')

vi.mock('@/synapse-queries/user/useUserBundle', () => ({
  useGetCurrentUserProfile: vi.fn().mockReturnValue({
    data: { ownerId: 'user123' },
  }),
}))

vi.mock('@/synapse-queries/featureflags/useGetFeatureFlag', () => ({
  useGetFeatureFlag: vi.fn().mockReturnValue({
    data: true,
  }),
}))

vi.mock('@/synapse-queries/team/useTeamMembers', () => ({
  useGetIsPrincipalIdUserOrMemberOfTeam: vi.fn().mockReturnValue({
    data: true,
  }),
}))

vi.mock('@/synapse-queries/entity/useEntity', () => ({
  useGetEntityPermissions: vi.fn(),
}))

vi.mock('@/components/UserOrTeamBadge', () => ({
  UserOrTeamBadge: ({ principalId }: { principalId: string }) => (
    <span data-testid="user-or-team-badge" data-principal-id={principalId} />
  ),
}))

const mockDisplayToast = vi.mocked(displayToast)
const mockUseGridSessionForCurationTask = vi.mocked(
  useGridSessionForCurationTask,
)
const mockUseGridSessionForCurationTaskLegacy = vi.mocked(
  useGridSessionForCurationTask_legacy,
)
const mockGetLinkToGridSession = vi.mocked(getLinkToGridSession)

const mockUseGetFeatureFlag = vi.mocked(useGetFeatureFlag)
const mockUseGetEntityPermissions = vi.mocked(useGetEntityPermissions)
const mockUseGetIsPrincipalIdUserOrMemberOfTeam = vi.mocked(
  useGetIsPrincipalIdUserOrMemberOfTeam,
)

type UseGridForTaskMutationResult = UseMutationResult<
  UseGridSessionForCurationTaskResult,
  SynapseClientError,
  TaskBundle
>

const mockUseGridForTaskMutateAsync =
  vi.fn<UseGridForTaskMutationResult['mutateAsync']>()

const createUseGridForTaskMutationResult = (
  overrides: Partial<UseGridForTaskMutationResult> = {},
): UseGridForTaskMutationResult =>
  ({
    mutateAsync: mockUseGridForTaskMutateAsync,
    isPending: false,
    data: undefined,
    ...overrides,
  } as Partial<UseGridForTaskMutationResult> as UseGridForTaskMutationResult)

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
  mockUseGridForTaskMutateAsync.mockResolvedValue({
    gridSession: { sessionId: 'session-123' },
    gridSessionOwnerMatchesTaskAssignee: true,
  })
  mockUseGridSessionForCurationTask.mockReturnValue(
    createUseGridForTaskMutationResult(),
  )
  mockUseGridForTaskLegacyMutateAsync.mockResolvedValue({
    sessionId: 'session-123',
  })

  mockUseGridSessionForCurationTaskLegacy.mockReturnValue(
    createUseGridForTaskLegacyMutationResult(),
  )
  mockUseGetEntityPermissions.mockReturnValue(createPermissionsQueryResult())
  mockUseGetFeatureFlag.mockReturnValue(true)
  mockUseGetIsPrincipalIdUserOrMemberOfTeam.mockReturnValue({
    data: true,
  } as any)
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

  it('disables the Open Curator button when user is not assigned', () => {
    mockUseGetEntityPermissions.mockReturnValue(
      createPermissionsQueryResult({
        data: { canView: true } as UserEntityPermissions,
      }),
    )
    mockUseGetIsPrincipalIdUserOrMemberOfTeam.mockReturnValue({
      data: false,
    } as any)

    renderComponent({ canEdit: false })

    expect(screen.getByRole('button', { name: /open curator/i })).toBeDisabled()
  })

  it('enables the Open Curator button when user is not assigned if CURATOR_DISABLE_OPEN_FOR_UNASSIGNED_TASKS is false', () => {
    mockUseGetFeatureFlag.mockReturnValue(false)
    mockUseGetEntityPermissions.mockReturnValue(
      createPermissionsQueryResult({
        data: { canView: true } as UserEntityPermissions,
      }),
    )
    mockUseGetIsPrincipalIdUserOrMemberOfTeam.mockReturnValue({
      data: false,
    } as any)

    renderComponent({ canEdit: false })

    expect(screen.getByRole('button', { name: /open curator/i })).toBeEnabled()
  })

  it('enables the Open Curator button when canEdit=false but user is assigned to task', () => {
    mockUseGetEntityPermissions.mockReturnValue(
      createPermissionsQueryResult({
        data: { canView: true } as UserEntityPermissions,
      }),
    )
    mockUseGetIsPrincipalIdUserOrMemberOfTeam.mockReturnValue({
      data: true,
    } as any)

    renderComponent({ canEdit: false })

    expect(screen.getByRole('button', { name: /open curator/i })).toBeEnabled()
  })

  it('disables the Open Curator button while opening the grid session', () => {
    mockUseGridSessionForCurationTask.mockReturnValue(
      createUseGridForTaskMutationResult({ isPending: true }),
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
      expect(mockUseGridForTaskMutateAsync).toHaveBeenCalledWith(mockTaskBundle)
      expect(mockUseGridForTaskLegacyMutateAsync).not.toHaveBeenCalled()
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
    mockUseGridForTaskMutateAsync.mockRejectedValue(new Error(errorMessage))

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

  describe('no-assignee warning', () => {
    beforeEach(() => {
      // This flow is only supported when CURATOR_DISABLE_OPEN_FOR_UNASSIGNED_TASKS is false
      mockUseGetFeatureFlag.mockReturnValue(false)
    })
    const taskBundleWithNoAssignee: TaskBundle = {
      ...mockTaskBundle,
      task: { ...mockTaskBundle.task!, assigneePrincipalId: undefined },
    }

    it('shows a warning dialog when task has no assignee', async () => {
      renderComponent({ taskBundle: taskBundleWithNoAssignee })

      await userEvent.click(
        screen.getByRole('button', { name: /open curator/i }),
      )

      await screen.findByRole('heading', {
        name: NO_TASK_ASSIGNEE_WARNING_DIALOG_TITLE,
      })
      expect(mockUseGridForTaskLegacyMutateAsync).not.toHaveBeenCalled()
      expect(mockUseGridForTaskMutateAsync).not.toHaveBeenCalled()
    })

    it('cancelling the no-assignee dialog closes it without opening a session', async () => {
      renderComponent({ taskBundle: taskBundleWithNoAssignee })

      await userEvent.click(
        screen.getByRole('button', { name: /open curator/i }),
      )
      await screen.findByRole('heading', {
        name: NO_TASK_ASSIGNEE_WARNING_DIALOG_TITLE,
      })

      await userEvent.click(screen.getByRole('button', { name: /cancel/i }))

      await waitFor(() =>
        expect(
          screen.queryByRole('heading', {
            name: NO_TASK_ASSIGNEE_WARNING_DIALOG_TITLE,
          }),
        ).not.toBeInTheDocument(),
      )
      expect(mockUseGridForTaskLegacyMutateAsync).not.toHaveBeenCalled()
      expect(mockUseGridForTaskMutateAsync).not.toHaveBeenCalled()
    })

    it('confirming the no-assignee dialog proceeds to open the session', async () => {
      const windowOpenSpy = vi
        .spyOn(window, 'open')
        .mockReturnValue(null as unknown as Window)

      renderComponent({ taskBundle: taskBundleWithNoAssignee })

      await userEvent.click(
        screen.getByRole('button', { name: /open curator/i }),
      )
      await screen.findByRole('heading', {
        name: NO_TASK_ASSIGNEE_WARNING_DIALOG_TITLE,
      })

      await userEvent.click(screen.getByRole('button', { name: /proceed/i }))

      await waitFor(() => {
        expect(mockUseGridForTaskLegacyMutateAsync).toHaveBeenCalled()
        expect(mockUseGridForTaskMutateAsync).not.toHaveBeenCalled()
        expect(windowOpenSpy).toHaveBeenCalled()
      })

      windowOpenSpy.mockRestore()
    })
  })

  describe('session access control', () => {
    it('shows an error toast and does not open window when user has no access to session', async () => {
      mockUseGridForTaskMutateAsync.mockRejectedValue(
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

      await userEvent.click(
        screen.getByRole('button', { name: /open curator/i }),
      )

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

      windowOpenSpy.mockRestore()
    })

    it('shows assignee-mismatch dialog when session owner differs from assignee', async () => {
      const sessionData: UseGridSessionForCurationTaskResult = {
        gridSession: {
          sessionId: 'session-123',
          ownerPrincipalId: 'ownerPrincipal',
        },
        gridSessionOwnerMatchesTaskAssignee: false,
      }
      mockUseGridForTaskMutateAsync.mockResolvedValue(sessionData)
      mockUseGridSessionForCurationTask.mockReturnValue(
        createUseGridForTaskMutationResult({ data: sessionData }),
      )

      renderComponent()

      await userEvent.click(
        screen.getByRole('button', { name: /open curator/i }),
      )

      await screen.findByText(/task assignee changed/i)
    })

    it('cancelling the assignee-mismatch dialog closes it without opening a window', async () => {
      const sessionData: UseGridSessionForCurationTaskResult = {
        gridSession: {
          sessionId: 'session-123',
          ownerPrincipalId: 'ownerPrincipal',
        },
        gridSessionOwnerMatchesTaskAssignee: false,
      }
      mockUseGridForTaskMutateAsync.mockResolvedValue(sessionData)
      mockUseGridSessionForCurationTask.mockReturnValue(
        createUseGridForTaskMutationResult({ data: sessionData }),
      )
      const windowOpenSpy = vi
        .spyOn(window, 'open')
        .mockReturnValue(null as unknown as Window)

      renderComponent()

      await userEvent.click(
        screen.getByRole('button', { name: /open curator/i }),
      )
      await screen.findByText(/task assignee changed/i)

      await userEvent.click(screen.getByRole('button', { name: /cancel/i }))

      await waitFor(() =>
        expect(
          screen.queryByText(/task assignee changed/i),
        ).not.toBeInTheDocument(),
      )
      expect(windowOpenSpy).not.toHaveBeenCalled()

      windowOpenSpy.mockRestore()
    })

    it('confirming the assignee-mismatch dialog opens the session', async () => {
      const sessionData: UseGridSessionForCurationTaskResult = {
        gridSession: {
          sessionId: 'session-123',
          ownerPrincipalId: 'ownerPrincipal',
        },
        gridSessionOwnerMatchesTaskAssignee: false,
      }
      mockUseGridForTaskMutateAsync.mockResolvedValue(sessionData)
      mockUseGridSessionForCurationTask.mockReturnValue(
        createUseGridForTaskMutationResult({ data: sessionData }),
      )
      mockGetLinkToGridSession.mockReturnValue('https://example.org/grid')
      const windowOpenSpy = vi
        .spyOn(window, 'open')
        .mockReturnValue(null as unknown as Window)

      renderComponent()

      await userEvent.click(
        screen.getByRole('button', { name: /open curator/i }),
      )
      await screen.findByText(/task assignee changed/i)

      await userEvent.click(
        screen.getByRole('button', { name: /open curator/i }),
      )

      await waitFor(() => {
        expect(windowOpenSpy).toHaveBeenCalledWith(
          'https://example.org/grid',
          '_blank',
          'noopener',
        )
      })

      windowOpenSpy.mockRestore()
    })
  })
})
