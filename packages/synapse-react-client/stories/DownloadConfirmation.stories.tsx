import { Meta, StoryObj } from '@storybook/react'
import { DownloadConfirmation } from '../src/components/download_list'

const meta = {
  title: 'Explore/DownloadConfirmation',
  component: DownloadConfirmation,
  args: {
    getLastQueryRequest: () => ({
      query: 'select * from syn123',
    }),
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
