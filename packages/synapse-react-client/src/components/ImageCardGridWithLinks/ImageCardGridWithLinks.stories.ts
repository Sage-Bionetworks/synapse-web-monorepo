import { Meta, StoryObj } from '@storybook/react'
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
  args: {
    sql: 'SELECT * FROM syn64112885',
    title: 'title',
    summaryText: 'summary',
  },
}
