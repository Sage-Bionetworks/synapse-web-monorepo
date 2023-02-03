import { Meta, StoryObj } from '@storybook/react'
import { BlockingLoader } from '../src/lib/containers/LoadingScreen'

const meta = {
  title: 'UI/Loaders/BlockingLoader',
  component: BlockingLoader,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    show: true,
    currentProgress: 50,
    totalProgress: 100,
    headlineText: 'Loading some content',
    hintText: 'This blocks the whole page, so use sparingly',
  },
}
