import { Meta, StoryObj } from '@storybook/react'
import EntityViewScopeEditorModal from './EntityViewScopeEditorModal'

const meta: Meta = {
  title: 'Synapse/EntityView/EntityViewScopeEditorModal',
  component: EntityViewScopeEditorModal,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn53675447',
    open: true,
  },
}
