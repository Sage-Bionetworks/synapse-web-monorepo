import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { ForumThreadEditor } from './ForumThreadEditor'

const meta = {
  title: 'Synapse/ForumThreadEditor',
  component: ForumThreadEditor,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ForumThreadEditorDemo: Story = {
  args: {
    id: '123',
    isReply: false,
    isDialog: false,
    onClose: fn(),
  },
}
