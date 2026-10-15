import { getCreateSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { http, server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ASYNCHRONOUS_JOB, ASYNCHRONOUS_JOB_TOKEN } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { RJSFSchema } from '@rjsf/utils'
import { AsynchronousJobStatus } from '@sage-bionetworks/synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import { HttpResponse } from 'msw'
import { JSONSchema7 } from 'json-schema'
import { useCreateJsonSchema } from './useCreateJsonSchema'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const JOB_STATUS_URL = `${REPO_ENDPOINT}${ASYNCHRONOUS_JOB_TOKEN(':jobId')}`

const schema: RJSFSchema = {
  $id: 'org.example-1.0.0',
  type: 'object',
  properties: { institution: { type: 'string' } },
}

function renderUseCreateJsonSchema() {
  return renderHook(() => useCreateJsonSchema(), {
    wrapper: createWrapper(),
  })
}

describe('useCreateJsonSchema', () => {
  const registeredSchemas: JSONSchema7[] = []

  beforeAll(() => server.listen())
  afterAll(() => server.close())
  beforeEach(() => {
    registeredSchemas.length = 0
    server.use(...getCreateSchemaHandlers(REPO_ENDPOINT, registeredSchemas))
  })
  afterEach(() => server.resetHandlers())

  it('resolves with the new version once the job completes', async () => {
    let pollCount = 0
    server.use(
      http.get(JOB_STATUS_URL, ({ params }) => {
        pollCount++
        const status: AsynchronousJobStatus =
          pollCount < 3
            ? { jobId: String(params.jobId), jobState: 'PROCESSING' }
            : {
                jobId: String(params.jobId),
                jobState: 'COMPLETE',
                responseBody: {
                  concreteType:
                    'org.sagebionetworks.repo.model.schema.CreateSchemaResponse',
                  newVersionInfo: { $id: 'org.example-2.0.0' },
                },
              }
        return HttpResponse.json(status)
      }),
    )
    const { result } = renderUseCreateJsonSchema()

    const response = await result.current.mutateAsync(schema)

    expect(response.newVersionInfo?.$id).toBe('org.example-2.0.0')
    expect(pollCount).toBe(3)
  })

  it('surfaces a job failure as a mutation error', async () => {
    server.use(
      http.get(JOB_STATUS_URL, ({ params }) => {
        const status: AsynchronousJobStatus = {
          jobId: String(params.jobId),
          jobState: 'FAILED',
          errorMessage: 'The submitted schema is invalid.',
        }
        return HttpResponse.json(status)
      }),
    )
    const { result } = renderUseCreateJsonSchema()

    result.current.mutate(schema)

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error?.message).toBe(
      'The submitted schema is invalid.',
    )
  })

  it('surfaces a rejected start request as a mutation error without polling', async () => {
    let pollCount = 0
    server.use(
      http.post(`${REPO_ENDPOINT}${ASYNCHRONOUS_JOB}`, () =>
        HttpResponse.json({ reason: 'Not allowed.' }, { status: 403 }),
      ),
      http.get(JOB_STATUS_URL, () => {
        pollCount++
        return HttpResponse.json({})
      }),
    )
    const { result } = renderUseCreateJsonSchema()

    result.current.mutate(schema)

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error?.message).toBe('Not allowed.')
    expect(pollCount).toBe(0)
  })

  describe('request body', () => {
    it('sends choice options, constants, defaults, and conditionals to the server', async () => {
      const choiceSchema: RJSFSchema = {
        $id: 'org.example-1.0.0',
        type: 'object',
        properties: {
          singleChoice: { type: 'string', enum: ['Red', 'Green'] },
          multiChoice: {
            type: 'array',
            items: { type: 'string', enum: ['Email', 'Phone'] },
            uniqueItems: true,
          },
          constant: { type: 'string', const: 'fixed' },
          withDefault: { type: 'string', default: 'hello' },
        },
        if: { properties: { singleChoice: { const: 'Red' } } },
        then: { required: ['constant'] },
        else: { required: ['withDefault'] },
      }
      const { result } = renderUseCreateJsonSchema()

      await result.current.mutateAsync(choiceSchema)

      expect(registeredSchemas).toEqual([choiceSchema])
    })

    it('sends the keywords of schemas nested under composition, definition, and applicator keywords', async () => {
      const nestedSchema: RJSFSchema = {
        $id: 'org.example-1.0.0',
        type: 'object',
        definitions: { color: { type: 'string', enum: ['Red', 'Green'] } },
        allOf: [{ properties: { a: { enum: ['x'] } } }],
        anyOf: [{ properties: { b: { enum: ['y'] } } }],
        oneOf: [{ const: 'first' }, { const: 'second' }],
        not: { enum: ['forbidden'] },
        properties: {
          tags: { type: 'array', contains: { const: 'required-tag' } },
          scores: {
            type: 'object',
            additionalProperties: { type: 'string', enum: ['low', 'high'] },
          },
        },
      }
      const { result } = renderUseCreateJsonSchema()

      await result.current.mutateAsync(nestedSchema)

      expect(registeredSchemas).toEqual([nestedSchema])
    })

    it('sends keywords that the generated JsonSchema model does not list', async () => {
      const unlistedKeywordsSchema: RJSFSchema = {
        $id: 'org.example-1.0.0',
        $comment: 'Authored in the raw JSON editor',
        type: 'object',
        properties: {
          institution: {
            type: 'string',
            examples: ['Sage Bionetworks'],
            minLength: 1,
          },
        },
        patternProperties: { '^x-': { type: 'string' } },
      }
      const { result } = renderUseCreateJsonSchema()

      await result.current.mutateAsync(unlistedKeywordsSchema)

      expect(registeredSchemas).toEqual([unlistedKeywordsSchema])
    })

    it('sends boolean subschemas as booleans', async () => {
      const booleanSubschemas: RJSFSchema = {
        $id: 'org.example-1.0.0',
        type: 'object',
        properties: { tags: { type: 'array', items: true } },
        additionalProperties: false,
      }
      const { result } = renderUseCreateJsonSchema()

      await result.current.mutateAsync(booleanSubschemas)

      expect(registeredSchemas).toEqual([booleanSubschemas])
    })

    it('sends tuple-form items', async () => {
      const tupleItems: RJSFSchema = {
        $id: 'org.example-1.0.0',
        type: 'object',
        properties: {
          range: {
            type: 'array',
            items: [{ type: 'number' }, { type: 'number' }],
          },
        },
      }
      const { result } = renderUseCreateJsonSchema()

      await result.current.mutateAsync(tupleItems)

      expect(registeredSchemas).toEqual([tupleItems])
    })
  })
})
