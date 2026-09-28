import { getRegisteredSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { renderHook, waitFor } from '@testing-library/react'
import { JSONSchema7 } from 'json-schema'
import { useGetRegisteredSchema } from './useSchema'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

describe('useGetRegisteredSchema', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('returns the registered body verbatim, without adding keywords to nested schemas', async () => {
    const registered: JSONSchema7 = {
      $id: 'org.example-Registered-1.0.0',
      type: 'object',
      properties: { a: { type: 'string' } },
      allOf: [{ $ref: 'org.example-Base-1.0.0' }],
    }
    server.use(...getRegisteredSchemaHandlers(REPO_ENDPOINT, [registered]))

    const { result } = renderHook(
      () => useGetRegisteredSchema('org.example-Registered-1.0.0'),
      { wrapper: createWrapper() },
    )

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    // A nested schema carrying a `$ref` key, even one set to undefined, is treated as a
    // reference by JSON Schema consumers such as react-jsonschema-form.
    expect(Object.keys(result.current.data!.properties!.a as object)).toEqual([
      'type',
    ])
    expect(result.current.data).toEqual(registered)
  })
})
