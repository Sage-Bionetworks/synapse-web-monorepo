import { Meta, StoryObj } from '@storybook/react'
import { GovernanceMarkdownGithub } from './MarkdownGithub'

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
    stack: 'production',
  },
}
