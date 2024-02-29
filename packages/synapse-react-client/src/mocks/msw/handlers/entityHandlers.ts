import { HttpResponse, http } from 'msw'
import {
  ENTITY,
  ENTITY_BUNDLE_V2,
  ENTITY_HEADERS,
  ENTITY_ID,
  ENTITY_ID_VERSION,
  ENTITY_ID_VERSIONS,
  ENTITY_JSON,
  ENTITY_SCHEMA_BINDING,
} from '../../../utils/APIConstants'
import {
  Entity,
  EntityBundle,
  EntityBundleRequest,
  EntityHeader,
  EntityJson,
  EntityPath,
  JsonSchemaObjectBinding,
  PaginatedResults,
  ProjectHeaderList,
  Reference,
  UploadDestination,
  UploadType,
  VersionableEntity,
  VersionInfo,
} from '@sage-bionetworks/synapse-types'
import mockEntities from '../../entity'
import { MOCK_INVALID_PROJECT_NAME } from '../../entity/mockEntity'
import { mockSchemaBinding } from '../../mockSchema'
import { SynapseApiResponse } from '../handlers'
import { uniqueId } from 'lodash-es'
import { mockProjectsEntityData } from '../../entity/mockProject'
import { mockUploadDestinations } from '../../mock_upload_destination'

export function getEntityBundleHandler(
  backendOrigin: string,
  bundle?: Partial<EntityBundle>,
) {
  return http.post<
    { entityId: string },
    EntityBundleRequest,
    SynapseApiResponse<EntityBundle>
  >(`${backendOrigin}${ENTITY_BUNDLE_V2(':entityId')}`, ({ params }) => {
    let status = 404
    let response: SynapseApiResponse<EntityBundle> = {
      reason: `Mock Service worker could not find a mock entity bundle with ID ${params.entityId}`,
    }
    if (bundle) {
      response = bundle as EntityBundle
      status = 200
    } else {
      const entityData = mockEntities.find(
        entity => entity.id === params.entityId,
      )
      if (entityData?.bundle) {
        response = entityData.bundle
        status = 200
      }
    }
    return HttpResponse.json(response, { status })
  })
}

