import { Meta, StoryObj } from '@storybook/react'
import JSONArrayEditorModal, {
  JSONArrayEditorModalProps,
} from './JSONArrayEditorModal'

const meta = {
  title: 'UI/JSONArrayEditor',
  component: JSONArrayEditorModal,
} satisfies Meta<Omit<JSONArrayEditorModalProps, 'icon'>>
export default meta
type Story = StoryObj<typeof meta>

export const Modal: Story = {
  args: {
    isShowingModal: true,
  },
}
