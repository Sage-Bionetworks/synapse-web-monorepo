import { Meta, StoryObj } from '@storybook/react'
import { ForumThreadEditor } from '../src/components/discussion_forum/ForumThreadEditor'

const meta = {
  title: 'Markdown/MarkdownEditor',
  component: ForumThreadEditor,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const MarkdownEditorDemo: Story = {}
