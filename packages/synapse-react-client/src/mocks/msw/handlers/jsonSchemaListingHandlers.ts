// MSW handlers for listing JSON Schema Organizations, Schemas, and Schema Versions
import {
  mockJsonSchemasEmptyResponse,
  mockJsonSchemasPageOneForSagebionetworks,
  mockJsonSchemasPageTwoForSagebionetworks,
  mockJsonSchemaVersionsForNullVersionSchema,
  mockJsonSchemaVersionsPageOneForMultiVersionSchema,
  mockJsonSchemaVersionsPageTwoForMultiVersionSchema,
  MOCK_MULTI_VERSION_SCHEMA_NAME,
  MOCK_NULL_VERSION_SCHEMA_NAME,
  MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
  mockOrganizationsPageOne,
  mockOrganizationsPageTwo,
} from '@/mocks/jsonschema/mockJsonSchemaListing'
import {
  ListJsonSchemaInfoRequest,
  ListJsonSchemaVersionInfoRequest,
  ListOrganizationsRequest,
} from '@sage-bionetworks/synapse-client'
import { http, HttpResponse } from 'msw'

export function getJsonSchemaListingHandlers(backendOrigin: string) {
  return [
    http.post<never, ListOrganizationsRequest>(
      `${backendOrigin}/repo/v1/schema/organization/list`,
      async ({ request }) => {
        const { nextPageToken } = await request.json()
        const response = nextPageToken
          ? mockOrganizationsPageTwo
          : mockOrganizationsPageOne
        return HttpResponse.json(response, { status: 200 })
      },
    ),
    http.post<never, ListJsonSchemaInfoRequest>(
      `${backendOrigin}/repo/v1/schema/list`,
      async ({ request }) => {
        const { organizationName, nextPageToken } = await request.json()
        if (organizationName !== MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME) {
          return HttpResponse.json(mockJsonSchemasEmptyResponse, {
            status: 200,
          })
        }
        const response = nextPageToken
          ? mockJsonSchemasPageTwoForSagebionetworks
          : mockJsonSchemasPageOneForSagebionetworks
        return HttpResponse.json(response, { status: 200 })
      },
    ),
    http.post<never, ListJsonSchemaVersionInfoRequest>(
      `${backendOrigin}/repo/v1/schema/version/list`,
      async ({ request }) => {
        const { schemaName, nextPageToken } = await request.json()
        if (schemaName === MOCK_NULL_VERSION_SCHEMA_NAME) {
          return HttpResponse.json(mockJsonSchemaVersionsForNullVersionSchema, {
            status: 200,
          })
        }
        if (schemaName === MOCK_MULTI_VERSION_SCHEMA_NAME) {
          const response = nextPageToken
            ? mockJsonSchemaVersionsPageTwoForMultiVersionSchema
            : mockJsonSchemaVersionsPageOneForMultiVersionSchema
          return HttpResponse.json(response, { status: 200 })
        }
        return HttpResponse.json({ page: [] }, { status: 200 })
      },
    ),
  ]
}
