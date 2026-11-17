import { server } from '@/mocks/msw/server'
import {
  searchConfigBindingService,
  searchManagementServices,
} from '@/mocks/msw/handlers/searchManagementHandlers'
import { MOCK_SEARCH_MANAGEMENT_ORGANIZATION } from '@/mocks/searchmanagement/mockSearchManagementData'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import SearchConfigBindingModal from './SearchConfigBindingModal'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const ENTITY_ID = 'syn10000'
const BOUND_CONFIGURATION_ID = '5001'
const BOUND_CONFIGURATION_NAME = `${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-publications`
const NEW_CONFIGURATION_NAME = 'datasets'
const NO_BINDING_TEXT = 'No search configuration is bound to this entity.'

const onClose = vi.fn()

function renderComponent() {
  const user = userEvent.setup()
  render(
    <SearchConfigBindingModal
      open={true}
      entityId={ENTITY_ID}
      onClose={onClose}
    />,
    { wrapper: createWrapper() },
  )
  return { user, dialog: screen.getByRole('dialog') }
}

function createBinding() {
  searchConfigBindingService.create({
    bindId: 'bind-1',
    objectId: ENTITY_ID,
    objectType: 'entity',
    searchConfigurationId: BOUND_CONFIGURATION_ID,
  })
}

describe('SearchConfigBindingModal', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    searchConfigBindingService.clear()
  })

  it('shows that no configuration is bound', async () => {
    const { dialog } = renderComponent()

    expect(
      within(dialog).getByRole('heading', { name: 'Search Configuration' }),
    ).toBeVisible()
    expect(await within(dialog).findByText(NO_BINDING_TEXT)).toBeVisible()
    expect(
      within(dialog).queryByRole('button', { name: 'Remove binding' }),
    ).not.toBeInTheDocument()
  })

  it('shows the currently bound configuration', async () => {
    createBinding()
    const { dialog } = renderComponent()

    expect(
      await within(dialog).findByText(BOUND_CONFIGURATION_NAME),
    ).toBeVisible()
    expect(within(dialog).queryByText(NO_BINDING_TEXT)).not.toBeInTheDocument()
  })

  it('binds the chosen configuration', async () => {
    const newConfiguration =
      searchManagementServices.SEARCH_CONFIGURATION.create({
        organizationName: MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
        name: NEW_CONFIGURATION_NAME,
      })
    try {
      createBinding()
      const { user, dialog } = renderComponent()
      const saveButton = within(dialog).getByRole('button', { name: 'Save' })
      expect(saveButton).toBeDisabled()

      await user.click(
        within(dialog).getByRole('combobox', { name: 'Search Configuration' }),
      )
      await user.click(
        await screen.findByRole('option', {
          name: new RegExp(
            `${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-${NEW_CONFIGURATION_NAME}`,
          ),
        }),
      )
      await user.click(saveButton)

      await waitFor(() => expect(onClose).toHaveBeenCalled())
      expect(
        searchConfigBindingService.getOneById(ENTITY_ID)?.searchConfigurationId,
      ).toBe(newConfiguration.id)
    } finally {
      searchManagementServices.SEARCH_CONFIGURATION.delete(newConfiguration.id)
    }
  })

  it('removes the binding', async () => {
    createBinding()
    const { user, dialog } = renderComponent()

    await user.click(
      await within(dialog).findByRole('button', { name: 'Remove binding' }),
    )

    await waitFor(() => expect(onClose).toHaveBeenCalled())
    expect(searchConfigBindingService.getOneById(ENTITY_ID)).toBeUndefined()
  })

  it('shows the error reason when binding fails', async () => {
    const reason = 'You lack EDIT access'
    server.use(
      http.put(
        `${REPO_ORIGIN}/repo/v1/entity/:entityId/searchconfig/binding`,
        () => HttpResponse.json({ reason }, { status: 403 }),
      ),
    )
    const { user, dialog } = renderComponent()

    await user.click(
      within(dialog).getByRole('combobox', { name: 'Search Configuration' }),
    )
    await user.click(
      await screen.findByRole('option', {
        name: new RegExp(BOUND_CONFIGURATION_NAME),
      }),
    )
    await user.click(within(dialog).getByRole('button', { name: 'Save' }))

    expect(await within(dialog).findByRole('alert')).toHaveTextContent(reason)
    expect(onClose).not.toHaveBeenCalled()
  })
})
