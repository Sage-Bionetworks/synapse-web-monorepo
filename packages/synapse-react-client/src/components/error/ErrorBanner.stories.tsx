import { Meta, StoryObj } from '@storybook/react-vite'
import { ErrorBanner } from './ErrorBanner'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'

const meta = {
  title: 'UI/ErrorBanner',
  component: ErrorBanner,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const SynapseClientErrorDemo: Story = {
  decorators: [
    Story => (
      <>
        <div>Note: login to see the unauthorized SynapseClientError.</div>
        <Story />
      </>
    ),
  ],
  args: {
    error: new SynapseClientError(
      403,
      'Some message about why access is not authorized.',
      'some-url',
    ),
  },
}

export const StringDemo: Story = {
  args: {
    error: 'Some error message',
    reloadButtonFn: () => console.log('reload!'),
  },
}

export const ErrorDemo: Story = {
  args: {
    error: new Error('Submission does not exist'),
    reloadButtonFn: () => console.log('reload!'),
  },
}

export const ServerErrorErrorDemo: Story = {
  args: {
    error: new SynapseClientError(
      500,
      'Some message about why the server failed to process the request.',
      'some-url',
    ),
  },
}
