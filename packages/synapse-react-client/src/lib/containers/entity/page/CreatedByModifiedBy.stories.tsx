import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CreatedByModifiedBy } from './CreatedByModifiedBy'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/EntityPage/CreatedByModifiedBy',
  component: CreatedByModifiedBy,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CreatedByModifiedBy>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CreatedByModifiedBy> = args => (
  <CreatedByModifiedBy {...args} />
)

export const File = Template.bind({})
File.args = {
  entityId: 'syn36695878',
  versionNumber: 1,
}

export const Table = Template.bind({})
Table.args = {
  entityId: 'syn35197546',
}
export const Dataset = Template.bind({})
Dataset.args = {
  entityId: 'syn26302617',
}
