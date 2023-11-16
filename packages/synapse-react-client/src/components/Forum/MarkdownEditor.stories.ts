import { Meta, StoryObj } from '@storybook/react'
import { ForumThreadEditor } from './ForumThreadEditor'

const meta = {
  title: 'Markdown/MarkdownEditor',
  component: ForumThreadEditor,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const MarkdownEditorDemo: Story = {
  args: {
    id: '123',
    isReply: false,
    isDialog: false,
  },
}
