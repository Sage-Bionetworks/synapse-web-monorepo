import {
  getEntityFormHandlers,
  MOCK_FORM_PARENT_CONTAINER_ID,
  MOCK_FORM_SAVED_FILE_ID,
  MOCK_FORM_SCHEMA_ID,
  MOCK_FORM_UI_SCHEMA_ID,
  MOCK_FORM_NEW_FILE_HANDLE_ID,
  MOCK_FORM_USER_FOLDER_ID,
  MOCK_PRESIGNED_URL_ORIGIN,
  mockFormSchema,
  mockFormUiSchema,
} from '@/mocks/msw/handlers/entityFormHandlers'
import { server } from '@/mocks/msw/server'
import { mockUserProfileData } from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ENTITY, ENTITY_ID, FILE_HANDLE_BATCH } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  FileEntity,
  FileUploadComplete,
  FOLDER_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createRef } from 'react'
import EntityForm, { EntityFormHandle } from './EntityForm'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const EXISTING_FILE_ID = 'syn10005'
const userFolderPath = `${MOCK_FORM_PARENT_CONTAINER_ID}/${mockUserProfileData.ownerId}`

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
      `${REPO_ORIGIN}${ENTITY}`,
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
      `${REPO_ORIGIN}${ENTITY_ID(':id')}`,
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
      fileHandleId: MOCK_FORM_NEW_FILE_HANDLE_ID,
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
          dataFileHandleId: MOCK_FORM_NEW_FILE_HANDLE_ID,
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
          dataFileHandleId: MOCK_FORM_NEW_FILE_HANDLE_ID,
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

  it('does not save when Enter is pressed; only the host submits', async () => {
    // With a single text field, browsers submit the form on Enter even without a submit button
    server.use(
      ...getEntityFormHandlers(REPO_ORIGIN, {
        fileContent: {
          [MOCK_FORM_SCHEMA_ID]: {
            title: mockFormSchema.title,
            type: 'object',
            properties: { teamName: mockFormSchema.properties.teamName },
          },
          [MOCK_FORM_UI_SCHEMA_ID]: {},
        },
      }),
    )
    const { synIdCallback } = renderForm()

    await userEvent.type(
      await screen.findByLabelText(/Team name/),
      'My Team{Enter}',
    )

    expect(SynapseClient.uploadFile).not.toHaveBeenCalled()
    expect(synIdCallback).not.toHaveBeenCalled()
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

  it.each([false, true])(
    'refuses to overwrite a non-file entity that has the answers file name (initFormData: %s)',
    async initFormData => {
      server.use(...getHandlersWithExistingFile())
      server.use(
        http.get(`${REPO_ORIGIN}${ENTITY_ID(EXISTING_FILE_ID)}`, () =>
          HttpResponse.json({
            id: EXISTING_FILE_ID,
            name: `${mockFormSchema.title}.json`,
            concreteType: FOLDER_CONCRETE_TYPE_VALUE,
          }),
        ),
      )
      renderForm({ initFormData })

      expect(
        await screen.findByText(/in your submission folder .* is not a file/),
      ).toBeInTheDocument()
      expect(screen.queryByLabelText(/Team name/)).not.toBeInTheDocument()
    },
  )

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
      http.get(`${MOCK_PRESIGNED_URL_ORIGIN}/${MOCK_FORM_UI_SCHEMA_ID}`, () =>
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
      http.get(`${MOCK_PRESIGNED_URL_ORIGIN}/${MOCK_FORM_UI_SCHEMA_ID}`, () =>
        HttpResponse.error(),
      ),
    )
    renderForm()

    expect(await screen.findByRole('alert')).toBeInTheDocument()
    expect(screen.queryByText(/Loading form/)).not.toBeInTheDocument()
  })

  it('explains a schema file the user is not allowed to download', async () => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN))
    server.use(
      http.post(`${REPO_ORIGIN}${FILE_HANDLE_BATCH}`, () =>
        HttpResponse.json({
          requestedFiles: [
            {
              fileHandleId: `fh-${MOCK_FORM_SCHEMA_ID}`,
              failureCode: 'UNAUTHORIZED',
            },
          ],
        }),
      ),
    )
    renderForm()

    expect(
      await screen.findByText(
        `Could not download ${MOCK_FORM_SCHEMA_ID}: UNAUTHORIZED`,
      ),
    ).toBeInTheDocument()
  })

  it.each([
    ['invalid JSON', () => HttpResponse.text('not json')],
    ['a failed download', () => HttpResponse.error()],
  ])(
    'shows an empty form when previously saved answers are %s, and replaces them on save',
    async (_, previousAnswersResponse) => {
      server.use(...getHandlersWithExistingFile())
      server.use(
        http.get(
          `${MOCK_PRESIGNED_URL_ORIGIN}/${EXISTING_FILE_ID}`,
          previousAnswersResponse,
        ),
      )
      const writes = recordEntityWrites()
      const { synIdCallback, ref } = renderForm({ initFormData: true })

      expect(
        await screen.findByText(/previously saved answers could not be loaded/),
      ).toBeInTheDocument()
      const input = screen.getByLabelText(/Team name/)
      expect(input).toHaveValue('')
      await userEvent.type(input, 'New Team')
      ref.current!.submitForm()

      await vi.waitFor(() =>
        expect(synIdCallback).toHaveBeenCalledWith(EXISTING_FILE_ID),
      )
      expect(writes).toEqual([
        {
          method: 'PUT',
          body: expect.objectContaining({
            id: EXISTING_FILE_ID,
            dataFileHandleId: MOCK_FORM_NEW_FILE_HANDLE_ID,
          }),
        },
      ])
    },
  )

  it('shows a sign-in prompt, not a spinner, when a token is present but isAuthenticated is false', () => {
    // SWC's legacy JSNI context passed an access token without isAuthenticated (SWC-8118)
    renderForm({ context: { isAuthenticated: false, accessToken: 'token' } })

    expect(
      screen.getByText('You must be signed in to fill out this form.'),
    ).toBeInTheDocument()
    expect(screen.queryByText(/Saving|Loading form/)).not.toBeInTheDocument()
  })

  it('exposes no handle until the form can be submitted', async () => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN))
    const { ref } = renderForm()
    expect(screen.getByText(/Loading form/)).toBeInTheDocument()
    expect(ref.current).toBeNull()

    await screen.findByLabelText(/Team name/)
    expect(ref.current).not.toBeNull()
  })

  it('exposes no handle when the form cannot load', async () => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN, { children: {} }))
    const { ref } = renderForm()

    await screen.findByText(/submission folder has not been set up/)
    expect(ref.current).toBeNull()
  })

  it('disables the form while saving and ignores another submit', async () => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN))
    recordEntityWrites()
    let finishUpload!: (value: FileUploadComplete) => void
    vi.mocked(SynapseClient.uploadFile).mockReturnValueOnce(
      new Promise(resolve => {
        finishUpload = resolve
      }),
    )
    const { synIdCallback, ref } = renderForm()

    await userEvent.type(await screen.findByLabelText(/Team name/), 'My Team')
    ref.current!.submitForm()

    expect(await screen.findByText(/Saving/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Team name/)).toBeDisabled()
    ref.current!.submitForm()
    finishUpload({
      fileHandleId: MOCK_FORM_NEW_FILE_HANDLE_ID,
    } as FileUploadComplete)

    await vi.waitFor(() =>
      expect(synIdCallback).toHaveBeenCalledWith(MOCK_FORM_SAVED_FILE_ID),
    )
    expect(SynapseClient.uploadFile).toHaveBeenCalledTimes(1)
  })

  it('updates the file it created when saved a second time', async () => {
    server.use(...getEntityFormHandlers(REPO_ORIGIN))
    const writes = recordEntityWrites()
    const { synIdCallback, ref } = renderForm()

    await userEvent.type(await screen.findByLabelText(/Team name/), 'My Team')
    ref.current!.submitForm()
    await vi.waitFor(() => expect(synIdCallback).toHaveBeenCalledTimes(1))
    await vi.waitFor(() => expect(ref.current).not.toBeNull())
    ref.current!.submitForm()

    await vi.waitFor(() => expect(synIdCallback).toHaveBeenCalledTimes(2))
    expect(writes.map(w => w.method)).toEqual(['POST', 'PUT'])
    expect(synIdCallback).toHaveBeenLastCalledWith(MOCK_FORM_SAVED_FILE_ID)
  })
})
