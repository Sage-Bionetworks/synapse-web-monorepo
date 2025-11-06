import { getCurrentUserCertifiedValidatedHandler } from '@/mocks/msw/handlers/userProfileHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import CertificationRequirement from './CertificationRequirement'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Requirements/CertificationRequirement',
  component: CertificationRequirement,
  parameters: { stack: 'mock' },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Certified: Story = {
  parameters: {
    msw: {
      handlers: [
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true),
      ],
    },
  },
}
export const NotCertified: Story = {
  parameters: {
    msw: {
      handlers: [
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, true),
      ],
    },
  },
}
