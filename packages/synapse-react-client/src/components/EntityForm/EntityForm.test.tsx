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
const PRESIGNED_URL_ORIGIN = 'https://mock-presigned-url.test'

/** Handlers where the user folder already holds answers saved by a previous submission */
function getHandlersWithExistingFile() {
  return getEntityFormHandlers(REPO_ORIGIN, {
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
  })
}

/** Records the body of every PUT/POST to the entity service */
function recordEntityWrites() {
  const writes: { method: string; body: FileEntity }[] = []
  server.use(
    http.post<never, FileEntity>(
      `${REPO_ORIGIN}/repo/v1/entity`,
      async ({ request }) => {
        const body = await request.json()
        writes.push({ method: 'POST', body })
        return HttpResponse.json(
          { ...body, id: MOCK_FORM_SAVED_FILE_ID },
          { status: 201 },
        )
      },
    ),
    http.put<never, FileEntity>(
      `${REPO_ORIGIN}/repo/v1/entity/:id`,
      async ({ request }) => {
        const body = await request.json()
        writes.push({ method: 'PUT', body })
        return HttpResponse.json(body)
      },
    ),
  )
  return writes
}

function readBlob(blob: Blob) {
  return new Promise<string>(resolve => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    // oxlint-disable-next-line unicorn/prefer-blob-reading-methods -- jsdom's Blob does not implement text()
    reader.readAsText(blob)
  })
}

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
    const writes = recordEntityWrites()
    const { synIdCallback, ref } = renderForm()
    expect(screen.getByText(/Loading form/)).toBeInTheDocument()

    await userEvent.type(await screen.findByLabelText(/Team name/), 'My Team')
    ref.current!.submitForm()

    await vi.waitFor(() =>
      expect(synIdCallback).toHaveBeenCalledWith(MOCK_FORM_SAVED_FILE_ID),
    )
    expect(writes).toEqual([
      {
        method: 'POST',
        body: expect.objectContaining({
          parentId: MOCK_FORM_USER_FOLDER_ID,
          name: `${mockFormSchema.title}.json`,
          dataFileHandleId: 'new-file-handle',
        }),
      },
    ])
    const blob = vi.mocked(SynapseClient.uploadFile).mock.calls[0][2]
    expect(JSON.parse(await readBlob(blob))).toEqual({ teamName: 'My Team' })
  })

  it('pre-fills and updates the previously saved file', async () => {
    server.use(...getHandlersWithExistingFile())
    const writes = recordEntityWrites()
    const { synIdCallback, ref } = renderForm({ initFormData: true })

    expect(await screen.findByDisplayValue('Old Team')).toBeInTheDocument()
    ref.current!.submitForm()

    await vi.waitFor(() =>
      expect(synIdCallback).toHaveBeenCalledWith(EXISTING_FILE_ID),
    )
    expect(writes).toEqual([
      {
        method: 'PUT',
        body: expect.objectContaining({
          id: EXISTING_FILE_ID,
          dataFileHandleId: 'new-file-handle',
        }),
      },
    ])
  })

  it('updates rather than duplicates a previously saved file when not pre-filling', async () => {
    server.use(...getHandlersWithExistingFile())
    const writes = recordEntityWrites()
    const { synIdCallback, ref } = renderForm({ initFormData: false })

    const input = await screen.findByLabelText(/Team name/)
    expect(input).toHaveValue('')
    await userEvent.type(input, 'New Team')
    ref.current!.submitForm()

    await vi.waitFor(() =>
      expect(synIdCallback).toHaveBeenCalledWith(EXISTING_FILE_ID),
    )
    expect(writes.map(w => w.method)).toEqual(['PUT'])
  })

  it('keeps the answers and allows a retry when saving fails', async () => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN))
    recordEntityWrites()
    vi.mocked(SynapseClient.uploadFile).mockRejectedValueOnce(
      new Error('Upload failed'),
    )
    const { synIdCallback, ref } = renderForm()

    await userEvent.type(await screen.findByLabelText(/Team name/), 'My Team')
    ref.current!.submitForm()

    expect(await screen.findByText('Upload failed')).toBeInTheDocument()
    expect(screen.queryByText(/Saving/)).not.toBeInTheDocument()
    expect(screen.getByLabelText(/Team name/)).toHaveValue('My Team')
    expect(synIdCallback).not.toHaveBeenCalled()

    ref.current!.submitForm()
    await vi.waitFor(() =>
      expect(synIdCallback).toHaveBeenCalledWith(MOCK_FORM_SAVED_FILE_ID),
    )
  })

  it('refuses to overwrite a non-file entity that has the answers file name', async () => {
    server.use(...getHandlersWithExistingFile())
    server.use(
      http.get(`${REPO_ORIGIN}/repo/v1/entity/${EXISTING_FILE_ID}`, () =>
        HttpResponse.json({
          id: EXISTING_FILE_ID,
          name: `${mockFormSchema.title}.json`,
          concreteType: 'org.sagebionetworks.repo.model.Folder',
        }),
      ),
    )
    renderForm()

    expect(
      await screen.findByText(/in your submission folder .* is not a file/),
    ).toBeInTheDocument()
    expect(screen.queryByLabelText(/Team name/)).not.toBeInTheDocument()
  })

  it('explains the missing per-user folder instead of loading forever', async () => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN, { children: {} }))
    renderForm()

    expect(
      await screen.findByText(
        `Your submission folder has not been set up yet. The challenge organizers must create a folder named "${mockUserProfileData.ownerId}" in ${MOCK_FORM_PARENT_CONTAINER_ID} that you can edit.`,
      ),
    ).toBeInTheDocument()
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

  it.each([
    ['not JSON', 'not json', 'does not contain valid JSON'],
    ['JSON null', 'null', 'does not contain a JSON object'],
  ])('reports a schema file that is %s', async (_, content, message) => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN))
    server.use(
      http.get(`${PRESIGNED_URL_ORIGIN}/${MOCK_FORM_UI_SCHEMA_ID}`, () =>
        HttpResponse.text(content),
      ),
    )
    renderForm()

    expect(
      await screen.findByText(`${MOCK_FORM_UI_SCHEMA_ID} ${message}`, {
        exact: false,
      }),
    ).toBeInTheDocument()
  })

  it('reports a schema file whose download fails', async () => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN))
    server.use(
      http.get(`${PRESIGNED_URL_ORIGIN}/${MOCK_FORM_UI_SCHEMA_ID}`, () =>
        HttpResponse.error(),
      ),
    )
    renderForm()

    expect(await screen.findByRole('alert')).toBeInTheDocument()
    expect(screen.queryByText(/Loading form/)).not.toBeInTheDocument()
  })

  it('shows a sign-in prompt, not a spinner, when a token is present but isAuthenticated is false', () => {
    // SWC's legacy JSNI context passed an access token without isAuthenticated (SWC-8118)
    renderForm({ context: { isAuthenticated: false, accessToken: 'token' } })

    expect(
      screen.getByText('You must be signed in to fill out this form.'),
    ).toBeInTheDocument()
    expect(screen.queryByText(/Saving|Loading form/)).not.toBeInTheDocument()
  })

  it('ignores submit requests made before the form has loaded', async () => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN))
    const { synIdCallback, ref } = renderForm()
    expect(screen.getByText(/Loading form/)).toBeInTheDocument()

    ref.current!.submitForm()
    await screen.findByLabelText(/Team name/)

    expect(SynapseClient.uploadFile).not.toHaveBeenCalled()
    expect(screen.queryByText(/Saving/)).not.toBeInTheDocument()
    expect(synIdCallback).not.toHaveBeenCalled()
  })
})
