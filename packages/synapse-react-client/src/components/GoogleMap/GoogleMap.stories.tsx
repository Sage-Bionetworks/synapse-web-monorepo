import { Meta, StoryObj } from '@storybook/react-vite'
import GoogleMap from './GoogleMap'

const meta = {
  title: 'Synapse/GoogleMap',
  component: GoogleMap,
  argTypes: {
    apiKeyOverride: { type: 'string' },
  },
  render: args => (
    <>
      <div>
        Note: The Google Maps API Key is restricted to only run on certain
        domains. You may have to create a new API key and provide it to test
        this component.
      </div>
      <hr />
      <div style={{ width: 'auto', height: '500px' }}>
        <GoogleMap {...args} />
      </div>
    </>
  ),
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const GoogleMapDemo: Story = {
  args: {
    teamId: undefined,
    apiKeyOverride: undefined,
  },
}

export const SingleTeamMap: Story = {
  args: {
    teamId: '273957',
    apiKeyOverride: undefined,
  },
}
