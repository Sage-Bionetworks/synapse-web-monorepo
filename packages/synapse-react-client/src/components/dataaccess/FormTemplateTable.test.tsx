import {
  mockClinicalTemplate,
  mockDeprecatedTemplate,
  mockGenomicsTemplate,
} from '@/mocks/accessRequirement/mockFormTemplates'
import { getFormTemplateHandlers } from '@/mocks/msw/handlers/formTemplateHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  FormTemplate,
  FormTemplateSearchRequest,
} from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { MemoryRouter } from 'react-router'
import { FormTemplateTable } from './FormTemplateTable'
import BasicMockedCrudService from '@/mocks/msw/util/BasicMockedCrudService'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const SEARCH_URL = `${REPO_ORIGIN}/repo/v1/accessRequirement/formTemplate/search`

function useTemplates(templates: FormTemplate[]) {
  server.use(
    ...getFormTemplateHandlers(
      REPO_ORIGIN,
      new BasicMockedCrudService<FormTemplate, 'id'>({
        initialData: templates,
        idField: 'id',
        autoGenerateId: true,
      }),
    ),
  )
}

function renderComponent() {
  const user = userEvent.setup()
  render(
    <MemoryRouter>
      <FormTemplateTable />
    </MemoryRouter>,
    { wrapper: createWrapper() },
  )
  return { user }
}

describe('FormTemplateTable', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('lists templates as links to the editor', async () => {
    useTemplates([mockGenomicsTemplate, mockClinicalTemplate])
    renderComponent()

    const link = await screen.findByRole('link', {
      name: mockGenomicsTemplate.name,
    })
    expect(link).toHaveAttribute(
      'href',
      `/FormTemplates/${mockGenomicsTemplate.id}`,
    )
    screen.getByRole('link', { name: mockClinicalTemplate.name })
  })

  it('hides deprecated templates until "Include deprecated" is switched on, then labels them', async () => {
    useTemplates([mockGenomicsTemplate, mockDeprecatedTemplate])
    const { user } = renderComponent()

    await screen.findByRole('link', { name: mockGenomicsTemplate.name })
    expect(
      screen.queryByRole('link', { name: mockDeprecatedTemplate.name }),
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('switch', { name: 'Include deprecated' }))

    await screen.findByRole('link', { name: mockDeprecatedTemplate.name })
    screen.getByText('Deprecated')
  })

  it('searches by name', async () => {
    useTemplates([mockGenomicsTemplate, mockClinicalTemplate])
    const { user } = renderComponent()
    await screen.findByRole('link', { name: mockGenomicsTemplate.name })

    await user.type(
      screen.getByRole('textbox', { name: 'Filter by template name' }),
      'clinical',
    )

    await screen.findByRole('link', { name: mockClinicalTemplate.name })
    await waitFor(() =>
      expect(
        screen.queryByRole('link', { name: mockGenomicsTemplate.name }),
      ).not.toBeInTheDocument(),
    )
  })

  it('fetches the next page when "Load more" is clicked', async () => {
    const requests: FormTemplateSearchRequest[] = []
    server.use(
      http.post(SEARCH_URL, async ({ request }) => {
        const body = (await request.json()) as FormTemplateSearchRequest
        requests.push(body)
        return body.nextPageToken
          ? HttpResponse.json({ results: [mockClinicalTemplate] })
          : HttpResponse.json({
              results: [mockGenomicsTemplate],
              nextPageToken: 'page-2',
            })
      }),
    )
    const { user } = renderComponent()

    await screen.findByRole('link', { name: mockGenomicsTemplate.name })
    await user.click(screen.getByRole('button', { name: 'Load more' }))

    await screen.findByRole('link', { name: mockClinicalTemplate.name })
    expect(requests[1].nextPageToken).toBe('page-2')
    expect(
      screen.queryByRole('button', { name: 'Load more' }),
    ).not.toBeInTheDocument()
  })

  it('shows an empty state', async () => {
    useTemplates([])
    renderComponent()
    await screen.findByText('No form templates found.')
  })

  it('shows an error when the search fails', async () => {
    server.use(
      http.post(SEARCH_URL, () =>
        HttpResponse.json({ reason: 'search failed' }, { status: 500 }),
      ),
    )
    renderComponent()

    await screen.findByText(/couldn't load the form templates/i)
    screen.getByText('search failed')
  })
})
