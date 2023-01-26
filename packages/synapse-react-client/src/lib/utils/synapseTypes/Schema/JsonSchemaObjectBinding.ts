export type JsonSchemaVersionInfo = {
  organizationId: string
  organizationName: string
  schemaId: string
  schemaName: string
  versionId: string
  $id: string
  semanticVersion?: string
  jsonSHA256Hex: string
  createdOn: string
  createdBy: string
}

export enum BoundObjectType {
  entity = 'entity',
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/schema/JsonSchemaObjectBinding.html
export type JsonSchemaObjectBinding = {
  jsonSchemaVersionInfo: JsonSchemaVersionInfo
  objectId: number
  objectType: BoundObjectType
  createdOn: string
  createdBy: string
}
