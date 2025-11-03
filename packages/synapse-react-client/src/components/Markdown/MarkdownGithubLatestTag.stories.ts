import { Meta, StoryObj } from '@storybook/react-vite'
import { MarkdownGithubLatestTag } from './MarkdownGithub'

const meta = {
  title: 'Markdown/MarkdownGithubLatestTag',
  component: MarkdownGithubLatestTag,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const GenericGithubMDFileDemo: Story = {
  args: {
    repoOwner: 'Sage-Bionetworks',
    repoName: 'synapse-web-monorepo',
    filePath: 'packages/synapse-react-client/README.md',
  },
  parameters: {
    stack: 'production',
  },
}
