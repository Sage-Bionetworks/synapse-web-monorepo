import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import GoogleMap from './GoogleMap'

export default {
  title: 'Synapse/GoogleMap',
  component: GoogleMap,
  argTypes: {
    apiKeyOverride: { type: 'string' },
  },
} as ComponentMeta<typeof GoogleMap>

const Template: ComponentStory<typeof GoogleMap> = args => (
  <>
    <div>
      Note: The Google Maps API Key is restricted to only run on certain
      domains. You may have to create a new API key and provide it to test this
      component.
    </div>
    <hr />
    <div style={{ width: 'auto', height: '500px' }}>
      <GoogleMap {...args} />
    </div>
  </>
)

export const GoogleMapDemo = Template.bind({})
GoogleMapDemo.args = {
  teamId: undefined,
  apiKeyOverride: undefined,
}

export const SingleTeamMap = Template.bind({})
SingleTeamMap.args = {
  teamId: '273957',
  apiKeyOverride: undefined,
}
