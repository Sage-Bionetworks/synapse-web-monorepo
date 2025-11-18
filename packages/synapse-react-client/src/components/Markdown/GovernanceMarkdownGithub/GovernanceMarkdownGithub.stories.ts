import { getTermsOfServiceHandlers } from '@/mocks/msw/handlers/termsOfServiceHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import GovernanceMarkdownGithub from './GovernanceMarkdownGithub'

const meta = {
  title: 'Markdown/GovernanceMarkdownGithub',
  component: GovernanceMarkdownGithub,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const TermsOfServiceDemo: Story = {
  args: {
    repoOwner: 'Sage-Bionetworks',
    repoName: 'Sage-Governance-Documents',
    filePath: 'Terms.md',
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getTermsOfServiceHandlers(MOCK_REPO_ORIGIN)],
    },
  },
}
