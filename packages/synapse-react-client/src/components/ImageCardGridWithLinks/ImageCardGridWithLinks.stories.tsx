import { Meta, StoryObj } from '@storybook/react'
import ImageCardGridWithLinks from './ImageCardGridWithLinks'
import { MemoryRouter } from 'react-router-dom'
import React from 'react'

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
