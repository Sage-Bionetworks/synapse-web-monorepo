import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import {
  MOCK_MULTI_VERSION_SCHEMA_NAME,
  MOCK_NULL_VERSION_SCHEMA_NAME,
  MOCK_ORGANIZATION_EXAMPLE_NAME,
  MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
  mockJsonSchemaVersionsPageOneForMultiVersionSchema,
  mockOrganizationsPageOne,
  mockOrganizationsPageTwo,
} from '@/mocks/jsonschema/mockJsonSchemaListing'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { mockVirtualizedTableLayout } from '@/testutils/VirtualizedTableTestUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  ListJsonSchemaVersionInfoRequest,
  ListOrganizationsRequest,
} from '@sage-bionetworks/synapse-client'
import { http, HttpResponse } from 'msw'
import { JsonSchemaPicker, JsonSchemaSelection } from './JsonSchemaPicker'
import { VersionSelectionType } from './VersionSelectionType'

const postRepoV1SchemaListSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.jsonSchemaServicesClient,
  'postRepoV1SchemaList',
)

const postRepoV1SchemaVersionListSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.jsonSchemaServicesClient,
  'postRepoV1SchemaVersionList',
)

function renderPicker(
  props: Partial<
    Omit<Parameters<typeof JsonSchemaPicker>[0], 'onSelectionChange'>
  > = {},
) {
  const onSelectionChange = vi.fn()
  const result = render(
    <JsonSchemaPicker onSelectionChange={onSelectionChange} {...props} />,
    { wrapper: createWrapper() },
  )
  return { ...result, onSelectionChange }
}

async function selectOrganization(name: string) {
  const combobox = screen.getByRole('combobox', { name: 'Organization' })
  await userEvent.click(combobox)
  const option = await screen.findByRole('option', { name })
  await userEvent.click(option)
}

/**
 * Finds the row for a given schema name, waiting for it to appear. Scopes to `table`'s data
 * rows only (excluding the header row) by requiring a checkbox, since a row's accessible name
 * (used by `getByRole('row', { name })`) isn't reliable across browsers/jsdom for rows containing
 * multiple cells of arbitrary content.
 */
async function findSchemaRow(
  table: HTMLElement,
  schemaName: string,
): Promise<HTMLElement> {
  await within(table).findByText(schemaName)
  const row = getDataRows(table).find(row =>
    within(row).queryByText(schemaName),
  )
  if (!row) {
    throw new Error(`Could not find a row for schema "${schemaName}"`)
  }
  return row
}

function getDataRows(table: HTMLElement): HTMLElement[] {
  return within(table)
    .getAllByRole('row')
    .filter(row => within(row).queryAllByRole('checkbox').length > 0)
}

async function selectSchemaRow(
  table: HTMLElement,
  schemaName: string,
): Promise<HTMLElement> {
  const row = await findSchemaRow(table, schemaName)
  await userEvent.click(
    within(row).getByRole('checkbox', { name: `Select ${schemaName}` }),
  )
  return row
}

