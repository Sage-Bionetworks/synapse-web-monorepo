import { Meta, StoryObj } from '@storybook/react-vite'
import { EntityBadgeIcons, EntityBadgeIconsProps } from './EntityBadgeIcons'

const meta: Meta<EntityBadgeIconsProps> = {
  title: 'Synapse/EntityBadgeIcons',
  component: EntityBadgeIcons,
}
export default meta
type Story = StoryObj<typeof meta>

export const EntityWithNormalAnnotations: Story = {
  args: {
    entityId: 'syn11916527',
  },
}

export const EntityWithDerivedAnnotation: Story = {
  args: {
    entityId: 'syn28094325',
  },
}

export const EntityWithNoAnnotation: Story = {
  args: {
    entityId: 'syn21650495',
  },
}
