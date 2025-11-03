import { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import PortalFeatureHighlights from './PortalFeatureHighlights'

const meta = {
  title: 'Home Page/PortalFeatureHighlights',
  component: PortalFeatureHighlights,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: args => (
    <MemoryRouter>
      <PortalFeatureHighlights {...args} />
    </MemoryRouter>
  ),
  args: {
    title: 'Section Title',
    summaryText: 'Section summary text.',
    buttonText: 'Section button',
    image: 'https://link-to-image.png',
    link: 'https://example.com',
  },
}
