import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DownloadCartPage } from './DownloadCartPage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Download/DownloadCartPage',
  component: DownloadCartPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DownloadCartPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DownloadCartPage> = args => (
  <DownloadCartPage {...args} />
)
export const Demo = Template.bind({})
