import { mockUserProfileData } from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  Entity,
  FileEntity,
  FileResult,
  FileUploadComplete,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import EntityForm, { EntityFormProps } from './EntityForm'

const parentContainerId = 'syn20355732'
const formSchemaEntityId = 'syn20184776'
const formUiSchemaEntityId = 'syn20184771'
const userFolderId = 'syn9988882982'
const savedFileId = 'syn111'

const formSchema = {
  title: 'Challenge Form',
  type: 'object',
  required: ['teamName'],
  properties: { teamName: { type: 'string', title: 'Team name' } },
}

const notFound = () => new SynapseClientError(404, 'Not found', '')

function mockSchemaFiles(schema: object = formSchema) {
  vi.spyOn(SynapseClient, 'getEntity').mockImplementation(
    <T extends Entity>(_token: string | undefined, entityId: string) =>
      Promise.resolve({ id: entityId } as T),
  )
  vi.spyOn(SynapseClient, 'getFileResult').mockImplementation(
    (fileEntity: FileEntity) =>
      Promise.resolve({
        fileHandle: { id: fileEntity.id },
        preSignedURL: fileEntity.id,
      } as FileResult),
  )
  vi.spyOn(SynapseClient, 'getFileHandleContent').mockImplementation(
    (_fileHandle, url) =>
      Promise.resolve(JSON.stringify(url === formSchemaEntityId ? schema : {})),
  )
}

function renderForm(
  contextOverrides: Parameters<typeof createWrapper>[0] = {},
) {
  const synIdCallback = vi.fn()
  const ref = createRef<EntityForm>()
  const props: EntityFormProps = {
    parentContainerId,
    formSchemaEntityId,
    formUiSchemaEntityId,
    initFormData: false,
    synIdCallback,
  }
  render(<EntityForm {...props} ref={ref} />, {
    wrapper: createWrapper(contextOverrides),
  })
  return { synIdCallback, ref }
}

describe('EntityForm', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(SynapseClient, 'getUserProfile').mockResolvedValue(
      mockUserProfileData,
    )
    mockSchemaFiles()
  })

  it('loads the schema and saves the response to the user folder', async () => {
    vi.spyOn(SynapseClient, 'lookupChildEntity').mockImplementation(
      request =>
        request.parentId === parentContainerId
          ? Promise.resolve({ id: userFolderId })
          : Promise.reject(notFound()), // no previous response
    )
    vi.spyOn(SynapseClient, 'uploadFile').mockResolvedValue({
      fileHandleId: '123',
    } as FileUploadComplete)
    const createEntity = vi
      .spyOn(SynapseClient, 'createEntity')
      .mockImplementation(entity =>
        Promise.resolve({ ...entity, id: savedFileId }),
      )

    const { synIdCallback, ref } = renderForm()
    expect(screen.getByText(/Loading form/)).toBeInTheDocument()

    const input = await screen.findByLabelText(/Team name/)
    await userEvent.type(input, 'My Team')
    ref.current!.submitForm()

    await vi.waitFor(() =>
      expect(synIdCallback).toHaveBeenCalledWith(savedFileId),
    )
    expect(createEntity).toHaveBeenCalledWith(
      expect.objectContaining({
        parentId: userFolderId,
        name: 'Challenge Form.json',
        dataFileHandleId: '123',
      }),
      expect.anything(),
    )
  })

  it('explains the missing per-user folder instead of loading forever', async () => {
    vi.spyOn(SynapseClient, 'lookupChildEntity').mockRejectedValue(notFound())

    renderForm()

    await screen.findByText(
      new RegExp(
        `folder named "${mockUserProfileData.ownerId}" in ${parentContainerId}`,
      ),
    )
    expect(screen.queryByText(/Loading form/)).not.toBeInTheDocument()
  })

  it('reports a schema without a title', async () => {
    mockSchemaFiles({ ...formSchema, title: undefined })
    vi.spyOn(SynapseClient, 'lookupChildEntity').mockResolvedValue({
      id: userFolderId,
    })

    renderForm()

    await screen.findByText(/must define a "title"/)
  })

  it('asks the user to sign in when the context is not authenticated', () => {
    const getUserProfile = vi.spyOn(SynapseClient, 'getUserProfile')

    renderForm({ isAuthenticated: false, accessToken: 'token' })

    expect(
      screen.getByText('You must be signed in to fill out this form.'),
    ).toBeInTheDocument()
    expect(screen.queryByText(/Saving|Loading form/)).not.toBeInTheDocument()
    expect(getUserProfile).not.toHaveBeenCalled()
  })

  it('ignores submit requests before the form has loaded', () => {
    vi.spyOn(SynapseClient, 'lookupChildEntity').mockReturnValue(
      new Promise(() => {}),
    )
    const { ref } = renderForm()

    expect(() => ref.current!.submitForm()).not.toThrow()
  })
})
