import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  createMockTaskBundle,
  MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
} from '@/mocks/curation/mockCurationTask'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { act, renderHook } from '@testing-library/react'
import useGridSessionForCurationTask from './useGridSessionForCurationTask'
import * as curationTaskModule from '@/synapse-queries/curation/task/useCurationTask'
import * as gridSessionModule from '@/synapse-queries/grid/useGridSession'
import * as userBundleModule from '@/synapse-queries/user/useUserBundle'

vi.mock('@/synapse-queries/curation/task/useCurationTask')
vi.mock('@/synapse-queries/grid/useGridSession')
vi.mock('@/synapse-queries/user/useUserBundle')

const MOCK_USER_ID = 'user123'
const MOCK_SESSION_ID = 'existing-session-id'
const MOCK_NEW_SESSION_ID = 'new-session-id'

const mockExistingGridSession = {
  sessionId: MOCK_SESSION_ID,
  ownerPrincipalId: MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
}
const mockNewGridSession = { sessionId: MOCK_NEW_SESSION_ID }

const bundleWithActiveSession = createMockTaskBundle({
  status: {
    taskId: 123,
    etag: 'etag-1',
    executionDetails: {
      activeSessionId: MOCK_SESSION_ID,
      concreteType:
        'org.sagebionetworks.repo.model.curation.execution.GridExecutionDetails',
    },
  },
})

beforeEach(() => {
  vi.clearAllMocks()

  vi.mocked(userBundleModule.useGetCurrentUserProfile).mockReturnValue({
    data: { ownerId: MOCK_USER_ID },
  } as any)

  vi.mocked(curationTaskModule.useUpdateCurationTaskStatus).mockReturnValue({
    mutateAsync: vi.fn().mockResolvedValue({}),
  } as any)

  vi.mocked(gridSessionModule.useDeleteGridSession).mockReturnValue({
    mutateAsync: vi.fn().mockResolvedValue({}),
  } as any)

  vi.mocked(gridSessionModule.useCreateGridSession).mockReturnValue({
    mutateAsync: vi.fn().mockResolvedValue({ gridSession: mockNewGridSession }),
  } as any)
})

