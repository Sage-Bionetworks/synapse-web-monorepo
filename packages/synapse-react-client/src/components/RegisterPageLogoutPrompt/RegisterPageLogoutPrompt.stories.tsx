import { Meta, StoryObj } from '@storybook/react-vite'
import RegisterPageLogoutPrompt from './RegisterPageLogoutPrompt'
import { displayToast } from '../ToastMessage'

const meta = {
  title: 'Components/RegisterPageLogoutPrompt',
  component: RegisterPageLogoutPrompt,
  args: {
    onLogout: () => {
      displayToast('Successfully logged out', 'success')
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
