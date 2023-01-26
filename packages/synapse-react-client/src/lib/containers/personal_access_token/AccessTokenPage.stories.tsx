import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AccessTokenPage } from './AccessTokenPage'

export default {
  title: 'Synapse/AccessTokenPage',
  component: AccessTokenPage,
} as ComponentMeta<typeof AccessTokenPage>

const Template: ComponentStory<typeof AccessTokenPage> = args => (
  <AccessTokenPage {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  title: 'Personal Access Tokens',
  body: 'Create and manage tokens that can be used to access your Synapse account programmatically.',
}
