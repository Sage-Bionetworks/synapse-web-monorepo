import { Meta, StoryObj } from '@storybook/react'
import {
  EntityModal,
  EntityModalTabs,
} from '../src/lib/containers/entity/metadata/EntityModal'

const meta = {
  title: 'Synapse/EntityModal',
  component: EntityModal,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Project: Story = {
  args: {
    show: true,
    initialTab: EntityModalTabs.ANNOTATIONS,
    entityId: 'syn23567475',
  },
}
