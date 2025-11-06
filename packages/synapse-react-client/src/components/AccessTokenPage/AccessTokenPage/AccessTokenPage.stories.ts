import { getPersonalAccessTokenHandlers } from '@/mocks/msw/handlers/personalAccessTokenHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { AccessTokenPage } from '../AccessTokenPage'

const meta = {
  title: 'Synapse/AccessTokenPage',
  component: AccessTokenPage,
  args: {
    title: 'Personal Access Tokens',
    body: 'Create and manage tokens that can be used to access your Synapse account programmatically.',
  },
  parameters: { stack: 'mock' },
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  parameters: {
    msw: {
      handlers: [...getPersonalAccessTokenHandlers(MOCK_REPO_ORIGIN)],
    },
  },
}

export const NoTokens: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getPersonalAccessTokenHandlers(MOCK_REPO_ORIGIN, { results: [] }),
      ],
    },
  },
}
