import {
  mockDeprecatedTemplate,
  mockFormTemplates,
} from '@/mocks/accessRequirement/mockFormTemplates'
import { getFormTemplateHandlers } from '@/mocks/msw/handlers/formTemplateHandlers'
import BasicMockedCrudService from '@/mocks/msw/util/BasicMockedCrudService'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { HttpHandler, http, HttpResponse } from 'msw'
import { MemoryRouter } from 'react-router'
import { FormTemplateTable } from './FormTemplateTable'

const SEARCH_URL = `${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/formTemplate/search`

const handlers: Record<string, HttpHandler[]> = {
  default: getFormTemplateHandlers(
    MOCK_REPO_ORIGIN,
    new BasicMockedCrudService<FormTemplate, 'id'>({
      initialData: [...mockFormTemplates, mockDeprecatedTemplate],
      idField: 'id',
      autoGenerateId: true,
    }),
  ),
  empty: [http.post(SEARCH_URL, () => HttpResponse.json({ results: [] }))],
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
