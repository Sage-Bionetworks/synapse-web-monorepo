import { Meta, StoryObj } from '@storybook/react-vite'
import { RequestDownloadCard } from './RequestDownloadCard'

const meta = {
  title: 'Download/RequestDownloadCard',
  component: RequestDownloadCard,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn36695878',
  },
}
