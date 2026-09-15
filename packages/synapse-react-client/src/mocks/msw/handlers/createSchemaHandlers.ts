/*
 * MSW handler for the generic asynchronous job endpoint, backing the schema-registry `create`
 * job for stories and tests that exercise `useCreateJsonSchema` when saving a `FormTemplate`.
 */
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  AsynchronousRequestBody,
  CreateSchemaResponse,
} from '@sage-bionetworks/synapse-client'
import { http, HttpResponse } from 'msw'

let nextVersionSeq = 1

function handleCreateSchema(
  request: Extract<
    AsynchronousRequestBody,
    {
      concreteType: 'org.sagebionetworks.repo.model.schema.CreateSchemaRequest'
    }
  >,
): CreateSchemaResponse {
  const baseId = request.schema?.$id?.replace(/-\d+\.\d+\.\d+$/, '')
  const newId = `${baseId ?? 'org.example.mock-schema'}-1.0.${nextVersionSeq++}`
  return {
    concreteType: 'org.sagebionetworks.repo.model.schema.CreateSchemaResponse',
    newVersionInfo: { $id: newId },
  }
}

function handleRequest(request: AsynchronousRequestBody) {
  switch (request.concreteType) {
    case 'org.sagebionetworks.repo.model.schema.CreateSchemaRequest':
      return handleCreateSchema(request)
    default:
      throw new Error(
        `createSchemaHandlers: unsupported concreteType "${request.concreteType}"`,
      )
  }
}

/**
 * Mocks the generic `POST /repo/v1/asynchronous/job` + `GET /repo/v1/asynchronous/job/{jobId}`
 * pair, resolving synchronously (no PROCESSING step) for `CreateSchemaRequest` job bodies.
 */
export function getCreateSchemaHandlers(
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) {
  const responsesByJobId = new Map<string, unknown>()

  return [
    http.post(
      `${backendOrigin}/repo/v1/asynchronous/job`,
      async ({ request }) => {
        const body = (await request.json()) as AsynchronousRequestBody
        const jobId = crypto.randomUUID()
        responsesByJobId.set(jobId, handleRequest(body))
        return HttpResponse.json({ jobId, jobState: 'PROCESSING' })
      },
    ),
    http.get(
      `${backendOrigin}/repo/v1/asynchronous/job/:jobId`,
      ({ params }) => {
        const jobId = params.jobId as string
        return HttpResponse.json({
          jobId,
          jobState: 'COMPLETE',
          responseBody: responsesByJobId.get(jobId),
        })
      },
    ),
  ]
}
