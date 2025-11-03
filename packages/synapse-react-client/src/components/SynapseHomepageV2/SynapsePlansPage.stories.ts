import { Meta, StoryObj } from '@storybook/react-vite'
import { SynapsePlansPage } from './SynapsePlansPage'
import { fn } from 'storybook/test'

const meta = {
  title: 'Synapse/HomePage',
  component: SynapsePlansPage,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const DemoPlansPage: Story = {
  args: {
    gotoPlace: (_href: string) => fn(),
  },
  parameters: {
    stack: 'production',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/7VDfcWetBp5UOENeH50Lzv/Managed-Plan-Scenarios?node-id=1-5840&node-type=frame&m=dev',
    },
    msw: {
      handlers: [],
    },
  },
}
