import { mockGenomicsTemplate } from '@/mocks/accessRequirement/mockFormTemplates'
import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { server } from '@/mocks/msw/server'
import { createTestIsEditingStore } from '@/testutils/IsEditingStoreTestUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createMemoryRouter, RouterProvider } from 'react-router'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  DISCARD_CHANGES_CONFIRM_TEXT,
  DISCARD_CHANGES_TITLE,
  KEEP_EDITING_TEXT,
} from '../FormTemplateEditor/useUnsavedChangesPrompt'
import { FormTemplateEditorRoute } from './FormTemplateEditorRoute'
import {
  FORM_TEMPLATE_ROUTE,
  FORM_TEMPLATES_PATH,
  getFormTemplatePath,
  NEW_FORM_TEMPLATE_PATH,
} from './FormTemplateTable'
import { getFormTemplateHandlers } from '@/mocks/msw/handlers/formTemplateHandlers'
import { getRegisteredSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { mockGenomicsSchema } from '@/mocks/accessRequirement/mockJsonSchemas'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const FORM_TEMPLATE_URL = `${REPO_ORIGIN}/repo/v1/accessRequirement/formTemplate/:id`

function serveGenomicsTemplate() {
  server.use(
    ...getFormTemplateHandlers(REPO_ORIGIN),
    ...getRegisteredSchemaHandlers(REPO_ORIGIN, [mockGenomicsSchema]),
  )
}

function renderAt(...initialEntries: string[]) {
  // `useBlocker` only works under a data router, which is how the Reviewer Dashboard mounts this route.
  const router = createMemoryRouter(
    [
      { path: FORM_TEMPLATES_PATH, element: <div>Template list</div> },
      { path: NEW_FORM_TEMPLATE_PATH, element: <FormTemplateEditorRoute /> },
      { path: `/${FORM_TEMPLATE_ROUTE}`, element: <FormTemplateEditorRoute /> },
    ],
    { initialEntries, initialIndex: initialEntries.length - 1 },
  )
  // The host app (SWC) asks before leaving the page (header links, other pages, closing the tab)
  // while this store reports editing.
  const isEditingStore = createTestIsEditingStore()
  const { unmount } = render(<RouterProvider router={router} />, {
    wrapper: createWrapper(undefined, isEditingStore),
  })
  return { router, isEditingStore, unmount }
}

async function editName(user: UserEvent) {
  await user.type(
    await screen.findByRole('textbox', { name: 'Internal Name' }),
    'Unsaved name',
  )
}

function getDiscardPrompt() {
  return screen.getByRole('dialog', { name: DISCARD_CHANGES_TITLE })
}

function queryDiscardPrompt() {
  return screen.queryByRole('dialog', { name: DISCARD_CHANGES_TITLE })
}

function dispatchBeforeUnload() {
  const event = new Event('beforeunload', { cancelable: true })
  window.dispatchEvent(event)
  return event
}

describe('FormTemplateEditorRoute', () => {
  it('opens an empty editor for /new', async () => {
    renderAt(NEW_FORM_TEMPLATE_PATH)
    await screen.findByText('Create Form Template')
  })

  it('loads the template for /:templateId', async () => {
    serveGenomicsTemplate()
    renderAt(getFormTemplatePath(mockGenomicsTemplate.id!))
    await screen.findByText('Edit Form Template')
  })

  it('returns to the list on cancel without asking when nothing changed', async () => {
    const user = userEvent.setup()
    renderAt(NEW_FORM_TEMPLATE_PATH)
    await user.click(await screen.findByRole('button', { name: 'Cancel' }))
    await screen.findByText('Template list')
    expect(queryDiscardPrompt()).not.toBeInTheDocument()
  })

  it('returns to the list on cancel without asking when an opened template was not edited', async () => {
    const user = userEvent.setup()
    serveGenomicsTemplate()
    renderAt(getFormTemplatePath(mockGenomicsTemplate.id!))
    await screen.findByText('Edit Form Template')

    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    await screen.findByText('Template list')
    expect(queryDiscardPrompt()).not.toBeInTheDocument()
  })

  it('asks before cancelling with unsaved changes, and stays when the user keeps editing', async () => {
    const user = userEvent.setup()
    renderAt(NEW_FORM_TEMPLATE_PATH)
    await editName(user)

    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    await user.click(
      within(getDiscardPrompt()).getByRole('button', {
        name: KEEP_EDITING_TEXT,
      }),
    )

    await waitFor(() => expect(queryDiscardPrompt()).not.toBeInTheDocument())
    expect(screen.getByRole('textbox', { name: 'Internal Name' })).toHaveValue(
      'Unsaved name',
    )
    expect(screen.queryByText('Template list')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    await user.click(
      within(getDiscardPrompt()).getByRole('button', {
        name: DISCARD_CHANGES_CONFIRM_TEXT,
      }),
    )
    await screen.findByText('Template list')
  })

  it('asks before following an in-app link with unsaved changes', async () => {
    const user = userEvent.setup()
    const { isEditingStore } = renderAt(NEW_FORM_TEMPLATE_PATH)
    await editName(user)

    await user.click(screen.getByRole('link', { name: 'Form Templates' }))
    await user.click(
      within(getDiscardPrompt()).getByRole('button', {
        name: KEEP_EDITING_TEXT,
      }),
    )
    await waitFor(() => expect(queryDiscardPrompt()).not.toBeInTheDocument())
    expect(screen.getByText('Create Form Template')).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: 'Form Templates' }))
    await user.click(
      within(getDiscardPrompt()).getByRole('button', {
        name: DISCARD_CHANGES_CONFIRM_TEXT,
      }),
    )
    await screen.findByText('Template list')
    expect(isEditingStore.getSnapshot()).toBe(false)
  })

  it('asks before going back with unsaved changes', async () => {
    const user = userEvent.setup()
    const { router } = renderAt(FORM_TEMPLATES_PATH, NEW_FORM_TEMPLATE_PATH)
    await editName(user)

    await act(() => router.navigate(-1))
    await user.click(
      within(getDiscardPrompt()).getByRole('button', {
        name: KEEP_EDITING_TEXT,
      }),
    )
    await waitFor(() => expect(queryDiscardPrompt()).not.toBeInTheDocument())
    expect(screen.getByRole('textbox', { name: 'Internal Name' })).toHaveValue(
      'Unsaved name',
    )

    await act(() => router.navigate(-1))
    await user.click(
      within(getDiscardPrompt()).getByRole('button', {
        name: DISCARD_CHANGES_CONFIRM_TEXT,
      }),
    )
    await screen.findByText('Template list')
  })

  it('follows in-app links without asking when nothing changed', async () => {
    const user = userEvent.setup()
    renderAt(NEW_FORM_TEMPLATE_PATH)
    await screen.findByText('Create Form Template')

    await user.click(screen.getByRole('link', { name: 'Form Templates' }))

    await screen.findByText('Template list')
    expect(queryDiscardPrompt()).not.toBeInTheDocument()
  })

  it('tells the host app about unsaved changes, and leaves the leave-page prompt to it', async () => {
    const user = userEvent.setup()
    const { isEditingStore } = renderAt(NEW_FORM_TEMPLATE_PATH)
    await screen.findByText('Create Form Template')
    expect(isEditingStore.getSnapshot()).toBe(false)

    await editName(user)
    expect(isEditingStore.getSnapshot()).toBe(true)
    // The host already asks before the tab closes while editing; asking here too would ask twice.
    expect(dispatchBeforeUnload().defaultPrevented).toBe(false)

    await user.clear(screen.getByRole('textbox', { name: 'Internal Name' }))
    expect(isEditingStore.getSnapshot()).toBe(false)
  })

  it('stops reporting unsaved changes once the host removes the editor', async () => {
    const user = userEvent.setup()
    const { isEditingStore, unmount } = renderAt(NEW_FORM_TEMPLATE_PATH)
    await editName(user)
    expect(isEditingStore.getSnapshot()).toBe(true)

    unmount()

    expect(isEditingStore.getSnapshot()).toBe(false)
  })

  it('returns to the list without asking after a successful save', async () => {
    const user = userEvent.setup()
    serveGenomicsTemplate()
    const { isEditingStore } = renderAt(
      getFormTemplatePath(mockGenomicsTemplate.id!),
    )
    await editName(user)

    await user.click(screen.getByRole('button', { name: 'Save Changes' }))

    await screen.findByText('Template list')
    expect(isEditingStore.getSnapshot()).toBe(false)
    expect(queryDiscardPrompt()).not.toBeInTheDocument()
  })

  it('still asks before leaving after a save when the draft changed while it was saving', async () => {
    const user = userEvent.setup()
    serveGenomicsTemplate()
    const saveGate = Promise.withResolvers<void>()
    server.use(
      http.post(FORM_TEMPLATE_URL, async ({ request }) => {
        const body = (await request.json()) as FormTemplate
        await saveGate.promise
        return HttpResponse.json(body)
      }),
    )
    renderAt(getFormTemplatePath(mockGenomicsTemplate.id!))
    await editName(user)

    await user.click(screen.getByRole('button', { name: 'Save Changes' }))
    await screen.findByRole('button', { name: 'Saving…' })
    await user.type(
      screen.getByRole('textbox', { name: 'Internal Name' }),
      ' and more',
    )
    saveGate.resolve()

    expect(
      await screen.findByRole('dialog', { name: DISCARD_CHANGES_TITLE }),
    ).toBeVisible()
    expect(screen.queryByText('Template list')).not.toBeInTheDocument()
  })

  it('keeps asking before leaving when a save fails', async () => {
    const user = userEvent.setup()
    serveGenomicsTemplate()
    const saveRequested = vi.fn()
    server.use(
      http.post(FORM_TEMPLATE_URL, () => {
        saveRequested()
        return HttpResponse.json({ reason: 'Server error' }, { status: 500 })
      }),
    )
    const { isEditingStore } = renderAt(
      getFormTemplatePath(mockGenomicsTemplate.id!),
    )
    await editName(user)

    await user.click(screen.getByRole('button', { name: 'Save Changes' }))
    await waitFor(() => expect(saveRequested).toHaveBeenCalled())
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'Cancel' })).toBeEnabled(),
    )

    expect(isEditingStore.getSnapshot()).toBe(true)
    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(getDiscardPrompt()).toBeVisible()
  })

  it('shows an error when the template cannot be loaded', async () => {
    server.use(
      http.get(FORM_TEMPLATE_URL, () =>
        HttpResponse.json({ reason: 'not found' }, { status: 404 }),
      ),
    )
    renderAt(getFormTemplatePath('missing'))
    await screen.findByText(/Could not load the form template/)
  })
})
