import { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import ImageCardGridWithLinks from './ImageCardGridWithLinks'

const meta = {
  title: 'Home Page/ImageCardGridWithLinks',
  component: ImageCardGridWithLinks,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: args => (
    <MemoryRouter>
      <ImageCardGridWithLinks {...args} />
    </MemoryRouter>
  ),
  args: {
    sql: 'SELECT * FROM syn64130706',
    title: 'title',
    summaryText: 'summary',
  },
}
