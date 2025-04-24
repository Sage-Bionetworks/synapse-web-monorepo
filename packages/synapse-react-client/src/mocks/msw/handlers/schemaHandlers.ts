// MSW handlers for JSON Schema services
import {
  mockConditionalOnConcreteTypeSchema,
  mockFileEntityValidationSchema,
  mockProjectValidationSchema,
  mockValidationSchema,
} from '@/mocks/mockSchema'
import { generateAsyncJobHandlers } from '@/mocks/msw/handlers/asyncJobHandlers'
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

export function getValidationSchemaHandlers(backendOrigin?: string) {
  return generateAsyncJobHandlers<
    {
      concreteType: 'org.sagebionetworks.repo.model.schema.GetValidationSchemaRequest'
      $id: string
    },
    {
      concreteType: 'org.sagebionetworks.repo.model.schema.GetValidationSchemaResponse'
      validationSchema: JSONSchema7
    }
  >(
    SCHEMA_VALIDATION_START,
    tokenParam => SCHEMA_VALIDATION_GET(tokenParam),
    req => {
      const requestedId = req.$id
      const validationSchema = validationSchemas.find(schema =>
        schema.$id?.includes(requestedId),
      )
      if (!validationSchema) {
        throw new Error(
          `Validation schema with id ${requestedId} not found in mock data.`,
        )
      }
      return {
        concreteType:
          'org.sagebionetworks.repo.model.schema.GetValidationSchemaResponse',
        validationSchema: validationSchema,
      }
    },
    backendOrigin,
  )
}
