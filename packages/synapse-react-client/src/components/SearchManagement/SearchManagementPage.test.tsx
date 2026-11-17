import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import {
  MockSearchManagementResource,
  searchManagementServices,
} from '@/mocks/msw/handlers/searchManagementHandlers'
import { server } from '@/mocks/msw/server'
import {
  MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
  mockSearchManagementResources,
} from '@/mocks/searchmanagement/mockSearchManagementData'
import { SearchManagementResourceType } from '@/synapse-queries/searchmanagement/SearchManagementResourceType'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import * as ToastMessageModule from '../ToastMessage/ToastMessage'
import SearchManagementPage from './SearchManagementPage'
import { SEARCH_RESOURCE_NAME_ERROR_TEXT } from './SearchResourceEditorDialog'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const TEXT_ANALYZER_PATH = `${REPO_ORIGIN}/repo/v1/search/text/analyzer`
const SEARCH_PIPELINE_PATH = `${REPO_ORIGIN}/repo/v1/search/pipeline`
const OTHER_ORGANIZATION = 'org.example'

const displayToastSpy = vi.spyOn(ToastMessageModule, 'displayToast')

function restoreSeededResources() {
  for (const resourceType of Object.keys(
    mockSearchManagementResources,
  ) as SearchManagementResourceType[]) {
    const service = searchManagementServices[resourceType]
    const seeded = mockSearchManagementResources[resourceType]
    const seededIds = new Set(seeded.map(resource => resource.id))
    service
      .getAll()
      .filter(resource => !seededIds.has(resource.id))
      .forEach(resource => service.delete(resource.id))
    seeded.forEach(resource => service.update(resource.id, cloneDeep(resource)))
  }
}

function captureRequestBodies(method: 'post' | 'put', path: string) {
  const bodies: MockSearchManagementResource[] = []
  server.use(
    http[method](path, async ({ request }) => {
      bodies.push(
        (await request.clone().json()) as MockSearchManagementResource,
      )
      // Fall through to the mock backend.
      return undefined
    }),
  )
  return bodies
}

async function renderPage(tabName: string) {
  const user = userEvent.setup()
  render(<SearchManagementPage />, { wrapper: createWrapper() })
  await user.click(await screen.findByRole('tab', { name: tabName }))
  return { user }
}

async function openDialog(user: UserEvent, buttonName: string) {
  await user.click(await screen.findByRole('button', { name: buttonName }))
  return screen.findByRole('dialog')
}

async function selectOption(
  user: UserEvent,
  combobox: HTMLElement,
  optionName: string | RegExp,
) {
  await user.click(combobox)
  await user.click(await screen.findByRole('option', { name: optionName }))
}

async function replaceText(
  user: UserEvent,
  textbox: HTMLElement,
  text: string,
) {
  await user.clear(textbox)
  await user.click(textbox)
  await user.paste(text)
}

