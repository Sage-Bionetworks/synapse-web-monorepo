import { Meta, StoryObj } from '@storybook/react'
import { DownloadLoginModal } from '../src/lib/containers/table/table-top/DownloadLoginModal'

const meta = {
  title: 'Download/DownloadLoginModal',
  component: DownloadLoginModal,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    showModal: true,
  },
}
