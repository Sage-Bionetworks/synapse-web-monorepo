import { Meta, StoryObj } from '@storybook/react-vite'
import JSONArrayEditorModal, {
  JSONArrayEditorModalProps,
} from './JSONArrayEditorModal'
import { fn } from 'storybook/test'

const meta = {
  title: 'UI/JSONArrayEditor',
  component: JSONArrayEditorModal,
} satisfies Meta<Omit<JSONArrayEditorModalProps, 'icon'>>
export default meta
type Story = StoryObj<typeof meta>

export const Modal: Story = {
  args: {
    isShowingModal: true,
    onConfirm: fn(),
    onCancel: fn(),
  },
}
