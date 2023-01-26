import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ReactComponent as brainSvg } from '../../../../demo/containers/playground/icons/brain.svg'
import { ReactComponent as circleSvg } from '../../../../demo/containers/playground/icons/circle.svg'
import { ReactComponent as mouseSvg } from '../../../../demo/containers/playground/icons/mouse.svg'
import { ReactComponent as resilienceadSvg } from '../../../../demo/containers/playground/icons/resiliencead.svg'

import Programs from './Programs'

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
