import { mockUserProfileData } from '@/mocks/user/mock_user_profile'
import {
  ENTITY_ID,
  FILE_HANDLE_BATCH,
  USER_PROFILE,
} from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import {
  BatchFileRequest,
  EntityLookupRequest,
  FileEntity,
} from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { delay, http, HttpResponse } from 'msw'
import EntityForm from './EntityForm'

const PARENT_CONTAINER_ID = 'syn10000'
const USER_FOLDER_ID = 'syn10001'
const SCHEMA_ID = 'syn10002'
const UI_SCHEMA_ID = 'syn10003'
const MOCK_FILE_ORIGIN = 'https://mock-presigned-url.test'

const formSchema = {
  title: 'Challenge Registration',
  type: 'object',
  required: ['teamName', 'contactEmail'],
  properties: {
    teamName: { type: 'string', title: 'Team name' },
    contactEmail: { type: 'string', format: 'email', title: 'Contact email' },
    method: { type: 'string', title: 'Describe your method' },
  },
}
const uiSchema = { method: { 'ui:widget': 'textarea' } }

const schemaFileHandlers = [
  http.get(`${MOCK_REPO_ORIGIN}${USER_PROFILE}`, () =>
    HttpResponse.json(mockUserProfileData),
  ),
  http.get(`${MOCK_REPO_ORIGIN}${ENTITY_ID(':id')}`, ({ params }) =>
    HttpResponse.json({
      id: params.id as string,
      name: `${params.id as string}.json`,
      parentId: PARENT_CONTAINER_ID,
      dataFileHandleId: `fh-${params.id as string}`,
      concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    } satisfies FileEntity),
  ),
  http.post<never, BatchFileRequest>(
    `${MOCK_REPO_ORIGIN}${FILE_HANDLE_BATCH}`,
    async ({ request }) => {
      const { requestedFiles } = await request.json()
      return HttpResponse.json({
        requestedFiles: requestedFiles.map(fha => ({
          fileHandleId: fha.fileHandleId,
          fileHandle: {
            id: fha.fileHandleId,
            contentSize: 100,
            contentType: 'application/json',
          },
          preSignedURL: `${MOCK_FILE_ORIGIN}/${fha.associateObjectId}`,
        })),
      })
    },
  ),
  http.get(`${MOCK_FILE_ORIGIN}/${SCHEMA_ID}`, () =>
    HttpResponse.json(formSchema),
  ),
  http.get(`${MOCK_FILE_ORIGIN}/${UI_SCHEMA_ID}`, () =>
    HttpResponse.json(uiSchema),
  ),
]

const meta: Meta = {
  title: 'Synapse/EntityForm',
  component: EntityForm,
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
    },
  },
  args: {
    parentContainerId: PARENT_CONTAINER_ID,
    formSchemaEntityId: SCHEMA_ID,
    formUiSchemaEntityId: UI_SCHEMA_ID,
    initFormData: false,
    synIdCallback: (synId: string) => console.log('Saved form data to', synId),
    isAuthenticated: true,
  },
  parameters: { stack: 'mock' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {
  parameters: {
    msw: {
      handlers: [
        ...schemaFileHandlers,
        http.post<never, EntityLookupRequest>(
          `${MOCK_REPO_ORIGIN}/repo/v1/entity/child`,
          async ({ request }) => {
            const { parentId } = await request.json()
            return parentId === PARENT_CONTAINER_ID
              ? HttpResponse.json({ id: USER_FOLDER_ID })
              : HttpResponse.json({ reason: 'Not found' }, { status: 404 })
          },
        ),
      ],
    },
  },
}

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${MOCK_REPO_ORIGIN}${USER_PROFILE}`, () => delay('infinite')),
      ],
    },
  },
}

export const MissingUserFolder: Story = {
  parameters: {
    msw: {
      handlers: [
        ...schemaFileHandlers,
        http.post(`${MOCK_REPO_ORIGIN}/repo/v1/entity/child`, () =>
          HttpResponse.json({ reason: 'Not found' }, { status: 404 }),
        ),
      ],
    },
  },
}

export const SignedOut: Story = {
  args: { isAuthenticated: false },
}
