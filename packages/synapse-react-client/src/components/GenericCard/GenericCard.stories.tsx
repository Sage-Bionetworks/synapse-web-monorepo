import { GenericCardIcon } from '@/components/GenericCard/GenericCardIcon'
import { Meta, StoryObj } from '@storybook/react-vite'
import { GenericCard } from './GenericCard'

const meta = {
  title: 'Explore/GenericCard',
  component: GenericCard,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: {
    type: 'card type',
    title: 'card title',
    description: 'the description of the card',
    icon: <GenericCardIcon type={'file'} useTypeForIcon={true} />,
  },
}
