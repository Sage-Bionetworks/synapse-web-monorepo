import { getEDucTemplateHandlers } from '@/mocks/msw/handlers/eDucTemplateHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { EDUC_TEMPLATE, EDUC_TEMPLATE_VALIDATION } from '@/utils/APIConstants'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import { EDucTemplateTable } from './EDucTemplateTable'

const meta: Meta<typeof EDucTemplateTable> = {
  title: 'Governance/eDUC Templates Table',
  component: EDucTemplateTable,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: getEDucTemplateHandlers(MOCK_REPO_ORIGIN),
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'Templates table',
}

export const InvalidTemplate: Story = {
  name: 'Templates table — invalid validation result',
  parameters: {
    msw: {
      handlers: [
        // Override before the default handler so MSW's first-match wins.
        http.get(
          `${MOCK_REPO_ORIGIN}${EDUC_TEMPLATE_VALIDATION(':templateId')}`,
          () =>
            HttpResponse.json(
              {
                isValid: false,
                reason: 'Template is missing required signer tab.',
              },
              { status: 200 },
            ),
        ),
        ...getEDucTemplateHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}

export const EmptyList: Story = {
  name: 'Templates table — empty',
  parameters: {
    msw: {
      handlers: [
        http.post(`${MOCK_REPO_ORIGIN}${EDUC_TEMPLATE}`, () =>
          HttpResponse.json({ results: [] }, { status: 200 }),
        ),
      ],
    },
  },
}
