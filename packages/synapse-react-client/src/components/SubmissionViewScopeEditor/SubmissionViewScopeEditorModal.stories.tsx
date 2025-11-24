import { Meta, StoryObj } from '@storybook/react-vite'
import SubmissionViewScopeEditorModal from './SubmissionViewScopeEditorModal'

const meta: Meta = {
  title: 'Synapse/SubmissionViewScopeEditorModal',
  component: SubmissionViewScopeEditorModal,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn54095057',
    open: true,
  },
}
