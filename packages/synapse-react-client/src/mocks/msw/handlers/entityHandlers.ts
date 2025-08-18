import {
  ENTITY,
  ENTITY_BUNDLE_V2,
  ENTITY_HEADERS,
  ENTITY_ID,
  ENTITY_ID_VERSION,
  ENTITY_ID_VERSIONS,
  ENTITY_JSON,
  ENTITY_SCHEMA_BINDING,
} from '@/utils/APIConstants'
import { normalizeSynPrefix } from '@/utils/functions/EntityTypeUtils'
import { ErrorResponse } from '@sage-bionetworks/synapse-client'
import {
  AccessControlList,
  Entity,
  EntityBundle,
  EntityHeader,
  EntityJson,
  EntityPath,
  PaginatedResults,
  ProjectHeaderList,
  Reference,
  UploadDestination,
  VersionableEntity,
  VersionInfo,
} from '@sage-bionetworks/synapse-types'
import { uniqueId } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import mockEntities, { mockProjectsEntityData } from '../../entity'
import { MOCK_INVALID_PROJECT_NAME } from '../../entity/mockEntity'
import { MockEntityData } from '../../entity/MockEntityData'
import {
  mockSynapseStorageUploadDestination,
  mockUploadDestinations,
} from '../../mock_upload_destination'
import { mockSchemaBinding } from '../../mockSchema'
import { SynapseApiResponse } from '../handlers'

function getMatchingMockEntities(entityIds: string[]): MockEntityData[] {
  const normalizedPassedIds = entityIds.map(normalizeSynPrefix)
  return mockEntities.filter(entity =>
    normalizedPassedIds.includes(normalizeSynPrefix(entity.id)),
  )
}
function getMatchingMockEntity(entityId: string): MockEntityData | undefined {
  const matches = getMatchingMockEntities([entityId])
  if (matches.length == 0) {
    return undefined
  }
  return matches[0]
}

export function getEntityBundleHandler(
  backendOrigin: string,
  bundle?: Partial<EntityBundle>,
) {
  return http.post(
    `${backendOrigin}${ENTITY_BUNDLE_V2(':entityId')}`,
    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<EntityBundle> = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `Mock Service worker could not find a mock entity bundle with ID ${params.entityId}`,
      }
      if (bundle) {
        response = bundle as EntityBundle
        status = 200
      } else {
        const entityData = getMatchingMockEntity(params.entityId as string)
        if (entityData?.bundle) {
          response = entityData.bundle
          status = 200
        }
      }
      return HttpResponse.json(response, { status })
    },
  )
}

export function getEntityJsonHandler(
  backendOrigin: string,
  entityJson?: Partial<EntityJson>,
) {
  return http.get(
    `${backendOrigin}${ENTITY_JSON(':entityId')}`,

    () => {
      const response = entityJson
      return HttpResponse.json(response, { status: 200 })
    },
  )
}

export function getVersionedEntityBundleHandler(
  backendOrigin: string,
  bundle?: Partial<EntityBundle>,
) {
  return http.post(
    `${backendOrigin}${ENTITY_BUNDLE_V2(':entityId', ':versionNumber')}`,
    ({ params }) => {
      const entityId = params.entityId as string
      const versionNumber = parseInt(params.versionNumber as string)
      let status = 404
      let response: SynapseApiResponse<EntityBundle> = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `Mock Service worker could not find a mock entity bundle with ID ${entityId}`,
      }
      if (bundle) {
        response = bundle as EntityBundle
        status = 200
      } else {
        const entityData = getMatchingMockEntity(entityId)
        if (entityData) {
          const bundle = entityData.bundle
          if (entityData.versions && entityData.versions[versionNumber]) {
            response = {
              ...bundle,
              entity: entityData.versions[versionNumber],
            } as EntityBundle
          } else {
            response = bundle as EntityBundle
          }
          status = 200
        }
      }
      return HttpResponse.json(response, { status })
    },
  )
}

