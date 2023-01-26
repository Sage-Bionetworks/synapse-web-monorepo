import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ReviewerDashboard from './ReviewerDashboard'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Governance/ReviewerDashboard',
  component: ReviewerDashboard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ReviewerDashboard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReviewerDashboard> = args => (
  <ReviewerDashboard {...args} />
)

export const Demo = Template.bind({})

Demo.args = {
  useMemoryRouter: true,
  routerBaseName: '#!/Other Components/ReviewerDashboard',
}