describe('JsonSchemaPicker', () => {
  let restoreVirtualizedTableLayout: () => void
  beforeAll(() => {
    server.listen()
    restoreVirtualizedTableLayout = mockVirtualizedTableLayout()
  })
  afterEach(() => server.resetHandlers())
  afterAll(() => {
    server.close()
    restoreVirtualizedTableLayout()
  })
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('loads every page of organizations into the Autocomplete without querying schemas', async () => {
    renderPicker()

    const combobox = screen.getByRole('combobox', { name: 'Organization' })
    await userEvent.click(combobox)

    await waitFor(() => {
      expect(
        screen.getByRole('option', {
          name: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
        }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('option', { name: MOCK_ORGANIZATION_EXAMPLE_NAME }),
      ).toBeInTheDocument()
    })

    expect(postRepoV1SchemaListSpy).not.toHaveBeenCalled()
    expect(
      screen.getByText('Select an organization to see its schemas.'),
    ).toBeInTheDocument()
  })

  it('shows a disabled "Loading organizations…" placeholder option while fetching, and hides it once every page has loaded', async () => {
    let resolvePageTwo: (() => void) | undefined
    server.use(
      http.post<never, ListOrganizationsRequest>(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/repo/v1/schema/organization/list`,
        async ({ request }) => {
          const { nextPageToken } = await request.json()
          if (!nextPageToken) {
            return HttpResponse.json(mockOrganizationsPageOne, {
              status: 200,
            })
          }
          await new Promise<void>(resolve => {
            resolvePageTwo = resolve
          })
          return HttpResponse.json(mockOrganizationsPageTwo, { status: 200 })
        },
      ),
    )

    renderPicker()

    const combobox = screen.getByRole('combobox', { name: 'Organization' })
    await userEvent.click(combobox)

    const loadingOption = await screen.findByRole('option', {
      name: 'Loading organizations…',
    })
    expect(loadingOption).toHaveAttribute('aria-disabled', 'true')
    expect(
      screen.queryByRole('option', {
        name: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
      }),
    ).not.toBeInTheDocument()

    await waitFor(() => expect(resolvePageTwo).toBeDefined())
    resolvePageTwo!()

    await waitFor(() =>
      expect(
        screen.queryByRole('option', { name: 'Loading organizations…' }),
      ).not.toBeInTheDocument(),
    )
    expect(
      screen.getByRole('option', {
        name: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('option', { name: MOCK_ORGANIZATION_EXAMPLE_NAME }),
    ).toBeInTheDocument()
  })

  it('filters organization options as the user types', async () => {
    renderPicker()

    const combobox = screen.getByRole('combobox', { name: 'Organization' })
    await userEvent.click(combobox)
    await waitFor(() =>
      expect(
        screen.getByRole('option', { name: MOCK_ORGANIZATION_EXAMPLE_NAME }),
      ).toBeInTheDocument(),
    )

    await userEvent.type(combobox, 'example')

    await waitFor(() => {
      expect(
        screen.queryByRole('option', {
          name: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
        }),
      ).not.toBeInTheDocument()
      expect(
        screen.getByRole('option', { name: MOCK_ORGANIZATION_EXAMPLE_NAME }),
      ).toBeInTheDocument()
    })
  })

  it('loads and displays every page of schemas once an organization is selected', async () => {
    renderPicker()

    await selectOrganization(MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME)

    const table = await screen.findByRole('table')

    // Page 2 (NullVersionSchema) should eventually load in as well, alongside page 1's schemas
    await waitFor(() => {
      expect(getDataRows(table)).toHaveLength(4)
    })
    expect(within(table).getByText('repo.model.FileEntity')).toBeInTheDocument()
    expect(within(table).getByText('repo.model.Project')).toBeInTheDocument()
    expect(
      within(table).getByText(MOCK_MULTI_VERSION_SCHEMA_NAME),
    ).toBeInTheDocument()
    expect(
      within(table).getByText(MOCK_NULL_VERSION_SCHEMA_NAME),
    ).toBeInTheDocument()
  })

  it('shows an empty state when the selected organization has no schemas', async () => {
    renderPicker()

    await selectOrganization(MOCK_ORGANIZATION_EXAMPLE_NAME)

    expect(
      await screen.findByText('No schemas found for this organization.'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
  })

  it('shows an error alert when schemas fail to load', async () => {
    server.use(
      http.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/repo/v1/schema/list`,
        () =>
          HttpResponse.json(
            { reason: 'Something went wrong' },
            { status: 500 },
          ),
      ),
    )

    renderPicker()
    await selectOrganization(MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME)

    const alert = await screen.findByRole('alert')
    within(alert).getByText('Something went wrong')
  })

  it('shows an error alert when organizations fail to load', async () => {
    server.use(
      http.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/repo/v1/schema/organization/list`,
        () =>
          HttpResponse.json(
            { reason: 'Something went wrong' },
            { status: 500 },
          ),
      ),
    )

    renderPicker()

    const alert = await screen.findByRole('alert')
    within(alert).getByText('Something went wrong')
    // The "Select an organization..." prompt should not also render alongside the error.
    expect(
      screen.queryByText('Select an organization to see its schemas.'),
    ).not.toBeInTheDocument()
  })

  it('shows an error alert when versions fail to load', async () => {
    server.use(
      http.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/repo/v1/schema/version/list`,
        () =>
          HttpResponse.json(
            { reason: 'Something went wrong' },
            { status: 500 },
          ),
      ),
    )

    renderPicker()
    await selectOrganization(MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME)
    const table = await screen.findByRole('table')

    const multiVersionRow = await selectSchemaRow(
      table,
      MOCK_MULTI_VERSION_SCHEMA_NAME,
    )

    const alert = await within(multiVersionRow).findByRole('alert')
    within(alert).getByText('Something went wrong')
  })

  it('stops fetching further pages of versions once a page fails to load, rather than retrying forever', async () => {
    server.use(
      http.post<never, ListJsonSchemaVersionInfoRequest>(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/repo/v1/schema/version/list`,
        async ({ request }) => {
          const { nextPageToken } = await request.json()
          if (!nextPageToken) {
            return HttpResponse.json(
              mockJsonSchemaVersionsPageOneForMultiVersionSchema,
              { status: 200 },
            )
          }
          return HttpResponse.json(
            { reason: 'Something went wrong' },
            { status: 500 },
          )
        },
      ),
    )

    renderPicker()
    await selectOrganization(MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME)
    const table = await screen.findByRole('table')

    const multiVersionRow = await selectSchemaRow(
      table,
      MOCK_MULTI_VERSION_SCHEMA_NAME,
    )

    // The whole (multi-page) fetch is a single query, so a failure on page 2 fails the fetch as
    // a whole (no partial data survives) -- the row shows an error, not a partial dropdown.
    const alert = await within(multiVersionRow).findByRole('alert')
    within(alert).getByText('Something went wrong')
    expect(postRepoV1SchemaVersionListSpy).toHaveBeenCalledTimes(2)

    // Give any errant retry-loop a chance to fire before asserting it didn't.
    await new Promise(resolve => setTimeout(resolve, 50))
    expect(postRepoV1SchemaVersionListSpy).toHaveBeenCalledTimes(2)
  })

  it('selecting a schema replaces any prior selection (single-select)', async () => {
    renderPicker()

    await selectOrganization(MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME)
    const table = await screen.findByRole('table')

    const fileEntityRow = await findSchemaRow(table, 'repo.model.FileEntity')
    const projectRow = await findSchemaRow(table, 'repo.model.Project')

    await userEvent.click(
      within(fileEntityRow).getByRole('checkbox', {
        name: 'Select repo.model.FileEntity',
      }),
    )
    await waitFor(() =>
      expect(within(fileEntityRow).getByRole('checkbox')).toBeChecked(),
    )

    await userEvent.click(
      within(projectRow).getByRole('checkbox', {
        name: 'Select repo.model.Project',
      }),
    )

    await waitFor(() => {
      expect(within(projectRow).getByRole('checkbox')).toBeChecked()
      expect(within(fileEntityRow).getByRole('checkbox')).not.toBeChecked()
    })
  })

  it('shows a version <Select> only for the selected row, defaulting to the latest version under REQUIRED', async () => {
    const { onSelectionChange } = renderPicker({
      versionSelectionType: VersionSelectionType.REQUIRED,
    })

    await selectOrganization(MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME)
    const table = await screen.findByRole('table')

    const multiVersionRow = await findSchemaRow(
      table,
      MOCK_MULTI_VERSION_SCHEMA_NAME,
    )

    expect(
      within(multiVersionRow).queryByRole('combobox'),
    ).not.toBeInTheDocument()

    await userEvent.click(
      within(multiVersionRow).getByRole('checkbox', {
        name: `Select ${MOCK_MULTI_VERSION_SCHEMA_NAME}`,
      }),
    )

    const versionSelect = await within(multiVersionRow).findByRole('combobox')
    await waitFor(
      () =>
        expect(
          within(versionSelect).getByRole('option', { selected: true }),
        ).toHaveTextContent('2.0.0'),
      { timeout: 3000 },
    )

    await waitFor(() => {
      const lastCall = onSelectionChange.mock.calls.at(-1)?.[0] as
        | JsonSchemaSelection
        | undefined
      expect(lastCall?.versionInfo?.semanticVersion).toBe('2.0.0')
    })

    // Both pages of versions should have loaded into the dropdown, ordered highest-to-lowest
    // semantic version (the API returns them lowest-to-highest).
    await waitFor(
      () =>
        expect(within(versionSelect).getByText('1.0.0')).toBeInTheDocument(),
      { timeout: 3000 },
    )
    expect(
      within(versionSelect)
        .getAllByRole('option')
        .map(option => option.textContent),
    ).toEqual(['2.0.0', '1.1.0', '1.0.0'])
    expect(within(versionSelect).queryByText('Latest')).not.toBeInTheDocument()
  })

  it('offers a "Latest" option under LATEST_ALLOWED', async () => {
    // The exact reported selection shape for the "Latest" case is covered by
    // useJsonSchemaSelection.test.ts; this only exercises the UI flow of choosing it.
    renderPicker({
      versionSelectionType: VersionSelectionType.LATEST_ALLOWED,
    })

    await selectOrganization(MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME)
    const table = await screen.findByRole('table')

    const multiVersionRow = await selectSchemaRow(
      table,
      MOCK_MULTI_VERSION_SCHEMA_NAME,
    )

    const versionSelect = await within(multiVersionRow).findByRole('combobox')
    await waitFor(
      () =>
        expect(
          within(versionSelect).getByRole('option', { selected: true }),
        ).toHaveTextContent('Latest'),
      {
        timeout: 3000,
      },
    )
  })

  it('gracefully handles a version with a null semantic version', async () => {
    renderPicker({ versionSelectionType: VersionSelectionType.REQUIRED })

    await selectOrganization(MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME)
    const table = await screen.findByRole('table')

    const nullVersionRow = await selectSchemaRow(
      table,
      MOCK_NULL_VERSION_SCHEMA_NAME,
    )

    const versionSelect = await within(nullVersionRow).findByRole('combobox')
    await waitFor(
      () =>
        expect(
          within(versionSelect).getByText('Version 4'),
        ).toBeInTheDocument(),
      { timeout: 3000 },
    )
  })

  it('renders no version <Select> when a schema resolves to no versions', async () => {
    renderPicker({ versionSelectionType: VersionSelectionType.REQUIRED })

    await selectOrganization(MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME)
    const table = await screen.findByRole('table')

    // The MSW handler returns an empty page for any schema name it doesn't otherwise recognize.
    const fileEntityRow = await selectSchemaRow(table, 'repo.model.FileEntity')

    await waitFor(() =>
      expect(
        within(fileEntityRow).queryByRole('progressbar'),
      ).not.toBeInTheDocument(),
    )
    expect(
      within(fileEntityRow).queryByRole('combobox'),
    ).not.toBeInTheDocument()
  })
})
