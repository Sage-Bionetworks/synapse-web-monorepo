import { Meta, StoryObj } from '@storybook/react'
import { GovernanceMarkdownGithub } from './MarkdownGithub'
import { getTermsOfServiceHandlers } from 'src/mocks/msw/handlers/termsOfServiceHandlers'
import { MOCK_REPO_ORIGIN } from 'src/utils/functions/getEndpoint'
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
