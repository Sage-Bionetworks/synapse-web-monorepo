import { Meta, StoryObj } from '@storybook/react-vite'
import RecentPublicationsGrid from './RecentPublicationsGrid'

const meta = {
  title: 'Home Page/RecentPublicationsGrid',
  component: RecentPublicationsGrid,
  parameters: {
    chromatic: { viewports: [600, 1200] },
    withRouter: true,
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: args => <RecentPublicationsGrid {...args} />,
  args: {
    sql: 'SELECT * FROM syn51407023',
    buttonLink: 'Explore/Publications',
    buttonLinkText: 'See More Publications',
    summaryText:
      'Never miss a new finding from the frontiers of aging research.',
  },
}