describe('SearchManagementPage', () => {
  beforeEach(() => {
    server.use(
      getFeatureFlagsOverride({
        portalOrigin: getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
        overrides: { [FeatureFlagEnum.SEARCH_INDEX_MANAGEMENT]: true },
      }),
    )
  })

  afterEach(() => {
    restoreSeededResources()
    displayToastSpy.mockClear()
  })

  it('shows that the feature is unavailable when the feature flag is off', async () => {
    server.use(
      getFeatureFlagsOverride({
        portalOrigin: getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
      }),
    )
    render(<SearchManagementPage />, { wrapper: createWrapper() })

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Search Management is not available',
    )
    expect(screen.queryByRole('tab')).not.toBeInTheDocument()
  })

  it('lists resources for the selected tab and filters them by organization', async () => {
    searchManagementServices.TEXT_ANALYZER.create({
      organizationName: OTHER_ORGANIZATION,
      name: 'other_analyzer',
      description: 'Owned by another organization',
      settings: { analyzer: { default: { type: 'standard' } } },
    })
    const { user } = await renderPage('Text Analyzers')

    expect(
      await screen.findByText(
        `${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-SCIENTIFIC`,
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(`${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-acronym_exact`),
    ).toBeInTheDocument()
    expect(
      screen.getByText(`${OTHER_ORGANIZATION}-other_analyzer`),
    ).toBeInTheDocument()

    await selectOption(
      user,
      screen.getByRole('combobox', { name: 'Organization' }),
      OTHER_ORGANIZATION,
    )

    await waitFor(() =>
      expect(
        screen.queryByText(`${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-SCIENTIFIC`),
      ).not.toBeInTheDocument(),
    )
    expect(
      screen.getByText(`${OTHER_ORGANIZATION}-other_analyzer`),
    ).toBeInTheDocument()
  })

  it('creates a Text Analyzer from the parsed settings and shows it in the table', async () => {
    const postedBodies = captureRequestBodies('post', TEXT_ANALYZER_PATH)
    const { user } = await renderPage('Text Analyzers')
    const dialog = await openDialog(user, 'Create Text Analyzer')

    await selectOption(
      user,
      within(dialog).getByRole('combobox', { name: 'Organization' }),
      MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
    )
    await user.type(
      within(dialog).getByRole('textbox', { name: 'Name' }),
      'new_analyzer',
    )
    const settings = {
      analyzer: { default: { type: 'custom', tokenizer: 'whitespace' } },
    }
    await replaceText(
      user,
      within(dialog).getByRole('textbox', { name: 'Settings' }),
      JSON.stringify(settings),
    )
    await user.click(within(dialog).getByRole('button', { name: 'Save' }))

    await waitFor(() =>
      expect(displayToastSpy).toHaveBeenCalledWith(
        'Text Analyzer created',
        'success',
      ),
    )
    expect(postedBodies).toEqual([
      expect.objectContaining({
        organizationName: MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
        name: 'new_analyzer',
        settings,
      }),
    ])
    expect(
      await screen.findByText(
        `${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-new_analyzer`,
      ),
    ).toBeInTheDocument()
  })

  it('prefills a valid example when creating a Text Analyzer', async () => {
    const { user } = await renderPage('Text Analyzers')
    const dialog = await openDialog(user, 'Create Text Analyzer')

    const settings = within(dialog).getByRole<HTMLTextAreaElement>('textbox', {
      name: 'Settings',
    })
    expect(JSON.parse(settings.value)).toEqual({
      analyzer: {
        default: {
          type: 'custom',
          tokenizer: 'standard',
          filter: ['lowercase'],
        },
      },
    })
  })

  it('disables Save while the JSON is invalid', async () => {
    const { user } = await renderPage('Text Analyzers')
    const dialog = await openDialog(user, 'Create Text Analyzer')
    await selectOption(
      user,
      within(dialog).getByRole('combobox', { name: 'Organization' }),
      MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
    )
    await user.type(
      within(dialog).getByRole('textbox', { name: 'Name' }),
      'valid_name',
    )
    const saveButton = within(dialog).getByRole('button', { name: 'Save' })
    expect(saveButton).toBeEnabled()

    await replaceText(
      user,
      within(dialog).getByRole('textbox', { name: 'Settings' }),
      '{ "analyzer": ',
    )

    expect(saveButton).toBeDisabled()
  })

  it('shows an error and disables Save for an invalid name', async () => {
    const { user } = await renderPage('Synonym Sets')
    const dialog = await openDialog(user, 'Create Synonym Set')
    await selectOption(
      user,
      within(dialog).getByRole('combobox', { name: 'Organization' }),
      MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
    )

    await user.type(
      within(dialog).getByRole('textbox', { name: 'Name' }),
      '1-bad name',
    )

    expect(
      within(dialog).getByText(SEARCH_RESOURCE_NAME_ERROR_TEXT),
    ).toBeInTheDocument()
    expect(within(dialog).getByRole('button', { name: 'Save' })).toBeDisabled()
  })

  it('edits a resource without changing its organization or name, keeping its ID and etag', async () => {
    const putBodies = captureRequestBodies('put', `${TEXT_ANALYZER_PATH}/:id`)
    const { user } = await renderPage('Text Analyzers')
    const dialog = await openDialog(
      user,
      `Edit ${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-SCIENTIFIC`,
    )

    expect(
      within(dialog).getByRole('combobox', { name: 'Organization' }),
    ).toBeDisabled()
    const nameField = within(dialog).getByRole('textbox', { name: 'Name' })
    expect(nameField).toBeDisabled()
    expect(nameField).toHaveValue('SCIENTIFIC')

    await replaceText(
      user,
      within(dialog).getByRole('textbox', { name: 'Description' }),
      'Updated description',
    )
    await user.click(within(dialog).getByRole('button', { name: 'Save' }))

    await waitFor(() =>
      expect(displayToastSpy).toHaveBeenCalledWith(
        'Text Analyzer updated',
        'success',
      ),
    )
    const seeded = mockSearchManagementResources.TEXT_ANALYZER[0]
    expect(putBodies).toEqual([
      expect.objectContaining({
        id: seeded.id,
        etag: seeded.etag,
        organizationName: seeded.organizationName,
        name: seeded.name,
        description: 'Updated description',
        settings: seeded.settings,
      }),
    ])
    expect(await screen.findByText('Updated description')).toBeInTheDocument()
  })

  it('shows the reason the server rejected a save', async () => {
    const reason =
      'You lack permission to create resources in this Organization'
    server.use(
      http.post(TEXT_ANALYZER_PATH, () =>
        HttpResponse.json({ reason }, { status: 403 }),
      ),
    )
    const { user } = await renderPage('Text Analyzers')
    const dialog = await openDialog(user, 'Create Text Analyzer')
    await selectOption(
      user,
      within(dialog).getByRole('combobox', { name: 'Organization' }),
      MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
    )
    await user.type(
      within(dialog).getByRole('textbox', { name: 'Name' }),
      'forbidden',
    )
    await user.click(within(dialog).getByRole('button', { name: 'Save' }))

    expect(await within(dialog).findByRole('alert')).toHaveTextContent(reason)
    expect(displayToastSpy).not.toHaveBeenCalled()
  })

  it('edits a Search Pipeline as wire-format JSON and saves the normalization-processor key', async () => {
    const putBodies = captureRequestBodies('put', `${SEARCH_PIPELINE_PATH}/:id`)
    const { user } = await renderPage('Search Pipelines')
    const dialog = await openDialog(
      user,
      `Edit ${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-balanced_hybrid`,
    )
    const settingsField = within(dialog).getByRole<HTMLTextAreaElement>(
      'textbox',
      { name: 'Settings' },
    )
    expect(JSON.parse(settingsField.value)).toEqual(
      mockSearchManagementResources.SEARCH_PIPELINE[0].settings,
    )

    const updatedSettings = {
      phase_results_processors: [
        {
          'normalization-processor': {
            normalization: { technique: 'l2' },
            combination: {
              technique: 'harmonic_mean',
              parameters: { weights: [0.3, 0.7] },
            },
          },
        },
      ],
    }
    await replaceText(user, settingsField, JSON.stringify(updatedSettings))
    await user.click(within(dialog).getByRole('button', { name: 'Save' }))

    await waitFor(() => expect(putBodies).toHaveLength(1))
    expect(putBodies[0].settings).toEqual(updatedSettings)
  })

  it('creates a Search Configuration from saved references and inline JSON', async () => {
    const postedBodies = captureRequestBodies(
      'post',
      `${REPO_ORIGIN}/repo/v1/search/configuration`,
    )
    const { user } = await renderPage('Search Configurations')
    const dialog = await openDialog(user, 'Create Search Configuration')
    await selectOption(
      user,
      within(dialog).getByRole('combobox', { name: 'Organization' }),
      MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
    )
    await user.type(
      within(dialog).getByRole('textbox', { name: 'Name' }),
      'new_configuration',
    )

    const pipelineGroup = within(dialog).getByRole('group', {
      name: 'Default Search Pipeline',
    })
    await user.click(
      within(pipelineGroup).getByRole('button', {
        name: 'Saved Search Pipeline',
      }),
    )
    await selectOption(
      user,
      within(pipelineGroup).getByRole('combobox', {
        name: 'Saved Search Pipeline',
      }),
      new RegExp(`^${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-balanced_hybrid`),
    )

    const saveButton = within(dialog).getByRole('button', { name: 'Save' })
    await user.click(
      within(dialog).getByRole('button', {
        name: 'Add Column Analyzer Override',
      }),
    )
    expect(saveButton).toBeDisabled()
    const overrideGroup = within(dialog).getByRole('group', {
      name: 'Column Analyzer Override 1',
    })
    await user.click(
      within(overrideGroup).getByRole('button', { name: 'Inline JSON' }),
    )
    const inlineOverride = {
      overrides: [{ columnName: 'abstract', semantic: true }],
    }
    await replaceText(
      user,
      within(overrideGroup).getByRole('textbox', {
        name: 'Inline Column Analyzer Override JSON',
      }),
      JSON.stringify(inlineOverride),
    )
    await user.click(saveButton)

    await waitFor(() => expect(postedBodies).toHaveLength(1))
    expect(postedBodies[0]).toEqual(
      expect.objectContaining({
        name: 'new_configuration',
        defaultSearchPipeline: {
          $ref: `${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-balanced_hybrid`,
        },
        columnAnalyzerOverrides: [inlineOverride],
      }),
    )
    expect(postedBodies[0]).not.toHaveProperty('defaultAnalyzer')
  })

  it('requires a column name for each Column Analyzer Override entry', async () => {
    const { user } = await renderPage('Column Analyzer Overrides')
    const dialog = await openDialog(user, 'Create Column Analyzer Override')
    await selectOption(
      user,
      within(dialog).getByRole('combobox', { name: 'Organization' }),
      MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
    )
    await user.type(
      within(dialog).getByRole('textbox', { name: 'Name' }),
      'overrides',
    )
    const saveButton = within(dialog).getByRole('button', { name: 'Save' })
    expect(saveButton).toBeDisabled()

    await user.type(
      within(dialog).getByRole('textbox', { name: 'Column Name' }),
      'title',
    )
    expect(saveButton).toBeEnabled()

    await user.click(
      within(dialog).getByRole('button', { name: 'Add Column Override' }),
    )
    expect(saveButton).toBeDisabled()

    await user.click(
      within(dialog).getByRole('button', { name: 'Remove column override 2' }),
    )
    expect(saveButton).toBeEnabled()
  })
})
