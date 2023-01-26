import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EntityLink } from './EntityLink'

export default {
  title: 'Components/EntityLink',
  component: EntityLink,
} as ComponentMeta<typeof EntityLink>

const Template: ComponentStory<typeof EntityLink> = args => (
  <EntityLink {...args} />
)

export const Private = Template.bind({})

Private.args = {
  entity: 'syn32846102',
}
