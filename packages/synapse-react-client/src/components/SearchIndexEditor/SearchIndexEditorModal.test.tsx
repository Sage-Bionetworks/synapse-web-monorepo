import {
  mockSearchIndexEntity,
  MOCK_SEARCH_INDEX_ENTITY_ID,
} from '@/mocks/mockSearchQueryData'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ENTITY_ID } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { SearchIndex } from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import SearchIndexEditorModal from './SearchIndexEditorModal'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const ENTITY_URL = `${REPO_ORIGIN}${ENTITY_ID(MOCK_SEARCH_INDEX_ENTITY_ID)}`
const SEARCH_CONFIGURATION_ID = '5001'
const SEARCH_CONFIGURATION_QUALIFIED_NAME = 'org.sagebionetworks-publications'

const existing: SearchIndex = {
  ...mockSearchIndexEntity,
  etag: 'etag-1',
  searchConfigurationId: SEARCH_CONFIGURATION_ID,
}

const onComplete = vi.fn()
const onCancel = vi.fn()

function renderComponent() {
  const user = userEvent.setup()
  render(
    <SearchIndexEditorModal
      open={true}
      entityId={MOCK_SEARCH_INDEX_ENTITY_ID}
      onComplete={onComplete}
      onCancel={onCancel}
    />,
    { wrapper: createWrapper() },
  )
  return { user, dialog: screen.getByRole('dialog') }
}

function captureUpdateRequests(searchIndex: SearchIndex) {
  const requests: SearchIndex[] = []
  server.use(
    http.get(ENTITY_URL, () => HttpResponse.json(searchIndex)),
    http.put(ENTITY_URL, async ({ request }) => {
      const body = (await request.json()) as SearchIndex
      requests.push(body)
      return HttpResponse.json(body)
    }),
  )
  return requests
}

describe('SearchIndexEditorModal', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('loads the existing values and saves the updated SQL and configuration', async () => {
    const requests = captureUpdateRequests({
      ...existing,
      searchConfigurationId: undefined,
    })
    const { user, dialog } = renderComponent()

    expect(
      within(dialog).getByRole('heading', { name: 'Edit Search Index' }),
    ).toBeVisible()
    const sqlField = await within(dialog).findByRole('textbox', {
      name: 'Defining SQL',
    })
    expect(sqlField).toHaveValue(existing.definingSQL)

    await user.clear(sqlField)
    await user.type(sqlField, 'SELECT title FROM syn60000')
    await user.click(
      within(dialog).getByRole('combobox', { name: 'Search Configuration' }),
    )
    await user.click(
      await screen.findByRole('option', {
        name: new RegExp(SEARCH_CONFIGURATION_QUALIFIED_NAME),
      }),
    )
    await user.click(within(dialog).getByRole('button', { name: 'Save' }))

    await waitFor(() =>
      expect(onComplete).toHaveBeenCalledWith(MOCK_SEARCH_INDEX_ENTITY_ID),
    )
    expect(requests).toEqual([
      {
        ...existing,
        definingSQL: 'SELECT title FROM syn60000',
        searchConfigurationId: SEARCH_CONFIGURATION_ID,
      },
    ])
  })

  it('sends no search configuration when the picker is cleared', async () => {
    const requests = captureUpdateRequests(existing)
    const { user, dialog } = renderComponent()

    const configField = await within(dialog).findByRole('combobox', {
      name: 'Search Configuration',
    })
    await waitFor(() =>
      expect(configField).toHaveValue(SEARCH_CONFIGURATION_QUALIFIED_NAME),
    )
    await user.clear(configField)
    await user.click(within(dialog).getByRole('button', { name: 'Save' }))

    await waitFor(() => expect(requests).toHaveLength(1))
    expect(requests[0]).not.toHaveProperty('searchConfigurationId')
    expect(requests[0].definingSQL).toBe(existing.definingSQL)
  })

  it('disables Save when the SQL is empty', async () => {
    captureUpdateRequests(existing)
    const { user, dialog } = renderComponent()

    const sqlField = await within(dialog).findByRole('textbox', {
      name: 'Defining SQL',
    })
    const saveButton = within(dialog).getByRole('button', { name: 'Save' })
    expect(saveButton).toBeEnabled()
    await user.clear(sqlField)
    expect(saveButton).toBeDisabled()
  })

  it('shows the server error reason', async () => {
    const reason = 'You lack UPDATE access'
    server.use(
      http.get(ENTITY_URL, () => HttpResponse.json(existing)),
      http.put(ENTITY_URL, () =>
        HttpResponse.json({ reason }, { status: 403 }),
      ),
    )
    const { user, dialog } = renderComponent()

    await within(dialog).findByRole('textbox', { name: 'Defining SQL' })
    await user.click(within(dialog).getByRole('button', { name: 'Save' }))

    expect(await within(dialog).findByRole('alert')).toHaveTextContent(reason)
    expect(onComplete).not.toHaveBeenCalled()
  })
})
