import { Meta, StoryObj } from '@storybook/react-vite'
import GridPage, { GridPageProps } from './GridPage'

const meta = {
  title: 'Components/SynapseGrid/Page',
  component: GridPage,
  parameters: {
    stack: 'staging',
    requireLogin: true,
  },
  args: {
    useMemoryRouter: true,
    routerBaseName: '/',
  },
} satisfies Meta<GridPageProps>
export default meta

type Story = StoryObj<GridPageProps>

export const Page = {} satisfies Story
