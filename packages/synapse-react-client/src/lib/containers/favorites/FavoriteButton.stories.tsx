import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FavoriteButton from './FavoriteButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/FavoriteButton',
  component: FavoriteButton,
} as ComponentMeta<typeof FavoriteButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FavoriteButton> = args => (
  <FavoriteButton {...args} />
)

export const Demo = Template.bind({
  entityId: 'syn33576900',
})
