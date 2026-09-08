import { server } from '@/mocks/msw/server'
import {
  mockEDucTemplate1,
  mockEDucTemplate2,
  MOCK_EDUC_TEMPLATE_ID_1,
} from '@/mocks/eDuc/mockEDucTemplates'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { EDUC_TEMPLATE, EDUC_TEMPLATE_VALIDATION } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { EDucTemplateTable } from './EDucTemplateTable'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

function renderComponent() {
  const user = userEvent.setup()
  const result = render(<EDucTemplateTable />, {
    wrapper: createWrapper(),
  })
  return { user, ...result }
}

function templatesHandler(templates = [mockEDucTemplate1, mockEDucTemplate2]) {
  return http.post(`${REPO_ORIGIN}${EDUC_TEMPLATE}`, () =>
    HttpResponse.json({ results: templates }, { status: 200 }),
  )
}

describe('EDucTemplateTable', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('renders template rows with name, description, and dates', async () => {
    server.use(templatesHandler())
    renderComponent()

    await screen.findByText(mockEDucTemplate1.name!)
    await screen.findByText(mockEDucTemplate1.description!)
    await screen.findByText(mockEDucTemplate2.name!)
    await screen.findByText(mockEDucTemplate2.description!)
  })

  it('shows an empty-state message when no templates are returned', async () => {
    server.use(templatesHandler([]))
    renderComponent()

    await screen.findByText(/No eDUC templates are registered/i)
  })

  it('shows an error alert when the list query fails', async () => {
    server.use(
      http.post(`${REPO_ORIGIN}${EDUC_TEMPLATE}`, () =>
        HttpResponse.json({ reason: 'list failed' }, { status: 500 }),
      ),
    )
    renderComponent()

    await screen.findByText(/couldn't load the eDUC templates/i)
    expect(screen.getByText('list failed')).toBeInTheDocument()
  })

  it('shows a valid indicator when a row is validated successfully', async () => {
    server.use(
      templatesHandler(),
      http.get(`${REPO_ORIGIN}${EDUC_TEMPLATE_VALIDATION(':templateId')}`, () =>
        HttpResponse.json({ isValid: true }, { status: 200 }),
      ),
    )
    const { user } = renderComponent()

    const firstRow = (await screen.findByText(mockEDucTemplate1.name!)).closest(
      'tr',
    )!
    const validateButton = within(firstRow).getByRole('button', {
      name: 'Validate',
    })
    await user.click(validateButton)

    await within(firstRow).findByText('Valid')
  })

  it('shows the reason when a row is invalid', async () => {
    server.use(
      templatesHandler(),
      http.get(
        `${REPO_ORIGIN}${EDUC_TEMPLATE_VALIDATION(MOCK_EDUC_TEMPLATE_ID_1)}`,
        () =>
          HttpResponse.json(
            { isValid: false, reason: 'Missing required tab' },
            { status: 200 },
          ),
      ),
    )
    const { user } = renderComponent()

    const firstRow = (await screen.findByText(mockEDucTemplate1.name!)).closest(
      'tr',
    )!
    const validateButton = within(firstRow).getByRole('button', {
      name: 'Validate',
    })
    await user.click(validateButton)

    await within(firstRow).findByText('Missing required tab')
  })

  it('shows the backend error reason when validation fails', async () => {
    server.use(
      templatesHandler(),
      http.get(
        `${REPO_ORIGIN}${EDUC_TEMPLATE_VALIDATION(MOCK_EDUC_TEMPLATE_ID_1)}`,
        () =>
          HttpResponse.json({ reason: 'Template not found' }, { status: 404 }),
      ),
    )
    const { user } = renderComponent()

    const firstRow = (await screen.findByText(mockEDucTemplate1.name!)).closest(
      'tr',
    )!
    const validateButton = within(firstRow).getByRole('button', {
      name: 'Validate',
    })
    await user.click(validateButton)

    await within(firstRow).findByText('Template not found')
  })

  it('validates rows independently', async () => {
    let template1Requests = 0
    let template2Requests = 0
    server.use(
      templatesHandler(),
      http.get(
        `${REPO_ORIGIN}${EDUC_TEMPLATE_VALIDATION(':templateId')}`,
        ({ params }) => {
          if (params.templateId === mockEDucTemplate1.templateId) {
            template1Requests += 1
          } else {
            template2Requests += 1
          }
          return HttpResponse.json({ isValid: true }, { status: 200 })
        },
      ),
    )
    const { user } = renderComponent()

    const firstRow = (await screen.findByText(mockEDucTemplate1.name!)).closest(
      'tr',
    )!
    const secondRow = (
      await screen.findByText(mockEDucTemplate2.name!)
    ).closest('tr')!

    await user.click(within(firstRow).getByRole('button', { name: 'Validate' }))

    await within(firstRow).findByText('Valid')
    expect(
      within(secondRow).getByRole('button', { name: 'Validate' }),
    ).toBeInTheDocument()

    await waitFor(() => expect(template1Requests).toBe(1))
    expect(template2Requests).toBe(0)
  })
})
