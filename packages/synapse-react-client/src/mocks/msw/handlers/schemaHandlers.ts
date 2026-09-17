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
