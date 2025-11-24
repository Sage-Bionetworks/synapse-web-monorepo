import { CreateOrUpdateDoiModal } from '@/components/doi/CreateOrUpdateDoiModal'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

const meta: Meta<typeof CreateOrUpdateDoiModal> = {
  title: 'Synapse/CreateOrUpdateDoiModal',
  component: CreateOrUpdateDoiModal,
  args: {
    open: true,
    onClose: fn(),
  },
} satisfies Meta<typeof CreateOrUpdateDoiModal>
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    objectType: 'ENTITY',
    objectId: 'syn23567475',
  },
}
