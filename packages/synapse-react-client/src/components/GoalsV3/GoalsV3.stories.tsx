import { Meta, StoryObj } from '@storybook/react-vite'
import GoalsV3 from './GoalsV3'
import { ReactComponent as MouseSvg } from '@/assets/icons/mouse.svg'

const meta = {
  title: 'Cards/GoalsV3',
  component: GoalsV3,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn66298851',
    svgComponentMap: {
      datasets: MouseSvg,
      files: MouseSvg,
      projects: MouseSvg,
    },
  },
}
