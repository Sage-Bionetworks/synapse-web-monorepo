import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SchemaDrivenAnnotationEditor } from './SchemaDrivenAnnotationEditor'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/SchemaDrivenAnnotationEditor',
  component: SchemaDrivenAnnotationEditor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SchemaDrivenAnnotationEditor>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SchemaDrivenAnnotationEditor> = args => (
  <div className="bootstrap-4-backport">
    <SchemaDrivenAnnotationEditor {...args} />
  </div>
)

export const ComplexSchema = Template.bind({})
ComplexSchema.args = {
  schemaId: 'nkauer-ad.main',
}
