import { Meta, StoryObj } from '@storybook/react-vite'
import { BlockingLoader, BlockingLoaderProps } from './LoadingScreen'

const meta = {
  title: 'UI/Loaders/BlockingLoader',
  component: BlockingLoader,
  render: args => (
    <div>
      <strong>Example content</strong>
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed
      tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus
      orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula
      in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam
      ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum
      et. Sed ut nibh ac nunc facilisis facilisis.
      <BlockingLoader {...args} />
    </div>
  ),
} satisfies Meta<BlockingLoaderProps>
export default meta
type Story = StoryObj<typeof meta>

export const BlockingBarLoader: Story = {
  args: {
    show: true,
    currentProgress: 50,
    totalProgress: 100,
    headlineText: 'Loading some content',
    hintText: 'This blocks the whole page, so use sparingly',
  },
}

export const BlockingSpinner: Story = {
  args: {
    show: true,
    hintText: 'Blocks the whole page',
  },
}
