import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ComputeTaskExecutionResponseConcreteTypeEnum } from '@sage-bionetworks/synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import { MOCK_CURATION_TASK_ID } from '@/mocks/curation/mockCurationTask'
import { getExecuteCurationTaskHandlers } from '@/mocks/msw/handlers/curationTaskExecutionHandlers'
import { useExecuteCurationTask } from './useCurationTask'

describe('useExecuteCurationTask', () => {
  beforeAll(() => server.listen())
  afterAll(() => server.close())

  it('starts the execution, polls to completion, and resolves with the response', async () => {
    server.use(
      ...getExecuteCurationTaskHandlers({ taskId: MOCK_CURATION_TASK_ID }),
    )

    const { result } = renderHook(() => useExecuteCurationTask(), {
      wrapper: createWrapper({ accessToken: 'fake-token' }),
    })

    result.current.mutate(MOCK_CURATION_TASK_ID)

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data).toEqual({
      concreteType:
        ComputeTaskExecutionResponseConcreteTypeEnum.org_sagebionetworks_repo_model_curation_ComputeTaskExecutionResponse,
      taskId: MOCK_CURATION_TASK_ID,
    })
  })

  it('surfaces an error when the job fails', async () => {
    server.use(
      ...getExecuteCurationTaskHandlers({
        taskId: MOCK_CURATION_TASK_ID,
        jobState: 'FAILED',
      }),
    )

    const { result } = renderHook(() => useExecuteCurationTask(), {
      wrapper: createWrapper({ accessToken: 'fake-token' }),
    })

    result.current.mutate(MOCK_CURATION_TASK_ID)

    await waitFor(() => expect(result.current.isError).toBe(true))
  })
})
