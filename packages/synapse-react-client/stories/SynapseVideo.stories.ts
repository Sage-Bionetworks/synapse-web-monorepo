import { Meta, StoryObj } from '@storybook/react'
import SynapseVideo from '../src/lib/containers/widgets/SynapseVideo'

const meta = {
  title: 'Markdown/SynapseVideo',
  component: SynapseVideo,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const SynapseVideoDemo: Story = {
  args: {
    params: {
      vimeoId: '355433104',
    },
  },
}
