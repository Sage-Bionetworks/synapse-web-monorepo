import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ErrorPage from './ErrorPage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/ErrorPage',
  component: ErrorPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ErrorPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ErrorPage> = args => (
  <ErrorPage {...args} />
)

export const Maintenance = Template.bind({})

Maintenance.args = {
  image: 'maintenance',
  title: 'Sorry, Synapse is down for maintenance.',
  message: "We're busy updating Synapse for you and will be back soon.",
}

export const NoAccess = Template.bind({})

NoAccess.args = {
  image: 'noAccess',
  title: 'Sorry, Synapse is down for maintenance.',
  message: "We're busy updating Synapse for you and will be back soon.",
}

export const Unavailable = Template.bind({})

Unavailable.args = {
  image: 'unavailable',
  title: 'The service is currently unavailable.',
  message:
    'Something went wrong and the service is not available. Try again later',
}
