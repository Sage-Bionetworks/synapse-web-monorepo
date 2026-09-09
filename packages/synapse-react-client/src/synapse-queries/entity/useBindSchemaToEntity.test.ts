import { server } from '@/mocks/msw/server'
import { putEntitySchemaBindingHandler } from '@/mocks/msw/handlers/entityHandlers'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BoundObjectType } from '@sage-bionetworks/synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import { useBindSchemaToEntity } from './useBindSchemaToEntity'
import { useGetSchemaBinding } from './useEntityBoundSchema'

describe('useBindSchemaToEntity', () => {
  beforeAll(() => server.listen())
  afterAll(() => server.close())

  const entityId = 'syn123'
  const schema$id = 'org.sagebionetworks-MySchema-1.0.0'

  it('binds the schema to the entity and returns the resulting binding', async () => {
    server.use(putEntitySchemaBindingHandler())

    const { result } = renderHook(() => useBindSchemaToEntity(), {
      wrapper: createWrapper({ accessToken: 'fake-token' }),
    })

    result.current.mutate({
      entityId,
      schema$id,
      enableDerivedAnnotations: false,
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data?.objectType).toBe(BoundObjectType.entity)
    expect(result.current.data?.jsonSchemaVersionInfo?.$id).toBe(schema$id)
  })

  it('makes the newly-bound schema available to useGetSchemaBinding for the same entity', async () => {
    server.use(putEntitySchemaBindingHandler())

    const wrapper = createWrapper({ accessToken: 'fake-token' })
    const { result: mutationResult } = renderHook(
      () => useBindSchemaToEntity(),
      { wrapper },
    )

    mutationResult.current.mutate({ entityId, schema$id })
    await waitFor(() => expect(mutationResult.current.isSuccess).toBe(true))

    const { result: queryResult } = renderHook(
      () => useGetSchemaBinding(entityId),
      { wrapper },
    )

    await waitFor(() => expect(queryResult.current.isSuccess).toBe(true))
    expect(queryResult.current.data?.jsonSchemaVersionInfo?.$id).toBe(schema$id)
  })

  it('surfaces an error when the bind request fails', async () => {
    server.use(
      putEntitySchemaBindingHandler({ status: 403, reason: 'Not authorized' }),
    )

    const { result } = renderHook(() => useBindSchemaToEntity(), {
      wrapper: createWrapper({ accessToken: 'fake-token' }),
    })

    result.current.mutate({ entityId, schema$id })

    await waitFor(() => expect(result.current.isError).toBe(true))
  })
})
