import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FeaturedToolsList from './FeaturedToolsList'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home Page/FeaturedToolsList',
  component: FeaturedToolsList,
} as ComponentMeta<typeof FeaturedToolsList>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeaturedToolsList> = args => (
  <FeaturedToolsList {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  entityId: 'syn26450069',
  idColumnName: 'resourceId',
  nameColumnName: 'resourceName',
  descriptionColumnName: 'description',
  typeColumnName: 'resourceType',
  dateColumnName: 'dateAdded',
  toolDetailPageURL: '/Explore/Tools/DetailsPage?Resource_id=',
}
