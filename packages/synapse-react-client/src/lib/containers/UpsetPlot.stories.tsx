import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UpsetPlot from './UpsetPlot'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home Page/UpsetPlot',
  component: UpsetPlot,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UpsetPlot>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UpsetPlot> = args => (
  <UpsetPlot {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  sql: 'SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)',
  rgbIndex: 0,
  maxBarCount: 20,
  setName: 'Individuals (#) per Assay',
  combinationName: 'Individuals (#)',
  summaryLink: '#',
  summaryLinkText: 'EXPLORE ALL OF SOMETHING',
}
