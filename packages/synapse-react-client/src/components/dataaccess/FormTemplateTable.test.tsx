import {
  mockClinicalTemplate,
  mockDeprecatedTemplate,
  mockGenomicsTemplate,
} from '@/mocks/accessRequirement/mockFormTemplates'
import {
  getFormTemplateHandlers,
  getFormTemplateSearchUrl,
  getFormTemplateService,
} from '@/mocks/msw/handlers/formTemplateHandlers'
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
import { MemoryRouter, Route, Routes } from 'react-router'
import {
  FormTemplateTable,
  getFormTemplatePath,
  NEW_FORM_TEMPLATE_PATH,
} from './FormTemplateTable'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const SEARCH_URL = getFormTemplateSearchUrl(REPO_ORIGIN)

function useTemplates(templates: FormTemplate[]) {
  server.use(
    ...getFormTemplateHandlers(REPO_ORIGIN, getFormTemplateService(templates)),
  )
}

function renderComponent() {
  const user = userEvent.setup()
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<FormTemplateTable />} />
        <Route
          path={NEW_FORM_TEMPLATE_PATH}
          element={<div>New template</div>}
        />
      </Routes>
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
      getFormTemplatePath(mockGenomicsTemplate.id!),
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

    // The unfiltered list already contains the Clinical link, so assert both conditions together
    // to avoid passing while the loading skeleton replaces the table.
    await waitFor(() => {
      screen.getByRole('link', { name: mockClinicalTemplate.name })
      expect(
        screen.queryByRole('link', { name: mockGenomicsTemplate.name }),
      ).not.toBeInTheDocument()
    })
  })

  it('navigates to the new template editor when "Create template" is clicked', async () => {
    useTemplates([mockGenomicsTemplate])
    const { user } = renderComponent()

    await user.click(
      await screen.findByRole('button', { name: 'Create template' }),
    )

    await screen.findByText('New template')
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
    screen.getByRole('link', { name: mockGenomicsTemplate.name })
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

  it('keeps the loaded rows and "Load more" when fetching the next page fails', async () => {
    server.use(
      http.post(SEARCH_URL, async ({ request }) => {
        const body = (await request.json()) as FormTemplateSearchRequest
        return body.nextPageToken
          ? HttpResponse.json({ reason: 'page 2 failed' }, { status: 500 })
          : HttpResponse.json({
              results: [mockGenomicsTemplate],
              nextPageToken: 'page-2',
            })
      }),
    )
    const { user } = renderComponent()

    await screen.findByRole('link', { name: mockGenomicsTemplate.name })
    await user.click(screen.getByRole('button', { name: 'Load more' }))

    await screen.findByText('page 2 failed')
    screen.getByRole('link', { name: mockGenomicsTemplate.name })
    screen.getByRole('button', { name: 'Load more' })
  })
})
