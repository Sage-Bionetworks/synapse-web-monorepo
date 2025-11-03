import { Meta, StoryObj } from '@storybook/react-vite'
import FeaturedToolsList from './FeaturedToolsList'

const meta = {
  title: 'Home Page/FeaturedToolsList',
  component: FeaturedToolsList,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const NFDemo: Story = {
  args: {
    entityId: 'syn26450069',
    idColumnName: 'resourceId',
    nameColumnName: 'resourceName',
    descriptionColumnName: 'description',
    typeColumnName: 'resourceType',
    dateColumnName: 'dateAdded',
    toolDetailPageURL: '/Explore/Tools/DetailsPage?Resource_id=',
    filterClause: 'ORDER BY dateAdded DESC',
  },
}

export const ELITEDemo: Story = {
  args: {
    entityId: 'syn51469335',
    idColumnName: 'id',
    nameColumnName: 'name',
    descriptionColumnName: 'summary',
    typeColumnName: 'softwareType',
    toolURLColumnName: 'url',
    filterClause: 'WHERE "isFeatured" = \'true\'',
  },
}
