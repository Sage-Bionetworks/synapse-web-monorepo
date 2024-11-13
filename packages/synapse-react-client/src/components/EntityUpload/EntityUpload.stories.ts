import { Meta, StoryObj } from '@storybook/react'
import { EntityUpload } from './EntityUpload'

const meta = {
  title: 'Synapse/Upload/EntityUpload',
  component: EntityUpload,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    containerId: 'syn23567475',
  },
}

export const Dev: Story = {
  args: {
    containerId: 'syn12554559',
  },
}

export const ExternalS3Bucket: Story = {
  args: {
    containerId: 'syn63917361',
  },
}
