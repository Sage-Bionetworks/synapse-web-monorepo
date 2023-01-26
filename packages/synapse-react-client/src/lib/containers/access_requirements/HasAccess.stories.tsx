import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HasAccessV2 } from './HasAccessV2'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Governance/HasAccess',
  component: HasAccessV2,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HasAccessV2>

const Template: ComponentStory<typeof HasAccessV2> = args => (
  <HasAccessV2 {...args} />
)

export const HasAccessDemo = Template.bind({})
HasAccessDemo.args = {
  entityId: 'syn12664802',
}
