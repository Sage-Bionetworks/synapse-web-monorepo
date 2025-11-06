import { getCurrentUserCertifiedValidatedHandler } from '@/mocks/msw/handlers/userProfileHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import ValidationRequirement from './ValidationRequirement'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Requirements/ValidationRequirement',
  component: ValidationRequirement,
  parameters: { stack: 'mock' },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Validated: Story = {
  parameters: {
    msw: {
      handlers: [
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true),
      ],
    },
  },
}

export const NotValidated: Story = {
  parameters: {
    msw: {
      handlers: [
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, false),
      ],
    },
  },
}