export const getEntityHandlers = (backendOrigin: string) => [
  /**
   * Create a new entity
   */
  http.post<never, Entity>(`${backendOrigin}${ENTITY}`, async ({ request }) => {
    let status = 200
    const requestBody = await request.json()
    let response: SynapseApiResponse<Entity> = {
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
      reason: '...',
    }
    if (!requestBody) {
      status = 400
      response = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `Mock service worker received the following malformed body for PUT ${ENTITY} : ${JSON.stringify(
          requestBody,
        )}`,
      }
    } else {
      if (requestBody.name === MOCK_INVALID_PROJECT_NAME) {
        ;(response as ErrorResponse).reason = 'Invalid project name'
        status = 403
      } else {
        response = { id: uniqueId('syn'), ...requestBody }
      }
    }

    return HttpResponse.json(response, { status })
  }),

  /**
   * Get entity by ID
   */
  http.get(`${backendOrigin}${ENTITY_ID(':entityId')}`, ({ params }) => {
    let status = 404
    let response: SynapseApiResponse<Entity> = {
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
      reason: `Mock Service worker could not find a mock entity with ID ${params.entityId}`,
    }

    const entityData = getMatchingMockEntity(params.entityId as string)
    if (entityData) {
      response = entityData.entity
      status = 200
    }
    return HttpResponse.json(response, { status })
  }),

  http.get(
    `${backendOrigin}${ENTITY_ID_VERSIONS(':entityId')}`,
    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<PaginatedResults<VersionInfo>> = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `Mock Service worker could not find mock entity versions for ID ${params.entityId}`,
      }

      const entityData = getMatchingMockEntity(params.entityId as string)
      if (entityData && entityData.versionInfo) {
        response = { results: entityData.versionInfo }
        status = 200
      }
      return HttpResponse.json(response, { status })
    },
  ),

  http.get<{ entityId: string; versionNumber: string }>(
    `${backendOrigin}${ENTITY_ID_VERSION(':entityId', ':versionNumber')}`,
    ({ params }) => {
      let status = 404
      const entityId = params.entityId
      const versionNumber = params.versionNumber.toString()
      const requestedVersionNumber = parseInt(versionNumber)

      let response: SynapseApiResponse<VersionableEntity> = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `Mock Service worker could not find a mock versioned entity with ID ${entityId}.${versionNumber}`,
      }

      const entityData = getMatchingMockEntity(params.entityId)
      if (
        entityData &&
        entityData.versions &&
        entityData.versions[requestedVersionNumber]
      ) {
        response = entityData.versions[
          requestedVersionNumber
        ] as VersionableEntity
        status = 200
      }
      return HttpResponse.json(response, { status })
    },
  ),

  getEntityBundleHandler(backendOrigin),
  getVersionedEntityBundleHandler(backendOrigin),

  http.get(`${backendOrigin}${ENTITY_SCHEMA_BINDING(':entityId')}`, () => {
    return HttpResponse.json(mockSchemaBinding, { status: 200 })
  }),
  http.get(
    `${backendOrigin}${ENTITY_JSON(':entityId')}`,

    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<EntityJson> = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `Mock Service worker could not find a mock entity bundle with ID ${params.entityId}`,
      }
      const entityData = getMatchingMockEntity(params.entityId as string)
      if (entityData?.json) {
        response = entityData.json
        status = 200
      }

      return HttpResponse.json(response, { status })
    },
  ),

  http.post<{ entityId: string }, { references: Reference[] }>(
    `${backendOrigin}${ENTITY_HEADERS}`,

    async ({ params, request }) => {
      let status = 404
      let response: SynapseApiResponse<PaginatedResults<EntityHeader>> = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `Mock Service worker could not find a mock entity bundle with ID ${params.entityId}`,
      }

      const referenceList = await request.json()
      const entityData: EntityHeader[] = referenceList.references
        .map(ref => {
          const entityHeader = getMatchingMockEntity(ref.targetId)?.entityHeader
          if (entityHeader) {
            return {
              ...entityHeader,
              // ID should match what is passed in (i.e. may or may not have syn prefix)
              id: ref.targetId,
            }
          }
          return undefined
        })
        .filter((header): header is EntityHeader => !!header)

      if (entityData) {
        response = { results: entityData }
        status = 200
      }

      return HttpResponse.json(response, { status })
    },
  ),

  http.get(
    `${backendOrigin}${ENTITY_ID(':entityId')}/path`,

    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<EntityPath> = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `Mock Service worker could not find a mock entity path using ID ${params.entityId}`,
      }
      const entityData = getMatchingMockEntity(params.entityId as string)

      if (entityData && entityData.path) {
        response = entityData.path
        status = 200
      }

      return HttpResponse.json(response, { status })
    },
  ),

  http.get(`${backendOrigin}/file/v1/entity/:id/uploadDestination`, () => {
    const response: UploadDestination = mockSynapseStorageUploadDestination
    return HttpResponse.json(response, { status: 200 })
  }),

  http.get(
    `${backendOrigin}/file/v1/entity/:id/uploadDestination/:storageLocationId`,
    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<UploadDestination> = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `Mock Service worker could not find an uploadDestination using storageLocationId ${params.storageLocationId}`,
      }
      const uploadDestination = mockUploadDestinations.find(
        e => Number(params.storageLocationId) === e.storageLocationId,
      )

      if (uploadDestination) {
        response = uploadDestination
        status = 200
      }

      return HttpResponse.json(response, { status })
    },
  ),

  http.get(`${backendOrigin}/repo/v1/projects`, () => {
    const response: ProjectHeaderList = {
      results: mockProjectsEntityData.map(p => ({
        name: p.name,
        id: p.id,
        lastActivity: '2024-01-04T21:11:59.000Z',
        modifiedBy: parseInt(p.entity.modifiedBy!),
        modifiedOn: p.entity.modifiedOn!,
      })),
    }
    return HttpResponse.json(response, { status: 200 })
  }),

  http.post<{ entityId: string }, AccessControlList>(
    `${backendOrigin}${ENTITY_ID(':entityId')}/acl`,
    async ({ params, request }) => {
      const entityData = getMatchingMockEntity(params.entityId)
      let status: number
      let response: SynapseApiResponse<AccessControlList>
      if (!entityData) {
        status = 404
        response = {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: `Mock Service worker could not find a mock entity bundle with ID ${params.entityId}`,
        }
      } else if (entityData.bundle?.accessControlList) {
        status = 403
        response = {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: 'Resource already has an ACL.',
        }
      } else {
        response = await request.json()
        status = 201
      }

      return HttpResponse.json(response, { status })
    },
  ),

  http.put<{ entityId: string }, AccessControlList>(
    `${backendOrigin}${ENTITY_ID(':entityId')}/acl`,
    async ({ params, request }) => {
      const entityData = getMatchingMockEntity(params.entityId)

      let status: number
      let response: SynapseApiResponse<AccessControlList>

      if (!entityData) {
        status = 404
        response = {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: `Mock Service worker could not find a mock entity bundle with ID ${params.entityId}`,
        }
      } else if (!entityData?.bundle?.accessControlList) {
        response = {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason:
            'Cannot update ACL for a resource which inherits its permissions.',
        }
        status = 403
      } else {
        response = await request.json()
        status = 200
      }

      return HttpResponse.json(response, { status })
    },
  ),

  http.delete(`${backendOrigin}${ENTITY_ID(':entityId')}/acl`, ({ params }) => {
    const entityData = getMatchingMockEntity(params.entityId as string)

    let status: number
    let response: SynapseApiResponse<''>

    if (!entityData) {
      status = 404
      response = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `Mock Service worker could not find a mock entity bundle with ID ${params.entityId}`,
      }
    } else if (!entityData?.bundle?.accessControlList) {
      response = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason:
          'Cannot delete ACL for a resource which inherits its permissions.',
      }
      status = 403
    } else {
      response = ''
      status = 200
    }

    return HttpResponse.json(response, { status })
  }),
]
