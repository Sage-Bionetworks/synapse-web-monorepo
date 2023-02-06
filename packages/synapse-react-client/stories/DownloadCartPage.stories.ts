import { Meta, StoryObj } from '@storybook/react'
import { DownloadCartPage } from '../src/lib/containers/download_list_v2/DownloadCartPage'

const meta = {
  title: 'Download/DownloadCartPage',
  component: DownloadCartPage,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
