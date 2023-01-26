import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DatasetItemsEditor } from './DatasetItemsEditor'

export default {
  title: 'Synapse/DatasetItemsEditor',
  component: DatasetItemsEditor,
} as ComponentMeta<typeof DatasetItemsEditor>

const Template: ComponentStory<typeof DatasetItemsEditor> = args => (
  <DatasetItemsEditor {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  entityId: 'syn26302617',
}
