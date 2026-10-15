import { server } from '@/mocks/msw/server'
import { putEntitySchemaBindingHandler } from '@/mocks/msw/handlers/entityHandlers'
import { MOCK_FILE_HANDLE_ID } from '@/mocks/mock_file_handle'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ENTITY } from '@/utils/APIConstants'
import {
  getEndpoint,
  BackendDestinationEnum,
} from '@/utils/functions/getEndpoint'
import { http, HttpResponse } from 'msw'
import { act, renderHook, waitFor } from '@testing-library/react'
import { useCreateRecordSetFromSchema } from './useCreateRecordSetFromSchema'

describe('useCreateRecordSetFromSchema', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  const parentId = 'syn111'
  const name = 'My Record Set'
  const schema$id = 'org.sagebionetworks-MySchema-1.0.0'
  const headers = ['firstName', 'lastName']

  it('uploads a header-only CSV, creates the RecordSet, and binds the schema', async () => {
    const { result } = renderHook(() => useCreateRecordSetFromSchema(), {
      wrapper: createWrapper({ accessToken: 'fake-token' }),
    })

    result.current.mutate({ parentId, name, schema$id, headers })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data?.name).toBe(name)
    expect(result.current.data?.parentId).toBe(parentId)
    expect(result.current.data?.dataFileHandleId).toBe(MOCK_FILE_HANDLE_ID)
    expect(result.current.data?.concreteType).toBe(
      'org.sagebionetworks.repo.model.RecordSet',
    )
  })

  it('sends the upsertKey and csvDescriptor on the created RecordSet when provided', async () => {
    const { result } = renderHook(() => useCreateRecordSetFromSchema(), {
      wrapper: createWrapper({ accessToken: 'fake-token' }),
    })

    result.current.mutate({
      parentId,
      name,
      schema$id,
      headers,
      upsertKey: ['firstName', 'lastName'],
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data?.upsertKey).toEqual(['firstName', 'lastName'])
    expect(result.current.data?.csvDescriptor).toEqual({
      separator: ',',
      quoteCharacter: '"',
      escapeCharacter: '\\',
      lineEnd: '\n',
      isFirstLineHeader: true,
    })
  })

  it('resumes from bind on retry after a bind failure, without re-creating the RecordSet', async () => {
    const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
    let entityCreateCallCount = 0
    server.use(
      http.post(`${backendOrigin}${ENTITY}`, async ({ request }) => {
        entityCreateCallCount++
        const requestBody = (await request.json()) as Record<string, unknown>
        return HttpResponse.json(
          { id: 'syn999', ...requestBody },
          { status: 200 },
        )
      }),
      putEntitySchemaBindingHandler({ status: 500, reason: 'Bind failed' }),
    )

    const { result } = renderHook(() => useCreateRecordSetFromSchema(), {
      wrapper: createWrapper({ accessToken: 'fake-token' }),
    })

    await act(async () => {
      await expect(
        result.current.mutateAsync({ parentId, name, schema$id, headers }),
      ).rejects.toThrow()
    })
    expect(entityCreateCallCount).toBe(1)

    // The bind now succeeds; retrying should skip the upload/create steps and only retry the bind.
    server.use(putEntitySchemaBindingHandler())

    let recordSet: { id?: string } | undefined
    await act(async () => {
      recordSet = await result.current.mutateAsync({
        parentId,
        name,
        schema$id,
        headers,
      })
    })
    expect(entityCreateCallCount).toBe(1)
    expect(recordSet?.id).toBe('syn999')
  })

  it('starts a new RecordSet from scratch on a second call after a successful create', async () => {
    const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
    let entityCreateCallCount = 0
    server.use(
      http.post(`${backendOrigin}${ENTITY}`, async ({ request }) => {
        entityCreateCallCount++
        const requestBody = (await request.json()) as Record<string, unknown>
        return HttpResponse.json(
          { id: `syn${entityCreateCallCount}`, ...requestBody },
          { status: 200 },
        )
      }),
      putEntitySchemaBindingHandler(),
    )

    const { result } = renderHook(() => useCreateRecordSetFromSchema(), {
      wrapper: createWrapper({ accessToken: 'fake-token' }),
    })

    let firstRecordSet: { id?: string; name?: string } | undefined
    await act(async () => {
      firstRecordSet = await result.current.mutateAsync({
        parentId,
        name,
        schema$id,
        headers,
      })
    })
    expect(firstRecordSet?.id).toBe('syn1')

    let secondRecordSet: { id?: string; name?: string } | undefined
    await act(async () => {
      secondRecordSet = await result.current.mutateAsync({
        parentId,
        name: 'A different RecordSet',
        schema$id,
        headers,
      })
    })
    expect(entityCreateCallCount).toBe(2)
    expect(secondRecordSet?.id).toBe('syn2')
    expect(secondRecordSet?.name).toBe('A different RecordSet')
  })
})
