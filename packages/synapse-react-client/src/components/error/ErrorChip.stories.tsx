import { Meta, StoryObj } from '@storybook/react-vite'
import ErrorChip, { ErrorChipProps } from './ErrorChip'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'

const meta: Meta<ErrorChipProps & { isAuthenticated: boolean }> = {
  title: 'Components/ErrorChip',
  component: ErrorChip,
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
    },
  },
  args: {
    isAuthenticated: true,
  },
}
export default meta
type Story = StoryObj<typeof meta>

const NotSignedInError = new SynapseClientError(
  401,
  'You must be signed in to access this resource.',
  '',
)

export const NotSignedIn: Story = {
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false,
  },
}

const NoAccessError = new SynapseClientError(
  403,
  'You do not have READ access on this entity.',
  '',
)

export const NoAccess: Story = {
  args: {
    chipText: 'syn1234567',
    error: NoAccessError,
    isAuthenticated: true,
  },
}
const NotFoundError = new SynapseClientError(
  404,
  'The entity does not exist.',
  '',
)

export const NotFound: Story = {
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true,
  },
}