describe('useGridSessionForCurationTask', () => {
  describe('when task has an active session ID', () => {
    it('reuses the existing session when user has access and assignee matches', async () => {
      vi.mocked(gridSessionModule.getGridSessionQuery).mockReturnValue({
        queryKey: ['mock-grid-session'],
        queryFn: () => mockExistingGridSession,
      } as any)

      const { result } = renderHook(() => useGridSessionForCurationTask(), {
        wrapper: createWrapper(),
      })

      const returnValue = await act(() =>
        result.current.mutateAsync(bundleWithActiveSession),
      )

      expect(returnValue.gridSession).toEqual(mockExistingGridSession)
      expect(returnValue.gridSessionOwnerMatchesTaskAssignee).toBe(true)
    })

    it('returns gridSessionOwnerMatchesTaskAssignee=false when owner differs from assignee', async () => {
      const sessionWithDifferentOwner = {
        sessionId: MOCK_SESSION_ID,
        ownerPrincipalId: 'differentOwner',
      }
      vi.mocked(gridSessionModule.getGridSessionQuery).mockReturnValue({
        queryKey: ['mock-grid-session-diff'],
        queryFn: () => sessionWithDifferentOwner,
      } as any)

      const { result } = renderHook(() => useGridSessionForCurationTask(), {
        wrapper: createWrapper(),
      })

      const returnValue = await act(() =>
        result.current.mutateAsync(bundleWithActiveSession),
      )

      expect(returnValue.gridSessionOwnerMatchesTaskAssignee).toBe(false)
    })

    it('falls through to create a new session when the existing session returns 404', async () => {
      const mockUpdateStatus = vi.fn().mockResolvedValue({})
      vi.mocked(curationTaskModule.useUpdateCurationTaskStatus).mockReturnValue(
        { mutateAsync: mockUpdateStatus } as any,
      )

      vi.mocked(gridSessionModule.getGridSessionQuery).mockReturnValue({
        queryKey: ['mock-grid-session-404'],
        queryFn: () => {
          throw new SynapseClientError(404, 'Not found', 'url')
        },
      } as any)

      const { result } = renderHook(() => useGridSessionForCurationTask(), {
        wrapper: createWrapper(),
      })

      const returnValue = await act(() =>
        result.current.mutateAsync(bundleWithActiveSession),
      )

      expect(returnValue.gridSession).toEqual(mockNewGridSession)
      expect(mockUpdateStatus).toHaveBeenCalledWith(
        expect.objectContaining({
          executionDetails: expect.objectContaining({
            activeSessionId: MOCK_NEW_SESSION_ID,
          }),
        }),
      )
    })

    it('rethrows non-404 errors when fetching the existing session', async () => {
      vi.mocked(gridSessionModule.getGridSessionQuery).mockReturnValue({
        queryKey: ['mock-grid-session-500'],
        queryFn: () => {
          throw new SynapseClientError(500, 'Server error', 'url')
        },
      } as any)

      const { result } = renderHook(() => useGridSessionForCurationTask(), {
        wrapper: createWrapper(),
      })

      await expect(
        result.current.mutateAsync(bundleWithActiveSession),
      ).rejects.toThrow()
    })
  })

  describe('when task has no active session', () => {
    it('creates a new session and links it to the task via updateCurationTaskStatus', async () => {
      const mockUpdateStatus = vi.fn().mockResolvedValue({})
      vi.mocked(curationTaskModule.useUpdateCurationTaskStatus).mockReturnValue(
        { mutateAsync: mockUpdateStatus } as any,
      )

      const { result } = renderHook(() => useGridSessionForCurationTask(), {
        wrapper: createWrapper(),
      })

      const returnValue = await act(() =>
        result.current.mutateAsync(createMockTaskBundle()),
      )

      expect(returnValue.gridSession).toEqual(mockNewGridSession)
      expect(returnValue.gridSessionOwnerMatchesTaskAssignee).toBe(true)
      expect(mockUpdateStatus).toHaveBeenCalledWith(
        expect.objectContaining({
          executionDetails: expect.objectContaining({
            activeSessionId: MOCK_NEW_SESSION_ID,
          }),
        }),
      )
    })

    it('returns gridSessionOwnerMatchesTaskAssignee=false when task has no assignee', async () => {
      const taskWithNoAssignee = createMockTaskBundle({
        task: {
          taskId: 123,
          assigneePrincipalId: undefined,
          taskProperties: {
            concreteType:
              'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
            fileViewId: 'syn999',
          },
        },
      })

      const { result } = renderHook(() => useGridSessionForCurationTask(), {
        wrapper: createWrapper(),
      })

      const returnValue = await act(() =>
        result.current.mutateAsync(taskWithNoAssignee),
      )

      expect(returnValue.gridSessionOwnerMatchesTaskAssignee).toBe(false)
    })

    it('deletes the new session and throws when updateCurationTaskStatus returns 412', async () => {
      const mockDeleteSession = vi.fn().mockResolvedValue({})
      vi.mocked(gridSessionModule.useDeleteGridSession).mockReturnValue({
        mutateAsync: mockDeleteSession,
      } as any)

      vi.mocked(curationTaskModule.useUpdateCurationTaskStatus).mockReturnValue(
        {
          mutateAsync: vi
            .fn()
            .mockRejectedValue(
              new SynapseClientError(412, 'Precondition Failed', 'url'),
            ),
        } as any,
      )

      const { result } = renderHook(() => useGridSessionForCurationTask(), {
        wrapper: createWrapper(),
      })

      await expect(
        result.current.mutateAsync(createMockTaskBundle()),
      ).rejects.toThrow(/please refresh and try again/i)

      expect(mockDeleteSession).toHaveBeenCalledWith(MOCK_NEW_SESSION_ID)
    })
  })

  describe('input validation', () => {
    it('throws when task is missing from the bundle', async () => {
      const { result } = renderHook(() => useGridSessionForCurationTask(), {
        wrapper: createWrapper(),
      })

      await expect(
        result.current.mutateAsync({ status: {} } as any),
      ).rejects.toThrow('CurationTaskBundle is missing task or status')
    })

    it('throws when status is missing from the bundle', async () => {
      const { result } = renderHook(() => useGridSessionForCurationTask(), {
        wrapper: createWrapper(),
      })

      await expect(
        result.current.mutateAsync({ task: { taskId: 1 } } as any),
      ).rejects.toThrow('CurationTaskBundle is missing task or status')
    })

    it('throws when task is missing taskProperties', async () => {
      const taskWithNoProperties = createMockTaskBundle({
        task: { taskId: 123 } as any,
      })

      const { result } = renderHook(() => useGridSessionForCurationTask(), {
        wrapper: createWrapper(),
      })

      await expect(
        result.current.mutateAsync(taskWithNoProperties),
      ).rejects.toThrow('CurationTask is missing taskProperties')
    })
  })
})
