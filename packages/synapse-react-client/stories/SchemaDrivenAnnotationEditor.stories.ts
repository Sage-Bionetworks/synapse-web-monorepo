import { Meta, StoryObj } from '@storybook/react'
import { SchemaDrivenAnnotationEditor } from '../src/lib/containers/entity/annotations/SchemaDrivenAnnotationEditor'

const meta = {
  title: 'Synapse/SchemaDrivenAnnotationEditor',
  component: SchemaDrivenAnnotationEditor,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ComplexSchema: Story = {
  args: {
    schemaId: 'nkauer-ad.main',
  },
}

export const ErrorsEntity: Story = {
  args: {
    entityId: 'syn25959288',
  },
}
