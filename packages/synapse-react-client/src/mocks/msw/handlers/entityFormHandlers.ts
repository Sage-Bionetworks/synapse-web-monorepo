import { mockUserProfileData } from '@/mocks/user/mock_user_profile'
import {
  ENTITY,
  ENTITY_ID,
  FILE_HANDLE_BATCH,
  USER_PROFILE,
} from '@/utils/APIConstants'
import {
  BatchFileRequest,
  BatchFileResult,
  EntityLookupRequest,
  FileEntity,
} from '@sage-bionetworks/synapse-types'
import { delay, http, HttpResponse } from 'msw'

export const MOCK_FORM_PARENT_CONTAINER_ID = 'syn10000'
export const MOCK_FORM_USER_FOLDER_ID = 'syn10001'
export const MOCK_FORM_SCHEMA_ID = 'syn10002'
export const MOCK_FORM_UI_SCHEMA_ID = 'syn10003'
export const MOCK_FORM_SAVED_FILE_ID = 'syn10004'
const MOCK_PRESIGNED_URL_ORIGIN = 'https://mock-presigned-url.test'

export const mockFormSchema = {
  title: 'Challenge Registration',
  type: 'object',
  required: ['teamName'],
  properties: {
    teamName: { type: 'string', title: 'Team name' },
    contactEmail: { type: 'string', format: 'email', title: 'Contact email' },
    method: { type: 'string', title: 'Describe your method' },
  },
} as const
export const mockFormUiSchema = { method: { 'ui:widget': 'textarea' } }

const notFound = () =>
  HttpResponse.json({ reason: 'Not found' }, { status: 404 })

type EntityFormHandlerOptions = {
  /** Folders/files that exist, keyed by `${parentId}/${name}` */
  children?: Record<string, string>
  /** JSON content of each file entity, keyed by entity ID */
  fileContent?: Record<string, unknown>
  /** If true, never respond to the user profile request */
  neverLoad?: boolean
}

/**
 * MSW handlers for EntityForm: the current user, the schema FileEntities and their content, the per-user folder
 * lookup, and FileEntity creation.
 */
export function getEntityFormHandlers(
  backendOrigin: string,
  options: EntityFormHandlerOptions = {},
) {
  const {
    children = {
      [`${MOCK_FORM_PARENT_CONTAINER_ID}/${mockUserProfileData.ownerId}`]:
        MOCK_FORM_USER_FOLDER_ID,
    },
    fileContent = {
      [MOCK_FORM_SCHEMA_ID]: mockFormSchema,
      [MOCK_FORM_UI_SCHEMA_ID]: mockFormUiSchema,
    },
    neverLoad = false,
  } = options
  return [
    http.get(`${backendOrigin}${USER_PROFILE}`, async () => {
      if (neverLoad) {
        await delay('infinite')
      }
      return HttpResponse.json(mockUserProfileData)
    }),
    http.post<never, EntityLookupRequest>(
      `${backendOrigin}${ENTITY}/child`,
      async ({ request }) => {
        const { parentId, entityName } = await request.json()
        const id = children[`${parentId}/${entityName}`]
        return id ? HttpResponse.json({ id }) : notFound()
      },
    ),
    http.get(`${backendOrigin}${ENTITY_ID(':id')}`, ({ params }) => {
      const id = params.id as string
      if (!(id in fileContent)) {
        return notFound()
      }
      return HttpResponse.json({
        id,
        name: `${id}.json`,
        etag: 'etag',
        parentId: MOCK_FORM_PARENT_CONTAINER_ID,
        dataFileHandleId: `fh-${id}`,
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
      } satisfies FileEntity)
    }),
    http.post<never, BatchFileRequest>(
      `${backendOrigin}${FILE_HANDLE_BATCH}`,
      async ({ request }) => {
        const { requestedFiles } = await request.json()
        return HttpResponse.json({
          requestedFiles: requestedFiles.map(fha => ({
            fileHandleId: fha.fileHandleId,
            fileHandle: {
              id: fha.fileHandleId,
              etag: 'etag',
              createdBy: String(mockUserProfileData.ownerId),
              createdOn: '2026-01-01T00:00:00.000Z',
              modifiedOn: '2026-01-01T00:00:00.000Z',
              concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
              contentType: 'application/json',
              contentMd5: '',
              fileName: `${fha.associateObjectId}.json`,
              storageLocationId: 1,
              contentSize: 100,
              status: 'AVAILABLE',
              isPreview: false,
            },
            preSignedURL: `${MOCK_PRESIGNED_URL_ORIGIN}/${fha.associateObjectId}`,
          })),
        } satisfies BatchFileResult)
      },
    ),
    http.get(`${MOCK_PRESIGNED_URL_ORIGIN}/:id`, ({ params }) =>
      HttpResponse.text(JSON.stringify(fileContent[params.id as string])),
    ),
    http.post<never, FileEntity>(
      `${backendOrigin}${ENTITY}`,
      async ({ request }) =>
        HttpResponse.json(
          { ...(await request.json()), id: MOCK_FORM_SAVED_FILE_ID },
          { status: 201 },
        ),
    ),
  ]
}
