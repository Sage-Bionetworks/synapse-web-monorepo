import { MOCK_CURATION_TASK_ID } from '@/mocks/curation/mockCurationTask'
import { useUpdateCurationTaskStatus } from '@/synapse-queries/curation/task/useCurationTask'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  SynapseClientError,
  TaskStatus,
  TaskStatusStateEnum,
} from '@sage-bionetworks/synapse-client'
import { act, renderHook } from '@testing-library/react'
import useMarkCurationTaskInProgress from './useMarkCurationTaskInProgress'

vi.mock('@/synapse-queries/curation/task/useCurationTask', () => ({
  useUpdateCurationTaskStatus: vi.fn(),
}))

const mockGetStatus = vi.hoisted(() => vi.fn())

vi.mock('@/utils/index', async origImport => ({
  ...(await origImport<typeof import('@/utils/index')>()),
  useSynapseContext: vi.fn(() => ({
    synapseClient: {
      curationTaskServicesClient: {
        getRepoV1CurationTaskTaskIdStatus: mockGetStatus,
      },
    },
  })),
}))

const mockUpdateStatus = vi.fn()

/** The etag the server currently reports. A write with any other etag would be rejected. */
const CURRENT_ETAG = 'current-etag'

function statusWithState(state: TaskStatusStateEnum): TaskStatus {
  return { taskId: MOCK_CURATION_TASK_ID, state, etag: CURRENT_ETAG }
}

function renderMarkInProgress() {
  return renderHook(() => useMarkCurationTaskInProgress(), {
    wrapper: createWrapper(),
  })
}

beforeEach(() => {
  vi.clearAllMocks()
  mockUpdateStatus.mockImplementation((status: TaskStatus) =>
    Promise.resolve(status),
  )
  vi.mocked(useUpdateCurationTaskStatus).mockReturnValue({
    mutateAsync: mockUpdateStatus,
  } as any)
})

describe('useMarkCurationTaskInProgress', () => {
  it('advances a NOT_STARTED task to IN_PROGRESS with the etag it just fetched', async () => {
    mockGetStatus.mockResolvedValue(
      statusWithState(TaskStatusStateEnum.NOT_STARTED),
    )

    const { result } = renderMarkInProgress()
    const returnValue = await act(() =>
      result.current.mutateAsync(MOCK_CURATION_TASK_ID),
    )

    expect(mockGetStatus).toHaveBeenCalledWith({
      taskId: MOCK_CURATION_TASK_ID,
    })
    expect(mockUpdateStatus).toHaveBeenCalledWith({
      taskId: MOCK_CURATION_TASK_ID,
      state: TaskStatusStateEnum.IN_PROGRESS,
      etag: CURRENT_ETAG,
    })
    expect(returnValue?.state).toBe(TaskStatusStateEnum.IN_PROGRESS)
  })

  // Every state other than NOT_STARTED means work has already begun (or the task is closed), so the
  // transition must never overwrite it.
  it.each(
    Object.values(TaskStatusStateEnum).filter(
      state => state !== TaskStatusStateEnum.NOT_STARTED,
    ),
  )('leaves a task already in %s untouched', async state => {
    mockGetStatus.mockResolvedValue(statusWithState(state))

    const { result } = renderMarkInProgress()
    const returnValue = await act(() =>
      result.current.mutateAsync(MOCK_CURATION_TASK_ID),
    )

    expect(mockUpdateStatus).not.toHaveBeenCalled()
    expect(returnValue).toBeUndefined()
  })

  it('rejects when the status write fails, leaving the caller to decide how to handle it', async () => {
    mockGetStatus.mockResolvedValue(
      statusWithState(TaskStatusStateEnum.NOT_STARTED),
    )
    mockUpdateStatus.mockRejectedValue(
      new SynapseClientError(403, 'Forbidden', expect.getState().testPath!),
    )

    const { result } = renderMarkInProgress()

    await expect(
      result.current.mutateAsync(MOCK_CURATION_TASK_ID),
    ).rejects.toThrow(/forbidden/i)
  })
})