export function getVersionedEntityBundleHandler(
  backendOrigin: string,
  bundle?: Partial<EntityBundle>,
) {
  return http.post<
    { entityId: string; versionNumber: string },
    EntityBundleRequest,
    SynapseApiResponse<EntityBundle>
  >(
    `${backendOrigin}${ENTITY_BUNDLE_V2(':entityId', ':versionNumber')}`,
    ({ params }) => {
      const entityId = params.entityId
      const versionNumber = parseInt(params.versionNumber)
      let status = 404
      let response: SynapseApiResponse<EntityBundle> = {
        reason: `Mock Service worker could not find a mock entity bundle with ID ${entityId}`,
      }
      if (bundle) {
        response = bundle as EntityBundle
        status = 200
      } else {
        const entityData = mockEntities.find(entity => entity.id === entityId)
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
  http.post<never, Entity, SynapseApiResponse<Entity>>(
    `${backendOrigin}${ENTITY}`,
    async ({ request }) => {
      let status = 200
      const requestBody = await request.json()
      let response: SynapseApiResponse<Entity> = { reason: '...' }
      if (!requestBody) {
        status = 400
        response = {
          reason: `Mock service worker received the following malformed body for PUT ${ENTITY} : ${JSON.stringify(
            requestBody,
          )}`,
        }
      } else {
        if (requestBody.name === MOCK_INVALID_PROJECT_NAME) {
          response.reason = 'Invalid project name'
          status = 403
        } else {
          response = { id: uniqueId('syn'), ...requestBody }
        }
      }

      return HttpResponse.json(response, { status })
    },
  ),

  /**
   * Get entity by ID
   */
  http.get<{ entityId: string }, never, SynapseApiResponse<Entity>>(
    `${backendOrigin}${ENTITY_ID(':entityId')}`,
    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<Entity> = {
        reason: `Mock Service worker could not find a mock entity with ID ${params.entityId}`,
      }

      const entityData = mockEntities.find(
        entity => entity.id === params.entityId,
      )
      if (entityData) {
        response = entityData.entity
        status = 200
      }
      return HttpResponse.json(response, { status })
    },
  ),

  http.get<
    { entityId: string },
    never,
    SynapseApiResponse<PaginatedResults<VersionInfo>>
  >(`${backendOrigin}${ENTITY_ID_VERSIONS(':entityId')}`, ({ params }) => {
    let status = 404
    let response: SynapseApiResponse<PaginatedResults<VersionInfo>> = {
      reason: `Mock Service worker could not find mock entity versions for ID ${params.entityId}`,
    }

    const entityData = mockEntities.find(
      entity => entity.id === params.entityId,
    )
    if (entityData && entityData.versionInfo) {
      response = { results: entityData.versionInfo }
      status = 200
    }
    return HttpResponse.json(response, { status })
  }),

  http.get<
    { entityId: string; versionNumber: string },
    never,
    SynapseApiResponse<VersionableEntity>
  >(
    `${backendOrigin}${ENTITY_ID_VERSION(':entityId', ':versionNumber')}`,
    ({ params }) => {
      let status = 404
      const entityId = params.entityId
      const versionNumber = String(params.versionNumber)
      const requestedVersionNumber = parseInt(versionNumber)

      let response: SynapseApiResponse<VersionableEntity> = {
        reason: `Mock Service worker could not find a mock versioned entity with ID ${entityId}.${versionNumber}`,
      }

      const entityData = mockEntities.find(
        entity => entity.id === params.entityId,
      )
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

  http.get<
    { entityId: string },
    never,
    SynapseApiResponse<JsonSchemaObjectBinding>
  >(`${backendOrigin}${ENTITY_SCHEMA_BINDING(':entityId')}`, () => {
    return HttpResponse.json(mockSchemaBinding, { status: 200 })
  }),
  http.get<{ entityId: string }, never, SynapseApiResponse<EntityJson>>(
    `${backendOrigin}${ENTITY_JSON(':entityId')}`,

    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<EntityJson> = {
        reason: `Mock Service worker could not find a mock entity bundle with ID ${params.entityId}`,
      }
      const entityData = mockEntities.find(
        entity => entity.id === params.entityId,
      )
      if (entityData?.json) {
        response = entityData.json
        status = 200
      }

      return HttpResponse.json(response, { status })
    },
  ),

  http.post<
    { entityId: string },
    {
      references: Reference[]
    },
    SynapseApiResponse<PaginatedResults<EntityHeader>>
  >(
    `${backendOrigin}${ENTITY_HEADERS}`,

    async ({ params, request }) => {
      let status = 404
      let response: SynapseApiResponse<PaginatedResults<EntityHeader>> = {
        reason: `Mock Service worker could not find a mock entity bundle with ID ${params.entityId}`,
      }

      const referenceList = (await request.json()) as {
        references: Reference[]
      }
      const entityData = mockEntities
        .filter(entity =>
          referenceList.references.find(ref => ref.targetId === entity.id),
        )
        .map(entity => entity.entityHeader)
        .filter((header): header is EntityHeader => !!header)

      if (entityData) {
        response = { results: entityData }
        status = 200
      }

      return HttpResponse.json(response, { status })
    },
  ),

  http.get<{ entityId: string }, never, SynapseApiResponse<EntityPath>>(
    `${backendOrigin}${ENTITY_ID(':entityId')}/path`,

    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<EntityPath> = {
        reason: `Mock Service worker could not find a mock entity path using ID ${params.entityId}`,
      }
      const entityData = mockEntities.find(e => params.entityId === e.id)

      if (entityData && entityData.path) {
        response = entityData.path
        status = 200
      }

      return HttpResponse.json(response, { status })
    },
  ),

  http.get<{ id: string }, never, SynapseApiResponse<UploadDestination>>(
    `${backendOrigin}/file/v1/entity/:id/uploadDestination`,
    () => {
      const response: UploadDestination = {
        banner: '',
        storageLocationId: 1,
        uploadType: UploadType.S3,
        concreteType: 'org.sagebionetworks.repo.model.file.S3UploadDestination',
      }
      return HttpResponse.json(response, { status: 200 })
    },
  ),

  http.get<
    { id: string; storageLocationId: string },
    never,
    SynapseApiResponse<UploadDestination>
  >(
    `${backendOrigin}/file/v1/entity/:id/uploadDestination/:storageLocationId`,
    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<UploadDestination> = {
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

  http.get<never, never, SynapseApiResponse<ProjectHeaderList>>(
    `${backendOrigin}/repo/v1/projects`,
    () => {
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
    },
  ),
]
