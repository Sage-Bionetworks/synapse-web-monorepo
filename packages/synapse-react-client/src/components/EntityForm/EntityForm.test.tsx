import {
  getEntityFormHandlers,
  MOCK_FORM_PARENT_CONTAINER_ID,
  MOCK_FORM_SAVED_FILE_ID,
  MOCK_FORM_SCHEMA_ID,
  MOCK_FORM_UI_SCHEMA_ID,
  MOCK_FORM_USER_FOLDER_ID,
  mockFormSchema,
  mockFormUiSchema,
} from '@/mocks/msw/handlers/entityFormHandlers'
import { server } from '@/mocks/msw/server'
import { mockUserProfileData } from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { FileEntity, FileUploadComplete } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createRef } from 'react'
import EntityForm, { EntityFormHandle } from './EntityForm'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const EXISTING_FILE_ID = 'syn10005'
const userFolderPath = `${MOCK_FORM_PARENT_CONTAINER_ID}/${mockUserProfileData.ownerId}`

function renderForm(
  options: {
    initFormData?: boolean
    context?: Parameters<typeof createWrapper>[0]
  } = {},
) {
  const synIdCallback = vi.fn()
  const ref = createRef<EntityFormHandle>()
  render(
    <EntityForm
      ref={ref}
      parentContainerId={MOCK_FORM_PARENT_CONTAINER_ID}
      formSchemaEntityId={MOCK_FORM_SCHEMA_ID}
      formUiSchemaEntityId={MOCK_FORM_UI_SCHEMA_ID}
      initFormData={options.initFormData ?? false}
      synIdCallback={synIdCallback}
    />,
    { wrapper: createWrapper(options.context) },
  )
  return { synIdCallback, ref }
}

describe('EntityForm', () => {
  beforeEach(() => {
    vi.spyOn(SynapseClient, 'uploadFile').mockResolvedValue({
      fileHandleId: 'new-file-handle',
    } as FileUploadComplete)
  })

  it('creates a file in the user folder with the answers', async () => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN))
    let createdEntity: FileEntity | undefined
    server.use(
      http.post<never, FileEntity>(
        `${REPO_ORIGIN}/repo/v1/entity`,
        async ({ request }) => {
          createdEntity = await request.json()
          return HttpResponse.json(
            { ...createdEntity, id: MOCK_FORM_SAVED_FILE_ID },
            { status: 201 },
          )
        },
      ),
    )
    const { synIdCallback, ref } = renderForm()
    expect(screen.getByText(/Loading form/)).toBeInTheDocument()

    await userEvent.type(await screen.findByLabelText(/Team name/), 'My Team')
    ref.current!.submitForm()

    await vi.waitFor(() =>
      expect(synIdCallback).toHaveBeenCalledWith(MOCK_FORM_SAVED_FILE_ID),
    )
    expect(createdEntity).toMatchObject({
      parentId: MOCK_FORM_USER_FOLDER_ID,
      name: `${mockFormSchema.title}.json`,
      dataFileHandleId: 'new-file-handle',
    })
    expect(SynapseClient.uploadFile).toHaveBeenCalledWith(
      expect.anything(),
      `${mockFormSchema.title}.json`,
      expect.any(Blob),
      expect.anything(),
      'application/json',
      undefined,
      undefined,
      undefined,
      undefined,
    )
    const blob = vi.mocked(SynapseClient.uploadFile).mock.calls[0][2]
    const blobText = await new Promise<string>(resolve => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      // oxlint-disable-next-line unicorn/prefer-blob-reading-methods -- jsdom's Blob does not implement text()
      reader.readAsText(blob)
    })
    expect(JSON.parse(blobText)).toEqual({ teamName: 'My Team' })
  })

  it('pre-fills and updates the previously saved file', async () => {
    server.use(
      ...getEntityFormHandlers(REPO_ORIGIN, {
        children: {
          [userFolderPath]: MOCK_FORM_USER_FOLDER_ID,
          [`${MOCK_FORM_USER_FOLDER_ID}/${mockFormSchema.title}.json`]:
            EXISTING_FILE_ID,
        },
        fileContent: {
          [MOCK_FORM_SCHEMA_ID]: mockFormSchema,
          [MOCK_FORM_UI_SCHEMA_ID]: mockFormUiSchema,
          [EXISTING_FILE_ID]: { teamName: 'Old Team' },
        },
      }),
    )
    let updatedEntity: FileEntity | undefined
    server.use(
      http.put<never, FileEntity>(
        `${REPO_ORIGIN}/repo/v1/entity/${EXISTING_FILE_ID}`,
        async ({ request }) => {
          updatedEntity = await request.json()
          return HttpResponse.json(updatedEntity)
        },
      ),
    )
    const { synIdCallback, ref } = renderForm({ initFormData: true })

    expect(await screen.findByDisplayValue('Old Team')).toBeInTheDocument()
    ref.current!.submitForm()

    await vi.waitFor(() =>
      expect(synIdCallback).toHaveBeenCalledWith(EXISTING_FILE_ID),
    )
    expect(updatedEntity).toMatchObject({
      id: EXISTING_FILE_ID,
      dataFileHandleId: 'new-file-handle',
    })
  })

  it('explains the missing per-user folder instead of loading forever', async () => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN, { children: {} }))
    renderForm()

    await screen.findByText(
      `Your submission folder has not been set up yet. The challenge organizers must create a folder named "${mockUserProfileData.ownerId}" in ${MOCK_FORM_PARENT_CONTAINER_ID} that you can edit.`,
    )
    expect(screen.queryByText(/Loading form/)).not.toBeInTheDocument()
  })

  it('reports a schema without a title', async () => {
    server.use(
      ...getEntityFormHandlers(REPO_ORIGIN, {
        fileContent: {
          [MOCK_FORM_SCHEMA_ID]: { ...mockFormSchema, title: undefined },
          [MOCK_FORM_UI_SCHEMA_ID]: mockFormUiSchema,
        },
      }),
    )
    renderForm()

    expect(await screen.findByText(/must define a "title"/)).toBeInTheDocument()
  })

  it('reports a schema file that is not JSON', async () => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN))
    server.use(
      http.get(
        `https://mock-presigned-url.test/${MOCK_FORM_UI_SCHEMA_ID}`,
        () => HttpResponse.text('not json'),
      ),
    )
    renderForm()

    expect(
      await screen.findByText(
        new RegExp(`${MOCK_FORM_UI_SCHEMA_ID} does not contain valid JSON`),
      ),
    ).toBeInTheDocument()
  })

  it('asks the user to sign in when the context is not authenticated', () => {
    renderForm({ context: { isAuthenticated: false, accessToken: 'token' } })

    expect(
      screen.getByText('You must be signed in to fill out this form.'),
    ).toBeInTheDocument()
    expect(screen.queryByText(/Saving|Loading form/)).not.toBeInTheDocument()
  })

  it('ignores submit requests before the form has loaded', () => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN, { neverLoad: true }))
    const { ref } = renderForm()

    expect(() => ref.current!.submitForm()).not.toThrow()
    expect(SynapseClient.uploadFile).not.toHaveBeenCalled()
  })
})
