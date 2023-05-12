import { Meta, StoryObj } from '@storybook/react'
import FeaturedToolsList from '../src/components/FeaturedToolsList/FeaturedToolsList'

const meta = {
  title: 'Home Page/FeaturedToolsList',
  component: FeaturedToolsList,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn26450069',
    idColumnName: 'resourceId',
    nameColumnName: 'resourceName',
    descriptionColumnName: 'description',
    typeColumnName: 'resourceType',
    dateColumnName: 'dateAdded',
    toolDetailPageURL: '/Explore/Tools/DetailsPage?Resource_id=',
  },
}
