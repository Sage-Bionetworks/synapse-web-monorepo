import { Meta, StoryObj } from '@storybook/react-vite'
import UserSearchBox from './UserSearchBox'
import ConfirmationDialog from '../ConfirmationDialog'

const meta = {
  title: 'UI/UserSearchBox',
  component: UserSearchBox,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}

export const InDialog: Story = {
  decorators: Story => (
    <ConfirmationDialog
      open
      title="Select a user"
      onConfirm={() => {}}
      onCancel={() => {}}
      content={<Story />}
    ></ConfirmationDialog>
  ),
}
