import { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import CardGridWithLinks from './CardGridWithLinks'

const meta = {
  title: 'Cards/CardGridWithLinks',
  component: CardGridWithLinks,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: args => (
    <MemoryRouter>
      <CardGridWithLinks {...args} />
    </MemoryRouter>
  ),
  args: {
    linkText: 'More Resources',
    cards: [
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
