import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Programs from '../src/lib/containers/home_page/programs/Programs'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home Page/Programs',
  component: Programs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Programs>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Programs> = args => <Programs {...args} />

export const ProgramsDemo = Template.bind({})
ProgramsDemo.args = {
  entityId: 'syn17024173',
  rgbIndex: 1,
  titleColumnName: 'Program',
  summaryColumnName: 'Short Description',
  linkColumnName: 'Website',
  imageFileHandleColumnName: 'Homepage Image',
  linkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Programs/DetailsPage',
    URLColumnName: 'Program',
    matchColumnName: 'Program',
  },
}
