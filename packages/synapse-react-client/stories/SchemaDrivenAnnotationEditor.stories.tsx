import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SchemaDrivenAnnotationEditor } from '../src/lib/containers/entity/annotations/SchemaDrivenAnnotationEditor'

const meta = {
  title: 'Synapse/SchemaDrivenAnnotationEditor',
  component: SchemaDrivenAnnotationEditor,
  render: args => (
    <div className="bootstrap-4-backport">
      <SchemaDrivenAnnotationEditor {...args} />
    </div>
  ),
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ComplexSchema: Story = {
  args: {
    schemaId: 'nkauer-ad.main',
  },
}
