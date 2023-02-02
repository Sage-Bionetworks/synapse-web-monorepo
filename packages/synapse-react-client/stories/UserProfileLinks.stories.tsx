import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserProfileLinks from '../src/lib/containers/user_profile_links/UserProfileLinks'

export default {
  title: 'Synapse/UserProfileLinks',
  component: UserProfileLinks,
} as ComponentMeta<typeof UserProfileLinks>

const Template: ComponentStory<typeof UserProfileLinks> = args => (
  <UserProfileLinks {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  userId: '1131050',
}
