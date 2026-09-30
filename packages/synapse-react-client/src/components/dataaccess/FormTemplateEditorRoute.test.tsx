import { mockGenomicsTemplate } from '@/mocks/accessRequirement/mockFormTemplates'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { MemoryRouter, Route, Routes } from 'react-router'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
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

function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path={FORM_TEMPLATES_PATH} element={<div>Template list</div>} />
        <Route
          path={NEW_FORM_TEMPLATE_PATH}
          element={<FormTemplateEditorRoute />}
        />
        <Route
          path={`/${FORM_TEMPLATE_ROUTE}`}
          element={<FormTemplateEditorRoute />}
        />
      </Routes>
    </MemoryRouter>,
    { wrapper: createWrapper() },
  )
}

describe('FormTemplateEditorRoute', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('opens an empty editor for /new', async () => {
    renderAt(NEW_FORM_TEMPLATE_PATH)
    await screen.findByText('Create Form Template')
  })

  it('loads the template for /:templateId', async () => {
    server.use(
      ...getFormTemplateHandlers(REPO_ORIGIN),
      ...getRegisteredSchemaHandlers(REPO_ORIGIN, [mockGenomicsSchema]),
    )
    renderAt(getFormTemplatePath(mockGenomicsTemplate.id!))
    await screen.findByText('Edit Form Template')
  })

  it('returns to the list on cancel', async () => {
    const user = userEvent.setup()
    renderAt(NEW_FORM_TEMPLATE_PATH)
    await user.click(await screen.findByRole('button', { name: 'Cancel' }))
    await screen.findByText('Template list')
  })

  it('shows an error when the template cannot be loaded', async () => {
    server.use(
      http.get(
        `${REPO_ORIGIN}/repo/v1/accessRequirement/formTemplate/:id`,
        () => HttpResponse.json({ reason: 'not found' }, { status: 404 }),
      ),
    )
    renderAt(getFormTemplatePath('missing'))
    await screen.findByText(/Could not load the form template/)
  })
})
