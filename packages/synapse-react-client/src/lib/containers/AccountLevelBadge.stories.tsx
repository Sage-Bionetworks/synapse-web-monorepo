import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AccountLevelBadge } from './AccountLevelBadge'

export default {
  title: 'UI/AccountLevelBadge',
  component: AccountLevelBadge,
} as ComponentMeta<typeof AccountLevelBadge>

const Template: ComponentStory<typeof AccountLevelBadge> = args => (
  <AccountLevelBadge {...args} />
)

export const Registered = Template.bind({})
Registered.args = {
  userId: '3385021',
}

export const Certified = Template.bind({})
Certified.args = {
  userId: '345424',
}

export const Validated = Template.bind({})
Validated.args = {
  userId: '273980',
}
