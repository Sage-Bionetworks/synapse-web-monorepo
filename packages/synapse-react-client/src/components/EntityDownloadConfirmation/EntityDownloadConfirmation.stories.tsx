import { fn } from '@storybook/test'
import EntityDownloadConfirmation from './EntityDownloadConfirmation'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Synapse/Entity/EntityDownloadConfirmation',
  component: EntityDownloadConfirmation,
  parameters: {
    requireLogin: true,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Dataset: Story = {
  args: {
    entityId: 'syn64136446',
    onIsLoadingChange: fn(),
    handleClose: fn(),
  },
}
