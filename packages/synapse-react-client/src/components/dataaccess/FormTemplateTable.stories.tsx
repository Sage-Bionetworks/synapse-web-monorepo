import {
  mockDeprecatedTemplate,
  mockFormTemplates,
} from '@/mocks/accessRequirement/mockFormTemplates'
import {
  getFormTemplateHandlers,
  getFormTemplateSearchUrl,
  getFormTemplateService,
} from '@/mocks/msw/handlers/formTemplateHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { HttpHandler, http, HttpResponse } from 'msw'
import { MemoryRouter } from 'react-router'
import { FormTemplateTable } from './FormTemplateTable'

const SEARCH_URL = getFormTemplateSearchUrl(MOCK_REPO_ORIGIN)

const handlers: Record<string, HttpHandler[]> = {
  default: getFormTemplateHandlers(
    MOCK_REPO_ORIGIN,
    getFormTemplateService([...mockFormTemplates, mockDeprecatedTemplate]),
  ),
  empty: getFormTemplateHandlers(MOCK_REPO_ORIGIN, getFormTemplateService([])),
  error: [
    http.post(SEARCH_URL, () =>
      HttpResponse.json({ reason: 'Search failed' }, { status: 500 }),
    ),
  ],
}

const meta: Meta<typeof FormTemplateTable> = {
  title: 'Governance/Form Templates Table',
  component: FormTemplateTable,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    stack: 'mock',
    msw: { handlers: handlers.default },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {}

export const Empty: Story = {
  parameters: { msw: { handlers: handlers.empty } },
}

export const ErrorState: Story = {
  parameters: { msw: { handlers: handlers.error } },
}
