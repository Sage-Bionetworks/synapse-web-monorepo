import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import MoreResources from './MoreResources'

const meta = {
  title: 'Home Page/MoreResources',
  component: MoreResources,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: args => (
    <MemoryRouter>
      <MoreResources {...args} />
    </MemoryRouter>
  ),
  args: {
    resources: [
      {
        title: 'Title 1',
        description: 'Description text 1.',
        link: 'https://example-1.com',
      },
      {
        title: 'Title 2',
        description: 'Description text 2.',
        link: 'https://example-2.com',
      },
      {
        title: 'Title 2',
        description: 'Description text 3.',
        link: 'https://example-3.com',
      },
    ],
  },
}
