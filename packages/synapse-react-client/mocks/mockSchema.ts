import {
  BoundObjectType,
  JsonSchemaObjectBinding,
} from '../src/lib/utils/synapseTypes/Schema/JsonSchemaObjectBinding'
import { ObjectType } from '../src/lib/utils/synapseTypes/Schema/ObjectType'
import { ValidationResults } from '../src/lib/utils/synapseTypes/Schema/ValidationResults'
import mockFileEntityData from './entity/mockFileEntity'
import { JSONSchema7 } from 'json-schema'

const mockFileEntity = mockFileEntityData.entity

export const mockSchemaBinding: JsonSchemaObjectBinding = {
  jsonSchemaVersionInfo: {
    organizationId: '1',
    organizationName: 'org.sagebionetworks',
    schemaId: '1',
    schemaName: 'Mock Schema',
    versionId: '555',
    $id: 'org.sagebionetworks-MockSchema',
    jsonSHA256Hex:
      '5f2cd73c0fe25b30cbee2f213b6d633951f1873ca1911f494d4654f702a69e95',
    createdOn: '2021-04-01T08:00:00.000Z',
    createdBy: '1',
  },
  objectId: 3333,
  objectType: BoundObjectType.entity,
  createdOn: '2021-04-01T08:00:00.000Z',
  createdBy: '1',
}

export const mockSchemaValidationResults: ValidationResults = {
  objectId: mockFileEntity.id!,
  objectType: ObjectType.entity,
  objectEtag: mockFileEntity.etag!,
  schema$id: `https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${mockSchemaBinding.jsonSchemaVersionInfo.$id}`,
  isValid: true,
  validatedOn: '2021-06-28T20:08:44.046Z',
}

export const mockValidationSchema: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: `https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${mockSchemaBinding.jsonSchemaVersionInfo.$id}`,
  type: 'object',
  properties: {
    country: {
      enum: ['USA', 'CA'],
      description: 'Test description for country property',
    },
    showStringArray: {
      type: 'boolean',
    },
  },
  required: ['country'],
  allOf: [
    {
      if: {
        properties: {
          country: {
            const: 'USA',
          },
        },
        required: ['country'],
      },
      then: {
        properties: {
          state: {
            type: 'string',
          },
        },
        required: ['state'],
      },
    },
    {
      if: {
        properties: {
          country: {
            const: 'CA',
          },
        },
        required: ['country'],
      },
      then: {
        properties: {
          province: {
            type: 'string',
          },
        },
        required: ['province'],
      },
    },
    {
      if: {
        properties: {
          showStringArray: {
            const: true,
          },
        },
        required: ['showStringArray'],
      },
      then: {
        properties: {
          stringArray: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
  ],
}
