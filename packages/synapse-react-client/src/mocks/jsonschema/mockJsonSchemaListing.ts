import {
  ListJsonSchemaInfoResponse,
  ListJsonSchemaVersionInfoResponse,
  ListOrganizationsResponse,
} from '@sage-bionetworks/synapse-client'

export const MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME = 'org.sagebionetworks'
export const MOCK_ORGANIZATION_EXAMPLE_NAME = 'org.example'

export const MOCK_MULTI_VERSION_SCHEMA_NAME = 'MultiVersionSchema'
export const MOCK_NULL_VERSION_SCHEMA_NAME = 'NullVersionSchema'

/**
 * Two pages of Organizations, so that consumers that eagerly fetch every page
 * (e.g. the org Autocomplete) can be exercised end-to-end.
 */
export const mockOrganizationsPageOne: ListOrganizationsResponse = {
  page: [
    {
      id: '1',
      name: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
      createdOn: '2021-01-01T00:00:00.000Z',
      createdBy: '1',
    },
  ],
  nextPageToken: 'organizations-page-2',
}

export const mockOrganizationsPageTwo: ListOrganizationsResponse = {
  page: [
    {
      id: '2',
      name: MOCK_ORGANIZATION_EXAMPLE_NAME,
      createdOn: '2021-02-01T00:00:00.000Z',
      createdBy: '1',
    },
  ],
  // No nextPageToken --> this is the last page
}

/**
 * Two pages of JsonSchemaInfo for org.sagebionetworks, to exercise infinite scroll of the
 * schema table. org.example intentionally has no schemas, to exercise the empty state.
 */
export const mockJsonSchemasPageOneForSagebionetworks: ListJsonSchemaInfoResponse =
  {
    page: [
      {
        organizationId: '1',
        organizationName: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
        schemaId: '101',
        schemaName: 'repo.model.FileEntity',
        createdOn: '2021-01-02T00:00:00.000Z',
        createdBy: '1',
      },
      {
        organizationId: '1',
        organizationName: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
        schemaId: '102',
        schemaName: 'repo.model.Project',
        createdOn: '2021-01-03T00:00:00.000Z',
        createdBy: '1',
      },
      {
        organizationId: '1',
        organizationName: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
        schemaId: '103',
        schemaName: MOCK_MULTI_VERSION_SCHEMA_NAME,
        createdOn: '2021-01-04T00:00:00.000Z',
        createdBy: '1',
      },
    ],
    nextPageToken: 'schemas-page-2',
  }

export const mockJsonSchemasPageTwoForSagebionetworks: ListJsonSchemaInfoResponse =
  {
    page: [
      {
        organizationId: '1',
        organizationName: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
        schemaId: '104',
        schemaName: MOCK_NULL_VERSION_SCHEMA_NAME,
        createdOn: '2021-01-05T00:00:00.000Z',
        createdBy: '1',
      },
    ],
    // No nextPageToken --> this is the last page
  }

export const mockJsonSchemasEmptyResponse: ListJsonSchemaInfoResponse = {
  page: [],
}

/**
 * Two pages of versions for MultiVersionSchema, to exercise both the version <Select> and
 * infinite scroll of the version list. Ordered lowest-to-highest semantic version across pages,
 * matching the real API's pagination order.
 */
export const mockJsonSchemaVersionsPageOneForMultiVersionSchema: ListJsonSchemaVersionInfoResponse =
  {
    page: [
      {
        organizationId: '1',
        organizationName: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
        schemaId: '103',
        schemaName: MOCK_MULTI_VERSION_SCHEMA_NAME,
        versionId: '1',
        $id: `${MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME}-${MOCK_MULTI_VERSION_SCHEMA_NAME}-1.0.0`,
        semanticVersion: '1.0.0',
        jsonSHA256Hex: 'sha-1-0-0',
        createdOn: '2021-03-01T00:00:00.000Z',
        createdBy: '1',
      },
      {
        organizationId: '1',
        organizationName: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
        schemaId: '103',
        schemaName: MOCK_MULTI_VERSION_SCHEMA_NAME,
        versionId: '2',
        $id: `${MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME}-${MOCK_MULTI_VERSION_SCHEMA_NAME}-1.1.0`,
        semanticVersion: '1.1.0',
        jsonSHA256Hex: 'sha-1-1-0',
        createdOn: '2021-03-02T00:00:00.000Z',
        createdBy: '1',
      },
    ],
    nextPageToken: 'multi-version-schema-versions-page-2',
  }

export const mockJsonSchemaVersionsPageTwoForMultiVersionSchema: ListJsonSchemaVersionInfoResponse =
  {
    page: [
      {
        organizationId: '1',
        organizationName: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
        schemaId: '103',
        schemaName: MOCK_MULTI_VERSION_SCHEMA_NAME,
        versionId: '3',
        $id: `${MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME}-${MOCK_MULTI_VERSION_SCHEMA_NAME}-2.0.0`,
        semanticVersion: '2.0.0',
        jsonSHA256Hex: 'sha-2-0-0',
        createdOn: '2021-03-03T00:00:00.000Z',
        createdBy: '1',
      },
    ],
    // No nextPageToken --> this is the last page
  }

/**
 * A single version that was created without a semantic version label, to exercise the
 * `semanticVersion: null` case.
 */
export const mockJsonSchemaVersionsForNullVersionSchema: ListJsonSchemaVersionInfoResponse =
  {
    page: [
      {
        organizationId: '1',
        organizationName: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
        schemaId: '104',
        schemaName: MOCK_NULL_VERSION_SCHEMA_NAME,
        versionId: '4',
        $id: `${MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME}-${MOCK_NULL_VERSION_SCHEMA_NAME}`,
        semanticVersion: undefined,
        jsonSHA256Hex: 'sha-null-version',
        createdOn: '2021-04-01T00:00:00.000Z',
        createdBy: '1',
      },
    ],
  }
