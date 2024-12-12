import { Meta, StoryObj } from '@storybook/react'
import RecentPublicationsGrid from './RecentPublicationsGrid'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Home Page/RecentPublicationsGrid',
  component: RecentPublicationsGrid,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: args => (
    <BrowserRouter>
      <RecentPublicationsGrid {...args} />
    </BrowserRouter>
  ),
  args: {
    sql: 'SELECT * FROM syn51407023',
    buttonLink: 'Explore/Publications',
    buttonLinkText: 'See More Publications',
    summaryText:
      'Never miss a new finding from the frontiers of aging research.',
  },
}
