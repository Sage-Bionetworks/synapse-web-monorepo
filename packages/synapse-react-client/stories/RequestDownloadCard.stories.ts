import { Meta, StoryObj } from '@storybook/react'
import { RequestDownloadCard } from '../src/lib/containers/download_list_v2/RequestDownloadCard'

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
