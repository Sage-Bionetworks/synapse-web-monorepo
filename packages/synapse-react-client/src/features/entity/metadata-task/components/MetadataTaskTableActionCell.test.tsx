import { displayToast } from '@/components/ToastMessage/ToastMessage'
import {
  createMockTaskBundle,
  MOCK_CURATION_TASK_ID,
} from '@/mocks/curation/mockCurationTask'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import { useGetIsPrincipalIdUserOrMemberOfTeam } from '@/synapse-queries/team/useTeamMembers'
import { getLinkToGridSession } from '@/utils/functions/getSynapseWebClientLink'
import type {
  GridSession,
  SynapseClientError,
  TaskBundle,
} from '@sage-bionetworks/synapse-client'
import type { UserEntityPermissions } from '@sage-bionetworks/synapse-types'
import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useGridSessionForCurationTask from '../hooks/useGridSessionForCurationTask'
import MetadataTaskTableActionCell from './MetadataTaskTableActionCell'

vi.mock('../hooks/useGridSessionForCurationTask', () => ({
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
const mockGetLinkToGridSession = vi.mocked(getLinkToGridSession)

const mockUseGetEntityPermissions = vi.mocked(useGetEntityPermissions)
const mockUseGetIsPrincipalIdUserOrMemberOfTeam = vi.mocked(
  useGetIsPrincipalIdUserOrMemberOfTeam,
)

type GridSessionResult = {
  gridSession: GridSession
  hasAccessToGridSession: boolean
  gridSessionOwnerMatchesTaskAssignee: boolean
}
type MutationResult = UseMutationResult<
  GridSessionResult,
  SynapseClientError,
  TaskBundle
>
type EntityPermissionsQueryResult = UseQueryResult<
  UserEntityPermissions | null,
  SynapseClientError
>

const mockMutateAsync = vi.fn<MutationResult['mutateAsync']>()

const createMutationResult = (
  overrides: Partial<MutationResult> = {},
): MutationResult =>
  ({
    mutateAsync: mockMutateAsync,
    isPending: false,
    data: undefined,
    ...overrides,
  } as Partial<MutationResult> as MutationResult)

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
  mockMutateAsync.mockResolvedValue({
    gridSession: { sessionId: 'session-123' },
    hasAccessToGridSession: true,
    gridSessionOwnerMatchesTaskAssignee: true,
  })
  mockUseGridSessionForCurationTask.mockReturnValue(createMutationResult())
  mockUseGetEntityPermissions.mockReturnValue(createPermissionsQueryResult())
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

  it('disables the Open Curator button when READ access is denied', () => {
    mockUseGetEntityPermissions.mockReturnValue(
      createPermissionsQueryResult({
        data: { canView: false } as UserEntityPermissions,
      }),
    )

    renderComponent()

    expect(screen.getByRole('button', { name: /open curator/i })).toBeDisabled()
  })

  it('disables the Open Curator button when user does not have READ access and is not assigned', () => {
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
      createMutationResult({ isPending: true }),
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
      expect(mockMutateAsync).toHaveBeenCalledWith(mockTaskBundle)
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
    mockMutateAsync.mockRejectedValue(new Error(errorMessage))

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
    const taskBundleWithNoAssignee: TaskBundle = {
      ...mockTaskBundle,
      task: { ...mockTaskBundle.task!, assigneePrincipalId: undefined },
    }

    it('shows a warning dialog when task has no assignee', async () => {
      renderComponent({ taskBundle: taskBundleWithNoAssignee })

      await userEvent.click(
        screen.getByRole('button', { name: /open curator/i }),
      )

      await screen.findByRole('heading', { name: 'No assignee' })
      expect(mockMutateAsync).not.toHaveBeenCalled()
    })

    it('cancelling the no-assignee dialog closes it without opening a session', async () => {
      renderComponent({ taskBundle: taskBundleWithNoAssignee })

      await userEvent.click(
        screen.getByRole('button', { name: /open curator/i }),
      )
      await screen.findByRole('heading', { name: 'No assignee' })

      await userEvent.click(screen.getByRole('button', { name: /cancel/i }))

      await waitFor(() =>
        expect(
          screen.queryByRole('heading', { name: 'No assignee' }),
        ).not.toBeInTheDocument(),
      )
      expect(mockMutateAsync).not.toHaveBeenCalled()
    })

    it('confirming the no-assignee dialog proceeds to open the session', async () => {
      const windowOpenSpy = vi
        .spyOn(window, 'open')
        .mockReturnValue(null as unknown as Window)

      renderComponent({ taskBundle: taskBundleWithNoAssignee })

      await userEvent.click(
        screen.getByRole('button', { name: /open curator/i }),
      )
      await screen.findByRole('heading', { name: 'No assignee' })

      await userEvent.click(screen.getByRole('button', { name: /proceed/i }))

      await waitFor(() => {
        expect(mockMutateAsync).toHaveBeenCalled()
        expect(windowOpenSpy).toHaveBeenCalled()
      })

      windowOpenSpy.mockRestore()
    })
  })

  describe('session access control', () => {
    it('shows an error toast and does not open window when user has no access to session', async () => {
      mockMutateAsync.mockResolvedValue({
        gridSession: { sessionId: 'session-123' },
        hasAccessToGridSession: false,
        gridSessionOwnerMatchesTaskAssignee: false,
      })
      const windowOpenSpy = vi
        .spyOn(window, 'open')
        .mockReturnValue(null as unknown as Window)

      renderComponent()

      await userEvent.click(
        screen.getByRole('button', { name: /open curator/i }),
      )

      await waitFor(() => {
        expect(mockDisplayToast).toHaveBeenCalledWith(
          expect.stringContaining("don't have permission"),
          'danger',
        )
        expect(windowOpenSpy).not.toHaveBeenCalled()
      })

      windowOpenSpy.mockRestore()
    })

    it('shows assignee-mismatch dialog when session owner differs from assignee', async () => {
      const sessionData: GridSessionResult = {
        gridSession: {
          sessionId: 'session-123',
          ownerPrincipalId: 'ownerPrincipal',
        },
        hasAccessToGridSession: true,
        gridSessionOwnerMatchesTaskAssignee: false,
      }
      mockMutateAsync.mockResolvedValue(sessionData)
      mockUseGridSessionForCurationTask.mockReturnValue(
        createMutationResult({ data: sessionData }),
      )

      renderComponent()

      await userEvent.click(
        screen.getByRole('button', { name: /open curator/i }),
      )

      await screen.findByText(/task assignee changed/i)
    })

    it('cancelling the assignee-mismatch dialog closes it without opening a window', async () => {
      const sessionData: GridSessionResult = {
        gridSession: {
          sessionId: 'session-123',
          ownerPrincipalId: 'ownerPrincipal',
        },
        hasAccessToGridSession: true,
        gridSessionOwnerMatchesTaskAssignee: false,
      }
      mockMutateAsync.mockResolvedValue(sessionData)
      mockUseGridSessionForCurationTask.mockReturnValue(
        createMutationResult({ data: sessionData }),
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
      const sessionData: GridSessionResult = {
        gridSession: {
          sessionId: 'session-123',
          ownerPrincipalId: 'ownerPrincipal',
        },
        hasAccessToGridSession: true,
        gridSessionOwnerMatchesTaskAssignee: false,
      }
      mockMutateAsync.mockResolvedValue(sessionData)
      mockUseGridSessionForCurationTask.mockReturnValue(
        createMutationResult({ data: sessionData }),
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
