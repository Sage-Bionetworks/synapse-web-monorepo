/*
 * MSW handlers for the generic asynchronous job endpoint, backing the schema-registry `create`
 * job and the schema-generation job for stories and tests that exercise `useCreateJsonSchema` /
 * `useGenerateDataAccessSchema` against a `FormTemplate` draft. Simulates the server-side schema
 * generation with the client-side `generateDataAccessSchema` util — legitimate here even though
 * that util is not used by application code for this purpose, since a mock only needs to behave
 * like the real service, not reuse its implementation.
 */
import { getMockJsonSchemaById } from '@/mocks/accessRequirement/mockJsonSchemas'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { generateDataAccessSchema } from '@/utils/jsonschema/generateDataAccessSchema'
import {
  AsynchronousRequestBody,
  CreateSchemaResponse,
  GenerateDataAccessSchemaResponse,
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

function handleGenerateFromTemplateDraft(
  request: Extract<
    AsynchronousRequestBody,
    {
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.schema.GenerateDataAccessSchemaFromTemplateDraft'
    }
  >,
): GenerateDataAccessSchemaResponse {
  const templateDraft = request.templateDraft!
  const schema = getMockJsonSchemaById(templateDraft.schema$id) ?? {
    type: 'object',
    properties: {},
  }
  const generated = generateDataAccessSchema(
    templateDraft,
    schema,
    request.requestType,
  )
  return {
    concreteType:
      'org.sagebionetworks.repo.model.dataaccess.schema.GenerateDataAccessSchemaResponse',
    // The mock's schema/uiSchema are plain RJSF-shaped objects (not the generated `JsonSchema`
    // model's `_enum`/`_default`-renamed shape); MSW serializes this to the same wire JSON the
    // real service returns, and the client's `GenerateDataAccessSchemaResponseFromJSON` deserializer
    // performs the rename on the way back in, so this is safe despite the looser mock typing.
    steps: generated.steps.map(s => ({
      jsonSchema: s.jsonSchema,
      uiSchema: s.uiSchema,
    })) as unknown as GenerateDataAccessSchemaResponse['steps'],
  }
}

function handleRequest(request: AsynchronousRequestBody) {
  switch (request.concreteType) {
    case 'org.sagebionetworks.repo.model.schema.CreateSchemaRequest':
      return handleCreateSchema(request)
    case 'org.sagebionetworks.repo.model.dataaccess.schema.GenerateDataAccessSchemaFromTemplateDraft':
      return handleGenerateFromTemplateDraft(request)
    default:
      throw new Error(
        `formTemplatePreviewHandlers: unsupported concreteType "${request.concreteType}"`,
      )
  }
}

/**
 * Mocks the generic `POST /repo/v1/asynchronous/job` + `GET /repo/v1/asynchronous/job/{jobId}`
 * pair, resolving synchronously (no PROCESSING step) for `CreateSchemaRequest` and
 * `GenerateDataAccessSchemaFromTemplateDraft` job bodies.
 */
export function getFormTemplatePreviewHandlers(
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
