import { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import PortalSectionHeader from './PortalSectionHeader'

const meta = {
  title: 'Home Page/PortalSectionHeader',
  component: PortalSectionHeader,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: args => (
    <MemoryRouter>
      <PortalSectionHeader {...args} />
    </MemoryRouter>
  ),
  args: {
    title: 'Section Title',
    summaryText: 'Section summary text.',
    buttonText: 'Section button',
    link: 'https://example.com',
  },
}
