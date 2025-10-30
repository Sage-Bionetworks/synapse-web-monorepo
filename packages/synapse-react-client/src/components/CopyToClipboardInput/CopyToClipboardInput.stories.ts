import { Meta, StoryObj } from '@storybook/react-vite'
import { CopyToClipboardInput } from './CopyToClipboardInput'

const meta = {
  title: 'Synapse/CopyToClipboardInput',
  component: CopyToClipboardInput,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'The quick brown fox jumps over the lazy dog.',
    inputWidth: '250px',
  },
}
