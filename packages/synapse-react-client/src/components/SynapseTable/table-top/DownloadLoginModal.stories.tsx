import { Meta, StoryObj } from '@storybook/react-vite'
import { DownloadLoginModal } from './DownloadLoginModal'
import { fn } from 'storybook/test'

const meta = {
  title: 'Download/DownloadLoginModal',
  component: DownloadLoginModal,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    showModal: true,
    onHide: fn(),
  },
}
