import { rest } from 'msw'
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
  EntityHeader,
  EntityJson,
  EntityPath,
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
  return rest.post(
    `${backendOrigin}${ENTITY_BUNDLE_V2(':entityId')}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<EntityBundle> = {
        reason: `Mock Service worker could not find a mock entity bundle with ID ${req.params.entityId}`,
      }
      if (bundle) {
        response = bundle as EntityBundle
        status = 200
      } else {
        const entityData = mockEntities.find(
          entity => entity.id === req.params.entityId,
        )
        if (entityData?.bundle) {
          response = entityData.bundle
          status = 200
        }
      }
      return res(ctx.status(status), ctx.json(response))
    },
  )
}

export function getVersionedEntityBundleHandler(
  backendOrigin: string,
  bundle?: Partial<EntityBundle>,
) {
  return rest.post(
    `${backendOrigin}${ENTITY_BUNDLE_V2(':entityId', ':versionNumber')}`,
    async (req, res, ctx) => {
      const entityId = req.params.entityId
      const versionNumber = parseInt(req.params.versionNumber as string)
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
      return res(ctx.status(status), ctx.json(response))
    },
  )
}

export const getEntityHandlers = (backendOrigin: string) => [
  /**
   * Create a new entity
   */
  rest.post(`${backendOrigin}${ENTITY}`, async (req, res, ctx) => {
    let status = 200
    const requestBody = await req.json<Entity>()
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

    return res(ctx.status(status), ctx.json(response))
  }),

  /**
   * Get entity by ID
   */
  rest.get(
    `${backendOrigin}${ENTITY_ID(':entityId')}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<Entity> = {
        reason: `Mock Service worker could not find a mock entity with ID ${req.params.entityId}`,
      }

      const entityData = mockEntities.find(
        entity => entity.id === req.params.entityId,
      )
      if (entityData) {
        response = entityData.entity
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.get(
    `${backendOrigin}${ENTITY_ID_VERSIONS(':entityId')}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<PaginatedResults<VersionInfo>> = {
        reason: `Mock Service worker could not find mock entity versions for ID ${req.params.entityId}`,
      }

      const entityData = mockEntities.find(
        entity => entity.id === req.params.entityId,
      )
      if (entityData && entityData.versionInfo) {
        response = { results: entityData.versionInfo }
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.get(
    `${backendOrigin}${ENTITY_ID_VERSION(':entityId', ':versionNumber')}`,
    async (req, res, ctx) => {
      let status = 404
      const entityId = req.params.entityId
      const versionNumber = req.params.versionNumber.toString()
      const requestedVersionNumber = parseInt(versionNumber)

      let response: SynapseApiResponse<VersionableEntity> = {
        reason: `Mock Service worker could not find a mock versioned entity with ID ${entityId}.${versionNumber}`,
      }

      const entityData = mockEntities.find(
        entity => entity.id === req.params.entityId,
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
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  getEntityBundleHandler(backendOrigin),
  getVersionedEntityBundleHandler(backendOrigin),

  rest.get(
    `${backendOrigin}${ENTITY_SCHEMA_BINDING(':entityId')}`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockSchemaBinding))
    },
  ),
  rest.get(
    `${backendOrigin}${ENTITY_JSON(':entityId')}`,

    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<EntityJson> = {
        reason: `Mock Service worker could not find a mock entity bundle with ID ${req.params.entityId}`,
      }
      const entityData = mockEntities.find(
        entity => entity.id === req.params.entityId,
      )
      if (entityData?.json) {
        response = entityData.json
        status = 200
      }

      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.post(
    `${backendOrigin}${ENTITY_HEADERS}`,

    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<PaginatedResults<EntityHeader>> = {
        reason: `Mock Service worker could not find a mock entity bundle with ID ${req.params.entityId}`,
      }

      const referenceList = req.body as { references: Reference[] }
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

      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.get(
    `${backendOrigin}${ENTITY_ID(':entityId')}/path`,

    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<EntityPath> = {
        reason: `Mock Service worker could not find a mock entity path using ID ${req.params.entityId}`,
      }
      const entityData = mockEntities.find(e => req.params.entityId === e.id)

      if (entityData && entityData.path) {
        response = entityData.path
        status = 200
      }

      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.get(
    `${backendOrigin}/file/v1/entity/:id/uploadDestination`,
    async (req, res, ctx) => {
      const response: UploadDestination = {
        banner: '',
        storageLocationId: 1,
        uploadType: UploadType.S3,
        concreteType: 'org.sagebionetworks.repo.model.file.S3UploadDestination',
      }
      return res(ctx.status(200), ctx.json(response))
    },
  ),

  rest.get(
    `${backendOrigin}/file/v1/entity/:id/uploadDestination/:storageLocationId`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<UploadDestination> = {
        reason: `Mock Service worker could not find an uploadDestination using storageLocationId ${req.params.storageLocationId}`,
      }
      const uploadDestination = mockUploadDestinations.find(
        e => Number(req.params.storageLocationId) === e.storageLocationId,
      )

      if (uploadDestination) {
        response = uploadDestination
        status = 200
      }

      return res(ctx.status(status), ctx.json(response))
    },
  ),

  rest.get(`${backendOrigin}/repo/v1/projects`, async (req, res, ctx) => {
    const response: ProjectHeaderList = {
      results: mockProjectsEntityData.map(p => ({
        name: p.name,
        id: p.id,
        lastActivity: '2024-01-04T21:11:59.000Z',
        modifiedBy: parseInt(p.entity.modifiedBy!),
        modifiedOn: p.entity.modifiedOn!,
      })),
    }
    return res(ctx.status(200), ctx.json(response))
  }),
]
