// MSW handlers for JSON Schema services
import {
  mockConditionalOnConcreteTypeSchema,
  mockFileEntityValidationSchema,
  mockProjectValidationSchema,
  mockValidationSchema,
} from '@/mocks/mockSchema'
import {
  dispatchEntry,
  generateAsyncJobHandlers,
} from '@/mocks/msw/handlers/asyncJobHandlers'
import {
  SCHEMA_VALIDATION_GET,
  SCHEMA_VALIDATION_START,
} from '@/utils/APIConstants'
import { JSONSchema7 } from 'json-schema'
import { http, HttpResponse } from 'msw'

const validationSchemas: JSONSchema7[] = [
  mockValidationSchema,
  mockConditionalOnConcreteTypeSchema,
  mockFileEntityValidationSchema,
  mockProjectValidationSchema,
]

export function getValidationSchemaHandlers(
  backendOrigin?: string,
  schemas: JSONSchema7[] = validationSchemas,
) {
  return generateAsyncJobHandlers(
    dispatchEntry(
      'org.sagebionetworks.repo.model.schema.GetValidationSchemaRequest',
      request => {
        const requestedId = request.$id
        const validationSchema = requestedId
          ? schemas.find(schema => schema.$id?.includes(requestedId))
          : undefined
        if (!validationSchema) {
          throw new Error(
            `Validation schema with id ${requestedId} not found in mock data.`,
          )
        }
        return {
          concreteType:
            'org.sagebionetworks.repo.model.schema.GetValidationSchemaResponse',
          validationSchema,
        }
      },
    ),
    {
      asyncTypeServicePaths: {
        requestPath: SCHEMA_VALIDATION_START,
        responsePath: tokenParam => SCHEMA_VALIDATION_GET(tokenParam),
      },
      backendOrigin,
    },
  )
}

/** Serves each schema as registered, looked up by its exact `$id`. */
export function getRegisteredSchemaHandlers(
  backendOrigin: string,
  schemas: JSONSchema7[],
) {
  return [
    http.get(
      `${backendOrigin}/repo/v1/schema/type/registered/:id`,
      ({ params }) => {
        const schema = schemas.find(s => s.$id === params.id)
        return schema
          ? HttpResponse.json(schema, { status: 200 })
          : HttpResponse.json(
              { reason: `Schema ${String(params.id)} not found in mock data.` },
              { status: 404 },
            )
      },
    ),
  ]
}

/**
 * Mocks the `CreateSchemaRequest` async job on the generic asynchronous job endpoint. Registers
 * each created schema under its requested `$id` by appending it to `registeredSchemas`; pass the
 * same array to {@link getRegisteredSchemaHandlers} so newly created versions can be fetched.
 */
export function getCreateSchemaHandlers(
  backendOrigin: string,
  registeredSchemas: JSONSchema7[],
) {
  return generateAsyncJobHandlers(
    dispatchEntry(
      'org.sagebionetworks.repo.model.schema.CreateSchemaRequest',
      request => {
        const { schema } = request
        const $id = schema?.$id
        if (!schema || !$id) {
          throw new Error('CreateSchemaRequest schema must declare an $id.')
        }
        registeredSchemas.push(schema as JSONSchema7)
        return {
          concreteType:
            'org.sagebionetworks.repo.model.schema.CreateSchemaResponse',
          newVersionInfo: { $id },
        }
      },
    ),
    { backendOrigin },
  )
}
