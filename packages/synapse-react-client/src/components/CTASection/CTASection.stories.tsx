import { Meta, StoryObj } from '@storybook/react'
import CTASection from './CTASection'

const meta = {
  title: 'Home Page/CTASection',
  component: CTASection,
  parameters: {
    chromatic: { viewports: [600, 1200] },
    withRouter: true,
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: args => <CTASection {...args} />,
  args: {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    buttonText: 'Test Button',
    buttonLink: 'https://test-link.com',
  },
}
