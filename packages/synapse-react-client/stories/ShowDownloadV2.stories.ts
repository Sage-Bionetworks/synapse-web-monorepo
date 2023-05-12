import { Meta, StoryObj } from '@storybook/react'
import ShowDownloadV2 from '../src/components/DownloadCart/ShowDownloadV2'

const meta: Meta = {
  title: 'Download/ShowDownloadV2',
  component: ShowDownloadV2,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    to: '/#/Other%20Components?id=downloadcartpage',
  },
}
