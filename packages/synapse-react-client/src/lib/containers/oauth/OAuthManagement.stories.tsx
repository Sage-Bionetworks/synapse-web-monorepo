import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { OAuthManagement } from './OAuthManagement'

export default {
  title: 'Synapse/OAuthManagement',
  component: OAuthManagement,
  argTypes: {},
} as ComponentMeta<typeof OAuthManagement>

const Template: ComponentStory<typeof OAuthManagement> = args => (
  <OAuthManagement {...args} />
)

export const OAuthManagementDemo = Template.bind({})
OAuthManagementDemo.args = {}
